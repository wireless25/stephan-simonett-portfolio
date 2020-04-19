<script>
  import { onMount } from "svelte";
  import MagicGrid from "magic-grid";
  import ProjectTeaser from "../components/ProjectTeaser.svelte";
  import content from "../content.js";
  import ContentOverlay from "../components/ContentOverlay.svelte";
  import AboutSection from "../components/AboutSection.svelte";
  import ContactSection from "../components/ContactSection.svelte";
  import { overlayIsOpen } from "../stores.js";
  import { project } from "../stores.js";

  let grid;
  let gutter = 40;

  onMount(() => {
    let magicGrid = new MagicGrid({
      container: grid,
      static: true,
      animate: false,
      maxColumns: 2,
      gutter: gutter
    });

    magicGrid.listen();
  });
</script>

<svelte:head>
  {#if $overlayIsOpen}
    <style>
      body {
        overflow: hidden;
      }
    </style>
  {:else}
    <style>
      body {
        overflow: auto;
      }
    </style>
  {/if}

  <title>Stephan Simonett | PM and Frontend Developer</title>
</svelte:head>

<svelte:component this={ContentOverlay} {...content.projects[$project]} />

<div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-2xl lg:text-7xl mt-32">
      {@html content.title}
    </h1>
  </div>

  <section id="projects" class="pb-48 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div bind:this={grid}>

      {#each content.projects as project, i}
        <ProjectTeaser
          image={project.image}
          title={project.title}
          {gutter}
          categories={project.categories}
          url={project.url}
          index={i} />
      {/each}

    </div>
  </section>

  <AboutSection />

  <ContactSection />

</div>
