/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{html,js,ts,jsx,tsx,vue}",
		"./src/components/**/*.css",
		"./src/**/*.{js,ts,jsx,tsx,css}",
		"./src/**/**/*.{js,ts,jsx,tsx,css}",
		"./src/components/**/*.{css,js,html}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
