const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage:theme=>({
        'slider-thumb' : 'url(./icon-slider.svg)'
      }),
      boxShadow:{
        'slider-thumb':'0 1rem 2rem hsla(174, 86%, 45%, .7)'
      },
      colors: {
        green: {
          light: 'hsl(174, 77%, 80%)',
          DEFAULT: 'hsl(174, 86%, 45%)',
        },
        red: {
          light: 'hsl(14, 92%, 95%)',
          DEFAULT: 'hsl(15, 100%, 70%)',
        },
        blue: {
          lightest: 'hsl(230, 100%, 99%)',
          lighter: 'hsl(226, 100%, 87%)',
          light: 'hsl(225, 20%, 60%)',
          DEFAULT: 'hsl(227, 35%, 25%)',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif']
      },
      fontSize: {
        base: '15px',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('webkit-slider-thumb', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`webkit-slider-thumb${separator}${className}`)}::-webkit-slider-thumb`
        })
      })
    })
  ],
};
