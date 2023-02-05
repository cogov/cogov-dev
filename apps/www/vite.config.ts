import common_ from '@rollup/plugin-commonjs'
import esbuild_ from 'rollup-plugin-esbuild'
import json_ from '@rollup/plugin-json'
import node_resolve_ from '@rollup/plugin-node-resolve'
import replace_plugin_ from '@rollup/plugin-replace'
import { copyFileSync, renameSync } from 'fs'
import { join } from 'path'
import { rollup } from 'rollup'
import solid from 'solid-start/vite'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
export default defineConfig({
	plugins: [aws_(), solid({
		islands: true,
	})],
})
function aws_({ edge }:{ edge?:boolean } = {}) {
	return {
		name: 'aws',
		start() {},
		async build(config, builder) {
			const dirname = fileURLToPath(new URL('.', import.meta.url))
			// SSR Edge Function
			if (!config.solidOptions.ssr) {
				await builder.spaClient(join(dirname, 'dist', 'client'))
				await builder.server(join(dirname, '.solid', 'server'))
			} else if (config.solidOptions.islands) {
				await builder.islandsClient(join(dirname, 'dist', 'client'))
				await builder.server(join(dirname, '.solid', 'server'))
			} else {
				await builder.client(join(dirname, 'dist', 'client'))
				await builder.server(join(dirname, '.solid', 'server'))
			}
			copyFileSync(
				join(dirname, edge ? 'entry-edge.mjs' : 'entry.ts'),
				join(config.root, '.solid', 'server', 'index.ts'))
			const bundle = await rollup({
				input: join(dirname, '.solid', 'server', 'index.ts'),
				plugins: [
					esbuild_(),
					json_(),
					node_resolve_({
						preferBuiltins: true,
						exportConditions: ['node', 'solid']
					}),
					common_({ strictRequires: true, ...config.build.commonjsOptions }),
					replace_plugin_({
						preventAssignment: true,
						values: {
							__dirname: JSON.stringify('./server'),
						}
					})
				] as Plugin[]
			})
			await bundle.write({
				format: 'esm',
				dir: join(dirname, 'dist', 'server'),
			})
			renameSync(
				join(dirname, 'dist', 'server', 'index.js'),
				join(dirname, 'dist', 'server', 'index.mjs'))
			// closes the bundle
			await bundle.close()
		}
	}
}
