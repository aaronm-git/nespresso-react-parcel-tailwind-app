/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'black',
				'nespresso-gold': '#8D6708',
				'nespresso-green': '#3d8705',
				'corn-harvest': {
					50: '#fdffe7',
					100: '#f6ffc0',
					200: '#f2ff84',
					300: '#f4ff3e',
					400: '#feff09',
					500: '#f6e600',
					600: '#d4b500',
					700: '#a98200',
					800: '#8d6708',
					900: '#76520d',
					950: '#452c03',
				},
				limeade: {
					50: '#f4ffe5',
					100: '#e6ffc6',
					200: '#cdff95',
					300: '#aaff57',
					400: '#8af625',
					500: '#69dd05',
					600: '#4fb100',
					700: '#3d8705',
					800: '#33690b',
					900: '#2c590e',
					950: '#133201',
				},
			},

			fontFamily: {
				sans: ['NespressoLucas', 'sans-serif'],
			},

			backgroundImage: {
				'hero-recipes': "url('/src/public/images/bg-recipes-jpg-1x.webp')",
				'svg-chevron-down': "url('/node_modules/feather-icons/dist/icons/chevron-down.svg')",
			},
		},
	},
	safelist: [
		{
			pattern: /^w-full$/,
			variants: ['md', 'lg', 'xl'],
		},
		{
			pattern: /^w-(\d+)\/12$/,
			variants: ['md', 'lg', 'xl'],
		},
	],
	plugins: [],
};
