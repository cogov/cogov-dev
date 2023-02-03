<script>
import Footer from '@cogov/home-ui/Footer.svelte'
import Header from './_header.svelte'
import Content from './_content.svelte'
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Muli|Parisienne|Roboto&display=swap" rel="stylesheet">
</svelte:head>

<div class="declaration-page page">
	<Header></Header>
	<Content></Content>

	<Footer></Footer>
</div>

<style type="text/scss">
.declaration-page {
	margin-top: 7rem;
	height: 100%;
	width: 100%;
	position: relative;
}
</style>
