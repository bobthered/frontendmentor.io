module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        gray:{
          DEFAULT:'hsl(0, 0%, 59%)',
          900:'hsl(0, 0%, 17%)'
        }
      },
      fontFamily:{
        sans: ['Rubik', 'sans-serif']
      },
      zIndex: {
        auto: 'auto',
        '-1': '-1',
        500: '500'
      },
    },
  },
  plugins: [],
};
