<script>
    import { browser, dev, version } from '$app/environment';
    //global variable
    let boolTheme = true;
    function toggleTheme() {
        const htmlElement = document.querySelector('html');
        let currentTheme = localStorage.getItem('theme')||'light';
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
    }
    if(browser){
        if (localStorage.theme === 'dark' ||(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			boolTheme = true;
            localStorage.setItem('theme','dark');
		} 
        else {
			boolTheme = false;
            localStorage.setItem('theme','light');
		}
    }
</script>
	<input checked={boolTheme} on:click={toggleTheme} type="checkbox" id="theme-toggle" />
	<label class="block mx-2" for="theme-toggle"></label>
<style lang="postcss">
	#theme-toggle {
		
	}
	#theme-toggle + label {
		@apply  cursor-pointer h-10 w-10  rounded-full duration-300 content-[''];
	}
	#theme-toggle:not(:checked) + label {
		@apply bg-amber-400;
	}
	#theme-toggle:checked + label {
		@apply bg-transparent;
		box-shadow: inset -18px -16px 1px 1px #ffffff;
	}
</style>