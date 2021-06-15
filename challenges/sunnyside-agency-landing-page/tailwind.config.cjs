module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        red:'hsl(7, 1100%, 71%)',
        yellow:'hsl(51, 99%, 49%)',
        cyan:{
          dark:'hsl(167, 40%, 24%)',
          DEFAULT:'hsl(165, 44%, 71%)'
        },
        blue:{
          dark:'hsl(198, 62%, 26%)',
          DEFAULT:'hsl(200, 99%, 69%)'
        },
        gray:{
          500:'hsl(210, 4%, 67%)',
          600:'hsl(232, 10%, 55%)',
          700:'hsl(213, 9%, 39%)',
          900:'hsl(212, 27%, 19%)'
        }
      },
      fontFamily:{
        sans: ['Barlow', 'sans-serif'],
        serif: ['Fraunces', 'serif']
      },
      letterSpacing: {
        wide: '.1875em',
        widest: '.275em',
      },
      zIndex: {
        auto:'auto',
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
