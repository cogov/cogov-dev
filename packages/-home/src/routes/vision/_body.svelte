<div class="VisionBody">
	<div class="VisionBody__text">
		<p class="VisionBody__title">Highly conscious interaction allows group decisions to be a win at all levels.</p>
		<p class="VisionBody__body">
		Individualism vs Collectivism is a tired, old debate.
		When a duality can be identified, the Middle Way provides the greatest wisdom.
		It is through Sovereign Unity which we can transcend the false dichotomy of the Individual vs. the Group.
		</p>
	</div>
	<div class="VisionBody__levels">
		<p class="VisionBody__levels--title">Levels of Consciousness:</p>
		<img src="../../../assets/images/cogov__consciousness-levels.png" alt="" class="VisionBody__levels--photo">
	</div>

	<div class="VisionBody__text">
		<p class="VisionBody__title">Achieving Higher Consciousness Through Technology</p>
		<p class="VisionBody__body">
			Technology is neutral - it stimulates discovery and innovation along the lines of the intentions of the humans that implement it.
			Wise utilization of technology can lead to a single, distributed, interconnected, species-level “brain” allowing us to sense and meet needs on a global scale.
			<br><br>CoGov ensures that a feedback loop exists between digital technology the wisdom of the highest human consciousness (organic intelligence). Cogov uses digital technology
			to help remind us of the technology we already have built into our DNA. We already know how to coordinate as tribes,
			and as alliances of tribes. CoGov just helps us remember.
		</p>
	</div>
</div>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.VisionBody {
	background-color: white;
	padding: 4rem 17%;
	@include respond(tab-port) {
		padding: 4rem;
	}
	&__text {
		text-align: center;
		margin-bottom: 2rem;
	}
	&__title {
		font-size: 3.3rem;
		color: $cogov-primary;
		font-weight: 600;
		margin-bottom: 1rem;
	}
	&__body {
		font-size: 1.7rem;
		color: #333;
		font-weight: 500;
	}
	&__levels {
		margin-top: 4rem;
		margin-bottom: 4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		&--title {
			font-size: 2.7rem;
			text-align: center;
			font-weight: 600;
			margin-bottom: 2rem;
		}
		&--photo {
			width: 50%;
			@include respond(tab-port) {
				width: 80%;
			}
		}
	}
}
</style>
