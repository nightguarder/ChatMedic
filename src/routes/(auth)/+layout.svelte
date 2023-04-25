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
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal dropdown-content  font-medium px-2 bg-base-100">
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<li tabindex="0">
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
							<li><a href="./login">My Account</a></li>
						</ul>
					</li>
				</ul>
				{#if !data.user}
					<a href="./register" class="btn normal-case  bg-grey-400/40">Get Started</a>
				{:else}
					<div class="flex-none gap-2">
						<div class="form-control">
							<input type="text" placeholder="Search" class="input input-bordered" />
						</div>
						<div class="dropdown dropdown-end">
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<label tabindex="0" for="dropdown" class="btn btn-ghost btn-circle avatar">
								<div class="avatar placeholder">
									<div class="bg-neutral-focus text-neutral-content rounded-full w-12">
										<span>PC</span>
									</div>
								</div>
							</label>
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<ul
								tabindex="0"
								class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
							>
								<li>
									<a class="justify-between">
										Profile
										<span class="badge">New</span>
									</a>
								</li>
								<li><a>Settings</a></li>
								<li><a href="/logout">Logout</a></li>
							</ul>
						</div>
					</div>
				{/if}
				<Dark /><!-- Dark Mode -->
			</div>
			<!-- navbar normal -->
		</div>
		<!-- navbar end -->
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
				tabindex="0"
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
				<li><a href="./login">My Account</a></li>
			</ul>
		</div>
		<!-- dropdown menu -->
	</div>
	<!-- NAVBAR -->
</div>
<!-- CONTAINER -->
<slot />
