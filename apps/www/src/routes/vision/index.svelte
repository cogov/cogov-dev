<script>
import VisionHeader from './_header.svelte'
import VisionBody from './_body.svelte'
import Footer from '@cogov/home-ui/Footer.svelte'
</script>

<div class="vision-page page">
	<VisionHeader></VisionHeader>
	<VisionBody></VisionBody>

	<Footer></Footer>
</div>

<style type="text/scss">
.vision-page {
	margin-top: 7rem;
	height: 100%;
	width: 100%;
	position: relative;
}
</style>
