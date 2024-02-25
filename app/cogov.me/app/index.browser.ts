import { nav__div__hyop } from '@cogov/ui--browser--cogov/nav'
import { single_hyop } from 'relementjs/browser'
window.addEventListener('load', ()=>{
	queueMicrotask(()=>{
		single_hyop(document, {
			nav__div__hyop,
		})
	})
})
