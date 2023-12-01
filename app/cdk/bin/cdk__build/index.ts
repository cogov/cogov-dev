#!/usr/bin/env tsx
import { spawn_pipe_process } from '@ctx-core/child_process'
import { dirname, join, resolve } from 'path'
import 'source-map-support/register'
if (process.argv[1] === new URL(import.meta.url).pathname) {
	cdk__build()
		.then(()=>{
			console.info('cdk__build: SUCCESS!')
			process.exit(0)
		})
		.catch(err=>{
			console.error(err)
			process.exit(1)
		})
}
async function cdk__build() {
	const cwd =
		resolve(
			join(
				dirname(
					new URL(import.meta.url).pathname),
				'../..'))
	await spawn_pipe_process('bun', ['-b', 'run', 'build_app'], {
		cwd
	})
	await spawn_pipe_process('bun', ['-b', 'run', 'build_deployment'], {
		cwd
	})
}
