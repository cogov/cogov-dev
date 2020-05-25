<div class="navOpen">
	<div class="navOpen__nav">
		<p class="navOpen__nav--item">&nbsp;</p>
		<slot name="navClose"></slot>
	</div>
	<div class="navOpen__body">
		<a href="/" class="navOpen__body--item removelink"
		>Home</a>
		<a href="/vision" class="navOpen__body--item removelink"
		>Vision</a>
		<a href="/protocol" class="navOpen__body--item removelink"
		>Protocol</a>
		<a href="/services" class="navOpen__body--item removelink"
		>Services</a>
		<a href="/team/raymond-d-powell" class="navOpen__body--item removelink"
		>Founder</a>
		<a href="/holochain" class="navOpen__body--item removelink"
		>Holochain</a>
		<a href="/declaration" class="navOpen__body--item removelink"
		>Declaration of <br/>Collaborative Governance</a>
		<a href="/connect" class="navOpen__body--item removelink"
		>Connect</a>
		<!--a href="/the-protocol" class="navOpen__body--item removelink">
			The CoGov Protocol
		</a -->
	</div>
</div>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.navOpen {
	background-color: white;
	height: 100vh;
	width: 100vw;
	z-index: 20000;
	position: fixed;
	top: 0;
	left: 0;
	&__nav {
		padding: 0 4rem;
		height: 8rem;
		// background-color: green;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&--icon {
			height: 2rem;
			cursor: pointer;
		}
	}
	&__body {
		margin-top: 12%;
		display: flex;
		flex-direction: column;
		align-items: center;
		&--item {
			margin-bottom: 2rem;
			color: #333 !important;
			font-size: 1.7rem;
			font-weight: 500;
			text-transform: uppercase;
			text-align: center;
			cursor: pointer;
			transition: all .2s;
			&:hover {
				font-weight: 600;
			}
		}
	}
}
</style>
