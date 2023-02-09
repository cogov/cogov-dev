import { clone } from '@ctx-core/object'
import { spawn_pipe_process } from '@ctx-core/child_process'
await main()
export async function main() {
	process.chdir('../..')
	await spawn_pipe_process('rm', ['-rf', './dist'])
	await spawn_pipe_process('astro', ['build'], {
		env: clone(process.env, { NODE_ENV: 'production' }),
	})
	await spawn_pipe_process('mkdir', ['./dist/public'])
	await spawn_pipe_process('sh', [
		'-c',
		`'ls | grep -v public | xargs mv -t public'`
	], {
		cwd: './dist'
	})
	await spawn_pipe_process('esbuild',
		['./src/entry.ts', '--bundle', '--format=esm', '--platform=node', '--outfile=./dist/index.mjs'])
	process.exit(0)
}
