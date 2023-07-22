/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'black',
				'nespresso-gold': 'rgb(141, 103, 8)',
			},

			fontFamily: {
				sans: ['NespressoLucas', 'sans-serif'],
			},

			backgroundImage: {
				"hero-recipes": "url('/src/public/images/bg-recipes-jpg-1x.webp')",
			},
		},
	},
	plugins: [],
};
