import { deploy__environment__new } from '@cogov/deploy'
import {
	app_name_,
	app_name__set,
	bashrc__upload,
	direnv__install,
	docker__install,
	dotenv__set,
	dotenv__upload,
	git__install,
	git_lfs__install,
	github__public_key__insert,
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
	vim__install,
	wget__install,
	which__install,
	work__mkdir,
	yay__install,
	yay__update
} from '@ctx-core/arch-vps'
import { run } from 'ctx-core/function'
import { be_, ctx_ } from 'ctx-core/object'
import { ssh } from 'zx'
async function main() {
	const ctx = ctx_()
	ssh_host__set(ctx, 'ssh.cogov.me')
	ssh_user__set(ctx, 'admin')
	app_name__set(ctx, 'cogov-dev')
	ssh_keygen__comment__set(ctx, 'brian.takita@gmail.com')
	const github_repo = `cogov/${app_name_(ctx)}`
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
			await app__install(ctx)
		}))
	}
	function app__install_() {
		return be_(()=>run(async ()=>{
			console.log('app__install')
			await bashrc__upload(ctx)
			await work__mkdir(ctx)
			await git__install(ctx)
			await git_lfs__install(ctx)
			await ssh_key__generate(ctx)
			await github__public_key__insert(ctx)
			await direnv__install(ctx)
			app_name__set(ctx, 'cogov-dev')
			// language=sh
			await ssh(ssh_url_(ctx))`
				cd work
				if [ ! -d ${app_name_(ctx)} ]; then
					git clone git@github.com:${github_repo}.git
				fi
				cd ${app_name_(ctx)}
				git fetch
				git rebase
				git submodule init
				git submodule update
				git lfs install
				git lfs fetch
				git lfs checkout
			`
			await dotenv__upload(ctx)
			// language=sh
			await ssh(ssh_url_(ctx))`
				cd work/${app_name_(ctx)}
				direnv allow .
				eval "$(direnv export bash)"
				curl -fsSl https://bun.sh/install | bash -s "bun-v1.0.14"
			`
		}))
	}
}
main()
	.then(()=>process.exit(0))
	.catch(err=>{
		console.error(err)
		process.exit(1)
	})
