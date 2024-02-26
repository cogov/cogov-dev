import './site__footer.css.js'
import { class_ } from 'ctx-core/html'
import { raw_, type relement_env_T } from 'relementjs'
import { a_, div_, footer_, img_, p_ } from 'relementjs/html'
import { fa_osi_ } from '../icon/index.js'
import cogov__facebook_png from '../public/assets/images/cogov__facebook.png'
import cogov__github_png from '../public/assets/images/cogov__github.png'
import cogov__linkedin_png from '../public/assets/images/cogov__linkedin.png'
import cogov__messengericon_png from '../public/assets/images/cogov__messengericon.png'
import cogov__twitter_png from '../public/assets/images/cogov__twitter.png'
export function site__footer_<env_T extends relement_env_T>() {
	return (
		footer_<env_T>({ class: 'site__footer' },
			div_({ class: 'footer__socials' },
				[
					['https://www.facebook.com/messages/t/cogov.tech', cogov__messengericon_png, 'Messenger'],
					['https://www.facebook.com/cogov.tech/', cogov__facebook_png, 'Facebook'],
					['https://twitter.com/rayzer42', cogov__twitter_png, 'Twitter'],
					['https://www.linkedin.com/in/rayzer42/', cogov__linkedin_png, 'Linkedin'],
					['https://github.com/cogov', cogov__github_png, 'Github'],
				].map(([href, src, title])=>
					a_({
							href,
							target: '_blank',
							class: 'removelink footer__social',
							alt: title
						},
						src && img_({ class: 'footer__social__icon', src, alt: title }))),
				a_({
					href: '/site',
					class: 'removelink footer__social',
					alt: 'About this Site'
				}, [
					fa_osi_({
						class: 'removelink footer__social__icon',
					})
				]),
			),
			p_({ class: 'footer__copyright' },
				raw_('Copyright &copy;2019 CoGov.Tech, All Rights Reserved.')))
	)
}
