import { id__dom__handler_, has_dom } from '@ctx-core/dom'
export const nav_c__onbind = id__dom__handler_(
	'nav_c__onbind',
	(nav_c:HTMLElement)=>{
		if (has_dom) return
		const nav__open_c = nav_c.querySelector('.nav__open_c')
		for (const nav__close_el of Array.from(nav_c.querySelectorAll('.nav .nav__close'))) {
			nav__close_el.addEventListener('click', close)
		}
		for (const nav__toggle_el of Array.from(nav_c.querySelectorAll('.nav .nav__toggle'))) {
			nav__toggle_el.addEventListener('click', toggle)
		}
		function close(e:MouseEvent) {
			e.preventDefault()
			nav__open_c.classList.remove('visible')
		}
		function toggle(e:MouseEvent) {
			e.preventDefault()
		  nav__open_c.classList.toggle('visible')
		}
	}
)
