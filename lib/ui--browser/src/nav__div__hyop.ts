/// <reference lib="dom" />
export function nav__div__hyop(nav_c:HTMLDivElement) {
	const nav__open_c = nav_c.querySelector('.nav__open_c')
	for (const nav__toggle_el of Array.from(nav_c.querySelectorAll('.nav .nav__toggle'))) {
		nav__toggle_el.addEventListener('click', toggle)
	}
	function toggle(e:MouseEvent) {
		e.preventDefault()
		nav__open_c.classList.toggle('visible')
	}
}
