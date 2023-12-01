import { type Node_T, raw_, type relement_env_T } from 'relementjs'
import { a_, div_, img_, p_, section_ } from 'relementjs/html'
import './footer.css'
export function footer_c_<env_T extends relement_env_T>() {
	return (
		section_({ class: 'footer_c' },
			div_({ class: 'footer__socials' },
				[
					['https://www.facebook.com/messages/t/cogov.tech', '/assets/images/cogov__messengericon.png', 'Messenger'],
					['https://www.facebook.com/cogov.tech/', '/assets/images/cogov__facebook.png', 'Facebook'],
					['https://twitter.com/rayzer42', '/assets/images/cogov__twitter.png', 'Twitter'],
					['https://www.linkedin.com/in/rayzer42/', '/assets/images/cogov__linkedin.png', 'Linkedin'],
					['https://github.com/cogov', '/assets/images/cogov__github.png', 'Github'],
					['https://briantakita.me', null, 'Site developed by Brian Takita'],
				].map(([href, src, title])=>
					a_({
							href,
							target: '_blank',
							class: 'removelink footer__social'
						},
						src && img_({ class: 'footer__social__icon', src, alt: ''}),
						p_({ class: 'footer__social__text' },
							title))),
				),
			p_({ class: 'footer__copyright' },
				raw_('Copyright &copy;2019 CoGov.Tech, All Rights Reserved.')))
	) as Node_T<env_T, HTMLElementTagNameMap['section']>
}
