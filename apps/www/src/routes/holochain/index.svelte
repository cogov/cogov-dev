<script>
import Footer from '@cogov/home-ui/Footer.svelte'
import Header from './_header.svelte'
import CoGov from './_cogov.svelte'
</script>

<div class="holochain-page page">
	<Header></Header>

	<CoGov></CoGov>

	<Footer></Footer>
</div>

<style type="text/scss">
.holochain-page {
	margin-top: 7rem;
	height: 100%;
	width: 100%;
	position: relative;
}
</style>
