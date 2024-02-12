import './home.css.js'
import { raw_ } from 'relementjs'
import { a_, main_ } from 'relementjs/html'
import { asset_path_a_ } from 'relysjs'
import type { page_params_T } from '../_types.js'
import { site__footer_ } from '../footer/index.js'
import { layout__doc_html_ } from '../layout/index.js'
const [
	sacred_geo_mp4,
	cogov__home_logo_png,
	cogov__metacurrency_png,
	cogov__onenation_png,
	cogov__lightleadership_png,
	cogov__superluminal_systems_png,
	cogov__core_network_png,
	cogov__unify_png,
	cogov__socialevolution_png,
	cogov__freedomculture_png,
	cogov__fourworlds_png,
	cogov__s7_png,
	cogov__junto_logo_png,
	cogov__future_proper_logo_png,
	cogov__eden_is_rising_logo_png,
] = await asset_path_a_(
	import('../public/assets/videos/sacred-geo.mp4'),
	import('../public/assets/images/cogov__home-logo.png'),
	import('../public/assets/images/cogov__metacurrency.png'),
	import('../public/assets/images/cogov__onenation.png'),
	import('../public/assets/images/cogov__lightleadership.png'),
	import('../public/assets/images/cogov__superluminal-systems.png'),
	import('../public/assets/images/cogov__core-network.png'),
	import('../public/assets/images/cogov__unify.png'),
	import('../public/assets/images/cogov__socialevolution.png'),
	import('../public/assets/images/cogov__freedomculture.png'),
	import('../public/assets/images/cogov__fourworlds.png'),
	import('../public/assets/images/cogov__s7.png'),
	import('../public/assets/images/cogov__junto-logo.png'),
	import('../public/assets/images/cogov__future-proper-logo.png'),
	import('../public/assets/images/cogov__eden-is-rising-logo.png'),
)
export function home__doc_html_($p:page_params_T) {
	return (
		layout__doc_html_($p,
			main_({ class: 'home-page page' },
				header_(),
				about_(),
				details_(),
				collaborators_(),
				site__footer_()))
	)
	function header_() {
		// language=html
		return raw_(`
			<div class="home_page__header page__header">
				<!--backdrop-->
				<div class="home_page__header__backdrop__cover"></div>
				<div class="home_page__header__backdrop">
					<video class="home_page__header__backdrop__video" playsinline autoplay muted loop>
						<source src="${sacred_geo_mp4}" type="video/mp4"/>
					</video>
				</div>
				<div class="home_page__header__content">
						<!--<img class="home_page__header__logo" src="${cogov__home_logo_png}" />-->
					<a href="#home_page__about" class="removelink">
						<img class="home_page__header__logo" src="${cogov__home_logo_png}"/>
					</a>
					<h2 class="home_page__header__title">Collaborative Governance Technologies</h2>
					<h3 class="home_page__header__subtitle">
						Modeling Scalable Social Coordination Systems Infused with
						<a
							href="https://medium.com/@rayzer42/cogov-presents-a-digital-protocol-for-scaling-loving-kindness-1da6605f88d9"
							class="removelink underline"
							target="_blank"
						>Loving Kindness</a>
						<!--CoGov fosters the emergence of coherent collective intelligence by enabling the rapid iteration-->
						<!--of governance and social coordination systems that YOU design!-->
					</h3>
				</div>
			</div>
		`)
	}
	function about_() {
		// language=html
		return raw_(`
			<div class="home_page__about page__content" id="home_page__about">
				<div class="home_page__about__header">
					<h2 class="home_page__about__title">What is CoGov?</h2>
					<p class="home_page__about__body">
						<span class="home_page__about__subtitle">CoGov</span> is a proposal for an
						<a href="/ecosystem">ecosystem of startups</a>, with each startup modeling its operations to be infused
						with
						<a
							href="https://medium.com/@rayzer42/cogov-presents-a-digital-protocol-for-scaling-loving-kindness-1da6605f88d9"
							target="_blank"
						>Loving Kindness</a> and
						<a
							href="https://medium.com/@rayzer42/cogov-presents-a-digital-protocol-for-scaling-loving-kindness-1da6605f88d9"
							target="_blank"
						>Vulnerable Transparency</a>,
						which is also omini-win and anti-rivalrous.
						Keys to accomplishing this goal include the implementation of a common, shared cryptocurrency and
						<a href="/protocol.love">protocol.love</a>.
						The success of this endeavor relies on the ability to
						create similar efficiencies of scale that exist in the current global socioeconomic paradigm (Game A).
						In order to accomplish this goal at such a scale, interoperability is critical.
						<a href="/protocol.love">Protocol.love</a>
						enable this interoperatbility for all those who choose a commitment to
						<a
							href="https://medium.com/@rayzer42/cogov-presents-a-digital-protocol-for-scaling-loving-kindness-1da6605f88d9"
							target="_blank"
						>Vulnerable Transparency</a>.
						As each of our partner projects (many of which are also startup ecosystems) reach maturity,
						we will create a magnetic attraction field that can ultimately lead to the total transformation of the
						global socioeconomic paradigm.
					</p>
					<h2 class="home_page__about__title">Our Goals</h2>
					<h3 class="home_page__about__subtitle">Empower people to empower themselves.</h3>
					<h3 class="home_page__about__body">
						We don’t just need new social systems. We need a framework within
						which we can experiment with
						new social systems real-time, in a way that moves humanity forward quickly, while
						avoiding existential threats. A New Earth is emerging, where citizens
						are no longer merely participants in social systems, but they are fully
						engaged in the creation and rapid iteration of those systems.
					</h3>
					<h3 class="home_page__about__subtitle">From Individual Ownership to Collective Stewardship.</h3>
					<h3 class="home_page__about__body">
						CoGov is a semi-autonomous socioeconomic ecosystem, powered by
						<a href="/protocol.love">protocol.love</a>,
						that enhances the ability of sovereign
						individuals to come together to make sense, and make
						decisions with the greatest holopticism (ability to see the whole).
						By sharing operations, and curating resources with
						<a
							href="https://medium.com/@rayzer42/cogov-presents-a-digital-protocol-for-scaling-loving-kindness-1da6605f88d9"
							target="_blank"
						>Vulnerable Transparency</a>,
						communities can work with even amateur developers to create
						new ways of sharing resources, contracts, data, money and cryptocurrencies,
						payments and transactions, IP, and other assets— all with complete assurance
						that whatever kind of asset governance they invent, creators are recognized,
						and scalability can be acheived through interoperability with other organizations
						who are committed to
						<a
							href="https://medium.com/@rayzer42/cogov-presents-a-digital-protocol-for-scaling-loving-kindness-1da6605f88d9"
							target="_blank"
						>Vulnerable Transparency</a> through <a href="/protocol.love">protocol.love</a>.
					</h3>
				</div>
		`)
	}
	function details_() {
		// language=html
		return raw_(`
			<section class="home_page__details page__content">
				<h2 class="home_page__details__title">Let's Connect! What role are you playing in the transition?</h2>
				<p class="home_page__details__subtitle">&nbsp;</p>
				<div class="home_page__details__types">
					<div class="home_page__details__type">
						<div class="home_page__details__header home_page__details__header__developer">
							<p class="home_page__details__header__title">DEVELOPER</p>
							<a href="/connect" class="removelink">
								<button class="home_page__details__cta">Get Trained</button>
							</a>
						</div>
					</div>
					<div class="home_page__details__type">
						<div class="home_page__details__header home_page__details__header__philosopher">
							<p class="home_page__details__header__title">PHILOSOPHER</p>
							<a href="/connect" class="removelink">
								<button class="home_page__details__cta">Collaborate</button>
							</a>
						</div>
					</div>
					<div class="home_page__details__type">
						<div class="home_page__details__header home_page__details__header__creator">
							<p class="home_page__details__header__title">CREATOR</p>
							<a href="/connect" class="removelink">
								<button class="home_page__details__cta">Hire Us</button>
							</a>
						</div>
					</div>
				</div>
			</section>
		`)
	}
	function collaborators_() {
		// language=html
		return raw_(`
			<div class="home_page__collaborators page__content">
				<h2 class="home_page__collaborators__title">Collaboration is our jam! Here's who with:</h2>
				<div class="home_page__collaborators__collaborators">
					<div class="home_page__collaborators__collaborator">
						<a class="home_page__collaborators__collaborator" href="https://www.metacurrency.org" target="blank">
							<img src="${cogov__metacurrency_png}" alt=""
								class="home_page__collaborators__collaborator__logo"/>
							<p class="home_page__collaborators__collaborator__text">MetaCurrency<br/>Project</p>
						</a>
					</div>
					<div class="home_page__collaborators__collaborator">
						<a class="home_page__collaborators__collaborator" href="https://www.onenation.party/1" target="blank">
							<img src="${cogov__onenation_png}" alt=""
								class="home_page__collaborators__collaborator__logo"/>
							<p class="home_page__collaborators__collaborator__text">OneNation</p>
						</a>
					</div>
					<div class="home_page__collaborators__collaborator">
						<a class="home_page__collaborators__collaborator" href="https://lightleadership.com/" target="blank">
							<img src="${cogov__lightleadership_png}" alt=""
								class="home_page__collaborators__collaborator__logo"/>
							<p class="home_page__collaborators__collaborator__text">Light Leadership</p>
						</a>
					</div>
					<div class="home_page__collaborators__collaborator">
						<a class="home_page__collaborators__collaborator" href="https://superluminal.is/" target="blank">
							<img src="${cogov__superluminal_systems_png}" alt=""
								class="home_page__collaborators__collaborator__logo"/>
							<p class="home_page__collaborators__collaborator__text">Superluminal Systems</p>
						</a>
					</div>
					<div class="home_page__collaborators__collaborator">
						<a class="home_page__collaborators__collaborator" href="https://core.network/" target="blank">
							<img src="${cogov__core_network_png}" alt=""
								class="home_page__collaborators__collaborator__logo"/>
							<p class="home_page__collaborators__collaborator__text">Core.Network</p>
						</a>
					</div>
					<div class="home_page__collaborators__collaborator">
						<a class="home_page__collaborators__collaborator" href="https://www.unify.org/" target="blank">
							<img src="${cogov__unify_png}" alt="" class="home_page__collaborators__collaborator__logo"/>
							<p class="home_page__collaborators__collaborator__text">UNIFY</p>
						</a>
					</div>
					<div class="home_page__collaborators__collaborator">
						<a class="home_page__collaborators__collaborator" href="https://social-evolution.com/" target="blank">
							<img src="${cogov__socialevolution_png}" alt=""
								class="home_page__collaborators__collaborator__logo"/>
							<p class="home_page__collaborators__collaborator__text">Social Evolution</p>
						</a>
					</div>
					<div class="home_page__collaborators__collaborator">
						<a class="home_page__collaborators__collaborator" href="https://freedomculture.org/" target="blank">
							<img src="${cogov__freedomculture_png}" alt=""
								class="home_page__collaborators__collaborator__logo"/>
							<p class="home_page__collaborators__collaborator__text">Freedom Culture</p>
						</a>
					</div>
					<div class="home_page__collaborators__collaborator">
						<a class="home_page__collaborators__collaborator" href="http://www.fwii.net/" target="blank">
							<img src="${cogov__fourworlds_png}" alt=""
								class="home_page__collaborators__collaborator__logo"/>
							<p class="home_page__collaborators__collaborator__text">Four Worlds <br/>International Institute</p>
						</a>
					</div>
					<div class="home_page__collaborators__collaborator">
						<a class="home_page__collaborators__collaborator" href="http://www.iwg.life/s7foundation/" target="blank">
							<img src="${cogov__s7_png}" alt="" class="home_page__collaborators__collaborator__logo"/>
							<p class="home_page__collaborators__collaborator__text">S7&nbsp;Foundation</p>
						</a>
					</div>
					<div class="home_page__collaborators__collaborator">
						<a class="home_page__collaborators__collaborator" href="https://junto.foundation/" target="blank">
							<img src="${cogov__junto_logo_png}" alt=""
								class="home_page__collaborators__collaborator__logo"/>
							<p class="home_page__collaborators__collaborator__text">Junto<br/>Foundation</p>
						</a>
					</div>
					<div class="home_page__collaborators__collaborator">
						<a class="home_page__collaborators__collaborator" href="https://www.futureproper.world/" target="blank">
							<img src="${cogov__future_proper_logo_png}" alt=""
								class="home_page__collaborators__collaborator__logo"/>
							<p class="home_page__collaborators__collaborator__text">Future Proper</p>
						</a>
					</div>
					<div class="home_page__collaborators__collaborator">
						<a class="home_page__collaborators__collaborator" href="http://edenisrising.com/" target="blank">
							<img src="${cogov__eden_is_rising_logo_png}" alt=""
								class="home_page__collaborators__collaborator__logo"/>
							<p class="home_page__collaborators__collaborator__text">Eden</p>
						</a>
					</div>
				</div>
			</div>
		`)
	}
}
function protocol_love_(text = 'protocol.love') {
	return (
		a_({ href: '/protocol.love' },
			text)
	)
}
function vulnerable_transparency_() {
	return (
		a_({
				href: 'https://medium.com/@rayzer42/cogov-presents-a-digital-protocol-for-scaling-loving-kindness-1da6605f88d9',
				target: '_blank',
			},
			'Vulnerable Transparency')
	)
}
