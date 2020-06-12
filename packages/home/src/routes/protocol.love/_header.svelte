<div class="protocolLoveHeader page-header">
	<p class="protocolLoveHeader__title">Protocol.Love</p>
	<p class="protocolLoveHeader__subtitle">
			Protocol.Love fosters the emergence of a socioeconomic system infused with <a
		href="https://medium.com/@rayzer42/cogov-presents-a-digital-protocol-for-scaling-loving-kindness-1da6605f88d9"
		target="_blank" class="removelink" style="text-decoration: underline">Loving Kindness</a>
			for organizations who choose a commitment to <a
		href="https://medium.com/@rayzer42/cogov-presents-a-digital-protocol-for-scaling-loving-kindness-1da6605f88d9"
		target="_blank" class="removelink" style="text-decoration: underline">Vulnerable Transparency</a>.
	</p>
</div>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.protocolLoveHeader {
	padding: 12%;
	height: 85vh;
	background-image: linear-gradient(to right, rgba(#333, .4), rgba(#222, .4)), url('/assets/images/cogov__heart-circuit-board.jpg');
	background-image: linear-gradient(to right, rgba(#333, .4), rgba(#222, .4)), url('/assets/images/cogov__heart-circuit-board.jpg');
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
