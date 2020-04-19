<script>
  import { fade, fly } from "svelte/transition";
  import { overlayIsOpen } from "../stores.js";

  export let image;
  export let title;
  export let categories;
  export let url;
  export let desc;
  export let intro;
  export let screenshot;

  let overlay = false;

  overlayIsOpen.subscribe(value => {
    overlay = value;
  });

  function closeOverlay(event) {
    if (event.type === "click" || event.key === "Escape") {
      overlayIsOpen.update(value => (value = false));
    }
  }
</script>

<svelte:window on:keyup={closeOverlay} />

{#if overlay}
  <button
    transition:fade={{ duration: 200 }}
    on:click={closeOverlay}
    class="block bg-white fixed top-0 right-0 bottom-0 left-0 w-full z-20
    opacity-75" />
  <div
    transition:fly={{ x: 100, duration: 500 }}
    class="w-11/12 md:w-10/12 xl:w-9/12 top-0 bottom-0 right-0 fixed
    overflow-scroll bg-white z-50 shadow-xl"
    id="overlay">
    <button on:click={closeOverlay}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        class="text-gray-900 fill-current absolute right-8 top-8">
        <path
          d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17
          12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
        <path d="M0 0h48v48H0z" fill="none" />
      </svg>
    </button>
    <div class="max-w-7xl px-32">
      <div class="mt-32 max-w-3xl">
        <h2 class="font-black text-6xl">{title}</h2>
        <p class="font-light text-4xl text-gray-500 mt-4 leading-tight">
          {intro}
        </p>
        <p class="text-2xl mt-16">{desc}</p>
        <a
          class="group inline-flex mt-10 items-center"
          rel="noopener"
          target="_blank"
          href={url}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-blue-800 fill-current inline opacity-0
            group-hover:opacity-100 left-0 transition-all duration-300 -ml-2
            group-hover:ml-0"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
            <path d="M0-.25h24v24H0z" fill="none" />
          </svg>
          <span
            class="inline-block font-black text-blue-brand text-2xl
            hover:text-blue-800 transition-all duration-300 -ml-5 hover:ml-0">
            {url}
          </span>
        </a>
      </div>
      <img class="mt-20 shadow-2xl" src={screenshot} alt="" />
    </div>
  </div>
{/if}
