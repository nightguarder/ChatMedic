<script>
	export let pageTitle = 'Contact';
</script>

<section class="snap-start min-h-screen snap-normal overflox-scroll" id="contact">
	<div
		class="md:container md:mx-auto max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center"
	>
		<h1
			class="text-5xl font-extrabold leading-10 tracking-tight text-left md:text-center sm:leading-none sm:text-4xl md:text-5xl lg:text-6xl"
		>
			<span class="inline md:block">{pageTitle}</span>
		</h1>
		<h2
			class="mt-2 text-xl sm:text-base text-transparent font-semibold bg-clip-text bg-gradient-to-br from-cyan-600 to-cyan-500 tracking-wide uppercase"
		>
			Reach out to us!
		</h2>
		<div class="mx-auto mt-5 lead-relaxed text-gray-500">
			<p
				class=" whitespace-pre-line lead-relaxed first-letter:text-2xl max-w-3xl py-5 mt-5 mx-auto text-xl"
			>
				If you have any questions or run into problems during testing, reach out to one of the
				developers.
			</p>
		</div>
		<br />
		<div class="py-2">
			<a
				href="#team"
				class="btn btn-primary normal-case text-center w-full px-8 py-4 mt-2 text-white rounded-md md:mb-0 hover:bg-cyan-600 md:w-auto"
				data-rounded="rounded-md">Team Members</a
			>
		</div>
	</div>
	<!-- Text -->
</section>
<!-- Contact -->
<section class="snap-start min-h-screen snap-normal" id="team">
	<div class="max-w-4xl mx-auto py-16 px-4 sm:py-22 sm:px-6 lg:px-8">
		<h1
			class="text-5xl font-extrabold leading-10 tracking-tight text-left md:text-center sm:leading-none sm:text-4xl md:text-5xl lg:text-6xl"
		>
			<span class="inline md:block">Our Team</span>
		</h1>
		<div
			class="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-y-16 gap-x-8 border-t border-white-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			<article class="flex max-w-xl flex-col items-start justify-between">
				<div class="flex items-center gap-x-4 text-xs">
					<time datetime="2023-03-05" class="text-gray-500">Mar 5, 2023</time>
					<a
						href="../about"
						class="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium hover:bg-gray-100"
						>Development</a
					>
				</div>
				<div class="group relative">
					<h3 class="mt-3 text-lg font-semibold leading-6 group-hover:text-teal-600">
						<span class="absolute inset-0" />
						Main Developer
					</h3>
					<ul>
						<a href="mailto:steger1.cyril@gmail.com"><li>E-mail: steger1.cyril@gmail.com</li></a>
						<li>Twitter: <a href="https://twitter.com/Nigthguarder">@Nigthguarder</a></li>
						<li>Instagram: <a href="https://www.instagram.com/cyril.steger/">@cyril.steger</a></li>
					</ul>
				</div>
				<div class="relative mt-8 flex items-center gap-x-4">
					<img
						src="https://mir-s3-cdn-cf.behance.net/user/230/bc39ee192492567.640900da8f8da.jpg"
						alt="profile picture"
						class="h-10 w-10 rounded-full bg-gray-50"
					/>
					<div class="text-sm leading-6">
						<p class="font-semibold ">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://cyril-steger.infinityfreeapp.com/?i=1"
							>
								<span class="absolute inset-0" />
								Cyril Steger
							</a>
						</p>
						<p class="text-gray-500">Founder</p>
					</div>
				</div>
			</article>
			<article class="flex max-w-xl flex-col items-start justify-between">
				<div class="flex items-center gap-x-4 text-xs">
					<time datetime="2023-03-05" class="text-gray-500">Mar 10, 2023</time>
					<a
						href="../about"
						class="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium hover:bg-gray-100"
						>Expert</a
					>
				</div>
				<div class="group relative">
					<h3 class="mt-3 text-lg font-semibold leading-6 group-hover:text-teal-600">
						<span class="absolute inset-0" />
						Psychiatrist
					</h3>
					<ul>
						<li>
							E-mail: <a href="mailto:psychiatrie.stegerova@gmail.com"
								>psychiatrie.stegerova@gmail.com</a
							>
						</li>
						<li>Reference: <a href="https://www.stegerova.cz">stegerova.cz</a></li>
					</ul>
				</div>
				<div class="relative mt-8 flex items-center gap-x-4">
					<img
						src="https://drive.google.com/uc?id=1tk_Vz_7mZ52qi7DLePl6LWQpKu3pdTll"
						alt="profile picture"
						class="h-10 w-10 rounded-full bg-gray-50"
					/>
					<div class="text-sm leading-6">
						<p class="font-semibold ">
							<a target="_blank" rel="noreferrer" href="https://www.stegerova.cz">
								<span class="absolute inset-0" />
								MUDr. Martina Stegerová
							</a>
						</p>
						<p class="text-gray-500">Advisor</p>
					</div>
				</div>
			</article>
			<!-- Expert -->
		</div>
	</div>
</section>
