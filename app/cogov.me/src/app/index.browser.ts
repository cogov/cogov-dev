import { nav_c__hy__bind } from '@cogov/ui--browser'
import { relement__use } from 'relementjs'
import { browser__relement, hy__bind } from 'relementjs/browser'
relement__use(browser__relement)
window.addEventListener('load', ()=>{
	queueMicrotask(()=>{
		hy__bind(document, {
			nav_c: nav_c__hy__bind,
		})
	})
})
