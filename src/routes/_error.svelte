<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
	.error-box {
		margin: 3rem 0;
		min-height: 80vh;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.error-code {
		font-size: 10rem;
		text-align: center;
	}
	.message {
		font-size: 2rem;
		text-align: center;
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="error-box">
	<h1 class="error-code">{status}</h1>
	<p class="message">{error.message}</p>
	<img src="https://media.giphy.com/media/Q09lToTa0H3Es/giphy.gif" alt="Big Lebowski with a glass"/>

	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
</div>

