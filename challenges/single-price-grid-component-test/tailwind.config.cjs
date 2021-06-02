module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(179, 62%, 43%)',
        yellow: 'hsl(71, 73%, 54%)',
        gray: {
          light: 'hsl(204, 43%, 93%)',
          blue: 'hsl(218, 22%, 67%)',
        },
      },
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
