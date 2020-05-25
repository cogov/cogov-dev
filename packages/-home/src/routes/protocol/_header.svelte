<div class="ProtocolHeader">
	<p class="ProtocolHeader__title">The CoGov Protocol</p>
	<p class="ProtocolHeader__subtitle">
			The CoGov Protocol allows any holochain application to contain entries that share information about the operations of organizations.  It also validates those entries against the governance rules that have been previously established.
	</p>
</div>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.ProtocolHeader {
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
