import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';

// TODO: Understand the external bundling better
// const external = ['ms', 'axios'];
const outputGlobals = {
	axios: 'axios'
};

export default [
	// browser-friendly UMD build
	{
		input: 'src/main.js',
		output: {
			name: 'hello',
			file: 'dist/index.js',
			format: 'umd'
		},
		globals: outputGlobals,
		plugins: [
			resolve(),
			commonjs(),
			json()
		]
	},
];
