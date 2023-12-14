import { type Node_T, raw_ } from 'relementjs'
import { main_ } from 'relementjs/html'
import type { page_params_T } from '../_types.js'
import { footer_c_ } from '../footer/index.js'
import { layout_c_ } from '../layout/index.js'
import './services_page.css.js'
export function services_page_($p:page_params_T) {
	return (
		layout_c_($p,
			main_({ class: 'services-page page' },
				header_(),
				content_(),
				footer_c_()))
	) as Node_T<'server', HTMLElementTagNameMap['main']>
	function header_() {
		// language=html
		return raw_(`
			<div class="services_page__header page__header">
				<p class="services_page__header__title">Our Services</p>
				<p class="services_page__header__subtitle">
					Get in touch and see how we can help you!
				</p>
			</div>
		`)
	}
	function content_() {
		// language=html
		return raw_(`
			<div class="services_page__services page__content">
				<p class="services_page__services__title">Services</p>
				<p class="services_page__services__subtitle">Organization Foundational Consulting</p>
				<p class="services_page__services__body">
					There is nothing more powerful in the world than when people come together
					in shared purpose to accomplish some mission —
					whether it is a business, charity, community government, or some other organization.
					But too often, the resonant power felt among early participants ends up turning to conflict.
					There ends up being winners and losers.
					There ends up being hurt feelings.
					That purity of leading from the heart in passion that often exists in the early days of ideation
					often becomes a power struggle, and often involves money.
					Sometimes it even turns to litigation, where the party
					with access to the best legal resources becomes the winner.
					<br/><br/>
					For too long, we have lived in a global culture of domination,
					where there is a constant underlying struggle to identify who has power over who.
					So many people have been in the habit of giving away their power in subtle ways,
					and then claiming victimhood.
					So many others have been in the habit of taking power in subtle ways,
					then using that power for their own personal gain, often at the expense of others.
					<br/><br/>
					The <a href="/vision" target="blank" class="addlink">core principles</a> that have been identlified in
					creating the
					<a
						href="/protocol.love"
						target="blank"
						class="addlink"
					>CoGov Protocol</a> create a communications framework that avoid these pitfalls.
					While digital tools are also in the works, during this critical time,
					we are very interested in using the operational principles “on paper”, so to speak.
					The CoGov staff would love nothing more than to work with your organization now to design a
					<a
						href="https://docs.google.com/document/d/1Rh02JzKhQ5sA6V500cQm74kb-jd4VcS8bskDDUsBpQA/edit" target="blank"
						class="addlink"
					>Collective Foundational Document</a> that creates fertile ground for your organization to thrive.
					We at CoGov believe that “slow is the new fast”,
					and while there may be a tendency to want to jump into “doing-ness”,
					we believe in establishing practices of “being-ness” first.
					And our experience shows that in the end, things ultimately get done expontentially faster
					when the proper human energetic coherence patterns have been established early on.
					<br/><br/>
					Click <a href="/connect" class="addlink">here</a> to receive a free 1 hour consultation
					to see how CoGov can support your organizational start-up.
					<br/><br/>
				</p>
				<p class="services_page__services__subtitle">App Development</p>
				<p class="services_page__services__body">
					Do you need a custom application that has an element of decision making or sensing user coherence? The CoGov
					dev team can work with you to build it!
					<br/><br/>
					Click <a href="/connect" class="addlink">here</a>
					to receive a free 1 hour consultation to see how CoGov can support your application development needs.
				</p>
			</div>
		`)
	}
}
