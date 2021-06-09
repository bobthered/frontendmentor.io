module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        pink:{
          DEFAULT:'hsl(322, 100%, 66%)',
          light:'hsl(321, 100%, 78%)'
        },
        red:'hsl(0, 100%, 63%)',
        cyan:'hsl(192, 100%, 9%)',
        blue:'hsl(207, 100%, 98%)',
        facebook:'#4267B2',
        instagram:{
          1:'#FFDC80',
          2:'#833AB4'
        },
        twitter:'#1Da1F2'
      },
      fontFamily:{
        heading: ['Poppins', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif']
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
