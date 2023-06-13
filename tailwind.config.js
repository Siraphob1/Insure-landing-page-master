/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        fontDM:['DM Serif Display', 'serif'],
        fontKarla:['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
}