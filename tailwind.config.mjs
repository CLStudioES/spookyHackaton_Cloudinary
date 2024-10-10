/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			/*Basic*/
			'white': '#ffffff',
			'black': '#000000',
			/*Trickle*/
			'trickle-black': '#030303',
			'trickle-violet': '#9356A3',
			'trickle-orange': '#E97714',
			'trickle-green': '#ADEF13',
			'trickle-purple': '#3D224B',
		},
		extend: {
		},
	},
	plugins: [
		animations
	],
}
