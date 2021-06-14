module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        lg: '0 10px 15px -3px hsla(231, 69%, 60%, 0.1), 0 4px 6px -2px hsla(231, 69%, 60%, 0.05)',
        lg: '0 20px 25px -5px hsla(231, 69%, 60%, 0.1), 0 10px 10px -5px hsla(231, 69%, 60%, 0.05)',
      },
      colors:{
        blue:{
          DEFAULT:'hsl(231, 69%, 60%)',
          dark:'hsl(229, 31%, 21%)',
        },
        red:'hsl(0, 94%, 66%)',
        gray:'hsl(229, 8%, 60%)',
      },
      fontFamily:{
        sans: ['Rubik', 'sans-serif']
      },
      zIndex: {
        auto: 'auto',
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
