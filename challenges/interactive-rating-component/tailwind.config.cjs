const plugin = require('tailwindcss/plugin');

const backfaceVisibility = plugin(function ({ matchUtilities }) {
	matchUtilities({
		'backface-visibility': (value) => ({
			'backface-visibility': value
		})
	});
});
const perspective = plugin(function ({ matchUtilities }) {
	matchUtilities({
		perspective: (value) => ({
			perspective: value,
			'transform-style': 'preserve-3d'
		}),
		'rotate-y': (value) => ({
			transform: `rotateY(${value})`
		})
	});
});

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/sveltewind/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [backfaceVisibility, perspective]
};

module.exports = config;
