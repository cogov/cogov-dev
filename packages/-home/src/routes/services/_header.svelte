<div class="ServicesHeader">
	<p class="ServicesHeader__title">Our Services</p>
	<p class="ServicesHeader__subtitle">
			Get in touch and see how we can help you!
	</p>
</div>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.ServicesHeader {
	padding: 12%;
	height: 85vh;
	background-image: linear-gradient(to right, rgba(#333, .4), rgba(#222, .4)), url('/assets/images/cogov__services.png');
	background-position: center;
	background-size: cover;
	@include respond(tab-port) {
		padding: 12% 4rem;
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
