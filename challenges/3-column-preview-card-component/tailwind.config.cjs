module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      blue: 'hsl(184, 100%, 22%)',
      green: 'hsl(179, 100%, 13%)',
      orange: 'hsl(31, 77%, 52%)',
      white: '#ffffff',
    },
    fontFamily: {
      'lexend-deca': ['Lexend Deca', 'sans-serif'],
      'big-shoulders-display': ['Big Shoulders Display', 'sans-serif'],
    },
  },
  plugins: [],
};
