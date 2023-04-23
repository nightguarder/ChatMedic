<script>
</script>

<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="overflow-hidden w-2/3 md:-w-full shadow-xl sm:rounded-lg px-2 py-8">
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
			<form method="POST" action="?/register" class="flex flex-col items-center space-y-2 w-full">
				<div class="form-control w-full max-w-xs">
					<label class="input-group input-group-vertical pb-1">
						<span>Full name</span>
						<input
							type="text"
							name="name"
							placeholder="John Doe"
							class="input input-bordered input-md sm:input-sm xl:input-md w-full max-w-xs"
						/>
					</label>
				</div>
				<div class="form-control w-full max-w-xs">
					<label class="input-group input-group-vertical pb-1">
						<span>Your Email</span>
						<input
							type="email"
							name="email"
							required
							class="input input-bordered w-full max-w-xs
                invalid:border-pink-rose invalid:text-rose-600
                focus:invalid:border-rose-500 focus:invalid:ring-rose-500"
							placeholder="john21doe@gmail.com"
						/>
					</label>
				</div>
				<div class="form-control w-full max-w-xs">
					<label for="password" class="input-group input-group-vertical">
						<span>Password</span>
						<input
							type="password"
							name="password"
							required
							class="input input-bordered w-full max-w-xs "
							placeholder="************"
						/>
					</label>
				</div>
				<div class="form-control w-full max-w-xs">
					<label for="passwordConfirm" class="input-group input-group-vertical">
						<span>Confirm password</span>
						<input
							type="password"
							required
							name="passwordConfirm"
							class="input input-bordered w-full max-w-sm required"
							placeholder="************"
						/>
					</label>
				</div>
				<div class="flex max-w-xs w-full pt-3 py-3">
					<button class="btn btn-primary btn-md w-full sm:btn-sm md:btn-md">Register</button>
				</div>
			</form>
			<!-- FORM INPUTS -->
		</div>
		<!-- space-y-8 -->
	</div>
	<!-- mx-auto -->
</div>
