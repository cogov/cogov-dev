<script>
import Nav from '@cogov/home-ui/Nav.svelte'
import Footer from '@cogov/home-ui/Footer.svelte'
import Quote from './_quote.svelte'
import About from './_about.svelte'
</script>

<div class="raymond-d-powell-page">
	<Nav></Nav>

	<Quote></Quote>

	<About></About>

	<Footer></Footer>
</div>

<style type="text/scss">
.raymond-d-powell-page {
	margin-top: 7rem;
	height: 100%;
	width: 100%;
	position: relative;
}
</style>
