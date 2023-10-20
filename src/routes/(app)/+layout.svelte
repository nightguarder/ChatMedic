<script>
	
</script>

<div class="md:container">
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<a
				href="/"
				class="btn btn-ghost text-white normal-case text-xl bg-cyan-400/80 hover:bg-cyan-300"
				>ChatMedic</a
			>
		</div>
		<div class="navbar-end">
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal dropdown-content  font-medium px-2 bg-base-100">
					<li tabindex="-1">
						<a
							>Menu
							<svg
								class="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
							>
						</a>
						<ul class="p-2">
							<li><a href="./about">About</a></li>
							<li><a href="./contact">Contact</a></li>
							<li><a href="./my">My Account</a></li>
						</ul>
					</li>
				</ul>
				<a href="./register" class="btn normal-case  bg-grey-400/40">Get Started</a>
			</div>
			<!-- navbar normal -->
		</div>
		<!-- navbar end -->
		<!-- Mobile first -->
		<div class="dropdown dropdown-end">
			<label tabindex="-1" for="dropdown" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				tabindex="-1"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li>
					<a href="./register" class="justify-between ">
						Get Started
						<span class="badge">Free</span>
					</a>
				</li>
				<li><a href="./about">About</a></li>
				<li><a href="./contact">Contact</a></li>
				<li><a href="./my">My Account</a></li>
			</ul>
		</div>
		<!-- dropdown menu -->
	</div>
	<!-- NAVBAR -->
</div>
<!-- CONTAINER -->

<slot />

<!-- Footer -->
<footer class="footer footer-center p-10 bg-base-200 font-medium text-base rounded">
	<div class="grid grid-flow-col gap-4">
		<a href="./login" class="link link-hover">Login</a>
		<a href="./register" class="link link-hover">Register</a>
		<a href="./about" class="link link-hover">About us</a>
		<a href="./contact" class="link link-hover">Contact</a>
	</div>
	<div>
		<div class="grid grid-flow-col gap-4">
			<a href="https://github.com/nightguarder"
				><svg
					class="w-6 h-6 tails-selected-element"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 24 24"
					><path
						fill-rule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clip-rule="evenodd"
						class=""
					/></svg
				></a
			>
			<a href="https://twitter.com/Nigthguarder"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
					><path
						d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
					/></svg
				></a
			>
			<a href="https://www.youtube.com/user/cyrilsteger/"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
					><path
						d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
					/></svg
				></a
			>
		</div>
	</div>
	<div>
		<p>© Cyril Steger - All right reserved.</p>
	</div>
</footer>
