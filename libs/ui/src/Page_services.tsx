import { var__css__replace } from '@cogov/css'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context, params__ctx__memo_, Style_ } from '@ctx-core/ui-solid'
import { Footer } from './Footer.jsx'
export function Page_services($p:{ ctx?:Ctx }) {
	const ctx_ = params__ctx__memo_($p)
	return (
		<ctx__Context.Provider value={ctx_()}>
			<Style/>
			<main class="services-page page">
				<Header/>
				<Content/>
				<Footer/>
			</main>
		</ctx__Context.Provider>
	)
	function Header() {
		return [
			<HeaderStyle/>,
			<div class="servicesHeader page-header">
				<p class="servicesHeader__title">Our Services</p>
				<p class="servicesHeader__subtitle">
					Get in touch and see how we can help you!
				</p>
			</div>
		]
	}
	function Content() {
		return [
			<ContentStyle/>,
			<div class="servicesContent page-body">
				<p class="servicesContent__title">Services</p>
				<p class="servicesContent__subtitle">Organization Foundational Consulting</p>
				<p class="servicesContent__body">
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
					The <a href="/vision" target="blank" class="addlink">core principles</a> that have been identlified in creating the
					{' '}<a
						href="/protocol.love"
						target="blank"
						class="addlink"
					>CoGov Protocol</a> create a communications framework that avoid these pitfalls.
					While digital tools are also in the works, during this critical time,
					we are very interested in using the operational principles “on paper”, so to speak.
					The CoGov staff would love nothing more than to work with your organization now to design a
					{' '}<a
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
				<p class="servicesContent__subtitle">App Development</p>
				<p class="servicesContent__body">
					Do you need a custom application that has an element of decision making or sensing user coherence? The CoGov dev team can work with you to build it!
					<br/><br/>
					Click <a href="/connect" class="addlink">here</a>
					to receive a free 1 hour consultation to see how CoGov can support your application development needs.
				</p>
			</div>
		]
	}
}
//language=CSS
const Style = Style_(()=>var__css__replace(`
	.services-page {
		margin-top: 7rem;
		height: 100%;
		width: 100%;
		position: relative;
	}
`))
//language=CSS
const HeaderStyle = Style_(()=>var__css__replace(`
	.servicesHeader {
		padding: 12%;
		height: 85vh;
		background-image: linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)), url('/assets/images/cogov__services.png');
		background-position: center;
		background-size: cover;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.servicesHeader {
			padding: 12% 4rem;
		}
	}
	.servicesHeader__title {
		font-size: 5rem;
		font-weight: 600;
		color: white;
		margin-bottom: 1rem;
	}
	@media (max-width: var(--phone--max-width)) {
		.servicesHeader__title {
			font-size: 3.4rem;
		}
	}
	.servicesHeader__subtitle {
		font-size: 2rem;
		color: white;
		font-weight: 500;
	}
	@media (max-width: var(--phone--max-width)) {
		.servicesHeader__subtitle {
			font-size: 2rem;
		}
	}
`))
//language=CSS
const ContentStyle = Style_(()=>var__css__replace(`
	.servicesContent {
		background-color: white;
		padding: 4rem 17%;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.servicesContent {
			padding: 4rem;
		}
	}
	.servicesContent__title {
		font-size: 3.3rem;
		color: var(--cogov--primary--color);
		font-weight: 600;
		margin-bottom: 1rem;
	}
	.servicesContent__subtitle {
		font-size: 2.7rem;
		color: #333;
		font-weight: 600;
		margin-bottom: 1rem;
	}
	.servicesContent__body {
		font-size: 1.7rem;
		color: #333;
		font-weight: 500;
		text-align: justify;
	}
`))
