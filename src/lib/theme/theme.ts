import { browser } from '$app/environment';
import { derived, writable } from 'svelte/store';

export type Theme = 'system' | 'light' | 'dark';

// Define the local storage key for the theme preference
const LOCAL_STORAGE_KEY = 'theme_preference';

// Initialize the theme store
export const theme = writable<Theme>('system');

// Read the theme preference from local storage
if (browser) {
	const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
	if (storedTheme) {
		theme.set(storedTheme as Theme);
	}
}

// update the the local storage if the theme changes
theme.subscribe(($theme) => {
	if (browser) {
		localStorage.setItem(LOCAL_STORAGE_KEY, $theme);
	}
});

export const resolvedTheme = derived(theme, ($theme) => {
	if ($theme === 'system') {
		if (!browser) return 'light';
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
		return systemTheme === 'dark' ? 'dark' : 'light';
	}
	return $theme;
});
