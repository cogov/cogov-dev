import { var__css__replace } from '@cogov/css'
import { Style_ } from '@ctx-core/ui-solid'
import { Footer } from './Footer.jsx'
export function Page_raymond_d_powell() {
  return [
		<Style/>,
		<main class="raymond-d-powell-page page">
			<Quote/>
			<About/>
			<Footer/>
		</main>
	]
	function Quote() {
	  return [
			<QuoteStyle/>,
			<div class="aboutQuote page-header">
				<p class="aboutQuote__title">Raymond D. Powell</p>
				<p class="aboutQuote__quote">
					"The CoGov mission is to build systems that allow humans to recognize the
					possibility of a new way of life on the planet, and that help forge a path
					in that direction."
				</p>
			</div>
		]
	}
	function About() {
	  return [
			<AboutStyle/>,
			<div class="aboutFounder page-body">
				<div class="aboutFounder__left">
					<img
						class="aboutFounder__left--image"
						src="/assets/images/cogov__founder.png"
						alt="Cogov Founder: Raymond Powell"
					/>
				</div>
				<div class="aboutFounder__right">
					<div class="aboutFounder__container">
						<p class="aboutFounder__title">Raymond D. Powell, Founder</p>
						<p class="aboutFounder__body">
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
		]
	}
}
//language=CSS
const Style = Style_(()=>var__css__replace(`
	.raymond-d-powell-page {
		margin-top: 7rem;
		height: 100%;
		width: 100%;
		position: relative;
	}
`))
//language=CSS
const QuoteStyle = Style_(()=>var__css__replace(`
	.aboutQuote {
		padding: 12%;
		height: 85vh;
		background-image: linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)), url('/assets/images/cogov__background--founder.png');
		background-position: center;
		background-size: cover;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.aboutQuote {
			padding: 12% 4rem;
		}
	}
	@media (max-width: var(--phone--max-width)) {
		.aboutQuote {
			background-image: linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)), url('/assets/images/cogov__background--founder--mobile.png');
		}
	}
	.aboutQuote__title {
		font-size: 5rem;
		color: white;
		font-weight: 600;
	}
	@media (max-width: var(--phone--max-width)) {
		.aboutQuote__title {
			font-size: 3.4rem;
		}
	}
	.aboutQuote__quote {
		font-size: 2rem;
		color: white;
		font-weight: 500;
	}
	@media (max-width: var(--phone--max-width)) {
		.aboutQuote__quote {
			font-size: 2rem;
		}
	}
`))
//language=CSS
const AboutStyle = Style_(()=>var__css__replace(`
	.aboutFounder {
		padding: 8rem 12%;
		background-color: white;
		height: 100%;
		width: 100%;
		display: flex;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.aboutFounder {
			padding: 4rem;
			flex-direction: column;
			align-items: center;
		}
	}
	.aboutFounder__left {
		width: 50%;
		position: relative;
		margin-right: 4rem;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.aboutFounder__left {
			width: 100%;
			margin-right: 0;
			margin-bottom: 1rem;
		}
	}
	.aboutFounder__left--image {
		width: auto;
		max-height: 700px;
		position: absolute;
		top: 12px;
		right: 0;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.aboutFounder__left--image {
			position: relative;
		}
	}
	.aboutFounder__right {
		width: 50%;
		margin-left: 4rem;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.aboutFounder__right {
			width: 100%;
			margin-left: 0;
		}
	}
	.aboutFounder__container {
		margin-bottom: 2rem;
	}
	.aboutFounder__title {
		font-size: 3.3rem;
		font-weight: 600;
		color: var(--cogov--primary--color);
		margin-bottom: .5rem;
	}
	.aboutFounder__body {
		font-size: 1.7rem;
		color: #333;
		text-align: justify;
	}
`))
