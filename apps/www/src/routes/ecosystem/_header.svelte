<div class="ecosystemHeader">
	<p class="ecosystemHeader__title">A Collectively Governed Current-See Ecosystem</p>
	<p class="ecosystemHeader__subtitle">
		“From each according to his/her ability, to each according to his/her ability to serve the greater whole.”
	</p>
</div>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.ecosystemHeader {
	padding: 12%;
	height: 85vh;
	background-image: linear-gradient(to right, rgba(#333, .4), rgba(#222, .4)), url('/assets/images/cogov__happy-community.jpg');
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
