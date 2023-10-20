<script>
	import { page } from '$app/stores';
</script>

<main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
	<br />
	<div class="text-center">
		<h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{$page.status}</h1>
		<p class="mt-6 text-base leading-7 text-gray-600">{$page.error.message}</p>
		<div class="mt-10 flex items-center justify-center gap-x-6">
			<a href="/" class="text-sm font-semibold text-gray-900"
				>Go back Home <span aria-hidden="true">&rarr;</span></a
			>
		</div>
		<p class="mt-6 text-base leading-7 text-gray-600">or</p>
		<a href="/contact" class="text-sm font-semibold text-gray-900"
			>Contact Support <span aria-hidden="true">&rarr;</span></a
		>
	</div>
</main>
