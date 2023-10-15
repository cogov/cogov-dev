import { deploy__environment__new } from '@cogov/deploy'
import { file_exists_ } from '@ctx-core/fs'
import { run } from '@ctx-core/function'
import { be_, ctx_ } from '@ctx-core/object'
import { tempfile_ } from '@ctx-core/tempfile'
import { createWriteStream } from 'fs'
import { Writable } from 'stream'
import { $, ssh } from 'zx'
async function main() {
	const ctx = ctx_()
	const run_id = new Date().getTime()
	const ip = 'ssh.cogov.me'
	const user = 'admin'
	const nvm_version = 'v20'
	const admin_ssh = `${user}@${ip}`
	const app_name = 'cogov-dev'
	const github_repo = `cogov/${app_name}`
	const _main = be_(()=>run(async ()=>{
		await ssh_key__scp(ctx)
		await pacman__rm_lck(ctx)
		await yay__install(ctx)
		await yay__update(ctx)
		await lsof__install(ctx)
		await tig__install(ctx)
		await vim__install(ctx)
		await wget__install(ctx)
		await inetutils__install(ctx)
		await which__install(ctx)
		await sshd_config__scp(ctx)
		await docker__install(ctx)
		await app__install(ctx)
	}))
	const ssh_key__scp = be_(()=>run(async ()=>{
		// language=sh
		const id_ed25519 = 'id_ed25519'
		const local_path = `./tmp/.ssh/${id_ed25519}`
		await $`mkdir -p ./tmp/.ssh`
		if (
			!await file_exists_(local_path)
			|| !await file_exists_(`${local_path}.pub`)
		) {
			// language=sh
			await $`ssh-keygen -t ed25519 -C "brian.takita@gmail.com" -N '' -f ${local_path}`
		}
		// language=sh
		await ssh(admin_ssh)`
			mkdir -p ~/.ssh/.bak
			echo IdentityFile /home/${user}/.ssh/${id_ed25519} > ~/.ssh/config.new
			function finish() {
				rm -f ~/.ssh/config.new
			}
			trap finish EXIT
			if diff ~/.ssh/config ~/.ssh/config.new; then
				rm ~/.ssh/config.new
			else
				cp -n ~/.ssh/config ~/.ssh/.bak/config.${run_id}
				mv ~/.ssh/config.new ~/.ssh/config
			fi
		`
		// language=sh
		await $`scp ${local_path} ${local_path}.pub ${admin_ssh}:~/.ssh`
	}))
	const pacman__rm_lck = be_(()=>run(async ()=>{
		// language=sh
		await ssh(admin_ssh)`rm -f /var/lib/pacman/db.lck`
	}))
	const yay__install = be_(()=>run(async ()=>{
		await base_devel__install(ctx)
		await work__mkdir(ctx)
		// language=sh
		await ssh(admin_ssh)`
			cd ~/work
			if [ ! -d yay ]; then
				git clone https://aur.archlinux.org/yay.git
			fi
			cd yay
			makepkg -si --noconfirm
		`
	}))
	const yay__update = be_(()=>run(async ()=>{
		await yay__install(ctx)
		// language=sh
		await ssh(admin_ssh)`yay --noconfirm`
	}))
	const lsof__install = be_(()=>run(async ()=>{
		// language=sh
		await ssh(admin_ssh)`sudo pacman -S lsof --noconfirm`
	}))
	const tig__install = be_(()=>run(async ()=>{
		// language=sh
		await ssh(admin_ssh)`yay -S tig --noconfirm`
	}))
	const vim__install = be_(()=>run(async ()=>{
		// language=sh
		await ssh(admin_ssh)`yay -S vim --noconfirm`
	}))
	const inetutils__install = be_(()=>run(async ()=>{
		// telnet
		// language=sh
		await ssh(admin_ssh)`yay -S inetutils --noconfirm`
	}))
	const which__install = be_(()=>run(async ()=>{
		// language=sh
		await ssh(admin_ssh)`sudo pacman -S which --noconfirm`
	}))
	const sshd_config__scp = be_(()=>run(async ()=>{
		// language=sh
		await $`scp ./fs/etc/ssh/sshd_config ${admin_ssh}:~/sshd_config`
		// language=sh
		await ssh(admin_ssh)`sudo mv ~/sshd_config /etc/ssh/sshd_config`
	}))
	const app__install = be_(()=>run(async ()=>{
		await bashrc__scp(ctx)
		await work__mkdir(ctx)
		await git__install(ctx)
		await git_lfs__install(ctx)
		await nvm__install(ctx)
		await ssh_key__scp(ctx)
		await github__add_public_key(ctx)
		await direnv__install(ctx)
		// language=sh
		await ssh(admin_ssh)`
			cd work
			if [ ! -d ${app_name} ]; then
				git clone git@github.com:${github_repo}.git
			fi
			cd ${app_name}
			git fetch
			git rebase
			git submodule init
			git submodule update
			git lfs install
			git lfs fetch
			git lfs checkout
		`
		await dotenv__scp()
		// language=sh
		await ssh(admin_ssh)`
			cd work/${app_name}
			direnv allow .
			eval "$(direnv export bash)"
			npm i -g pnpm
			pnpm i -g tsx
			pnpm i -r; pnpm prune; pnpm i -r
		`
		async function dotenv__scp() {
			const env = deploy__environment__new(ctx)
			env.NODE_ENV = 'development'
			const dotenv_path = await tempfile_()
			try {
				await new ReadableStream({
					start(controller) {
						let key: keyof typeof env
						for (key in env) {
							controller.enqueue(`${key}=${env[key]}\n`)
						}
						controller.close()
					}
				}).pipeTo(Writable.toWeb(createWriteStream(dotenv_path)))
				// language=sh
				await $`scp ${dotenv_path} ${admin_ssh}:~/work/${app_name}/.env`
			} finally {
				// language=sh
				await $`rm -f ${dotenv_path}`
			}
		}
	}))
	const base_devel__install = be_(()=>run(async ()=>{
		// language=sh
		await ssh(admin_ssh)`sudo pacman -S --needed git base-devel --noconfirm`
	}))
	const bashrc__scp = be_(()=>run(async ()=>{
		// language=sh
		await $`scp ./fs/home/admin/.bashrc ${admin_ssh}:~`
	}))
	const work__mkdir = be_(()=>run(async ()=>{
		// language=sh
		await ssh(admin_ssh)`mkdir -p ~/work`
	}))
	const git__install = be_(()=>run(async ()=>{
		// language=sh
		await ssh(admin_ssh)`sudo pacman -Syu --noconfirm git`
	}))
	const git_lfs__install = be_(()=>run(async ()=>{
		// language=sh
		await ssh(admin_ssh)`sudo pacman -Syu --noconfirm git-lfs`
	}))
	const nvm__install = be_(()=>run(async ()=>{
		// language=sh
		await ssh(admin_ssh)`
			$NVM_DIR && exit 0
			echo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh
			curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
			. $NVM_DIR/nvm.sh
#			echo ${nvm_version} > ~/.nvmrc
			nvm install
		`
	}))
	const github__add_public_key = be_(()=>run(async ()=>{
		await ssh_key__scp(ctx)
		// see https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints
		const github_public_key = 'AAAAC3NzaC1lZDI1NTE5AAAAIOMqqnkVzrm0SdG6UOoqKLsabgH5C9okWi0dh2l9GKJl'
		// language=sh
		await ssh(admin_ssh)`
			if ! ls ~/.ssh/known_hosts || grep -L ${github_public_key} ~/.ssh/known_hosts; then
				echo github.com ssh-ed25519 ${github_public_key} >> ~/.ssh/known_hosts
			fi
		`
	}))
	const direnv__install = be_(()=>run(async ()=>{
		// language=sh
		await ssh(admin_ssh)`
			sudo pacman -S direnv --noconfirm
		`
	}))
	const docker__install = be_(()=>run(async ()=>{
		// If Docker fails to start, a reboot may be needed
		// See https://stackoverflow.com/questions/72117335/docker-installation-issue-failed-to-mount-overlay-no-such-device-storage-driv
		// language=sh
		await ssh(admin_ssh)`
			sudo pacman -S docker docker-compose docker-buildx --noconfirm
			sudo groupadd -f docker
			sudo mkdir -p /etc/docker
			sudo groupadd docker
			sudo usermod -aG docker $USER
			newgrp docker
			sudo systemctl enable docker
			sudo systemctl start docker.service
		`
	}))
	const wget__install = be_(()=>run(async ()=>{
		// language=sh
		await ssh(admin_ssh)`sudo pacman -S wget --noconfirm`
	}))
	await _main(ctx)
}
main()
	.then(()=>process.exit(0))
	.catch(err=>{
		console.error(err)
		process.exit(1)
	})
