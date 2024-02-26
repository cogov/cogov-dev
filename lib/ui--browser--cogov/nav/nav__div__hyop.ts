/// <reference lib="dom" />
let nav__open_c:HTMLElement
export function nav__open_c__hyop(_nav__open_c:HTMLElement) {
	nav__open_c = _nav__open_c
}
export function nav__toggle__hyop(nav__toggle:HTMLElement) {
	nav__toggle.addEventListener('click', toggle)
	function toggle(e:MouseEvent) {
		e.preventDefault()
		nav__open_c.classList.toggle('hidden')
		nav__open_c.classList.toggle('block')
	}
}
