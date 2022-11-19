/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Avenir", "Sen", "Helvetica", "Arial", "sans-serif"],
				secondary: ["Manrope", "Helvetica", "Arial", "sans-serif"],
				serif: [
					"Playfair Display",
					"Georgia",
					"Cambria",
					'"Times New Roman"',
					"Times",
					"serif",
				],
			},
		},
	},
	plugins: [],
};
