import { deploy__environment__new } from '@cogov/deploy'
import {
	acme__email__set,
	app__direnv_allow,
	app_name_,
	app_name__set,
	app_path_,
	bun__install,
	bun__version__set,
	direnv__install,
	docker__install,
	dotenv__set,
	dotenv__upload,
	github__repo__refresh,
	github__repo__set,
	inetutils__install,
	lsof__install,
	pacman__rm_lck,
	ssh_host__set,
	ssh_key__generate,
	ssh_keygen__comment__set,
	ssh_url_,
	ssh_user__set,
	sshd_config__upload,
	tig__install,
	traefik_yml_,
	vim__install,
	wget__install,
	which__install,
	yay__install,
	yay__update
} from '@ctx-core/arch-vps'
import { file_exists__waitfor } from '@ctx-core/fs'
import { tempfile_path_ } from '@ctx-core/tempfile'
import { run } from 'ctx-core/function'
import { be_, ctx_ } from 'ctx-core/object'
import { unlink, writeFile } from 'fs/promises'
import { $, ssh } from 'zx'
async function main() {
	const ctx = ctx_()
	ssh_host__set(ctx, 'ssh.cogov.me')
	ssh_user__set(ctx, 'admin')
	app_name__set(ctx, 'cogov-dev')
	ssh_keygen__comment__set(ctx, 'brian.takita@gmail.com')
	app_name__set(ctx, 'cogov-dev')
	github__repo__set(ctx, `cogov/${app_name_(ctx)}`)
	bun__version__set(ctx, 'bun-v1.0.14')
	acme__email__set(ctx, 'brian.takita@gmail.com')
	dotenv__set(ctx, {
		...deploy__environment__new(ctx),
		NODE_ENV: 'development'
	})
	const _main = _main_()
	await _main(ctx)
	function _main_() {
		const app__install = app__install_()
		const traefik_yml__upload = traefik_yml__upload_()
		return be_(()=>run(async ()=>{
			console.log('_main')
			await ssh_key__generate(ctx)
			await pacman__rm_lck(ctx)
			await yay__install(ctx)
			await yay__update(ctx)
			await lsof__install(ctx)
			await tig__install(ctx)
			await vim__install(ctx)
			await wget__install(ctx)
			await inetutils__install(ctx)
			await which__install(ctx)
			await sshd_config__upload(ctx)
			await docker__install(ctx)
			await bun__install(ctx)
			await app__install(ctx)
			await traefik_yml__upload(ctx)
		}))
	}
	function app__install_() {
		return be_(()=>run(async ()=>{
			console.log('app__install')
			await direnv__install(ctx)
			await github__repo__refresh(ctx)
			await dotenv__upload(ctx)
			await app__direnv_allow(ctx)
		}))
	}
	function traefik_yml__upload_() {
		const fs_etc_traefik__mkdir = be_(ctx=>run(async ()=>{
			console.log('fs_etc_traefik__mkdir')
			await ssh(ssh_url_(ctx))`mkdir -p ${app_path_(ctx)}/fs/etc/traefik`
		}))
		return be_(ctx=>run(async ()=>{
			console.log('traefik_yml__upload')
			await fs_etc_traefik__mkdir(ctx)
			const tempfile_path = await tempfile_path_()
			await writeFile(tempfile_path, traefik_yml_(ctx))
			await file_exists__waitfor(tempfile_path)
			try {
				await $`scp ${tempfile_path} ${ssh_url_(ctx)}:${app_path_(ctx)}/fs/etc/traefik/traefik.yml`
			} finally {
				await unlink(tempfile_path)
			}
		}))
	}
}
main()
	.then(()=>process.exit(0))
	.catch(err=>{
		console.error(err)
		process.exit(1)
	})
