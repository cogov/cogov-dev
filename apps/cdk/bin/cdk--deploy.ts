#!/usr/bin/env tsx
import { spawn_pipe_process } from '@ctx-core/child_process'
import 'source-map-support/register'
main().then(()=>process.exit(0)).catch(()=>process.exit(1))
export async function main() {
	await spawn_pipe_process('pwd', [])
	await spawn_pipe_process('rm', ['-rf', './cdk.out'])
	await spawn_pipe_process('cdk', ['synth'])
	await spawn_pipe_process('cdk', ['deploy'])
	await spawn_pipe_process('pnpm', ['run', 'cogov--invalidate'])
}
