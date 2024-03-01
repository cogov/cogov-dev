import './nav.css.js'
import { class_ } from 'ctx-core/html'
import { type relement_env_T } from 'relementjs'
import { a_, div_, img_, p_ } from 'relementjs/html'
import cogov__logo__blue_webp from '../public/assets/images/cogov__logo--blue.webp'
import cogov__menu_webp from '../public/assets/images/cogov__menu.webp'
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
		div_<env_T>({
			class: class_(
				'nav_c',
				'h-0'),
		}, [
			div_({
				class: class_(
					'nav',
					'fixed',
					'top-0',
					'left-0',
					'z-50',
					'flex',
					'w-full',
					'h-[72px]',
					'lg:h-[108px]',
					'py-0',
					'px-8',
					'items-center',
					'justify-start',
					'bg-white',
					'border-b',
					'overflow-hidden'
				)
			}, [
				a_({
					href: '/',
					'aria-current': segment === undefined ? 'page' : undefined
				}, [
					div_({
						class: class_(
							'nav__logo__container',
							'flex',
							'items-center',
							'h-12')
					}, [
						img_({
							class: class_(
								'nav__logo__image',
								'h-full'),
							src: cogov__logo__blue_webp,
							alt: ''
						}),
						p_({
							class: class_(
								'nav__logo__text',
								'inline-block',
								'mt-px',
								'ml-3',
								'text-base',
								'font-medium')
						}, 'CoGov')
					])
				]),
				div_({
					class: class_(
						'nav__items',
						'hidden',
						'lg:flex',
						'flex-grow',
						'items-center',
						'justify-end',
						'port:justify-between',
						'port:pl-4',
						'space-x-8',
						'port:space-x-0'),
				}, [
					nav__item_aa.map(nav__item_a=>[
						div_({
							class: class_(
								'nav__item',
								'flex-grow-0',
								'mr-1',
								'port:mr-0',
								'pt-1',
								'text-xl',
								'font-bold',
								'text-gray-800',
								'hover:text-primary',
								'align-middle',
								'cursor-pointer',
								'transition-all')
						}, [
							a_({
								href: nav__item_a[0],
								'aria-current': segment === nav__item_a[1] ? 'page' : undefined
							}, nav__item_a[2])
						])
					]),
					outbound_links_()
				]),
				div_({
					class: class_(
						'nav__icon',
						'absolute',
						'top-0',
						'right-4',
						'z-50',
						'flex',
						'lg:hidden',
						'items-center',
						'justify-center',
						'h-[72px]',
						'lg:h-[108px]'
					)
				}, [
					a_({
						href: '.',
						class: 'nav__toggle',
						title: 'Toggle Navigation',
						/** @see {import('@cogov/ui--browser--cogov/nav').nav__toggle__hyop} */
						hyop: 'nav__toggle__hyop'
					}, [
						MenuHandle()
					])
				])
			]),
			nav__open_c_()
		])
	)
	function MenuHandle() {
		return (
			div_({ class: 'MenuHandle' }, [
				img_({
					class: class_(
						'mobile__nav',
						'block',
						'lg:hidden',
						'h-8',
						'port:ml-8',
						'cursor-pointer'),
					src: cogov__menu_webp
				})
			])
		)
	}
	function nav__open_c_() {
		return (
			div_({
				class: class_(
					'nav__open_c',
					'hidden',
					'fixed',
					'top-[72px]',
					'left-0',
					'z-50',
					'h-[calc(100dvh-72px)]',
					'w-screen',
					'bg-white'),
				/** @see {import('@cogov/ui--browser--cogov/nav').nav__open_c__hyop} */
				hyop: 'nav__open_c__hyop'
			}, [
				div_({ class: 'nav__open__body' }, [
					nav__open__item_aa.map(nav__open__item_a=>
						a_({
							href: nav__open__item_a[0],
							class: 'nav__open__body_item removelink'
						}, nav__open__item_a[1])),
					outbound_links_()
				])
			])
		)
	}
	function outbound_links_() {
		const div_class = class_(
			'py-8',
			'px-4',
			'text-gray-800',
			'text-xl',
			'font-bold',
			'cursor-pointer',
			'transition-all',
			'hover:scale-105')
		return [
			a_({
				href: 'https://cogov.tools',
				target: 'blank',
				rel: 'noopener noreferrer',
			}, [
				div_({ class: div_class }, 'cogov.tools')
			]),
			a_({
				href: 'https://cogov.typeform.com/to/kMtTYt',
				target: 'blank',
				rel: 'noopener noreferrer',
				class: 'whitepaper'
			}, [
				div_({ class: div_class }, 'whitepaper')
			])
		]
	}
}
type nav__item_a_T = [string, string, string]
type nav__open__item_a_T = [string, string]
