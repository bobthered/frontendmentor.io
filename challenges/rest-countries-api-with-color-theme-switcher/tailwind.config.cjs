module.exports = {
  darkMode: 'class',
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        dark:{
          bg:'hsl(207, 26%, 17%)',
          input:'hsl(0, 0%, 100%)',
          text: 'hsl(0, 0%, 100%)',
          DEFAULT:'hsl(209, 23%, 22%)'
        },
        light:{
          bg:'hsl(0, 0%, 98%)',
          input:'hsl(0, 0%, 52%)',
          text: 'hsl(200, 15%, 8%)',
          DEFAULT:'hsl(0, 0%, 100%)'
        },
      },
      fontFamily:{
        sans: ['Nunito Sans', 'sans-serif']
      },
      zIndex: {
        auto:'auto',
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
