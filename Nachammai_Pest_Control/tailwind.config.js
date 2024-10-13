/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Montaga, sans-serif"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brown50: "#fdf7f1",
        brown100: "#f9e7d5",
        brown200: "#f6dbc0",
        brown300: "#f2cba3",
        brown400: "#f0c191",
        brown500: "#ecb176",
        brown600: "#d7a16b",
        brown700: "#a87e54",
        brown800: "#826141",
        brown900: "#634a32",
      },
    },
    container: {
      center: true,
    },
    
  },
  plugins: [],
}