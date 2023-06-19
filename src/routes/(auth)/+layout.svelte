<script>
	import Dark from '../../lib/theme/dark.svelte';
	export let data;
</script>

<div class="md:container">
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<a href="/" class="btn btn-ghost normal-case text-xl bg-cyan-400/80 hover:bg-cyan-300"
				>ChatMedic</a
			>
		</div>
		<div class="navbar-end">
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
				{#if data.user}
				<li>
					<a href="./my/aichat" class="justify-between ">
						ChatAI
						<span class="badge">Start</span>
					</a>
				</li>
				<li><a href="/my">Dashboard</a></li>
				<li><a href="/my/settings/account">My Account</a></li>
				<li><form action="/logout" method="POST">
					<button type="submit" class="w-full text-start">Logout</button>
				</form></li>
				{:else}
					<li>
						<a href="/register" class="justify-between ">
							Register
							<span class="badge">Register</span>
						</a>
					</li>
					<li><a href="/my/settings">Settings</a></li>
					<li><a href="/contact">Contact</a></li>
					{/if}
				</ul>
			</div>
			<!-- Desktop -->
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal dropdown-content  font-medium px-2 bg-base-100">
				{#if data.user}
				<li>
					<a href="/my/aichat" class="justify-between ">
						ChatAI
						<span class="badge">Start</span>
					</a>
				</li>
				<li tabindex="-1">
					<div class="avatar placeholder">
						<div class="bg-neutral-focus text-neutral-content rounded-full w-12">
						  <span>{data.firstChar + data.secondChar}</span>
						</div>
					  </div> 
					<ul class="p-2">
						<li><a href="/my">Dashboard</a></li>
						<li><a href="/my/settings/account">My Account</a></li>
						<li><form action="/logout" method="POST">
							<button type="submit" class="w-full text-start">Logout</button>
						</form></li>
					</ul>
				</li>
				{:else}
					<li>
						<a href="./register" class="justify-between ">
							Get Started
							<span class="badge">Free</span>
						</a>
					</li>
					<li><a href="./login">Login</a></li>
					<li><a href="/">Home</a></li>
				{/if}
				</ul>
			</div>
		</div>
	<!-- NAVBAR -->
</div>
</div>
<!-- CONTAINER -->
<slot />
