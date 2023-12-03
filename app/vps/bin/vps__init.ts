import { deploy__environment__new } from '@cogov/deploy'
import {
	app__direnv_allow,
	app_name_,
	app_name__set,
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
	ssh_user__set,
	sshd_config__upload,
	tig__install,
	vim__install,
	wget__install,
	which__install,
	yay__install,
	yay__update
} from '@ctx-core/arch-vps'
import { run } from 'ctx-core/function'
import { be_, ctx_ } from 'ctx-core/object'
async function main() {
	const ctx = ctx_()
	ssh_host__set(ctx, 'ssh.cogov.me')
	ssh_user__set(ctx, 'admin')
	app_name__set(ctx, 'cogov-dev')
	ssh_keygen__comment__set(ctx, 'brian.takita@gmail.com')
	app_name__set(ctx, 'cogov-dev')
	github__repo__set(ctx, `cogov/${app_name_(ctx)}`)
	bun__version__set(ctx, 'bun-v1.0.14')
	dotenv__set(ctx, {
		...deploy__environment__new(ctx),
		NODE_ENV: 'development'
	})
	const _main = _main_()
	await _main(ctx)
	function _main_() {
		const app__install = app__install_()
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
}
main()
	.then(()=>process.exit(0))
	.catch(err=>{
		console.error(err)
		process.exit(1)
	})
