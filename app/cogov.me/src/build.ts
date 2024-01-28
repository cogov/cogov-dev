import { css__replace__plugin_ } from '@cogov/css'
import { is_entry_file_ } from 'ctx-core/fs'
import { esmcss_esbuild_plugin_ } from 'esmcss'
import { relysjs_browser__build, type relysjs__build_config_T, relysjs_server__build } from 'relysjs/server'
import { config__init } from './app/index.js'
export async function build(config?:relysjs__build_config_T) {
	config__init()
	await relysjs_server__build({
		...config ?? {},
		target: 'es2022',
		external: ['/assets/*', 'relementjs', 'elysia-compression'],
		// logLevel: 'verbose',
		loader: {
			'.gif': 'file',
			'.jpeg': 'file',
			'.jpg': 'file',
			'.mp4': 'file',
			'.png': 'file',
			'.svg': 'file',
		},
		plugins: [css__replace__plugin_(), esmcss_esbuild_plugin_()],
	})
	await relysjs_browser__build(config)
}
if (is_entry_file_(import.meta.url, process.argv[1])) {
	build({
		rebuildjs: { watch: false },
		relysjs: { app__start: false }
	}).then(()=>process.exit(0))
		.catch(()=>process.exit(1))
}
