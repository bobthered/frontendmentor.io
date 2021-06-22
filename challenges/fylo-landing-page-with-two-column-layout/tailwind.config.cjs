module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        blue: {
          'very-light': 'hsl(240, 75%, 98%)',
          'dark': 'hsl(243, 87%, 12%)',
          'desaturated': 'hsl(238, 22%, 44%)',
          DEFAULT: 'hsl(224, 93%, 58%)',
        },
        cyan: 'hsl(170, 45%, 43%)',
        gray: 'hsl(0, 0%, 75%)',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Raleway', 'sans-serif'],
      },
      zIndex: {
        'auto': 'auto',
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
