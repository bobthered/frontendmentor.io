module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        default: '0 1rem 1rem hsla(223,87%,63%,.3)',
      },
      colors: {
        blue: {
          DEFAULT: 'hsl(223, 87%, 63%)',
          pale: 'hsl(223, 100%, 88%)',
          dark: 'hsl(209, 33%, 12%)',
        },
        red: 'hsl(354, 100%, 66%)',
        gray: 'hsl(0, 0%, 59%)',
      },
      fontFamily: {
        sans: ['Libre Franklin', 'sans-serif'],
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
