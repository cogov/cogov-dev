<script>
import Nav from '@cogov/home-ui/Nav.svelte'
import Footer from '@cogov/home-ui/Footer.svelte'
import Header from './_header.svelte'
import Content from './_content.svelte'
</script>

<div class="services-page">
	<Nav></Nav>

	<Header></Header>

	<Content></Content>

	<Footer></Footer>
</div>

<style type="text/scss">
.services-page {
	margin-top: 7rem;
	height: 100%;
	width: 100%;
	position: relative;
}
</style>
