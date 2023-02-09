#!/usr/bin/env tsx
import { spawn_pipe_process } from '@ctx-core/child_process'
import 'source-map-support/register'
import { cdk_ctx_, www_cdk__stack__build } from '../src'
const ctx = cdk_ctx_()
main().then(()=>process.exit(0)).catch(()=>process.exit(1))
export async function main() {
	await spawn_pipe_process('rm', ['-rf', './dist'])
	await spawn_pipe_process('mkdir', ['-p', './dist'])
	await spawn_pipe_process('cp', ['-R', '../www/dist/*', 'dist'])
	await www_cdk__stack__build(ctx)
}
