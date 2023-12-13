import { css__replace__plugin_ } from '@cogov/css'
import { is_entry_file_ } from '@ctx-core/nodejs'
import { browser__build, type relysjs__build_config_T, server__build } from 'relysjs'
import { config__init } from './app/index.js'
export async function build(config?:relysjs__build_config_T) {
	config__init()
	const css__replace__plugin = css__replace__plugin_()
	await browser__build(config)
	await server__build({
		...config ?? {},
		external:['/assets/*', 'relementjs'],
		plugins: [css__replace__plugin],
	})
}
if (is_entry_file_(import.meta.url, process.argv[1])) {
	await build({ rebuildjs: { watch: false }, relysjs: { app__start: false }})
}
