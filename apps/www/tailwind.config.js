/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				bk: {
					red: '#e8557a',
					orange: '#f7995c',
					yellow: '#ffd24e',
					blue: '#7ad1df',
					green: '#5ac7bd'
				}
			}
		}
	},
	safelist: [
		'h-[460px]',
		'w-[370px]',
		'rounded-[30px]',
		'shadow-[0_5px_5px_rgba(0,0,0,0.3)]',
		'ml-[35%]',
		'w-[25%]',
		'pl-[5%]'
	],
	plugins: []
};
