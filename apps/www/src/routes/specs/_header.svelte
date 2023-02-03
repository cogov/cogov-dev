<div class="techSpecsHeader">
	<p class="techSpecsHeader__title">Technical Specifications</p>
	<p class="techSpecsHeader__subtitle">
			CoGov is optimized for <a href="/holochain" class="removelink" style="text-decoration: underline">Holochain</a>.
	</p>
</div>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.techSpecsHeader {
	padding: 12%;
	height: 85vh;
	background-image: linear-gradient(to right, rgba(#333, .4), rgba(#222, .4)), url('/assets/images/cogov__protocol.png');
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
			font-size: 3.4rem;
		}
	}
	&__subtitle {
		font-size: 2rem;
		color: white;
		font-weight: 500;
	}
}
</style>
