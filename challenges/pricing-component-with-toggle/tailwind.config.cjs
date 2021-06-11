module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow:{
        'outline-white': 'inset 0 0 0 1px #ffffff',
        'outline-purple': 'inset 0 0 0 1px hsl(237,63%,64%)'
      },
      colors:{
        purple:{
          300:'hsl(236, 72%, 79%)',
          500:'hsl(237, 63%, 64%)'
        },
        gray:{
          50:'hsl(240, 78%, 98%)',
          300:'hsl(234, 14%, 74%)',
          500:'hsl(233, 13%, 49%)',
          700:'hsl(232, 13%, 33%)',
        }
      },
      fontFamily:{
        sans: ['Montserrat', 'sans-serif']
      },
      zIndex: {
        auto: 'auto',
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
