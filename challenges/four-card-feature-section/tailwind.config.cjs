module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        red: 'hsl(0, 78%, 62%)',
        cyan: 'hsl(180, 62%, 55%)',
        orange: 'hsl(34, 97%, 64%)',
        blue: {
          DEFAULT: 'hsl(212, 86%, 64%)',
          dark: 'hsl(234, 12%, 34%)',
          grayish: 'hsl(229, 6%, 66%)',
        },
        gray: {
          light: 'hsl(0, 0%, 98%)',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        base: '.9375rem',
      },
      zIndex: {
        '-1': -1,
      },
    },
  },
  plugins: [],
};
