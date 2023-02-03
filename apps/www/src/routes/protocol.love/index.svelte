<script>
import Head from '@cogov/home-ui/Head.svelte'
import Footer from '@cogov/home-ui/Footer.svelte'
import Header from './_header.svelte'
import Content from './_content.svelte'
</script>

<svelte:head>
	<Head
		title="Protocol.Love: Fostering the emergence of a socioeconomic system infused with Loving Kindness"
	></Head>
</svelte:head>

<div class="protocol-page page">
	<Header></Header>
	<Content></Content>

	<Footer></Footer>
</div>

<style type="text/scss">
.protocol-page {
	margin-top: 7rem;
	height: 100%;
	width: 100%;
	position: relative;
}
</style>
