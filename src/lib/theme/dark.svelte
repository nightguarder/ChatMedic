<script>
	import { browser, dev, version } from '$app/environment';
	//global variable
	let boolTheme = true;
	function toggleTheme() {
		console.log('checked ' + boolTheme);
		if (boolTheme) {
			document.documentElement.setAttribute(THEME_ATTRIBUTE, 'dark');
			localStorage.setItem('theme', 'light');
		} else {
			document.documentElement.setAttribute(THEME_ATTRIBUTE, 'light');
			localStorage.setItem('theme', 'light');
		}
		console.log(THEME_ATTRIBUTE);
		boolTheme = !boolTheme;
	}
</script>

<input checked={boolTheme} on:click={toggleTheme} type="checkbox" id="theme-toggle" />
<label class="relative m-1 " for="theme-toggle" />

<style lang="postcss">
	#theme-toggle {
		@apply invisible;
	}
	#theme-toggle + label {
		@apply cursor-pointer h-10 w-10 p-5  rounded-full duration-300 content-[''];
	}
	#theme-toggle:checked + label {
		@apply bg-amber-400;
	}
	#theme-toggle:not(:checked) + label {
		@apply bg-transparent;
		box-shadow: inset -18px -16px 1px 1px #ffffff;
	}
</style>
