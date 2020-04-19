<script>
  export let image;
  export let title;
  export let categories;
  export let url;
  export let gutter;
  export let index;

  import { overlayIsOpen } from "../stores.js";
  import { project } from "../stores.js";

  function openOverlay() {
    overlayIsOpen.update(overlayIsOpen => {
      if (!overlayIsOpen) {
        return (overlayIsOpen = true);
      }
      if (overlayIsOpen) {
        return (overlayIsOpen = false);
      }
    });
    project.update(value => (value = index));
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
  on:click={openOverlay}
  style="width: calc(50% - {gutter}px);"
  class="cursor-pointer focus:outline-none odd:mt-32">
  <img class="mt-32" src={image} alt={title} />
  <h3 class="font-light text-3xl text-center mt-8">{title}</h3>
  <p class="font-light text-lg text-center mt-2">{categories}</p>
</button>
