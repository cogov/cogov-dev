<div class="HomeHeader">
	<!-- backdrop -->
	<div class="HomeHeader__backdrop--cover"></div>
	<div class="HomeHeader__backdrop">
		<video class="HomeHeader__backdrop--video" playsinline autoplay muted loop>
			<source src="/assets/videos/sacred-geo.mp4" type="video/mp4">
		</video>
	</div>

	<div class="HomeHeader__content">
		<!-- <img class="HomeHeader__logo" src="/assets/images/cogov__home-logo.png" /> -->
		<a href="#HomeAbout" class="removelink"
		><img class="HomeHeader__logo"
					src="/assets/images/cogov__home-logo.png" alt="CoGov"/></a>
		<h2 class="HomeHeader__title">Collaborative Governance Technologies</h2>

		<h3 class="HomeHeader__subtitle">
			CoGov fosters the emergence of coherent collective intelligence by enabling the rapid iteration
			of governance and social coordination systems that YOU design!
		</h3>
	</div>
</div>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.HomeHeader {
	position: relative;
	height: 98vh;
	&__backdrop {
		position: absolute;
		top: 0;
		left: 0;
		height: 98vh;
		width: 100vw;
		&--cover {
			position: absolute;
			top: 0;
			left: 0;
			height: 98vh;
			width: 100vw;
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
		top: 30%;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
		z-index: 300;
		height: 50rem;
		width: 70vw;
		@include respond(tab-port) {
			top: 24%;
			width: 85vw;
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
</style>
