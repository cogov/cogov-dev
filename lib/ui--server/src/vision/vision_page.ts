import { type Node_T, raw_ } from 'relementjs'
import { main_ } from 'relementjs/html'
import { asset_path_a_ } from 'relysjs'
import type { page_params_T } from '../_types.js'
import { footer_c_ } from '../footer/index.js'
import { layout_c_ } from '../layout/index.js'
import './vision_page.css.js'
const [
	cogov__consciousness_levels_png,
] = await asset_path_a_(
	import('../public/assets/images/cogov__consciousness-levels.png'),
)
export function vision_page_($p:page_params_T) {
	return (
		layout_c_($p,
			main_({ class: 'vision-page page' },
				header_(),
				content_(),
				footer_c_(),))
	) as Node_T<'server', HTMLElementTagNameMap['main']>
	function header_() {
		// language=html
		return raw_(`
			<div class="vision_page__header page__header">
				<h2 class="vision_page__header__title">Seeking the Highest Consciousness</h2>
				<h3 class="vision_page__header__subtitle">
					CoGov enables highly conscious organizational behavior
					through the rapid iterative experimentation and creation of new forms of social coordination.
				</h3>
			</div>
		`)
	}
	function content_() {
		// language=html
		return raw_(`
			<div class="vision_page__content page__content">
				<div class="vision_page__content__text">
					<p class="vision_page__content__title">
						Highly conscious interaction allows group decisions to be a win at all levels.
					</p>
					<p class="vision_page__content__body">
						Individualism vs Collectivism is a tired, old debate.
						When a duality can be identified, the Middle Way provides the greatest wisdom.
						It is through Sovereign Unity which we can transcend the false dichotomy of the Individual vs. the Group.
					</p>
				</div>
				<div class="vision_page__content__levels">
					<p class="vision_page__content__levels__title">Levels of Consciousness:</p>
					<img src="${cogov__consciousness_levels_png}" alt="" class="vision_page__content__levels__photo"/>
				</div>
				<div class="vision_page__content__text">
					<p class="vision_page__content__title">Achieving Higher Consciousness Through Technology</p>
					<p class="vision_page__content__body">
						Technology is neutral - it stimulates discovery and
						innovation along the lines of the intentions of the humans that implement it.
						Wise utilization of technology can lead to a single, distributed, interconnected,
						species-level “brain” allowing us to sense and meet needs on a global scale.
						<br/><br/>
						CoGov ensures that a feedback loop exists between digital technology the
						wisdom of the highest human consciousness (organic intelligence).
						Cogov uses digital technology to help remind us of the technology we already have built into our DNA.
						We already know how to coordinate as tribes, and as alliances of tribes.
						CoGov just helps us remember.
					</p>
				</div>
			</div>
		`)
	}
}
