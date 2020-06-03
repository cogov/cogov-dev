<div class="aboutFounder page-body">
	<div class="aboutFounder__left">
		<img class="aboutFounder__left--image" src="/assets/images/cogov__founder.png" alt="">
	</div>

	<div class="aboutFounder__right">
		<div class="aboutFounder__container">
			<p class="aboutFounder__title">Raymond D. Powell, Founder</p>
			<p class="aboutFounder__body">
				Ray started programming computers in 1980 at the age of 7 and by the age of 19 was hired as a professional software engineer. Since then, he has stayed on the cutting edge of industry trends and he now applies that knowledge to co-create systems and blueprints that take on some of today’s most complex social problems.
				<br><br>

				Through the writing of code, as well as identifying and bringing together the most talented engineers and systems architects on the planet to synchronize their efforts, one of Ray’s fundamental goals is to unify people through the creation of new standards of action and interaction that more closely align with natural patterns inherent in the fabric of the Universe.
				<br><br>

				Becoming an entrepreneur and obtaining success as a young man, in parallel with awakening to the reality of a world filled with oppression, Ray set out to create true inner wealth beyond money. He has been a pioneer in truly defining sovereignty, and revealing how from that place, people can create environments of true synergistic co-creation.
				<br><br>

				From capitalist, to activist, Ray has been bringing awareness to what was really going on in the world since 2007. When Ray became a father, he was pushed him even further along in the discovery of how to create profound changes in our political, social, and economical systems.
				<br><br>

				Now, half of his year is dedicated to being a Dad to three beautiful star children and to building and organizing intentional community project on the ground, and the other half is dedicated to serving to bridge humanity into a new paradigm.
			</p>
		</div>
	</div>
</div>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.aboutFounder {
	padding: 8rem 12%;
	background-color: white;
	height: 100%;
	width: 100%;
	display: flex;
	@include respond(tab-port) {
		padding: 4rem;
		flex-direction: column;
		align-items: center;
	}
	&__left {
		width: 50%;
		position: relative;
		margin-right: 4rem;
		@include respond(tab-port) {
			width: 100%;
			margin-right: 0;
			margin-bottom: 1rem;
		}
		&--image {
			width: 100%;
			position: absolute;
			top: 0;
			right: 0;
			@include respond(tab-port) {
				position: relative;
			}
		}
	}
	&__right {
		width: 50%;
		margin-left: 4rem;
		@include respond(tab-port) {
			width: 100%;
			margin-left: 0;
		}
	}
	&__container {
		margin-bottom: 2rem;
	}
	&__title {
		font-size: 3.3rem;
		font-weight: 600;
		color: $cogov-primary;
		// text-transform: uppercase;
		margin-bottom: .5rem;
		@include respond(phone) {
			font-size: $phone-font-size;
		}
	}
	&__body {
		font-size: 1.7rem;
		color: #333;
		text-align: justify;
		@include respond(phone) {
			font-size: $phone-font-size;
		}
	}
	&__contact {
		padding: 1rem 2rem;
		border: 1.5px solid #222;
		color: #222;
		font-size: 1.2rem;
		font-weight: 600;
		background-color: transparent;
		transition: all .2s;
		cursor: pointer;
		@include respond(phone) {
			font-size: $phone-font-size;
		}
		&:hover {
			border: 1.5px solid $cogov-secondary;
			background-color: $cogov-secondary;
			color: white;
		}
	}
}
</style>
