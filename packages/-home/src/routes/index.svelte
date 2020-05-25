<script>
import Nav from '@cogov/home-ui/Nav.svelte'
import Header from './index/_header.svelte'
import About from './index/_about.svelte'
import Details from './index/_details.svelte'
import Collaborators from './index/_collaborators.svelte'
import Footer from '@cogov/home-ui/Footer.svelte'
</script>

<svelte:head>
	<title>CoGov.Tech: Collaborative Governance Technologies</title>
	<meta property="og:title" content="CoGov.Tech: Collaborative Governance Technologies"/>
	<meta property="og:type" content="website"/>
	<meta property="og:url" content="http://cogov.tech"/>
	<meta property="og:image" content="http://cogov.tech/src/assets/images/cogov__logo--blue-large.png"/>
	<meta property="og:site_name" content="Collaborative Governance Technologies"/>
	<meta property="og:description"
				content="CoGov fosters the emergence of coherent collective intelligence by enabling the rapid iteration of governance and social coordination systems that YOU design!"/>
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
