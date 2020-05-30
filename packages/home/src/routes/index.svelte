<script>
import Head from '@cogov/home-ui/Head.svelte'
import Nav from '@cogov/home-ui/Nav.svelte'
import Header from './index/_header.svelte'
import About from './index/_about.svelte'
import Details from './index/_details.svelte'
import Collaborators from './index/_collaborators.svelte'
import Footer from '@cogov/home-ui/Footer.svelte'
</script>

<svelte:head>
	<Head></Head>
</svelte:head>

<div class="home-page">
	<Nav></Nav>

	<Header></Header>

	<About></About>

	<Details></Details>

	<Collaborators></Collaborators>

	<Footer></Footer>
</div>

<style type="text/scss">
.home-page {
	// margin-top: 7rem;
	height: 100%;
	width: 100%;
	position: relative;
}
</style>
