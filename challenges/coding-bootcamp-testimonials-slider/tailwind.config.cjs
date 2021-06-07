module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        blue: {
          light:'hsl(240, 18%, 77%)',
          DEFAULT:'hsl(240, 38%, 20%)'
        }
      },
      fontFamily:{
        sans: ['Inter', 'sans-serif']
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
