import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base:
				process.env.NODE_ENV === 'development'
					? ''
					: '/frontendmentor.io/challenges/interactive-rating-component/build'
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
