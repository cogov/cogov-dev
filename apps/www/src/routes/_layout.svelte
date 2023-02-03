<script>
	import Nav from '@cogov/home-ui/Nav.svelte'
	export let segment
</script>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<style type="text/scss" global>
@import "~@cogov/home-scss/base";
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}
html {
	font-size: 62.5%;
	@include respond(big-desktop) {
		font-size: 70%;
	}
	@include respond(tab-land) {
		font-size: 56.25%;
	}
}
body {
	font-family: 'Raleway', sans-serif;
	box-sizing: border-box;
	font-weight: 400;
	line-height: 1.6;
	overflow-x: hidden;
	outline: none;
	letter-spacing: .5px;
	#sapper {
		width: 100%;
		overflow: hidden;
		main {
			width: 100%;
			overflow-x: hidden;
			overflow-y: auto;
			.page {
				margin-top: $nav-height;
				@include respond(phone) {
					margin-top: $nav-height--mobile;
				}
			}
			.page-header {
				margin-bottom: 6rem;
			}
			.page-body {
				padding: 0 17%;
				@include respond(phone) {
					padding: 0 4rem;
				}
			}
		}
	}
}
.addlink {
	text-decoration: none;
	outline: none;
	border-bottom: 1px solid $cogov-primary;
	font-weight: 600;
	color: $cogov-primary;
}
.removelink {
	text-decoration: none;
	outline: none;
	color: inherit;
}
.underline {
	border-bottom: 2px solid white;
}
</style>
