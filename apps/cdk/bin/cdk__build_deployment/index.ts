#!/usr/bin/env tsx
import { spawn_pipe_process } from '@ctx-core/child_process'
import { dirname, join, resolve } from 'path'
import 'source-map-support/register'
import { cdk_ctx_, www_cdk__stack__build } from '../../src'
const ctx = cdk_ctx_()
if (process.argv[1] === new URL(import.meta.url).pathname) {
	cdk__build_deployment()
		.then(()=>{
			console.info('cdk__build_deployment: SUCCESS!')
			process.exit(0)
		})
		.catch(err=>{
			console.error(err)
			process.exit(1)
		})
}
async function cdk__build_deployment() {
	const cwd =
		resolve(
			join(
				dirname(new URL(import.meta.url).pathname),
				'../..'))
	await spawn_pipe_process('rm', ['-rf', './dist'], {
		cwd
	})
	await spawn_pipe_process('mkdir', ['-p', './dist'], {
		cwd
	})
	await spawn_pipe_process('cp', ['-R', '../www/dist/*', 'dist'], {
		cwd
	})
	await www_cdk__stack__build(ctx)
}
