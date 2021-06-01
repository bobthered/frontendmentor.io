module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      black: 'hsl(0, 6%, 24%)',
      gradient: {
        from: 'hsl(0, 80%, 86%)',
        to: 'hsl(0, 74%, 74%)',
      },
      red: {
        1: 'hsl(0, 36%, 70%)',
        2: 'hsl(0, 93%, 68%)',
      },
      transparent: 'transparent',
      white: '#ffffff',
    },
    extend: {
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
