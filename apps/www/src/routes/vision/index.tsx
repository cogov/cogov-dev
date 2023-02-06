import { var__css__replace } from '@cogov/css'
import { Footer } from '@cogov/ui'
import { Style_ } from '@ctx-core/ui-solid'
export default function C_vision() {
  return [
		<Style/>,
		<main class="vision-page page">
			<VisionHeader/>
			<VisionBody/>
			<Footer/>
		</main>
	]
	function VisionHeader() {
	  return [
			<VisionHeaderStyle/>,
			<div class="VisionHeader page-header">
				<h2 class="VisionHeader__title">Seeking the Highest Consciousness</h2>
				<h3 class="VisionHeader__subtitle">
					CoGov enables highly conscious organizational behavior
					through the rapid iterative experimentation and creation of new forms of social coordination.
				</h3>
			</div>
		]
	}
	function VisionBody() {
	  return [
			<VisionBodyStyle/>,
			<div class="visionBody page-body">
				<div class="visionBody__text">
					<p class="visionBody__title">
						Highly conscious interaction allows group decisions to be a win at all levels.
					</p>
					<p class="visionBody__body">
						Individualism vs Collectivism is a tired, old debate.
						When a duality can be identified, the Middle Way provides the greatest wisdom.
						It is through Sovereign Unity which we can transcend the false dichotomy of the Individual vs. the Group.
					</p>
				</div>
				<div class="visionBody__levels">
					<p class="visionBody__levels--title">Levels of Consciousness:</p>
					<img src="/assets/images/cogov__consciousness-levels.png" alt="" class="visionBody__levels--photo"/>
				</div>

				<div class="visionBody__text">
					<p class="visionBody__title">Achieving Higher Consciousness Through Technology</p>
					<p class="visionBody__body">
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
		]
	}
}
//language=CSS
const Style = Style_(()=>var__css__replace(`
`))
//language=CSS
const VisionHeaderStyle = Style_(()=>var__css__replace(`
	.VisionHeader {
		padding: 12%;
		height: 85vh;
		background-image: linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)), url('/assets/images/cogov__stars.png');
		background-position: center;
		background-size: cover;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.VisionHeader {
			padding: 12% 4rem;
		}
	}
	@media (max-width: var(--phone--max-width)) {
		.VisionHeader {
			padding-left: 1rem;
			padding-right: 1rem;
			background-image: linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)), url('/assets/images/cogov__stars--mobile.png');
		}
	}
	.VisionHeader__title {
		font-size: 5rem;
		font-weight: 600;
		color: white;
		margin-bottom: 1rem;
	}
	@media (max-width: var(--phone--max-width)) {
		.VisionHeader__title {
			font-size: 3.4rem;
		}
	}
	.VisionHeader__subtitle {
		font-size: 2rem;
		color: white;
		font-weight: 500;
	}
`))
//language=CSS
const VisionBodyStyle = Style_(()=>var__css__replace(`
	.visionBody {
		background-color: white;
		padding: 4rem 17%;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.visionBody {
			padding: 4rem;
		}
	}
	.visionBody__text {
		text-align: center;
		margin-bottom: 2rem;
	}
	.visionBody__title {
		font-size: 3.3rem;
		color: var(--cogov--primary--color);
		font-weight: 600;
		margin-bottom: 1rem;
	}
	@media (max-width: var(--phone--max-width)) {
		.visionBody__title {
			font-size: var(--phone--font-size);
		}
	}
	.visionBody__body {
		font-size: 1.7rem;
		color: #333;
		font-weight: 500;
	}
	@media (max-width: var(--phone--max-width)) {
		.visionBody__body {
			font-size: var(--phone--font-size);
		}
	}
	.visionBody__levels {
		margin-top: 4rem;
		margin-bottom: 4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.visionBody__levels--title {
		font-size: 2.7rem;
		text-align: center;
		font-weight: 600;
		margin-bottom: 2rem;
	}
	@media (max-width: var(--phone--font-size)) {
		.visionBody__levels--title {
			font-size: var(--phone--font-size);
		}
	}
	.visionBody__levels--photo {
		width: 50%;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.visionBody__levels--photo {
			width: 80%;
		}
	}
`))
