module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: {
		enabled: true,
		content: ['./public/index.html'],
	},
	theme: {
		fontFamily: {
			sans: ['Rubik'],
			serif: ['Vollkorn'],
		},
		extend: {
			colors: {
				pink: '#E94560',
				blackish: '#2A292D',
			},
		},
	},
	variants: {},
	plugins: [],
};
