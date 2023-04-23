/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	daisyui: {
		themes: ['light', 'dark', 'cupcake', 'pastel', 'cmyk'],
		styled: true,
		themes: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: '',
		darkTheme: 'dark'
	},
	theme: {
		container: {
			center: true
		},
		extend: {}
	},
	plugins: [require('daisyui'), require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
