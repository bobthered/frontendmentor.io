module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    boxShadow: {
      DEFAULT: '0 .5rem 0 rgba(0,0,0,.3)',
    },
    extend: {
      colors: {
        blue: 'hsl(248, 32%, 49%)',
        green: 'hsl(154, 59%, 51%)',
        red: 'hsl(0, 100%, 74%) ',
      },
      fontFamily: {
        base: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
