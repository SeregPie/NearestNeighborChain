import {terser} from 'rollup-plugin-terser';
import buble from '@rollup/plugin-buble';

import {main} from './package.json';

let globals = {
	'@seregpie/bron-kerbosch': 'BronKerbosch',
};

export default {
	external: Object.keys(globals),
	input: 'src/index.js',
	plugins: [
		buble(),
		terser(),
	],
	output: {
		file: main,
		format: 'umd',
		name: 'NearestNeighborChain',
		globals,
	},
};
