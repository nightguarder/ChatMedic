<script>
	export let form;
</script>

<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="overflow-hidden w-3/4 md:-w-full shadow-xl sm:rounded-lg px-2 py-8">
		<div class="w-full md:w-auto space-y-4">
			<div class="space-y-3">
				<img
					class="mx-auto h-12 w-auto"
					src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=600"
					alt="Your Company"
				/>
				<h2 class="mt-2 text-center text-3xl font-bold tracking-tight ">Register for an account</h2>
				<p class="mt-1 text-center text-gray-500">
					Already have an account? <a
						href="./login"
						class="font-medium text-cyan-600 hover:text-cyan-800">Sign in</a
					>
				</p>
			</div>
			<form method="POST" action="?/register" class="flex flex-col items-center space-y-3 w-full ">
				<div class="form-control w-full max-w-sm ">
					<label class="input-group input-group-vertical ">
						<span>Full name</span>
						<input
							type="text"
							name="name"
							placeholder="John Doe"
							class="input input-bordered input-md sm:input-sm xl:input-md w-full max-w-sm"
						/>
					</label>
				</div>
				<div class="form-control w-full max-w-sm">
					<label class="input-group input-group-vertical ">
						<span>Your Email</span>
						<input
							type="email"
							name="email"
							required
							class="input input-bordered w-full max-w-sm
                invalid:border-pink-rose invalid:text-rose-600
                focus:invalid:border-rose-500 focus:invalid:ring-rose-500"
							placeholder="john21doe@gmail.com"
						/>
					</label>
				</div>
				<div class="form-control w-full max-w-sm">
					<div class="tooltip tooltip-top" data-tip="The length must be between 8 and 72.">
					<label for="password" class="input-group input-group-vertical">
						<span>Password</span>
						<input
							type="password"
							name="password"
							required
							class="input input-bordered w-full max-w-sm
                			invalid:border-pink-rose invalid:text-rose-600
                			focus:invalid:border-rose-500 focus:invalid:ring-rose-500"
							placeholder="************"
						/>
					</label>
				</div>
				</div>
				<div class="form-control w-full max-w-sm">
					<div class="tooltip tooltip-top" data-tip="The length must be between 8 and 72.">
						<label for="passwordConfirm" class="input-group input-group-vertical">
							<span>Confirm password</span>
							<input
								type="password"
								name="passwordConfirm"
								required
								class="input input-bordered w-full max-w-sm
								invalid:border-pink-rose invalid:text-rose-600
								focus:invalid:border-rose-500 focus:invalid:ring-rose-500"
								placeholder="************"
							/>
						</label>
					</div>
				</div>
				<div class="flex max-w-sm w-full pt-3 py-3">
					<button class="btn btn-primary btn-md w-full sm:btn-sm md:btn-md">Register</button>
				</div>
				{#if form?.error}
					<div class="alert alert-error shadow-lg  max-w-xs w-full">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="stroke-current flex-shrink-0 h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
								/></svg
							>
							<span class="whitespace-pre-line text-center"
								>Error! Something went wrong. Please try again.</span
							>
						</div>
					</div>
				{/if}
			</form>
			<!-- FORM INPUTS -->
		</div>
		<!-- space-y-8 -->
	</div>
	<!-- mx-auto -->
</div>
