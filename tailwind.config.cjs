/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'sand': '#f4eacf',
				'sand-dark': '#dccba9',
				'pink': '#dccba9',
				'green-light_orig': '#d6e1d9',
				'green-light': '#d6e1d9',
				'green-medium': '#7aa79a',
				'green-dark': '#1c4232',
				'beige-light': '#f4eacf',
				'beige-dark': '#dccba9',
				'magenta': 'rgb(182,0,75)',
				'oldrose': '#A66A65',
				'mauvebark': '#60463B',

			},
			typography: {
				DEFAULT: {
					css: {
						color: 'colors.green-dark',
						a: {
							color: 'green-medium',
							bg: 'green-dark'
						}
					}
				}
			}
		},
	},
	plugins: [
		{
			'postcss-import': {},
			'tailwindcss/nesting': {},
			tailwindcss: {},
        	autoprefixer: {},
		},
		require('@tailwindcss/typography'),
	],
}
