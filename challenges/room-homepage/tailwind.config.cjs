module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: 'hsl(0, 0%, 63%)',
          dark: 'hsl(0, 0%, 27%)',
        },
      },
      fontFamily: {
        sans: ['Spartan', 'sans-serif'],
      },
      gridTemplateColumns:{
        hero: '840fr 600fr'
      },
      gridTemplateRows:{
        main: '534fr 266fr'
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
        'auto': 'auto',
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
