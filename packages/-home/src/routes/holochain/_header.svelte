<div class="HolochainHeader">
	<p class="HolochainHeader__title">CoGov is Powered By Holochain</p>
	<p class="HolochainHeader__subtitle">
		Holochain is the new Internet. Holo is the new Cloud.
	</p>
</div>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.HolochainHeader {
	padding: 12%;
	height: 85vh;
	background-image: linear-gradient(to right, rgba(#333, .4), rgba(#222, .4)), url('/assets/images/cogov__northerlights.png');
	background-position: center;
	background-size: cover;
	@include respond(tab-port) {
		padding: 12% 4rem;
	}
	@include respond(phone) {
		background-image: linear-gradient(to right, rgba(#333, .4), rgba(#222, .4)), url('/assets/images/cogov__northerlights--mobile.png');
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
	// &__left {
	//     margin-right: 3rem;
	//     width: 50%;
	// }
	// &__video {
	//     width: 100%;
	//     height: 100%;
	// }
	// &__right {
	//     width: 50%;
	//     margin-left: 3rem;
	// }
	// &__title {
	//     font-size: 3.3rem;
	//     font-weight: 600;
	//     color: $cogov-grey;
	//     margin-bottom: 1rem;
	// }
	// &__body {
	//     font-size: 1.7rem;
	//     font-weight: 100500;
	// }
}
</style>
