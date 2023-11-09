<script lang="ts">
    import type { ChatCompletionRequestMessageRoleEnum } from 'openai-edge';
	export let type: ChatCompletionRequestMessageRoleEnum
	export let message: string
</script>

<div class="chat {type === 'user' ? 'chat-end' : 'chat-start'} justify-end">
	<div class="chat-image avatar">
		<div class="w-10 rounded-full">
			<img
				src="https://ui-avatars.com/api/?name={type === 'user' ? 'Me' : 'B'}"
				alt="{type} avatar"
			/>
		</div>
	</div>
	<div class="chat-header text-white">
		{type === 'user' ? 'Me' : 'Bot'}
	</div>
	<div class="chat-bubble {type === 'user' ? 'chat-bubble-accent' : 'chat-bubble-success'}">
		{message}
	</div>
</div>