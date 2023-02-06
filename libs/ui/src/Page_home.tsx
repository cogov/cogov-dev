import { var__css__replace } from '@cogov/css'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context, params__ctx__memo_, Style_ } from '@ctx-core/ui-solid'
import { Footer } from './Footer.jsx'
export function Page_home($p:{ ctx?:Ctx }) {
	const ctx_ = params__ctx__memo_($p)
	return (
		<ctx__Context.Provider value={ctx_()}>
			<Style/>
			<main class="home-page page">
				<Header/>
				<About/>
				<Details/>
				<Collaborators/>
				<Footer/>
			</main>
		</ctx__Context.Provider>
	)
	function Header() {
		return [
			<HeaderStyle/>,
			<div class="homeHeader page-header">
				{/*backdrop*/}
				<div class="homeHeader__backdrop--cover"></div>
				<div class="homeHeader__backdrop">
					<video class="homeHeader__backdrop--video" playsinline autoplay muted loop>
						<source src="/assets/videos/sacred-geo.mp4" type="video/mp4"/>
					</video>
				</div>
				<div class="homeHeader__content">
					{/*<img class="homeHeader__logo" src="/assets/images/cogov__home-logo.png" />*/}
					<a href="#homeAbout" class="removelink">
						<img class="homeHeader__logo" src="/assets/images/cogov__home-logo.png"/>
					</a>
					<h2 class="homeHeader__title">Collaborative Governance Technologies</h2>
					<h3 class="homeHeader__subtitle">
						Modeling Scalable Social Coordination Systems Infused with{' '}
						<a
							href="https://medium.com/@rayzer42/cogov-presents-a-digital-protocol-for-scaling-loving-kindness-1da6605f88d9"
							class="removelink underline"
							target="_blank"
						>Loving Kindness</a>
						{/*CoGov fosters the emergence of coherent collective intelligence by enabling the rapid iteration*/}
						{/*of governance and social coordination systems that YOU design!*/}
					</h3>
				</div>
			</div>,
		]
	}
	function About() {
		return [
			<AboutStyle/>,
			<div class="homeAbout page-body" id="homeAbout">
			<div class="homeAbout__header">
				<h2 class="homeAbout__title">What is CoGov?</h2>
				<p class="homeAbout__body">
					<span class="homeAbout__subtitle">CoGov</span> is a proposal for an
					{' '}<a href="/C_ecosystem">ecosystem of startups</a>, with each startup modeling its operations to be infused with
					{' '}<a
					href="https://medium.com/@rayzer42/cogov-presents-a-digital-protocol-for-scaling-loving-kindness-1da6605f88d9"
					target="_blank"
				>Loving Kindness</a> and
					{' '}<a
					href="https://medium.com/@rayzer42/cogov-presents-a-digital-protocol-for-scaling-loving-kindness-1da6605f88d9"
					target="_blank"
				>Vulnerable Transparency</a>,
					which is also omini-win and anti-rivalrous.
					Keys to accomplishing this goal include the implementation of a common, shared cryptocurrency and
					{' '}<a href="/C_protocol_love">protocol.love</a>.
					<br/>
					<br/>
					The success of this endeavor relies on the ability to
					create similar efficiencies of scale that exist in the current global socioeconomic paradigm (Game A).
					In order to accomplish this goal at a such a scale, interoperability is critical.
					{' '}<a href="/C_protocol_love">Protocol.love</a> enables this interoperatbility
					for all those who choose a commitment to
					{' '}<a
					href="https://medium.com/@rayzer42/cogov-presents-a-digital-protocol-for-scaling-loving-kindness-1da6605f88d9"
					target="_blank"
				>Vulnerable Transparency</a>.
					As each of our partner projects (many of which are also startup ecosystems) reach maturity,
					we will create a magnetic attraction field that can ultimately lead to the total transformation of the
					global socioeconomic paradigm.
				</p>
				<br/>
				<br/>
				<h2 class="homeAbout__title">Our Goals</h2>
				<h3 class="homeAbout__subtitle">Empower people to empower themselves.</h3>
				<h3 class="homeAbout__body">
					We don’t just need new social systems. We need a framework within
					which we can experiment with
					new social systems real-time, in a way that moves humanity forward quickly, while
					avoiding existential threats. A New Earth is emerging, where citizens
					are no longer merely participants in social systems, but they are fully
					engaged in the creation and rapid iteration of those systems.
				</h3>
				<br/>
				<br/>
				<h3 class="homeAbout__subtitle">From Individual Ownership to Collective Stewardship.</h3>
				<h3 class="homeAbout__body">
					CoGov is a semi-autonomous socioeconomic ecosystem, powered by
					{' '}<a href="/C_protocol_love">protocol.love</a>,
					that enhances the ability of sovereign
					individuals to come together to make sense, and make
					decisions with the greatest holopticism (ability to see the whole).
					By sharing operations, and curating resources with
					{' '}<a
					href="https://medium.com/@rayzer42/cogov-presents-a-digital-protocol-for-scaling-loving-kindness-1da6605f88d9"
					target="_blank"
				>Vulnerable Transparency</a>,
					communities can work with even amateur developers to create
					new ways of sharing resources, contracts, data, money and cryptocurrencies,
					payments and transactions, IP, and other assets— all with complete assurance
					that whatever kind of asset governance they invent, creators are recognized,
					and scalability can be acheived through interoperability with other organizations
					who are committed to
					{' '}<a
					href="https://medium.com/@rayzer42/cogov-presents-a-digital-protocol-for-scaling-loving-kindness-1da6605f88d9"
					target="_blank"
				>Vulnerable Transparency</a> through <a href="/C_protocol_love">protocol.love</a>.
				</h3>
			</div>
			<div class="homeAbout__items">
				<p class="homeAbout__items--title">What makes CoGov work?</p>
				<div class="homeAbout__item">
					<div class="homeAbout__item--photo homeAbout__item--photo--one">&nbsp;</div>
					<div class="homeAbout__item--text homeAbout__item--text--right">
						<h2 class="homeAbout__item--title">Unenclosability</h2>
						<p class="homeAbout__item--body">
							No central servers means the user is in control of their experience.
							The Earth’s air is an unenclosable carrier for sound waves— a carrier that cannot be owned or
							controlled. With air, we can communicate with others because we
							can speak and be heard by others. Unenclosable communication is
							critical to cohesive group interactions because it means that
							humans have the ability to interact directly with each other—to
							feel and see and know each other and to empathize from our shared
							experience of humanness—with no intermediaries. <i><u>
							{' '}<a href="/holochain" class="addlink"
											target="blank">Holochain</a> is the world's first and only digital,
							unenclosable carrier.</u></i>
						</p>
					</div>
				</div>
				<div class="homeAbout__item homeAbout__item--swap">
					<div class="homeAbout__item--text homeAbout__item--text--left">
						<h2 class="homeAbout__item--title">Scalability</h2>
						<p class="homeAbout__item--body">
							New forms of community and business are arising,
							but unless they can create economies of scale,
							they won't create the magnetic attraction to pull our culture out
							of the old paradigm. CoGov enables that scalability out of the box.
						</p>
						<p class="homeAbout__item--body" style="margin-top:10px;">
							CoGov provides the framework for transparent group operations—whether it's a
							small team of a few people, or whether it's an entire ecosystem of millions.
						</p>
					</div>
					<div class="homeAbout__item--photo homeAbout__item--photo--two">&nbsp;</div>
				</div>
				<div class="homeAbout__item homeAbout__item--mobile">
					<div class="homeAbout__item--photo homeAbout__item--photo--two">&nbsp;</div>
					<div class="homeAbout__item--text homeAbout__item--text--left">
						<h2 class="homeAbout__item--title">Scalability</h2>
						<p class="homeAbout__item--body">
							New forms of community and business are arising.
							but unless they can create economies of scale,
							they can’t compete with the old systems and attract people out
							of the old systems. CoGov enables that scalability out of the box.
						</p>
					</div>
				</div>
				<div class="homeAbout__item">
					<div class="homeAbout__item--photo homeAbout__item--photo--five">&nbsp;</div>
					<div class="homeAbout__item--text homeAbout__item--text--right">
						<h2 class="homeAbout__item--title">Transparency</h2>
						<p class="homeAbout__item--body">
							In this era of a <a class="addlink" href="/war-on-sense-making">War on Sense Making</a>,
							transparency of operatons is critical to re-building trust in
							our institutions— both public and private. CoGov offers a fully
							transparent interoperability layer that
							opens up the doorway for organizations to use any number of
							business or organizational governance models and interfaces,
							and/or seamlessly transition between them, while minimizing
							(or even removing) difficulties of the transition.
						</p>
					</div>
				</div>
				<div class="homeAbout__item homeAbout__item--swap">
					<div class="homeAbout__item--text homeAbout__item--text--left">
						<h2 class="homeAbout__item--title">Rapid Iteration</h2>
						<p class="homeAbout__item--body">
							A massive shift in human consciousness is upon us. Along with that
							we must exponentially increase our ability to coordinate at scale.
							That means people get to not just participate in systems, but
							they get to participate in the DESIGN of those systems, and
							redesign them and tweak the design of those systems over and
							over until we get it right.
						</p>
					</div>
					<div class="homeAbout__item--photo homeAbout__item--photo--four">&nbsp;</div>
				</div>
				<div class="homeAbout__item homeAbout__item--mobile">
					<div class="homeAbout__item--photo homeAbout__item--photo--four">&nbsp;</div>
					<div class="homeAbout__item--text homeAbout__item--text--left">
						<h2 class="homeAbout__item--title">Rapid Iteration</h2>
						<p class="homeAbout__item--body">
							A massive shift in human consciousness is upon us. Along with that
							we must exponentially increase our ability to coordinate at scale.
							That means people get to not just participate in systems, but
							they get to participate in the DESIGN of those systems, and
							redesign them and tweak the design of those systems over and
							over until we get it right.
						</p>
					</div>
				</div>
				<div class="homeAbout__item">
					<iframe
						class="homeAbout__item--video"
						src="https://www.youtube.com/embed/2FJL3ibnZlY"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen={true}
					/>
					<div class="homeAbout__item--text homeAbout__item--text--right">
						<h2 class="homeAbout__item--title">Holochain</h2>
						<p class="homeAbout__item--body">
								A whole new era of software interoperability is coming forth thanks to Holochain.
								There is no longer a need for clunky and burdensome APIs to
								allow applications to connect with each other. CoGov ensures
								that the same level of interoperability exists between
								Collectives and their Currencies.
						</p>
					</div>
				</div>
			</div>
		</div>
		]
	}
	function Details() {
		return [
			<DetailsStyle/>,
			<section class="homeDetails page-body">
			<h2 class="homeDetails__title">Let's Connect! What role are you playing in the transition?</h2>
			<p class="homeDetails__subtitle">&nbsp;</p>
			<div class="homeDetails__types">
				<div class="homeDetails__type">
					<div class="homeDetails__header homeDetails__header--developer">
						<p class="homeDetails__header--title">DEVELOPER</p>
						<a href="/C_connect" class="removelink"><button class="homeDetails__cta">Get Trained</button></a>
					</div>
				</div>
				<div class="homeDetails__type">
					<div class="homeDetails__header homeDetails__header--philosopher">
						<p class="homeDetails__header--title">PHILOSOPHER</p>
						<a href="/C_connect" class="removelink"><button class="homeDetails__cta">Collaborate</button></a>
					</div>
				</div>
				<div class="homeDetails__type">
					<div class="homeDetails__header homeDetails__header--creator">
						<p class="homeDetails__header--title">CREATOR</p>
						<a href="/C_connect" class="removelink"><button class="homeDetails__cta">Hire Us</button></a>
					</div>
				</div>
			</div>
		</section>
		]
	}
	function Collaborators() {
		return [
			<CollaboratorsStyle/>,
			<div class="homeCollaborators page-body">
			<h2 class="homeCollaborators__title">Collaboration is our jam! Here's who with:</h2>
			<div class="homeCollaborators__collaborators">
				<div class="homeCollaborators__collaborator">
					<a class="homeCollaborators__collaborator" href="https://www.metacurrency.org" target="blank">
						<img src="/assets/images/cogov__metacurrency.png" alt=""
								 class="homeCollaborators__collaborator--logo"/>
						<p class="homeCollaborators__collaborator--text">MetaCurrency<br/>Project</p>
					</a>
				</div>
				<div class="homeCollaborators__collaborator">
					<a class="homeCollaborators__collaborator" href="https://www.onenation.party/1" target="blank">
						<img src="/assets/images/cogov__onenation.png" alt="" class="homeCollaborators__collaborator--logo"/>
						<p class="homeCollaborators__collaborator--text">OneNation</p>
					</a>
				</div>
				<div class="homeCollaborators__collaborator">
					<a class="homeCollaborators__collaborator" href="https://lightleadership.com/" target="blank">
						<img src="/assets/images/cogov__lightleadership.png" alt=""
								 class="homeCollaborators__collaborator--logo"/>
						<p class="homeCollaborators__collaborator--text">Light Leadership</p>
					</a>
				</div>
				<div class="homeCollaborators__collaborator">
					<a class="homeCollaborators__collaborator" href="https://superluminal.is/" target="blank">
						<img src="/assets/images/cogov__superluminal-systems.png" alt=""
								 class="homeCollaborators__collaborator--logo"/>
						<p class="homeCollaborators__collaborator--text">Superluminal Systems</p>
					</a>
				</div>
				<div class="homeCollaborators__collaborator">
					<a class="homeCollaborators__collaborator" href="https://core.network/" target="blank">
						<img src="/assets/images/cogov__core-network.png" alt=""
								 class="homeCollaborators__collaborator--logo"/>
						<p class="homeCollaborators__collaborator--text">Core.Network</p>
					</a>
				</div>
				<div class="homeCollaborators__collaborator">
					<a class="homeCollaborators__collaborator" href="https://www.unify.org/" target="blank">
						<img src="/assets/images/cogov__unify.png" alt="" class="homeCollaborators__collaborator--logo"/>
						<p class="homeCollaborators__collaborator--text">UNIFY</p>
					</a>
				</div>
				<div class="homeCollaborators__collaborator">
					<a class="homeCollaborators__collaborator" href="https://social-evolution.com/" target="blank">
						<img src="/assets/images/cogov__socialevolution.png" alt=""
								 class="homeCollaborators__collaborator--logo"/>
						<p class="homeCollaborators__collaborator--text">Social Evolution</p>
					</a>
				</div>
				<div class="homeCollaborators__collaborator">
					<a class="homeCollaborators__collaborator" href="https://freedomculture.org/" target="blank">
						<img src="/assets/images/cogov__freedomculture.png" alt=""
								 class="homeCollaborators__collaborator--logo"/>
						<p class="homeCollaborators__collaborator--text">Freedom Culture</p>
					</a>
				</div>
				<div class="homeCollaborators__collaborator">
					<a class="homeCollaborators__collaborator" href="http://www.fwii.net/" target="blank">
						<img src="/assets/images/cogov__fourworlds.png" alt="" class="homeCollaborators__collaborator--logo"/>
						<p class="homeCollaborators__collaborator--text">Four Worlds <br/>International Institute</p>
					</a>
				</div>
				<div class="homeCollaborators__collaborator">
					<a class="homeCollaborators__collaborator" href="http://www.iwg.life/s7foundation/" target="blank">
						<img src="/assets/images/cogov__s7.png" alt="" class="homeCollaborators__collaborator--logo"/>
						<p class="homeCollaborators__collaborator--text">S7&nbsp;Foundation</p>
					</a>
				</div>
				<div class="homeCollaborators__collaborator">
					<a class="homeCollaborators__collaborator" href="https://junto.foundation/" target="blank">
						<img src="/assets/images/cogov__junto-logo.png" alt="" class="homeCollaborators__collaborator--logo"/>
						<p class="homeCollaborators__collaborator--text">Junto<br/>Foundation</p>
					</a>
				</div>
				<div class="homeCollaborators__collaborator">
					<a class="homeCollaborators__collaborator" href="https://www.futureproper.world/" target="blank">
						<img src="/assets/images/cogov__future-proper-logo.png" alt=""
								 class="homeCollaborators__collaborator--logo"/>
						<p class="homeCollaborators__collaborator--text">Future Proper</p>
					</a>
				</div>
				<div class="homeCollaborators__collaborator">
					<a class="homeCollaborators__collaborator" href="http://edenisrising.com/" target="blank">
						<img src="/assets/images/cogov__eden-is-rising-logo.png" alt=""
								 class="homeCollaborators__collaborator--logo"/>
						<p class="homeCollaborators__collaborator--text">Eden</p>
					</a>
				</div>
			</div>
		</div>
		]
	}
}
//language=CSS
const Style = Style_(()=>var__css__replace(`
	.home-page {
		height: 100%;
		width: 100%;
		position: relative;
	}
`))
//language=CSS
const HeaderStyle = Style_(()=>var__css__replace(`
	.homeHeader {
		position: relative;
		height: 98vh;
	}
	.homeHeader__backdrop {
		position: absolute;
		top: 0;
		left: 0;
		height: 98vh;
		width: 100%;
	}
	.homeHeader__backdrop--cover {
		position: absolute;
		top: 0;
		left: 0;
		height: 98vh;
		width: 100%;
		background-image: linear-gradient(to right, var(--cogov--primary--color), var(--cogov--grey--color));
		opacity: .9;
		z-index: 200;
	}
	.homeHeader__backdrop--video {
		background-color: grey;
		height: 100%;
		width: 100%;
		object-fit: cover;
		z-index: 10;
	}
	.homeHeader__content {
		position: absolute;
		top: 18%;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
		z-index: 300;
		height: 50rem;
		width: 90%;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.homeHeader__content {
			top: 13%;
			padding: 0 4rem;
		}
	}
	@media (max-width: var(--phone--max-width)) {
		.homeHeader__content {
			padding: 0;
		}
	}
	.homeHeader__logo {
		height: 12rem;
		margin-bottom: 1rem;
		cursor: pointer;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.homeHeader__logo {
			height: 9rem;
		}
	}
	.homeHeader__title {
		color: white;
		font-size: 4.2rem;
		font-weight: 600;
		text-align: center;
		margin-bottom: 1rem;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.homeHeader__title {
			font-size: 3.6rem;
		}
	}
	.homeHeader__subtitle {
		color: white;
		font-size: 2rem;
		font-weight: 400;
		padding: 0 9%;
		margin-bottom: 4rem;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.homeHeader__subtitle {
			padding: 0;
		}
	}
	.homeHeader__description {
		color: white;
		font-size: 1.4rem;
		font-weight: 500;
	}
	.homeHeader__action {
		border: 3px solid white;
		border-radius: 100px;
		color: white;
		color: var(--cogov--primary--color);
		font-size: 17px;
		font-weight: 600;
		text-transform: uppercase;
		background-color: transparent;
		padding: 1.5rem 3rem;
		outline: none;
		cursor: pointer;
		transition: all .2s;
	}
	.homeHeader__action:hover {
		transform: scale(1.02);
	}
	@keyframes animateLogo {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
		100% {
			transform: scale(1);
		}
	}
`))
//language=CSS
const AboutStyle = Style_(()=>var__css__replace(`
	.homeAbout {
		width: 100%;
		padding: 0 10%;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.homeAbout {
			padding: 0 4rem;
		}
	}
	.homeAbout a {
		color: black;
		font-weight: normal;
		letter-spacing: normal;
	}
	.homeAbout__header {
		background-color: white;
		display: flex;
		flex-direction: column;
	}
	.homeAbout__title {
		font-size: 1.7rem;
		color: var(--cogov--grey--color);
	}
	.homeAbout__subtitle {
		font-size: 3rem;
		font-weight: 600;
		color: var(--cogov--primary--color);
	}
	.homeAbout__body {
		font-size: 2rem;
		font-weight: 400;
		color: var(--cogov--grey--color);
	}
	.homeAbout__items {
		display: flex;
		flex-direction: column;
	}
	.homeAbout__items--title {
		font-size: 3.6rem;
		font-weight: 600;
		color: #333;
		margin-bottom: 2rem;
	}
	.homeAbout__item {
		display: flex;
		margin-bottom: 8rem;
		border: none;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.homeAbout__item {
			flex-direction: column;
			align-items: center;
			margin-bottom: 6rem;
		}
	}
	.homeAbout__item--swap {
		display: flex;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.homeAbout__item--swap {
			display: none;
		}
	}
	.homeAbout__item--mobile {
		display: none;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.homeAbout__item--mobile {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
	.homeAbout__item--photo {
		background-position: center;
		background-size: cover;
		height: 20vw;
		width: 40vw;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.homeAbout__item--photo {
			height: 45vw;
			width: 90vw;
			margin-bottom: 1rem;
		}
	}
	.homeAbout__item--photo--one {
		background-image: url('/assets/images/cogov__unenclosability.png');
	}
	.homeAbout__item--photo--two {
		background-image: url('/assets/images/cogov__scalability.png');
	}
	.homeAbout__item--photo--three {
		background-image: url('/assets/images/cogov__transparency.png');
	}
	.homeAbout__item--photo--four {
		background-image: url('/assets/images/cogov__iteration.png');
	}
	.homeAbout__item--photo--five {
		background-image: url('/assets/images/cogov__interoperability.png');
	}
	.homeAbout__item--text {
		width: 40vw;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.homeAbout__item--text {
			width: 100%;
		}
	}
	.homeAbout__item--text--right {
		margin-left: 8rem;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.homeAbout__item--text--right {
			margin-left: 0;
		}
	}
	.homeAbout__item--text--left {
		margin-right: 8rem;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.homeAbout__item--text--left {
			margin-right: 0;
		}
	}
	.homeAbout__item--title {
		font-size: 2.4rem;
		font-weight: 600;
		color: var(--cogov--grey--color);
		text-transform: uppercase;
	}
	.homeAbout__item--body {
		font-size: 1.7rem;
		font-weight: 400;
	}
	.homeAbout__item--video {
		width: 40vw;
		height: 20vw;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.homeAbout__item--video {
			width: 90vw;
			height: 45vw;
			margin-bottom: 1rem;
		}
	}
`))
//language=CSS
const DetailsStyle = Style_(()=>var__css__replace(`
	.homeDetails {
		width: 100%;
		background-color: #fbfbfb;
		padding: 4rem 12%;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.homeDetails {
			padding: 4rem;
		}
	}
	.homeDetails__title {
		font-size: 3.3rem;
		font-weight: 600;
		color: var(--cogov--grey--color);
		text-align: center;
		margin-bottom: 1rem;
	}
	.homeDetails__types {
		display: flex;
		justify-content: space-between;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.homeDetails__types {
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
		}
	}
	.homeDetails__type {
		margin: 0 2rem;
		height: 27rem;
		width: 27rem;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.homeDetails__type {
			margin: 0 0 2rem 0;
		}
	}
	.homeDetails__header {
		position: relative;
		width: 100%;
		height: 100%;
		background-size: cover;
	}
	.homeDetails__header--developer {
		background-image: linear-gradient(to right, rgba(34, 34, 34, .5), rgba(34, 34, 34, .5)), url('/assets/images/cogov__developer.png');
	}
	.homeDetails__header--philosopher {
		background-image: linear-gradient(to right, rgba(34, 34, 34, .5), rgba(34, 34, 34, .5)), url('/assets/images/cogov__philosopher.png');
	}
	.homeDetails__header--creator {
		background-image: linear-gradient(to right, rgba(34, 34, 34, .5), rgba(34, 34, 34, .5)), url('/assets/images/cogov__creator.png');
	}
	.homeDetails__header--title {
		color: white;
		font-size: 2rem;
		font-weight: 600;
		padding-top: 25%;
		text-align: center;
	}
	.homeDetails__cta {
		padding: 1rem 2rem;
		font-size: var(--phone--font-size);
		font-weight: 600;
		margin-left: 50%;
		margin-top: 1.875rem;
		transform: translateX(-50%);
		background-color: transparent;
		border: 1.5px solid white;
		color: white;
		transition: all .2s;
		cursor: pointer;
	}
	.homeDetails__cta--hover {
		border: 1.5px solid var(--cogov--primary--color);
		background-color: var(--cogov--primary--color);
		color: white;
	}
`))
//language=CSS
const CollaboratorsStyle = Style_(()=>var__css__replace(`
	.homeCollaborators {
		padding: 4rem;
		width: 100vw;
		background-color: #fbfbfb;
	}
	.homeCollaborators__title {
		text-align: center;
		margin-bottom: 5rem;
		font-size: 2.7rem;
		font-weight: 600;
		color: var(--cogov--grey--color);
	}
	.homeCollaborators__collaborators {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.homeCollaborators__collaborator {
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
		text-decoration: none;
		color: var(--cogov--grey--color);
		margin-left: 2rem;
		margin-right: 2rem;
		margin-bottom: 2rem;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.homeCollaborators__collaborator {
			margin-bottom: 2rem;
		}
	}
	.homeCollaborators__collaborator--logo {
		height: 8rem;
		margin-bottom: 1.5rem;
	}
	.homeCollaborators__collaborator--text {
		font-size: 1.4rem;
		font-weight: 500;
		text-align: center;
	}
`))
