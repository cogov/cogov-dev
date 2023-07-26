import { id__dom__handler_ } from '@ctx-core/dom'
import { isServer } from 'solid-js/web'
export const Nav__onbind = id__dom__handler_(
	'Nav__onbind',
	(Nav:HTMLElement)=>{
		if (isServer) return
		const NavOpen = Nav.querySelector('.NavOpen')
		for (const nav__close_el of Array.from(Nav.querySelectorAll('.nav .nav__close'))) {
			nav__close_el.addEventListener('click', close)
		}
		for (const nav__toggle_el of Array.from(Nav.querySelectorAll('.nav .nav__toggle'))) {
			nav__toggle_el.addEventListener('click', toggle)
		}
		function close(e:MouseEvent) {
			e.preventDefault()
			NavOpen.classList.remove('visible')
		}
		function toggle(e:MouseEvent) {
			e.preventDefault()
		  NavOpen.classList.toggle('visible')
		}
	}
)
