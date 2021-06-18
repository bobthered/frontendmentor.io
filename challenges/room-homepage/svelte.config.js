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
      assets:'/frontendmentor.io/challenges/room-homepage/build',
      base:'/frontendmentor.io/challenges/room-homepage/build'
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
