const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        brown: {
          300: 'hsl(28, 10%, 53%)',
          900: 'hsl(25, 47%, 15%)'
        },
        cream: 'hsl(27, 66%, 92%)',
        cyan: 'hsl(186, 34%, 60%)',
        orange: 'hsl(33, 100%, 98%)',
        red: 'hsl(10, 79%, 65%)'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif']
      }
    }
  },

  plugins: []
};

module.exports = config;
