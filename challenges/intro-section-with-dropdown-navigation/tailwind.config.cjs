const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        gray: {
          50: 'hsl(0, 0%, 98%)',
          500: 'hsl(0, 0%, 41%)',
          DEFAULT: 'hsl(0, 0%, 41%)',
          900: 'hsl(0, 0%, 8%)'
        }
      },
      fontFamily: {
        sans: ['Epilogue', 'sans-serif']
      }
    }
  },

  plugins: []
};

module.exports = config;
