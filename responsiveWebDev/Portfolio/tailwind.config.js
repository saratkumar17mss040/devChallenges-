/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				xs: '300px',
				xxs: '200px',
			},
			gridTemplateRows: {
				// Simple 7 row grid
				7: 'repeat(7, 1fr)',
			},
			maxWidth: {
				'4/5': '80%',
			},
		},
	},
	plugins: [],
};
