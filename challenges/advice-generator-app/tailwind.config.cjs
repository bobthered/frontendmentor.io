const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      boxShadow: {
        button: '0 0 3rem 0 rgba(0, 0, 0, .3)'
      },
      colors: {
        cyan: 'hsl(193, 38%, 86%)',
        gray: {
          300: 'hsl(192, 36%, 86%)',
          500: 'hsl(217, 19%, 38%)',
          700: 'hsl(217, 19%, 24%)',
          900: 'hsl(218, 23%, 16%)'
        },
        green: 'hsl(150, 100%, 66%)'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif']
      }
    }
  },

  plugins: []
};

module.exports = config;
