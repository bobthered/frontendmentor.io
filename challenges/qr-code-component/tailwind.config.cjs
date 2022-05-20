// tailwind.config.cjs
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/sveltewind/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        blue: '#3685FE',
        gray: {
          light: 'hsl(212, 45%, 89%)',
          DEFAULT: 'hsl(220, 15%, 55%)',
          dark: 'hsl(218, 44%, 22%)'
        }
      }
    }
  },

  plugins: []
};

module.exports = config;
