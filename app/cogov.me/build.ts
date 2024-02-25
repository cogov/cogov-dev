import { css__replace__plugin_ } from '@cogov/css'
import { preprocess } from '@ctx-core/preprocess'
import { rebuild_tailwind_plugin_ } from '@rebuildjs/tailwindcss'
import cssnano from 'cssnano'
import { import_meta_env_ } from 'ctx-core/env'
import { is_entry_file_ } from 'ctx-core/fs'
import { type Plugin } from 'esbuild'
import { esmcss_esbuild_plugin_ } from 'esmcss'
import {
	type relysjs__build_config_T,
	relysjs__ready__wait,
	relysjs_browser__build,
	relysjs_server__build
} from 'relysjs/server'
import { config__init } from './app/index.js'
export async function build(config?:relysjs__build_config_T) {
	config__init()
	const preprocess_plugin = preprocess_plugin_()
	const rebuild_tailwind_plugin = rebuild_tailwind_plugin_({
		postcss_plugin_a1_: tailwindcss_plugin=>[
			tailwindcss_plugin as never,
			cssnano({ preset: 'default' })
		],
	})
	await relysjs_server__build({
		...config ?? {},
		target: 'es2022',
		external: ['/assets/*', 'relementjs', 'elysia-compression'],
		// logLevel: 'verbose',
		plugins: [css__replace__plugin_(), esmcss_esbuild_plugin_(), preprocess_plugin, rebuild_tailwind_plugin],
	})
	await relysjs_browser__build({
		...config ?? {},
		plugins: [css__replace__plugin_(), esmcss_esbuild_plugin_(), preprocess_plugin, rebuild_tailwind_plugin],
	})
	await relysjs__ready__wait()
}
if (is_entry_file_(import.meta.url, process.argv[1])) {
	build({
		rebuildjs: { watch: false },
		relysjs: { app__start: false }
	})
		.then(()=>process.exit(0))
		.catch(err=>{
			console.error(err)
			process.exit(1)
		})
}
function preprocess_plugin_():Plugin {
	return {
		name: 'hyop',
		setup(build) {
			if (import_meta_env_().NODE_ENV !== 'production') {
				build.onLoad({ filter: /(\/ctx-core\/?.*|\/hyop\/?.*)$/ }, async ({ path })=>{
					const source = await Bun.file(path).text()
					return {
						contents: preprocess(
							source,
							{ DEBUG: '1' },
							{ type: 'js' })
					}
				})
			}
		}
	}
}
