const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: 'hsl(158, 36%, 37%)',
          500: 'hsl(158, 36%, 37%)',
          700: 'hsl(156, 42%, 18%)'
        },
        cream: 'hsl(30, 38%, 92%)',
        blue: {
          900: 'hsl(212, 21%, 14%)',
          500: 'hsl(228, 12%, 48%)'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Fraunces', 'serif']
      }
    }
  },

  plugins: []
};

module.exports = config;
