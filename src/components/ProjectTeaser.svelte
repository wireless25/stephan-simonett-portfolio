<script>
  import { onMount } from "svelte";
  import { overlayIsOpen } from "../stores.js";
  import { project } from "../stores.js";

  export let image;
  export let title;
  export let categories;
  export let gutter;
  export let index;

  let teaser;

  const setTeaserWidth = () => {
    const width = window.innerWidth;
    width >= 768
      ? (teaser.style.width = `calc(50% - ${gutter}px)`)
      : (teaser.style.width = "100%");
    teaser.classList.add("block");
    teaser.classList.remove("hidden");
  };

  onMount(() => {
    setTeaserWidth();
    window.addEventListener("resize", setTeaserWidth);
  });

  function openOverlay() {
    project.update(value => index);
    overlayIsOpen.update(overlayIsOpen => {
      if (!overlayIsOpen) {
        return (overlayIsOpen = true);
      }
      if (overlayIsOpen) {
        return (overlayIsOpen = false);
      }
    });
  }
</script>

<style>
  img {
    transition: all 0.2s ease-in-out;
  }
  img:hover {
    transform: scale(1.01);
  }
</style>

<button
  bind:this={teaser}
  on:click={openOverlay}
  class="hidden cursor-pointer focus:outline-none md:odd:mt-32">
  <img class="mt-8 md:mt-32" src={image} alt={title} />
  <h3 class="font-light text-2xl md:text-3xl text-center mt-4 md:mt-8">
    {title}
  </h3>
  <p class="font-light text-base md:text-lg text-center mt-1 md:mt-2">
    {categories}
  </p>
</button>
