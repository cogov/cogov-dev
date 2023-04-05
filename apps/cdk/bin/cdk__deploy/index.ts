#!/usr/bin/env tsx
import { spawn_pipe_process } from '@ctx-core/child_process'
import { import_meta_env_ } from '@ctx-core/env'
import { clone } from '@ctx-core/object'
import { dirname, join, resolve } from 'path'
import 'source-map-support/register'
if (process.argv[1] === new URL(import.meta.url).pathname) {
	cdk__deploy()
		.then(()=>{
			console.info('cdk__deploy: SUCCESS!')
			process.exit(0)
		})
		.catch(err=>{
			console.error(err)
			process.exit(1)
		})
}
export async function cdk__deploy() {
	const cwd =
		resolve(
			join(
				dirname(new URL(import.meta.url).pathname),
				'../..'))
	await spawn_pipe_process('pwd', [], {
		cwd
	})
	await spawn_pipe_process('rm', ['-rf', './cdk.out'], {
		cwd
	})
	await spawn_pipe_process('cdk', ['synth'], {
		cwd
	})
	await spawn_pipe_process('cdk', ['deploy'], {
		cwd
	})
	await spawn_pipe_process('pnpm', ['run', 'cogov__invalidate'], {
		cwd,
		env: clone(
			import_meta_env_(),
			{ DOMAIN: 'cogov.me' })
	})
}
