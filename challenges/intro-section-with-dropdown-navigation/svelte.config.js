import adapter from '@sveltejs/adapter-static';
import path from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base:
        process.env.NODE_ENV !== 'production'
          ? ''
          : '/frontendmentor.io/challenges/intro-section-with-dropdown-navigation/build'
    },
    prerender: {
      default: true
    },
    vite: {
      resolve: {
        alias: {
          '@components': path.resolve('./src/components')
        }
      }
    }
  },

  preprocess: [
    preprocess({
      postcss: true
    })
  ]
};

export default config;
