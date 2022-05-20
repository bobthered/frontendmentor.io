const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F8F9FE',
          300: '#DFE6F8',
          500: '#757DA2',
          900: '#1F2D50'
        },
        purple: {
          200: '#E0E8FF',
          300: '#D6E1FF',
          400: '#766CF1',
          500: '#382AE1'
        }
      },
      fontFamily: {
        sans: ['Red Hat Display', 'sans-serif']
      }
    }
  },

  plugins: []
};

module.exports = config;
