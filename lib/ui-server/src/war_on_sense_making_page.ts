import { type Node_T, raw_, type relement_env_T } from 'relementjs'
import { div_, main_ } from 'relementjs/html'
import { footer_c_ } from './footer_c_.js'
import './war_on_sense_making_page.css'
export function war_on_sense_making_page_<env_T extends relement_env_T>() {
	return(
		main_({ class: 'war-on-sense-making-page page' },
			header_(),
			content_(),
			footer_c_())
	) as Node_T<env_T, HTMLElementTagNameMap['main']>
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
