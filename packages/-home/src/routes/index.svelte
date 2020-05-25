<script>
import Nav from '@cogov/home-ui/Nav.svelte'
import HomeHeader from '@cogov/home-ui/HomeHeader.svelte'
import HomeAbout from '@cogov/home-ui/HomeAbout.svelte'
import HomeDetails from '@cogov/home-ui/HomeDetails.svelte'
import HomeCollaborators from '@cogov/home-ui/HomeCollaborators.svelte'
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

	<HomeHeader></HomeHeader>

	<HomeAbout></HomeAbout>

	<HomeDetails></HomeDetails>

	<!-- home collaborators -->
	<HomeCollaborators></HomeCollaborators>

	<!-- footer -->
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
