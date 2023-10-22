<!-- This is client side UI  -->
<script lang="ts">
	import ChatMessage from '$lib/components/Chat.svelte'
	import type { ChatCompletionRequestMessage } from 'openai-edge'
    //Try ai-example
    import { useChat } from 'ai/svelte'

	const { input, handleSubmit, messages } = useChat({
    api: './api/chat'
  })
    //Error: Not found: /api/chat
    //Missing message render
    //Use SSE.js? 

	let query: string = ''
	let answer: string = ''
	let loading: boolean = false
	let chatMessages: ChatCompletionRequestMessage[] = []
	let scrollToDiv: HTMLDivElement

	function scrollToBottom() {
		setTimeout(function () {
			scrollToDiv.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
		}, 100)
	}

	function handleError<T>(err: T) {
		loading = false
		query = ''
		answer = ''
		console.error(err)
	}
</script>

<div class="md:container w-full px-8 items-center gap-2">
	<div>
		<h1 class="text-2xl font-bold w-full text-center">ChatMedic</h1>
		<p class="text-sm text-center italic">Powered by gpt-3.5-turbo</p>
	</div>
	<div class="h-[600px] w-full bg-neutral rounded-t-md p-4 overflow-y-auto flex flex-col gap-4">
		<div class="flex flex-col gap-2">
			<ChatMessage type="assistant" message="Hello, How can I help you?" />
            {#each $messages as message}
			<li>{message.role}: {message.content}</li>
		    {/each}
			{#each chatMessages as message}
				<ChatMessage type={message.role} message={message.content} />
			{/each}
			{#if answer}
				<ChatMessage type="assistant" message={answer} />
			{/if}
			{#if loading}
				<ChatMessage type="assistant" message="Loading.." />
			{/if}
		</div>
		<div class="" bind:this={scrollToDiv} />
	</div>
	<form on:submit ={handleSubmit}
		class="flex w-full h-full rounded-b-md bg-neutral gap-4 p-4">
		<input type="text" class="input input-bordered input-accent w-full" bind:value={$input} />
		<button type="submit" class="btn btn-accent"> Send </button>
	</form>
</div>