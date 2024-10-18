/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        peach: '#FFEED9',
        darkPeach: '#FBD3B4',
        darkBrown: '#594F43',
        mahogany: '#844E4E',
      }
    },
    fontFamily: {
      text: ['Work Sans', 'sans-serif'],
    },
  },
  plugins: [],
}

