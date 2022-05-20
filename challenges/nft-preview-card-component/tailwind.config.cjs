const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        blue: {
          300: '#86A7D4',
          700: '#2F4159',
          800: '#15273F',
          900: '#0D1A2D'
        },
        cyan: 'hsl(178, 100%, 50%)'
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif']
      }
    }
  },

  plugins: []
};

module.exports = config;
