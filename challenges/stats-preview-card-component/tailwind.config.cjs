module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			primary: {
				500: 'hsl(277, 64%, 61%)',
				800: 'hsl(244,38%,16%)',
				900: 'hsl(233, 47%, 7%)'
			},
			white: '#ffffff'
		},
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
			'lexend-deca': ['Lexend Deca', 'sans-serif']
		},
		extend: {
			fontSize: {
				base: '.9375rem',
				'3xl': '1.75rem'
			},
			height: {
				112: '28rem'
			},
			spacing: {
				22: '5.5rem'
			},
			width: {
				277: '69.25rem'
			}
		}
	},
	plugins: []
};
