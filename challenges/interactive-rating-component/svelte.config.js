import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: '/frontendmentor.io/challenges/interactive-rating-component/build'
		},
		prerender: {
			default: true
		},
		vite: {
			optimizeDeps: {
				include: ['hashlru']
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
