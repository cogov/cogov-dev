import { var__css__replace } from '@cogov/css'
import { Style_ } from '@ctx-core/ui-solid'
import { Footer } from '~/_ui'
export default function C_ecosystem() {
	return [
		<Style/>,
		<main class="ecosystem-page page">
			<Header/>
			<Content/>
			<Footer/>
		</main>
	]
	function Header() {
		return [
			<HeaderStyle/>,
			<div class="ecosystemHeader">
				<p class="ecosystemHeader__title">A Collectively Governed Current-See Ecosystem</p>
				<p class="ecosystemHeader__subtitle">
					“From each according to his/her ability, to each according to his/her ability to serve the greater whole.”
				</p>
			</div>
		]
	}
	function Content() {
		return [
			<ContentStyle/>,
			<div class="ecosystemContent">
				{/*<p class="ecosystemContent__title">A Protocol for a New Paradigm in Business and Government</p>*/}
				<p class="ecosystemContent__body">
					This is a living Google Doc:
					{' '}<a
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
		]
	}
}
//language=CSS
const Style = Style_(()=>var__css__replace(`
	.ecosystem-page {
		margin-top: 7rem;
		height: 100%;
		width: 100%;
		position: relative;
	}
`))
//language=CSS
const HeaderStyle = Style_(()=>var__css__replace(`
	.ecosystemHeader {
		padding: 12%;
		height: 85vh;
		background-image: linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)), url('/assets/images/cogov__happy-community.jpg');
		background-position: center;
		background-size: cover;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.ecosystemHeader {
			padding: 12% 4rem;
		}
	}
	.ecosystemHeader__title {
		font-size: 5rem;
		font-weight: 600;
		color: white;
		margin-bottom: 1rem;
	}
	@media (max-width: var(--phone--max-width)) {
		.ecosystemHeader__title {
			font-size: 3.4rem;
		}
	}
	.ecosystemHeader__subtitle {
		font-size: 2rem;
		color: white;
		font-weight: 500;
	}
`))
//language=CSS
const ContentStyle = Style_(()=>var__css__replace(`
	.ecosystemContent {
		background-color: white;
		padding: 4rem 17%;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.ecosystemContent {
			padding: 4rem;
		}
	}
	.ecosystemContent__body {
		font-size: 1.7rem;
		color: #333;
		font-weight: 500;
		text-align: left;
	}
	.ecosystemContent iframe {
		border: none;
	}
`))
