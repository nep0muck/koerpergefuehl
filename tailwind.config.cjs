/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'sand': '#f4eacf',
				'sand-dark': '#dccba9',
				'pink': '#dccba9',
				'green-light': '#d6e1d9',
				'green-medium': '#7aa79a',
				'green-dark': '#1c4232',
			},
		},
	},
	plugins: [
		{
			'postcss-import': {},
			'tailwindcss/nesting': {},
			tailwindcss: {},
        	autoprefixer: {}
		}
	],
}
