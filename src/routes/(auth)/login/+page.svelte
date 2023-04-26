<script>
	export let form;
</script>

<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="overflow-hidden w-3/4 md:-w-full shadow-xl sm:rounded-lg px-2 py-8 ">
		<div class="w-full md:w-auto space-y-4">
			<div class="space-y-3 py-2">
				<img
					class="mx-auto h-12 w-auto"
					src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=600"
					alt="logo"
				/>
				<h2 class="mt-2 text-center text-3xl font-bold tracking-tight ">Sign in to your account</h2>
				<p class="mt-1 text-center text-gray-500">
					No account yet? <a href="./register" class="font-medium text-cyan-600 hover:text-cyan-800"
						>Register now</a
					>
				</p>
			</div>
			<form method="POST" action="?/login" class="flex flex-col items-center space-y-2 w-full">
				<div class="form-control w-full max-w-sm">
					<label for="email" class="input-group input-group-vertical pb-1">
						<span>Your email</span>
						<input
							type="email"
							name="email"
							required
							autocomplete="email"
							class="input input-bordered w-full max-w-sm
                invalid:border-pink-rose invalid:text-rose-600
                focus:invalid:border-rose-500 focus:invalid:ring-rose-500"
							placeholder="john21doe@gmail.com"
						/>
					</label>
				</div>
				<div class="form-control w-full max-w-sm">
					<label for="password" class="input-group input-group-vertical pb-1">
						<span>Password</span>
						<input
							type="password"
							name="password"
							required
							class="input input-bordered w-full max-w-sm "
							placeholder="************"
						/>
					</label>
				</div>

				<div class="form-control w-full max-w-sm">
					<div class="flex items-center justify between ">
						<label class="cursor-pointer label">
							<input
								id="remember-me"
								type="checkbox"
								class="bg-transparent checkbox checkbox-info"
							/>
							<span class="label-text font-medium text-gray-500 hover:text-gray-400 ml-2">
								Remember me</span
							>
						</label>
					</div>
				</div>

				<div class="flex max-w-sm w-full pt-3 py-3">
					<button class="btn btn-primary btn-md w-full sm:btn-sm md:btn-md">Sign In</button>
				</div>
				<p class="mt-1 text-center text-sm text-gray-500">
					Forgot your password? <a
						href="./reset"
						class="font-medium text-cyan-600 hover:text-cyan-800">Reset now</a
					>
				</p>
				{#if form?.notVerified}
					<div class="alert alert-warning shadow-lg max-w-xs w-full pt-3 py-3">
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
									d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
								/></svg
							>
							<span>Warning: Your Email is not verified!</span>
						</div>
					</div>
				{/if}
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
