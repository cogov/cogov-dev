require = require('esm')(module)
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import commonjs from '@rollup/plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
const { clone } = require('@ctx-core/object')
const { reject } = require('@ctx-core/array')
const { _preprocess__sass } = require('@ctx-core/sass/svelte')
const { _preprocess } = require('@ctx-core/svelte/preprocess')
import config from 'sapper/config/rollup'
import pkg from './package.json'
const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD
const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) || onwarn(warning)
const replace_base = {
	'process.env.NODE_ENV': JSON.stringify(mode),
}
const preprocess__sass = _preprocess__sass()
const preprocess = _preprocess([
	preprocess__sass,
])
export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace__({
				'process.browser': true,
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true,
				preprocess,
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			globals(),
			builtins(),
			commonjs(),
			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				babelHelpers: 'runtime',
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),
			!dev && terser({
				module: true
			})
		],
		preserveEntrySignatures: false,
		onwarn,
	},
	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace__({
				'process.browser': false,
			}),
			svelte({
				generate: 'ssr',
				dev,
				preprocess,
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs()
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),
		preserveEntrySignatures: 'strict',
		onwarn,
	},
	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace__({
				'process.browser': true,
			}),
			commonjs(),
			!dev && terser()
		],
		preserveEntrySignatures: false,
		onwarn,
	}
}
function replace__(params) {
	return replace(clone(replace_base, params))
}
