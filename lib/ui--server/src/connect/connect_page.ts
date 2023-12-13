import { type Node_T, raw_ } from 'relementjs'
import { main_ } from 'relementjs/html'
import type { page_params_T } from '../_types.js'
import { footer_c_ } from '../footer/index.js'
import { layout_c_ } from '../layout/index.js'
import './connect_page.css'
export function connect_page_($p:page_params_T) {
	return (
		layout_c_($p,
			main_({ class: 'connect_page page' },
				header_(),
				footer_c_()))
	) as Node_T<'server', HTMLElementTagNameMap['main']>
	function header_() {
		// language=html
		return raw_(`
			<div class="connect_page__header page__header">
				<h3 class="connect_page__header__title">Let's do something special!</h3>
				<h2 class="connect_page__header__subtitle">
					Hello and thanks for reaching out! Feel free to reach out to us directly through Messenger
					or by filling out this form below.
					We look forward to hearing from you!
				</h2>
				<a href="https://www.facebook.com/messages/t/cogov.tech" target="blank" class="removelink">
					<button class="connect_page__header__button">MESSENGER</button>
				</a>
				<a href="https://chat.holochain.org/appsup/channels/dgsc" target="blank" class="removelink">
					<button class="connect_page__header__button">MATTERMOST</button>
				</a>
				<a href="https://cogov.typeform.com/to/kMtTYt" target="blank" class="removelink">
					<button class="connect_page__header__button">FORM</button>
				</a>
			</div>
		`)
	}
}
