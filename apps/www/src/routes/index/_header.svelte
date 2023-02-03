<div class="homeHeader page-header">
	<!-- backdrop -->
	<div class="homeHeader__backdrop--cover"></div>
	<div class="homeHeader__backdrop">
		<video class="homeHeader__backdrop--video" playsinline autoplay muted loop>
			<source src="/assets/videos/sacred-geo.mp4" type="video/mp4">
		</video>
	</div>

	<div class="homeHeader__content">
		<!-- <img class="homeHeader__logo" src="/assets/images/cogov__home-logo.png" /> -->
		<a href="#homeAbout" class="removelink"><img class="homeHeader__logo"
																								 src="/assets/images/cogov__home-logo.png"/></a>
		<h2 class="homeHeader__title">Collaborative Governance Technologies</h2>

		<h3 class="homeHeader__subtitle">
				Modeling Scalable Social Coordination Systems Infused with <a
			href="https://medium.com/@rayzer42/cogov-presents-a-digital-protocol-for-scaling-loving-kindness-1da6605f88d9"
			class="removelink underline" target="_blank">Loving Kindness</a>
			<!-- CoGov fosters the emergence of coherent collective intelligence by enabling the rapid iteration
			of governance and social coordination systems that YOU design! -->
		</h3>
	</div>
</div>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.homeHeader {
	position: relative;
	height: 98vh;
	&__backdrop {
		position: absolute;
		top: 0;
		left: 0;
		height: 98vh;
		width: 100%;
		&--cover {
			position: absolute;
			top: 0;
			left: 0;
			height: 98vh;
			width: 100%;
			background-image: linear-gradient(to right, $cogov-primary, $cogov-grey);
			opacity: .9;
			z-index: 200;
		}
		&--video {
			background-color: grey;
			height: 100%;
			width: 100%;
			object-fit: cover;
			z-index: 10;
		}
	}
	&__content {
		position: absolute;
		top: 18%;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
		z-index: 300;
		height: 50rem;
		width: 90%;
		@include respond(tab-port) {
			top: 13%;
			padding: 0 4rem;
		}
		@include respond(phone) {
			padding: 0;
		}
	}
	&__logo {
		height: 12rem;
		margin-bottom: 1rem;
		cursor: pointer;
		// animation: animateLogo infinite 1s;
		@include respond(tab-port) {
			height: 9rem;
		}
	}
	&__title {
		color: white;
		font-size: 4.2rem;
		font-weight: 600;
		text-align: center;
		margin-bottom: 1rem;
		@include respond(tab-port) {
			font-size: 3.6rem;
		}
	}
	&__subtitle {
		color: white;
		font-size: 2rem;
		font-weight: 400;
		padding: 0 9%;
		margin-bottom: 4rem;
		@include respond(tab-port) {
			padding: 0;
		}
	}
	&__description {
		color: white;
		font-size: 1.4rem;
		font-weight: 500;
	}
	&__action {
		border: 3px solid white;
		border-radius: 100px;
		color: $cogov-primary;
		color: white;
		font-size: 17px;
		font-weight: 600;
		text-transform: uppercase;
		background-color: transparent;
		padding: 1.5rem 3rem;
		outline: none;
		cursor: pointer;
		transition: all .2s;
		&:hover {
			transform: scale(1.02);
		}
	}
}
@keyframes animateLogo {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.05);
	}
	100% {
		transform: scale(1);
	}
}
@keyframes animateLogo {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.05);
	}
	100% {
		transform: scale(1);
	}
}
</style>
