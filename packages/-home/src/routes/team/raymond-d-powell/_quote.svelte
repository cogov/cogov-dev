<div class="FounderQuote">
	<p class="FounderQuote__title">Raymond D. Powell
	</p>
	<p class="FounderQuote__quote">
		"The CoGov mission is to build systems that allow humans to recognize the
			possibility of a new way of life on the planet, and that help forge a path
			in that direction."
	</p>
</div>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.FounderQuote {
	padding: 12%;
	height: 85vh;
	background-image: linear-gradient(to right, rgba(#333, .4), rgba(#222, .4)), url('/assets/images/cogov__background--founder.png');
	background-position: center;
	background-size: cover;
	@include respond(tab-port) {
		padding: 12% 4rem;
	}
	@include respond(tab-port) {
		background-image: linear-gradient(to right, rgba(#333, .4), rgba(#222, .4)), url('/assets/images/cogov__background--founder--mobile.png');
	}
	&__title {
		font-size: 5rem;
		color: white;
		font-weight: 600;
		@include respond(phone) {
			font-size: 4rem;
		}
	}
	&__quote {
		font-size: 2rem;
		color: white;
		font-weight: 500;
	}
}
</style>
