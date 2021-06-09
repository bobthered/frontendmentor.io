module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        blue:'hsl(233, 26%, 24%)',
        green:'hsl(136, 65%, 51%)',
        cyan:'hsl(192, 70%, 51%)',
        gray:{
          50:'hsl(0, 0%, 98%)',
          100:'hsl(220, 16%, 96%)',
          500:'hsl(233, 8%, 62%)',
        }
      },
      fontFamily:{
        sans: ['Public Sans', 'sans-serif']
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
