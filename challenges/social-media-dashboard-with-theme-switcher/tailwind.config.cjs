module.exports = {
  darkMode: 'class',
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        green: 'hsl(163, 72%, 41%)',
        red: 'hsl(356, 69%, 56%)',
        facebook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        instagram: {
          1: 'hsl(37, 97%, 70%)',
          2: 'hsl(329, 70%, 58%)',
        },
        youtube: 'hsl(348, 97%, 39%)',
        dark: {
          'toggle': {
            1: 'hsl(210, 78%, 56%)',
            2: 'hsl(146, 68%, 55%)',
          },
          'bg': 'hsl(230, 17%, 14%)',
          'bg-pattern': 'hsl(232, 19%, 15%)',
          'card': 'hsl(228, 28%, 20%)',
          'card-hover': 'hsl(228, 28%, 25%)',
          'text': {
            1: 'hsl(228, 34%, 66%)',
            2: 'hsl(0, 0%, 100%)',
          },
        },
        light: {
          'toggle': 'hsl(230, 22%, 74%)',
          'bg': 'hsl(0, 0%, 100%)',
          'bg-pattern': 'hsl(225, 100%, 98%)',
          'card': 'hsl(227, 47%, 96%)',
          'card-hover': 'hsl(227, 47%, 90%)',
          'text': {
            1: 'hsl(228, 12%, 44%)',
            2: 'hsl(230, 17%, 14%)',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
