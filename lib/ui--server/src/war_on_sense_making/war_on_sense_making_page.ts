import { type Node_T, raw_ } from 'relementjs'
import { div_, main_ } from 'relementjs/html'
import type { page_params_T } from '../_types.js'
import { footer_c_ } from '../footer/index.js'
import { layout_c_ } from '../layout/index.js'
import './war_on_sense_making_page.css'
export function war_on_sense_making_page_($p:page_params_T) {
	return (
		layout_c_($p,
			main_({ class: 'war-on-sense-making-page page' },
				header_(),
				content_(),
				footer_c_()))
	) as Node_T<'server', HTMLElementTagNameMap['main']>
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
