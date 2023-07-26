import { spawn_pipe_process } from '@ctx-core/child_process'
import { import_meta_env_ } from '@ctx-core/env'
import { clone } from '@ctx-core/object'
import { line__transform_stream_ } from '@ctx-core/string'
import { tempfile_ } from '@ctx-core/tempfile'
import { spawn } from 'child_process'
import { analyzeMetafile, build, type BuildResult } from 'esbuild'
import { writeFile } from 'fs/promises'
import { resolve } from 'path'
import { Readable } from 'stream'
await main()
export async function main() {
	await spawn_pipe_process('rm', ['-rf', './dist'])
	await spawn_pipe_process('astro', ['build'])
	await path_a__build()
	await package_json__write()
	process.exit(0)
	async function path_a__build() {
		const payload_a:{
			path:string
			build_result:
				BuildResult<{
					metafile:true
					write:true
				}>
		}[] = []
		await (Readable.toWeb(
			spawn(
				'find',
				['./dist/server'],
				{
					cwd: resolve('.'),
					env: import_meta_env_(),
					stdio: ['pipe', 'pipe', process.stderr]
				}
			).stdout
		) as ReadableStream<Uint8Array>)
			.pipeThrough(new TextDecoderStream())
			.pipeThrough(line__transform_stream_())
			.pipeTo(new WritableStream({
				async write(path) {
					if (/\.mjs$/.test(path)) {
						const build_result = await file__build(path)
						payload_a.push({ path, build_result })
					}
				},
				async close() {
					for (const payload of payload_a) {
						console.info(payload.path)
						console.info(await analyzeMetafile(payload.build_result.metafile))
					}
				}
			}))
	}
}
async function file__build(entryPoint:string) {
	const outfile = await tempfile_()
	const build_result = await build({
		entryPoints: [entryPoint],
		outfile,
		format: 'esm',
		target: 'esnext',
		bundle: true,
		platform: 'node',
		treeShaking: true,
		tsconfig: './tsconfig.json',
		sourcemap: true,
		banner: {
			//language=js
			js: `
const require = (await import("node:module")).createRequire(import.meta.url);
const __filename = (await import("node:url")).fileURLToPath(import.meta.url);
const __dirname = (await import("node:path")).dirname(__filename);
			`.trim()
		},
		minify: true,
		metafile: true,
	}) as BuildResult<{
		metafile:true
		write:true
	}>
	await spawn_pipe_process('mv', [outfile, entryPoint])
	return build_result
}
async function package_json__write() {
	console.info('package_json__write')
	await writeFile('./dist/server/package.json', JSON.stringify({
		type: 'module',
		main: './index.js',
		module: './index.js',
		dependencies: {
			// 'debug': 'latest',
			// 'ms': 'latest',
			// 'string-width': 'latest'
		}
	}, null, 2))
	await spawn_pipe_process('npm', ['install', '--omit=dev'], {
		cwd: resolve('./dist/server')
	})
	await spawn_pipe_process('mkdir', ['data'], {
		cwd: resolve('./dist/server')
	})
}
