const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        gray: {
          50: 'hsl(223, 64%, 98%)',
          300: 'hsl(220, 14%, 75%)',
          500: 'hsl(219, 9%, 45%)',
          900: 'hsl(220, 13%, 13%)'
        },
        orange: {
          100: 'hsl(25, 100%, 94%)',
          500: 'hsl(26, 100%, 55%)',
          DEFAULT: 'hsl(26, 100%, 55%)'
        }
      },
      fontFamily: {
        sans: ['Kumbh Sans', 'sans-serif']
      }
    }
  },

  plugins: []
};

module.exports = config;
