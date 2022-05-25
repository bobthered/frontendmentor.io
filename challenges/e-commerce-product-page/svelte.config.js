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
          : '/frontendmentor.io/challenges/e-commerce-product-page/build'
    },
    prerender: {
      default: true
    },
    vite: {
      optimizeDeps: {
        include: [
          'lodash',
          'lodash.isequal',
          'lodash.clonedeep',
          'lodash.get',
          'lodash.merge',
          'svelte-carousel'
        ]
      },
      resolve: {
        alias: {
          '@components': path.resolve('./src/components'),
          '@stores': path.resolve('./src/stores')
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
