/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'bk-red': 'var(--bk-color-red)',
				'bk-orange': 'var(--bk-color-orange)',
				'bk-yellow': 'var(--bk-color-yellow)',
				'bk-blue': 'var(--bk-color-blue)',
				'bk-green': 'var(--bk-color-green)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},
	plugins: [require('@tailwindcss/aspect-ratio')]
};
