<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="error-box">
  <h1 class="error-code">{status}</h1>
  <p class="message">{error.message}</p>
  <img
    src="https://media.giphy.com/media/Q09lToTa0H3Es/giphy.gif"
    alt="Big Lebowski with a glass" />

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</div>
