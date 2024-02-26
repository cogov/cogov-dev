import './holochain.css.js'
import { class_ } from 'ctx-core/html'
import { raw_ } from 'relementjs'
import { main_ } from 'relementjs/html'
import type { page_params_T } from '../_types.js'
import { main_class } from '../css/index.js'
import { site__footer_ } from '../footer/index.js'
import { layout__doc_html_ } from '../layout/index.js'
import holo_logo_png from '../public/assets/images/holo-logo.png'
import holochain_logo_png from '../public/assets/images/holochain-logo.png'
export function holochain__doc_html_($p:page_params_T) {
	return (
		layout__doc_html_($p,
			main_({
				class: class_(
					'holochain-page',
					'page',
					main_class)
			}, [
				header_(),
				cogov_(),
				site__footer_()
			]))
	)
	function header_() {
		// language=html
		return raw_(`
			<div class="holochain_page__header page__header mb-24">
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
							<img class="holochain_page__cogov__logo" src="${holochain_logo_png}"/>
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
							<img class="holochain_page__cogov__logo" src="${holo_logo_png}"/>
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
