import { type author_T, type site_T } from '@rappstack/domain--server/site'
import { app_marked__set } from '@rappstack/ui--server/md'
import { import_meta_env_ } from 'ctx-core/env'
import { class_ } from 'ctx-core/html'
import { url__join } from 'ctx-core/uri'
import { Marked } from 'marked'
import { gfmHeadingId } from 'marked-gfm-heading-id'
import { relement__use } from 'relementjs'
import { img_ } from 'relementjs/html'
import { server__relement } from 'relementjs/server'
import { app_ctx, cwd__set, port__set, src_path__set } from 'relysjs/server'
import cogov__logo__blue_webp from '../../public/assets/images/cogov__logo--blue.webp'
import cogov__ray__headshot_webp from '../../public/assets/images/cogov__ray--headshot.webp'
const website = 'https://cogov.me'
const title = 'CoGov'
export const raymond_powell = <author_T>{
	'@type': 'Person',
	'@id': url__join(website, '#Person'),
	name: 'Raymond Powell',
	url: website,
	image: url__join(website, cogov__ray__headshot_webp),
}
export const site:site_T = {
	website: website,
	author_a1: [raymond_powell],
	description: 'YouTubing since 2004',
	title,
	favicon: {
		type: 'image/svg+xml',
		href: cogov__logo__blue_webp
	},
	social_image_url: cogov__logo__blue_webp,
	font__meta_props_a1: [
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 1 },
		{
			href: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=JetBrains+Mono:wght@400;700&display=swap',
			rel: 'stylesheet'
		}
	],
	light_and_dark_mode: true,
	// google_site_verification: import_meta_env_().PUBLIC_GOOGLE_SITE_VERIFICATION,
	// gtag_id: 'G-E2YTV44HXX',
	logo_image__new: ($p?:{ class?:string })=>{
		return img_({
			src: cogov__logo__blue_webp,
			alt: 'CoGov',
			class: class_(
				'inline-block',
				'aspect-square',
				'rounded-full',
				$p?.class)
		})
	},
	social_a1: []
}
export function config__init() {
	const port = parseInt(import_meta_env_().COGOVME_PORT) || 4020
	port__set(app_ctx, port)
	cwd__set(app_ctx, process.cwd())
	src_path__set(app_ctx, process.cwd())
	marked__init()
	relement__use(server__relement)
}
function marked__init() {
	const marked = new Marked()
	marked.use(gfmHeadingId())
	app_marked__set(app_ctx, marked)
}
