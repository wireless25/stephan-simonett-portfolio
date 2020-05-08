<script>
  import TailwindCss from "../components/TailwindCss.svelte";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<TailwindCss />

<Nav />

<main>
  <slot />
</main>

<Footer />
