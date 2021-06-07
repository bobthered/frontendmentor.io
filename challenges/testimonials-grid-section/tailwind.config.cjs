module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        violet:'hsl(263, 55%, 52%)',
        gray:{
          100:'hsl(0, 0%, 81%)',
          200:'hsl(210, 46%, 95%)',
          700:'hsl(217, 19%, 35%)',
          900:'hsl(219, 29%, 14%)',
        }
      },
      fontFamily:{
        sans: ['Barlow Semi Condensed', 'sans-serif']
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
