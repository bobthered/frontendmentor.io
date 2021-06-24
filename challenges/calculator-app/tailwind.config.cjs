module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation:{
        'key-focus': 'key-focus 50ms linear'
      },
      colors: {
        skin: {
          bg:'var(--color-bg)',
          'toggle-bg':'var(--color-toggle-bg)',
          'screen-bg':'var(--color-screen-bg)',
          'key-bg':'var(--color-key-bg)',
          'key-shadow':'var(--color-key-shadow)',
          'key-secondary-bg':'var(--color-key-secondary-bg)',
          'key-secondary-shadow':'var(--color-key-secondary-shadow)',
          'equal-bg':'var(--color-equal-bg)',
          'equal-shadow':'var(--color-equal-shadow)',
          'text-primary':'var(--color-text-primary)',
          'text-keys':'var(--color-text-keys)',
          'text-keys-secondary' :'var(--color-text-keys-secondary)',
          'text-keys-tertiary' :'var(--color-text-keys-tertiary)',
        }
      },
      fontFamily: {
        sans: ['Spartan', 'sans-serif'],
      },
      keyframes:{
        'key-focus':{
          '0,100%': { transform: 'translateY(0px)'},
          '50%' : { transform: 'translateY(4px)'}
        }
      },
      zIndex: {
        'auto': 'auto',
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
