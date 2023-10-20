<script>
	import { enhance, applyAction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	export let data;
</script>

<header class="bg-white shadow">
	<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold tracking-tight text-gray-900">Profile</h1>
	</div>
</header>
<main>
	<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
		<form
			action="?/updateProfile"
			method="POST"
			class="flex flex-col space-y-2 w-full"
			enctype="multipart/form-data"
		>
			<h3 class="text-2xl font-medium">Update Profile</h3>
			<div class="form-control w-full max-w-lg">
				<label for="avatar" class="label font-medium pb-1">
					<span class="label-text">Profile Picture</span>
				</label>
				<label for="avatar" class="avatar w-32 rounded-full hover:cursor-pointer">
					<div class="avatar placeholder">
						<div class="bg-neutral-focus text-neutral-content rounded-full w-24">
							<span id="avatar" class="text-3xl"
								><!-- {data?.firstLetter + data?.secondLetter.toUpperCase()} --></span
							>
						</div>
					</div></label
				>
			</div>
		</form>
	</div>
</main>
<div class="flex flex-col w-full h-full" />
