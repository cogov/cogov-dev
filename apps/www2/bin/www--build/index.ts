import { clone } from '@ctx-core/object'
import { spawn_pipe_process } from '@ctx-core/child_process'
await main()
export async function main() {
	process.chdir('../..')
	await spawn_pipe_process('rm', ['-rf', './dist'])
	await spawn_pipe_process('astro', ['build'], {
		env: clone(process.env, { NODE_ENV: 'production' }),
	})
	process.exit(0)
}
