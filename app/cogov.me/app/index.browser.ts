import { nav__div__hyop } from '@cogov/ui--browser'
import { relement__use } from 'relementjs'
import { browser__relement, single_hyop } from 'relementjs/browser'
relement__use(browser__relement)
window.addEventListener('load', ()=>{
	queueMicrotask(()=>{
		single_hyop(document, {
			nav__div__hyop,
		})
	})
})
