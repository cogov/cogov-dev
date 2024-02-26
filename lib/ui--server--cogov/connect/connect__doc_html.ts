import './connect.css.js'
import { class_ } from 'ctx-core/html'
import { raw_ } from 'relementjs'
import { main_ } from 'relementjs/html'
import type { page_params_T } from '../_types.js'
import { main_class } from '../css/index.js'
import { site__footer_ } from '../footer/index.js'
import { layout__doc_html_ } from '../layout/index.js'
export function connect__doc_html_($p:page_params_T) {
	return (
		layout__doc_html_($p,
			main_({
				class: class_(
					'connect_page',
					'page',
					main_class)
			}, [
				header_(),
				site__footer_()
			]))
	)
	function header_() {
		// language=html
		return raw_(`
			<div class="connect_page__header page__header mb-24">
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
