<script>
import Footer from '@cogov/home-ui/Footer.svelte'
import Header from './_header.svelte'
import Content from './_content.svelte'
</script>

<div class="specs">
	<Header></Header>
	<Content></Content>

	<Footer></Footer>
</div>

<style type="text/scss">
.specs {
    margin-top: 7rem;
    height: 100%;
    width: 100%;

    position: relative;
}
</style>
