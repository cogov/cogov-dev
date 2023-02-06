import { var__css__replace } from '@cogov/css'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context, params__ctx__memo_, Style_ } from '@ctx-core/ui-solid'
import { Footer } from './Footer.jsx'
export function Page_holochain($p:{ ctx?:Ctx }) {
	const ctx_ = params__ctx__memo_($p)
	return (
		<ctx__Context.Provider value={ctx_()}>
			<Style/>
			<main class="holochain-page page">
				<Header/>
				<CoGov/>
				<Footer/>
			</main>
		</ctx__Context.Provider>
	)
	function Header() {
		return [
			<HeaderStyle/>,
			<div class="HolochainHeader page-header">
				<p class="HolochainHeader__title">CoGov is Powered By Holochain</p>
				<p class="HolochainHeader__subtitle">
					Holochain is the new Internet. Holo is the new Cloud.
				</p>
			</div>
		]
	}
	function CoGov() {
		return [
			<CoGovStyle/>,
			<div class="holochainCoGov page-body">
				<div class="holochainCoGov__body">
					<div class="holochainCoGov__left">
						<div class="holochainCoGov__logo--container">
							<img class="holochainCoGov__logo" src="/assets/images/holochain-logo.png"/>
							<p class="holochainCoGov__title">Holochain</p>
						</div>
						<p class="holochainCoGov__body">
							Holochain is an opensource distributed application development and execution environment.
							It is free to download, install, use, and distribute.
							There is not, and can never be, an inherent cost associated with building
							or running a Holochain application.
						</p>
					</div>
					<div class="holochainCoGov__right">
						<div class="holochainCoGov__logo--container">
							<img class="holochainCoGov__logo" src="/assets/images/holo-logo.png"/>
							<p class="holochainCoGov__title">
								Holo
							</p>
						</div>
						<p class="holochainCoGov__column--body">
							Holo is the new cloud.
							A cloud that is built and maintained by the crowd.
							Literally—the Holo cloud was actually crowdsourced into (pre-)existence.
							If a developer wants to share their app with the world, Holo delivers.
						</p>
					</div>
				</div>
				<iframe
					class="holochainCoGov__video"
					src="https://www.youtube.com/embed/2FJL3ibnZlY"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen={true}/>
			</div>
		]
	}
}
//language=CSS
const Style = Style_(()=>var__css__replace(`
	.holochain-page {
		margin-top: 7rem;
		height: 100%;
		width: 100%;
		position: relative;
	}
`))
//language=CSS
const HeaderStyle = Style_(()=>var__css__replace(`
	.HolochainHeader {
		padding: 12%;
		height: 85vh;
		background-image: linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)), url('/assets/images/cogov__northerlights.png');
		background-position: center;
		background-size: cover;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.HolochainHeader {
			padding: 12% 4rem;
		}
	}
	@media (max-width: var(--phone--max-width)) {
		.HolochainHeader {
			background-image: linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)), url('/assets/images/cogov__northerlights--mobile.png');
		}
	}
	.HolochainHeader__title {
		font-size: 5rem;
		font-weight: 600;
		color: white;
		margin-bottom: 1rem;
	}
	@media (max-width: var(--phone--max-width)) {
		.HolochainHeader__title {
			font-size: 3.4rem;
		}
	}
	.HolochainHeader__subtitle {
		font-size: 2rem;
		color: white;
		font-weight: 500;
	}
	@media (max-width: var(--phone--max-width)) {
		.HolochainHeader__subtitle {
			font-size: 2rem;
		}
	}
`))
//language=CSS
const CoGovStyle = Style_(()=>var__css__replace(`
	.holochainCoGov {
		padding: 4rem 12% 8rem 12%;;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.holochainCoGov {
			padding: 4rem;
		}
	}
	.holochainCoGov__logo {
		height: 6rem;
		align-self: start;
		margin-right: 2rem;
	}
	.holochainCoGov__logo--container {
		display: flex;
		align-items: center;
	}
	.holochainCoGov__title {
		text-align: center;
		color: var(--cogov--primary--color);
		font-size: 3.3rem;
		font-weight: 600;
		margin-bottom: 2rem;
	}
	.holochainCoGov__body {
		text-align-last: left;
		font-size: 1.7rem;
		font-weight: 500;
		display: flex;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.holochainCoGov__body {
			flex-direction: column;
		}
	}
	.holochainCoGov__left {
		width: 50%;
		margin-right: 4rem;
		text-align: justify;
		margin-bottom: 2rem;
		display: flex;
		flex-direction: column;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.holochainCoGov__left {
			width: 100%;
			margin-right: 0;
		}
	}
	.holochainCoGov__right {
		width: 50%;
		margin-left: 4rem;
		text-align: justify;
		margin-bottom: 2rem;
		display: flex;
		flex-direction: column;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.holochainCoGov__right {
			width: 100%;
			margin-left: 0;
		}
	}
	.holochainCoGov__column--body {
		font-size: 1.7rem;
		color: #333;
	}
	.holochainCoGov__video {
		margin-top: 2rem;
		width: 100%;
		height: 36vw;
		border: none;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.holochainCoGov__video {
			height: 50vw;
		}
	}
`))
