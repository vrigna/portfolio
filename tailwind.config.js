/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': "'Poppins', sans-serif"
      },
      colors: {
        accent: '#4ED3A3',
        light: '#f8f8f8',
        'backg-dark': '#1b2523',
        shadow: '#273532'
      }
    },
  },
  plugins: [],
}
