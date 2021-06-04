module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        cta: {
          'DEFAULT': 'hsl(356, 100%, 66%)',
          'light': 'hsl(355, 100%, 74%)',
          'gradient-1': 'hsl(13, 100%, 72%)',
          'gradient-2': 'hsl(353, 100%, 62%)',
        },
        headings: 'hsl(208, 49%, 24%)',
        footer: {
          DEFAULT: 'hsl(240, 2%, 79%)',
          dark: 'hsl(240, 10%, 16%)',
        },
        body: {
          'DEFAULT': 'hsl(207, 13%, 34%)',
          'gradient-1': 'hsl(237, 17%, 21%)',
          'gradient-2': 'hsl(237, 23%, 32%)',
        },
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
