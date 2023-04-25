<script>
    export let emailName = 'ChatMedic Team';
    export let form; 
</script>
<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="overflow-hidden w-2/3 md:-w-full shadow-xl sm:rounded-lg px-2 py-8 ">
		<div class="w-full md:w-auto space-y-4">
			<div class="space-y-3 py-2">
				<img
					class="mx-auto h-12 w-auto"
					src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=600"
					alt="Your Company"
				/>
				<h2 class="mt-2 text-center text-3xl font-bold tracking-tight ">Reset Password</h2>
				<p class="mt-1 text-center text-gray-500 whitespace-pre-line">
					 We'll send you an email with a link to reset your password. Make sure the email is from: <em>{emailName}</em> 
				</p>
			</div>
			<form method="POST" action="?/reset" class="flex flex-col items-center space-y-2 w-full">
				<div class="form-control w-full max-w-xs">
					<label for="email" class="input-group input-group-vertical pb-1">
						<span>Your email</span>
						<input
							type="email"
							name="email"
							required
							autocomplete="email"
							class="input input-bordered w-full max-w-xs
                invalid:border-pink-rose invalid:text-rose-600
                focus:invalid:border-rose-500 focus:invalid:ring-rose-500"
							placeholder="john21doe@gmail.com"
						/>
					</label>
				</div>
				<div class="flex max-w-xs w-full pt-3 py-3">
					<button class="btn btn-primary btn-md w-full sm:btn-sm md:btn-md">Send now</button>
				</div>
				<p class="mt-1 text-center text-sm text-gray-500">
					Changed your mind? <a
						href="./login"
						class="font-medium text-cyan-600 hover:text-cyan-800">Log in</a
					>
				</p>
                {#if form?.success}
                <div class="alert alert-success shadow-lg max-w-xs w-full pt-3 py-3">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span>An email has been sent!</span>
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
