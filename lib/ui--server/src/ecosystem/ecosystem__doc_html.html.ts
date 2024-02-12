import './ecosystem.css.js'
import { raw_ } from 'relementjs'
import { main_ } from 'relementjs/html'
import type { page_params_T } from '../_types.js'
import { site__footer_ } from '../footer/index.js'
import { layout__doc_html_ } from '../layout/index.js'
export function ecosystem__doc_html_($p:page_params_T) {
	return (
		layout__doc_html_($p,
			main_({ class: 'ecosystem-page page' },
				header_(),
				content_(),
				site__footer_()))
	)
	function header_() {
		// language=html
		return raw_(`
			<div class="ecosystem_page__header">
				<p class="ecosystem_page__header__title">A Collectively Governed Current-See Ecosystem</p>
				<p class="ecosystem_page__header__subtitle">
					“From each according to his/her ability, to each according to his/her ability to serve the greater whole.”
				</p>
			</div>
		`)
	}
	function content_() {
		// language=html
		return raw_(`
			<div class="ecosystemContent">
				<!--<p class="ecosystemContent__title">A Protocol for a New Paradigm in Business and Government</p>-->
				<p class="ecosystemContent__body">
					This is a living Google Doc:
					<a
						target="_blank"
						href="https://docs.google.com/document/d/1i2tbebBkJIqMjEW5hLiGssevBs29JHLj8URQxu6x1hc"
					>https://docs.google.com/document/d/1i2tbebBkJIqMjEW5hLiGssevBs29JHLj8URQxu6x1hc</a>
				</p>
				<br/>
				<iframe
					style="width:100%; height:800px;"
					src="https://docs.google.com/document/d/1i2tbebBkJIqMjEW5hLiGssevBs29JHLj8URQxu6x1hc"
				/>
			</div>
		`)
	}
}
