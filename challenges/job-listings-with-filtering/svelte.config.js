import adapter from '@sveltejs/adapter-static';
import path from 'path';
import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: adapter(),
    paths:{
      assets:'/frontendmentor.io/challenges/job-listings-with-filtering/build',
      base:'/frontendmentor.io/challenges/job-listings-with-filtering/build'
    },
    target: '#svelte',
    vite: {
      resolve: {
        alias: {
          $components: path.resolve('./src/components'),
        },
      },
    },
  },
};

export default config;
