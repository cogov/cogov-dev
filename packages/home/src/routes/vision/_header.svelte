<div class="VisionHeader page-header">
	<h2 class="VisionHeader__title">Seeking the Highest Consciousness</h2>
	<h3 class="VisionHeader__subtitle">
		CoGov enables highly conscious organizational behavior through the rapid iterative experimentation and creation of new forms of social coordination.
	</h3>
</div>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.VisionHeader {
	padding: 12%;
	height: 85vh;
	background-image: linear-gradient(to right, rgba(#333, .4), rgba(#222, .4)), url('/assets/images/cogov__stars.png');
	background-position: center;
	background-size: cover;
	@include respond(tab-port) {
		padding: 12% 4rem;
	}
	@include respond(phone) {
		padding-left: 1rem;
		padding-right: 1rem;
		background-image: linear-gradient(to right, rgba(#333, .4), rgba(#222, .4)), url('/assets/images/cogov__stars--mobile.png');
	}
	&__title {
		font-size: 5rem;
		font-weight: 600;
		color: white;
		margin-bottom: 1rem;
		@include respond(phone) {
			font-size: 4rem;
		}
	}
	&__subtitle {
		font-size: 2rem;
		color: white;
		font-weight: 500;
	}
}
</style>
