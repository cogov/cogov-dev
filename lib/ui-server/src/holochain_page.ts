import { type Node_T, raw_, type relement_env_T } from 'relementjs'
import { main_ } from 'relementjs/html'
import { footer_c_ } from './footer_c_.js'
import './holochain_page.css'
export function holochain_page_<env_T extends relement_env_T>() {
	return (
		main_({ class: 'holochain-page page' },
			header_(),
			cogov_(),
			footer_c_())
	) as Node_T<env_T, HTMLElementTagNameMap['main']>
	function header_() {
		// language=html
		return raw_(`
			<div class="holochain_page__header page__header">
				<p class="holochain_page__header__title">CoGov is Powered By Holochain</p>
				<p class="holochain_page__header__subtitle">
					Holochain is the new Internet. Holo is the new Cloud.
				</p>
			</div>
		`)
	}
	function cogov_() {
		// language=html
		return raw_(`
			<div class="holochain_page__cogov page__content">
				<div class="holochain_page__cogov__body">
					<div class="holochain_page__cogov__left">
						<div class="holochain_page__cogov__logo__container">
							<img class="holochain_page__cogov__logo" src="/assets/images/holochain-logo.png"/>
							<p class="holochain_page__cogov__title">Holochain</p>
						</div>
						<p class="holochain_page__cogov__body">
							Holochain is an opensource distributed application development and execution environment.
							It is free to download, install, use, and distribute.
							There is not, and can never be, an inherent cost associated with building
							or running a Holochain application.
						</p>
					</div>
					<div class="holochain_page__cogov__right">
						<div class="holochain_page__cogov__logo__container">
							<img class="holochain_page__cogov__logo" src="/assets/images/holo-logo.png"/>
							<p class="holochain_page__cogov__title">
								Holo
							</p>
						</div>
						<p class="holochain_page__cogov__column__body">
							Holo is the new cloud.
							A cloud that is built and maintained by the crowd.
							Literally—the Holo cloud was actually crowdsourced into (pre-)existence.
							If a developer wants to share their app with the world, Holo delivers.
						</p>
					</div>
				</div>
				<iframe
					class="holochain_page__cogov__video"
					src="https://www.youtube.com/embed/2FJL3ibnZlY"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen={true}/>
			</div>
		`)
	}
}
