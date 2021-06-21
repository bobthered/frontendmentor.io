module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow:{
        featured: 'inset 4px 0 0 hsl(180, 29%, 50%)'
      },
      colors:{
        cyan:{
          50:'hsl(180, 52%, 96%)',
          100:'hsl(180, 31%, 95%)',
          500:'hsl(180, 8%, 52%)',
          600:'hsl(180, 29%, 50%)',
          800:'hsl(180, 14%, 20%)',
        }
      },
      fontFamily:{
        sans:['Spartan', 'sans-serif']
      },
      zIndex: {
        auto: 'auto',
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
