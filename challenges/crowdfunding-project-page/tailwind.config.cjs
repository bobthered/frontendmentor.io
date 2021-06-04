module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: 'hsl(176, 50%, 47%)',
          dark: 'hsl(176, 72%, 28%)',
        },
      },
      fontFamily: {
        sans: ['Commissioner', 'sans-serif'],
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
