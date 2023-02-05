import { var__css__replace } from '@cogov/css'
import { Style_ } from '@ctx-core/ui-solid'
import { Footer } from '~/_ui'
export default function C_war_on_sense_making() {
	return [
		<Style/>,
		<main class="war-on-sense-making-page page">
			<Header/>
			<Content/>
			<Footer/>
		</main>
	]
	function Header() {
		return [
			<HeaderStyle/>,
			<div class="warOnSenseMakingHeader"></div>
		]
	}
	function Content() {
		return [
			<ContentStyle/>,
			<div class="warOnSenseMakingContent">
				<p class="warOnSenseMakingContent__title">The War on Sensemaking</p>
				<p class="warOnSenseMakingContent__subtitle">
					Written by <a href="https://medium.com/@jordangreenhall">Jordan Hall</a>
				</p>
				<p class="warOnSenseMakingContent__body">
					Originally published on
					<a
						target="_blank"
						href="https://medium.com/rally-point-perspectives/the-war-on-sensemaking-900086bca636"
					>Medium.com</a>
				</p>
			</div>
		]
	}
}
//language=CSS
const Style = Style_(()=>var__css__replace(`
	.war-on-sense-making-page {
		margin-top: 7rem;
		height: 100%;
		width: 100%;
		position: relative;
	}
`))
//language=CSS
const HeaderStyle = Style_(()=>var__css__replace(`
	.warOnSenseMakingHeader {
		padding: 12%;
		height: 85vh;
		background-image: linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)), url('/assets/images/cogov__war-on-sense-making.jpeg');
		background-position: center;
		background-size: cover;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.warOnSenseMakingHeader {
			padding: 12% 4rem;
		}
	}
`))
//language=CSS
const ContentStyle = Style_(()=>var__css__replace(`
	.warOnSenseMakingContent {
		background-color: white;
		padding: 4rem 17%;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.warOnSenseMakingContent {
			padding: 4rem;
		}
	}
	.warOnSenseMakingContent__title {
		font-size: 5rem;
		font-weight: 600;
		color: white;
		margin-bottom: 1rem;
	}
	@media (max-width: var(--phone--max-width)) {
		.warOnSenseMakingContent__title {
			font-size: 4rem;
		}
	}
	.warOnSenseMakingContent__subtitle {
		font-size: 2rem;
		color: white;
		font-weight: 500;
	}
	.warOnSenseMakingContent__body {
		font-size: 1.7rem;
		color: #333;
		font-weight: 500;
		text-align: justify;
	}
`))
