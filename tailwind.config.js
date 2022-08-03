/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'bebas': ['Bebas Neue', 'sans-serif']
    },
    backgroundImage: {
      'banner': "url('/banner.png')",
      'floral': "url('/floral.png')",
    },
    extend: {},
  },
  plugins: [],
}
