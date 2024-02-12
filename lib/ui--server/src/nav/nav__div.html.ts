import './nav.css.js'
import { type Node_T, type relement_env_T } from 'relementjs'
import { a_, div_, img_, p_ } from 'relementjs/html'
import { asset_path_a_ } from 'relysjs'
const [
	cogov__logo__blue_png,
	cogov__menu_png,
] = await asset_path_a_(
	import('../public/assets/images/cogov__logo--blue.png'),
	import('../public/assets/images/cogov__menu.png'),
)
const nav__item_aa:nav__item_a_T[] = [
	['/protocol.love', 'protocol-love', 'Protocol.Love'],
	['/specs', 'specs', 'Tech Specs'],
	['/ecosystem', 'ecosystem', 'Ecosystem'],
	['/services', 'services', 'Services'],
	['/team/raymond-d-powell', 'team/raymond-d-powell', 'Founder'],
	['/declaration', 'declaration', 'Declaration'],
	// ['/vision', 'vision', 'Vision'],
	['/connect', 'connect', 'Connect'],
]
const nav__open__item_aa:nav__open__item_a_T[] = [
	['/', 'Home'],
	['/vision', 'Vision'],
	['/protocol.love', 'Protocol'],
	['/services', 'Services'],
	['/team/raymond-d-powell', 'Founder'],
	['/holochain', 'Holochain'],
	['/declaration', 'Declaration'],
	['/connect', 'Connect'],
]
export function nav__div_<env_T extends relement_env_T>({ segment }:{ segment?:string } = {}) {
	return (
		div_<env_T>({ class: 'nav_c', hyop: 'nav__div__hyop' },
			div_({ class: 'nav' },
				a_({
						href: '/',
						'aria-current': segment === undefined ? 'page' : undefined
					},
					div_({ class: 'nav__logo__container' },
						img_({ class: 'nav__logo__image', src: cogov__logo__blue_png, alt: '' }),
						p_({ class: 'nav__logo__text' },
							'CoGov'))),
				div_({ class: 'nav__items' },
					nav__item_aa.map(nav__item_a=>[
						div_({ class: 'nav__item' },
							a_({
								href: nav__item_a[0],
								'aria-current': segment === nav__item_a[1] ? 'page' : undefined
							}, nav__item_a[2]))
					]),
					a_({
							href: 'https://cogov.typeform.com/to/kMtTYt',
							target: 'blank',
							class: 'whitepaper'
						},
						div_({ class: 'nav__button' },
							'Whitepaper'))),
				div_({ class: 'nav__icon' },
					a_({ href: '.', class: 'nav__toggle' },
						MenuHandle()))),
			nav__open_c_())
	) as Node_T<env_T, HTMLElementTagNameMap['div']>
	function MenuHandle() {
		return (
			div_({ class: 'MenuHandle' },
				img_({ class: 'mobile__nav', src: cogov__menu_png }))
		)
	}
	function nav__open_c_() {
		return (
			div_({ class: 'nav__open_c' },
				div_({ class: 'nav__open__body' },
					nav__open__item_aa.map(nav__open__item_a=>
						a_({ href: nav__open__item_a[0], class: 'nav__open__body_item removelink' },
							nav__open__item_a[1]))))
		)
	}
}
type nav__item_a_T = [string, string, string]
type nav__open__item_a_T = [string, string]
