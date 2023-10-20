import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from './lib/utils';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import { redirect } from '@sveltejs/kit';
const POCKETBASE_URL = 'https://chat-medic.pockethost.io';
//your pockethost server

// This function runs every time the SvelteKit server receives a request!
//Meaning everytime client makes a request it goes through here.
export const handle = async ({ event, resolve }) => {
	// ?? I'm not sure if the secret works.
	//https://youtu.be/AxPB3e-3yEM
	event.locals.pb = new PocketBase(POCKETBASE_URL);

	//check if a cookie exists
	//locals is an temporary Object on SvelteKit server
	//is avalaible in all load ()
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	if (event.locals.pb.authStore.isValid) {
		try {
			//event.locals.pb.collection('users').authRefresh();
			event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
		} catch (err) {
			// "logout" the last authenticated account
			console.log('EventError:', err);
			event.locals.pb.authStore.clear();
		}
	} else {
		event.locals.user = undefined;
	}
	//Everytime user tries to visit protected route
	if (event.url.pathname.startsWith('/my')) {
		if (!event.locals.user) {
			throw redirect(303, '/login');
		}
	}
	//Render route and generate response
	const response = await resolve(event);

	// TODO: secure before deployment.
	//export authObject to cookie
	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
};
