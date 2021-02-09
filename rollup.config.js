import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel'
// Terser minifies the code
import { terser } from "rollup-plugin-terser";

// TODO: Understand the external bundling better
const external = ['ms', 'axios'];
const outputGlobals = {
	axios: 'axios'
};

export default [
	// browser-friendly UMD build
	{
		external,
		input: 'src/main.js',
		output: {
			name: 'SyncService',
			file: 'dist/index.js',
			format: 'umd'
		},
		globals: outputGlobals,
		plugins: [
			resolve(),
			commonjs({}),
			json(),
			babel({ babelHelpers: 'bundled', 'exclude': 'node_modules/**'}),
			// terser()
		]
	},
];
