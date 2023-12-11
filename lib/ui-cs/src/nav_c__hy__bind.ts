/// <reference lib="dom" />
export function nav_c__hy__bind(nav_c:HTMLDivElement) {
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
