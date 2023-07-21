/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'black',
				"nespresso-gold": 'rgb(141, 103, 8)',
			},
			fontFamily: {
				nespresso: ['NespressoLucas', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
