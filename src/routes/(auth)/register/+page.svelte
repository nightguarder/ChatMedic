<div class="md:container">
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <a  href="/" class="btn btn-ghost normal-case text-xl bg-cyan-400/80 hover:bg-cyan-300">ChatMedic</a>
          </div>
    </div>
</div>
<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="overflow-hidden bg-white w-1/4 shadow-xl sm:rounded-lg py-8">
    <div class="w-full md:w-auto space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=600" alt="Your Company">
        <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">Register for an account</h2>
        <p class="mt-1 text-center text-gray-600">
          Or <a href="./login" class="font-medium text-cyan-600 hover:text-cyan-800">sign in</a> If you already have an account
        </p>
      </div>
      <form method="POST" action="?/register" class="flex flex-col items-center space-y-2 w-full">
        <div class="form-control w-full max-w-xs">
            <label for="name" class=" text-base label font-medium pb-1">
                <span class="label-text">Full Name</span>
            </label>
            <input type="text" name="name" class="input input-bordered w-full max-w-xs" />
        </div>
        <div class="form-control w-full max-w-xs">
            <label for="email" class="label font-medium pb-1">
                <span class="label-text">Email</span>
            </label>
            <input type="email" name="email"
                required 
                class="input input-bordered w-full max-w-xs
                invalid:border-pink-rose invalid:text-rose-600
                focus:invalid:border-rose-500 focus:invalid:ring-rose-500" 
                placeholder="yourname@gmail.com" />
        </div>
        <div class="form-control w-full max-w-xs">
            <label for="password" class="label font-medium pb-1">
                <span class="label-text">Password</span>
            </label>
            <input type="password" 
                name="password"
                required 
                class="input input-bordered w-full max-w-xs " 
                placeholder="************" />
        </div>
        <div class="form-control w-full max-w-xs">
            <label for="passwordConfirm" class="label font-medium pb-1">
                <span class="label-text">Confirm Password</span>
            </label>
            <input
                type="password"
                required
                name="passwordConfirm"
                class="input input-bordered w-full max-w-sm required"
                placeholder="************"
            />
        </div>
        <div class="w-full max-w-xs pt-3">
            <button class="btn btn-primary w-full max-w-xs">Register</button>
        </div>
    </form><!-- FORM INPUTS -->
    </div><!-- space-y-8 -->
</div><!-- mx-auto -->
</div>