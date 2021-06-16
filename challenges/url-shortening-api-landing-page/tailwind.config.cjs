module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        violet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        gray: {
          100: '#F0F1F6',
          300: 'hsl(0, 0%, 75%)',
          400: 'hsl(257, 7%, 63%)',
          800: 'hsl(255, 11%, 22%)',
          900: 'hsl(260, 8%, 14%)',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      zIndex: {
        'auto': 'auto',
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
