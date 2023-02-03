<script>
import { createEventDispatcher } from 'svelte'
const dispatch = createEventDispatcher()
</script>

<div class="MenuHandle" on:click={ event => dispatch('click', event) }>
	<img src="/assets/images/cogov__menu.png" alt="" class={$$props.class}>
</div>

<style type="text/scss" global>
.MenuHandle {
	img {
		height: 2rem;
	}
}
</style>
