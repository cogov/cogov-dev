import './war_on_sense_making.css.js'
import { raw_ } from 'relementjs'
import { div_, main_ } from 'relementjs/html'
import type { page_params_T } from '../_types.js'
import { site__footer_ } from '../footer/index.js'
import { layout__doc_html_ } from '../layout/index.js'
export function war_on_sense_making__doc_html_($p:page_params_T) {
	return (
		layout__doc_html_($p,
			main_({ class: 'war-on-sense-making-page page' },
				header_(),
				content_(),
				site__footer_()))
	)
	function header_() {
		return div_({ class: 'war_on_sense_making_page__header' })
	}
	function content_() {
		// language=html
		return raw_(`
			<div class="war_on_sense_making_page__content">
				<p class="war_on_sense_making_page__content__title">The War on Sensemaking</p>
				<p class="war_on_sense_making_page__content__subtitle">
					Written by <a href="https://medium.com/@jordangreenhall">Jordan Hall</a>
				</p>
				<p class="war_on_sense_making_page__content__body">
					Originally published on
					<a
						target="_blank"
						href="https://medium.com/rally-point-perspectives/the-war-on-sensemaking-900086bca636"
					>Medium.com</a>
				</p>
			</div>
		`)
	}
}
