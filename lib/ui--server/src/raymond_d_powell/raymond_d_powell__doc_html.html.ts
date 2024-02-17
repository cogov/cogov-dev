import './raymond_d_powell.css.js'
import { raw_ } from 'relementjs'
import { main_ } from 'relementjs/html'
import type { page_params_T } from '../_types.js'
import { site__footer_ } from '../footer/index.js'
import { layout__doc_html_ } from '../layout/index.js'
import cogov__founder_png from '../public/assets/images/cogov__founder.png'
export function raymond_d_powell__doc_html_($p:page_params_T) {
	return (
		layout__doc_html_($p,
			main_({ class: 'raymond-d-powell-page page' },
				quote_(),
				about_(),
				site__footer_()))
	)
	function quote_() {
		// language=html
		return raw_(`
			<div class="raymond_d_powell_page__quote page__header">
				<p class="raymond_d_powell_page__quote__title">Raymond D. Powell</p>
				<p class="raymond_d_powell_page__quote__quote">
					"The CoGov mission is to build systems that allow humans to recognize the
					possibility of a new way of life on the planet, and that help forge a path
					in that direction."
				</p>
			</div>
		`)
	}
	function about_() {
		// language=html
		return raw_(`
			<div class="raymond_d_powell_page__about page__content">
				<div class="raymond_d_powell_page__about__left">
					<img
						class="raymond_d_powell_page__about__left__image"
						src="${cogov__founder_png}"
						alt="Cogov Founder: Raymond Powell"
					/>
				</div>
				<div class="raymond_d_powell_page__about__right">
					<div class="raymond_d_powell_page__about__container">
						<p class="raymond_d_powell_page__about__title">Raymond D. Powell, Founder</p>
						<p class="raymond_d_powell_page__about__body">
							Ray started programming computers in 1980 at the age of 7 and by the age of 19
							was hired as a professional software engineer.
							Since then, he has stayed on the cutting edge of industry trends and he now applies
							that knowledge to co-create systems and blueprints that take on
							some of today’s most complex social problems.
							<br/><br/>
							Through the writing of code, as well as identifying and bringing together the most talented engineers
							and systems architects on the planet to synchronize their efforts,
							one of Ray’s fundamental goals is to unify people through the creation of new standards of action
							and interaction that more closely align with natural patterns inherent in the fabric of the Universe.
							<br/><br/>
							Becoming an entrepreneur and obtaining success as a young man,
							in parallel with awakening to the reality of a world filled with oppression,
							Ray set out to create true inner wealth beyond money.
							He has been a pioneer in truly defining sovereignty, and revealing how from that place,
							people can create environments of true synergistic co-creation.
							<br/><br/>
							From capitalist, to activist, Ray has been bringing awareness
							to what was really going on in the world since 2007.
							When Ray became a father, he was pushed him even further along in the discovery of
							how to create profound changes in our political, social, and economical systems.
							<br/><br/>
							Now, half of his year is dedicated to being a Dad to three beautiful star children
							and to building and organizing intentional community project on the ground,
							and the other half is dedicated to serving to bridge humanity into a new paradigm.
						</p>
					</div>
				</div>
			</div>
		`)
	}
}
