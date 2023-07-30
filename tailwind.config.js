/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'black',
				'nespresso-gold': '#8D6708',
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
			},

			fontFamily: {
				sans: ['NespressoLucas', 'sans-serif'],
			},

			backgroundImage: {
				'hero-recipes': "url('/src/public/images/bg-recipes-jpg-1x.webp')",
			},
		},
	},
	plugins: [],
};
