const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{

      },
      fontFamily:{
        sans: ['Alata', 'sans-serif'],
        heading: ['Josefin Sans', 'sans-serif']
      },
      zIndex: {
        auto: 'auto',
        '-1': '-1',
      },
    },
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('selection', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`selection${separator}${className}`)}::selection`
        })
      })
    })
  ],
};
