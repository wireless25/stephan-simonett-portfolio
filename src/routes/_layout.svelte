<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 75rem;
		padding: 1rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
	@media (min-with: 75rem) {
		main {
			padding: 0px;	
		}
	}
	#site-border {
		border-top: solid 4px #0041FF;
		position: relative;
		z-index: 1;
	}
</style>

<div id="site-border"></div>
<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer />