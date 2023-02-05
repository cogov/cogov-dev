import { clone } from '@ctx-core/object'
import { type ChildProcess, spawn, type SpawnOptions } from 'child_process'
import { resolve } from 'path'
await main()
export async function main() {
	process.chdir('../..')
	await exec('rm', ['-rf', './dist'])
	await exec('solid-start', ['build'], {
		env: clone(process.env, { NODE_ENV: 'production' }),
	})
  process.exit(0)
}
async function exec(
	command:string,
	args:ReadonlyArray<string>,
	argv__options:SpawnOptions = {}
) {
	const options = clone(<SpawnOptions>{
		cwd: resolve('.'),
		env: process.env,
		shell: true
	}, argv__options)
	return new Promise(ret=>{
		const proc = spawn(command, args, options).on('exit', code=>{
			if (code) process.exit(code)
			ret(code)
		}) as ChildProcess
		proc.stdout.pipe(process.stdout)
		proc.stderr.pipe(process.stderr)
	})
}
