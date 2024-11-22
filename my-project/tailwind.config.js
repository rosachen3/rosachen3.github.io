/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
const CustomStyle = plugin(function ({addUtilities}) {
  addUtilities({
    ".rotate-y-180" : {
      transform : "rotateY(180deg)"
    },
    ".preserve-3d" : {
      transformStyle : "preserve-3d"
    },
    ".perspective-1000" : {
      perspective : "1000px"
    },
    ".backface-hidden" : {
      backfaceVisibility : "hidden",
    }
  })
}) 

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        peach: '#FFEED9',
        darkPeach: '#FBD3B4',
        darkBrown: '#594F43',
        mahogany: '#844E4E',
        lightBrown: '#BC9C99',
        black: '#403930',
        white: '#F3F2FF',
        gradientOrange: '#FFDDBF',
        gradientPurple: '#DDD9FF',
        beige: '#FFF8F2',
        lightPurple: '#F2E6E3',
        blue: '#4E5E80'
      }
    },
    fontFamily: {
      text: ['Work Sans', 'sans-serif'],
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
    }
  },
  plugins: [CustomStyle],
}

