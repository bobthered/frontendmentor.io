import adapter from '@sveltejs/adapter-static';
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
      assets:'/frontendmentor.io/challenges/sunnyside-agency-landing-page/build',
      base:'/frontendmentor.io/challenges/sunnyside-agency-landing-page/build',
    },
    target: '#svelte',
    vite: {
      resolve: {
        alias: {
          $components: './src/components',
        },
      },
    },
  },
};

export default config;
