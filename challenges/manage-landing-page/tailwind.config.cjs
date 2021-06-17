module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow:{
        orange: '0 10px 15px -3px hsla(12, 88%, 59%, 0.3), 0 4px 6px -2px hsla(12, 88%, 59%, 0.15)'
      },
      colors:{
        orange:{
          DEFAULT:'hsl(12, 88%, 59%)',
          200:'hsl(13, 100%, 96%)',
        },
        blue:{
          DEFAULT:'hsl(228, 39%, 23%)',
          900:'hsl(233, 12%, 13%)'
        },
        gray:{
          50:'hsl(0, 0%, 98%)',
          600:'hsl(227, 12%, 61%)',
        }
      },
      fontFamily:{
        sans: ['Be Vietnam', 'sans-serif']
      },
      gridTemplateColumns: {
        footer : '250px 1fr 350px'
      },
      transitionDelay:{
        0: '0ms',
        300: '300ms',
        400: '400ms',
        500: '500ms',
        600: '600ms',
        700: '700ms',
        800: '800ms',
        900: '900ms',
        1000: '1000ms',
        1100: '1100ms',
        1200: '1200ms',
      },
      zIndex: {
        auto: 'auto',
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
