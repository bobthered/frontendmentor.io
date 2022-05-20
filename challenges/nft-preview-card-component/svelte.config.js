import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base:
        process.env.NODE_ENV !== 'production'
          ? ''
          : '/frontendmentor.io/challenges/nft-preview-card-component/build'
    },
    prerender: {
      default: true
    }
  },

  preprocess: [
    preprocess({
      postcss: true
    })
  ]
};

export default config;
