// Hard coded import:
import { OPENAI_KEY } from '$env/static/private'
import { KV } from '$lib/kv';
import { nanoid } from '$lib/utils';
import type { Config } from '@sveltejs/adapter-vercel';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';

import { env } from '$env/dynamic/private';
// Your hardcoded OPENAI_KEY in env.local:
// import { OPENAI_KEY } from '$env/static/private'

import type { RequestHandler } from './$types';

//Adapter-vercel is not needed I guess? 
export const config: Config = {
	runtime: 'edge'
};
export const POST = (async ({ request, locals: { getSession } }) => {
	const json = await request.json();
	const { messages, previewToken } = json;
	const session = await getSession();

	// Create an OpenAI API client
	const config = new Configuration({
		apiKey: previewToken || env.OPENAI_API_KEY
	});
	const openai = new OpenAIApi(config);

	// Ask OpenAI for a streaming chat completion given the prompt
	const response = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages,
		temperature: 0.7,
		stream: true
	});

	// Convert the response into a friendly text-stream
	const stream = OpenAIStream(response, {
		async onCompletion(completion) {
			const title = messages[0].content.substring(0, 100);
			const userId = session?.user?.id;
			if (userId) {
				const id = json.id ?? nanoid();
				const createdAt = Date.now();
				const path = `/chat/${id}`;
				const payload = {
					id,
					title,
					userId,
					createdAt,
					path,
					messages: [
						...messages,
						{
							content: completion,
							role: 'assistant'
						}
					]
				};
				await KV.hmset(`chat:${id}`, payload);
				await KV.zadd(`user:chat:${userId}`, {
					score: createdAt,
					member: `chat:${id}`
				});
			}
		}
	});

	// Respond with the stream
	return new StreamingTextResponse(stream);
}) satisfies RequestHandler;