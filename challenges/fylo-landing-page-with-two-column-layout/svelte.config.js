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
      assets:'/frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout/build',
      base:'/frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout/build'
    },
    target: '#svelte',
    vite: {
      resolve: {
        alias: {
          $components: path.resolve('./src/components'),
          $css: path.resolve('./src/css'),
          $data: path.resolve('./src/data'),
          $sections: path.resolve('./src/sections'),
        },
      },
    },
  },
};

export default config;