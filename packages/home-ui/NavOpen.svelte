<script>
import { createEventDispatcher } from 'svelte'
const dispatch = createEventDispatcher()
function dispatch__click(event) {
  dispatch('click', event)
}
</script>

<div class="navOpen">
	<div class="navOpen-nav">
		<p class="navOpen-nav-item">&nbsp;</p>
		<slot name="navClose"></slot>
	</div>
	<div class="navOpen-body">
		<a href="/" class="navOpen-body-item removelink" on:click={dispatch__click}
		>Home</a>
		<a href="/vision" class="navOpen-body-item removelink" on:click={dispatch__click}
		>Vision</a>
		<a href="/protocol.love" class="navOpen-body-item removelink" on:click={dispatch__click}
		>Protocol</a>
		<a href="/services" class="navOpen-body-item removelink" on:click={dispatch__click}
		>Services</a>
		<a href="/team/raymond-d-powell" class="navOpen-body-item removelink" on:click={dispatch__click}
		>Founder</a>
		<a href="/holochain" class="navOpen-body-item removelink" on:click={dispatch__click}
		>Holochain</a>
		<a href="/declaration" class="navOpen-body-item removelink" on:click={dispatch__click}
		>Declaration</a>
		<a href="/connect" class="navOpen-body-item removelink" on:click={dispatch__click}
		>Connect</a>
		<!--a href="/the-protocol" class="navOpen-body-item removelink">
			The CoGov Protocol
		</a -->
	</div>
</div>

<style type="text/scss" global>
@import "~@cogov/home-scss/base";
.navOpen {
	background-color: white;
	height: calc(100vh - #{$nav-height});
	width: 100vw;
	z-index: 20000;
	position: fixed;
	top: $nav-height;
	left: 0;
	&-nav {
		padding: 0 1rem;
		height: 8rem;
		// background-color: green;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&-icon {
			height: 2rem;
			cursor: pointer;
		}
	}
	&-body {
		display: flex;
		flex-direction: column;
		align-items: center;
		&-item {
			margin-bottom: 1.6rem;
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
