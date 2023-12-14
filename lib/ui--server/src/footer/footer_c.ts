import { type Node_T, raw_, type relement_env_T } from 'relementjs'
import { a_, div_, img_, p_, section_ } from 'relementjs/html'
import { asset_path_a_ } from 'relysjs'
import './footer.css.js'
const [
	cogov__messengericon_png,
	cogov__facebook_png,
	cogov__twitter_png,
	cogov__linkedin_png,
	cogov__github_png,
] = await asset_path_a_(
	import('../public/assets/images/cogov__messengericon.png'),
	import('../public/assets/images/cogov__facebook.png'),
	import('../public/assets/images/cogov__twitter.png'),
	import('../public/assets/images/cogov__linkedin.png'),
	import('../public/assets/images/cogov__github.png'),
)
export function footer_c_<env_T extends relement_env_T>() {
	return (
		section_({ class: 'footer_c' },
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
					href: 'https://briantakita.me',
					target: '_blank',
					class: 'removelink footer__social',
				}, 'Site developed by Brian Takita')
			),
			p_({ class: 'footer__copyright' },
				raw_('Copyright &copy;2019 CoGov.Tech, All Rights Reserved.')))
	) as Node_T<env_T, HTMLElementTagNameMap['section']>
}
