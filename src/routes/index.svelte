<script context="module">
  export async function preload() {
    const res = await this.fetch(`${process.env.VERCEL_URL}/api/projects`);
    const projects = await res.json();

    return { projects };
  }
</script>

<script>
  import { onMount } from "svelte";
  import MagicGrid from "magic-grid";
  import ProjectTeaser from "../components/ProjectTeaser.svelte";
  import ContentOverlay from "../components/ContentOverlay.svelte";
  import AboutSection from "../components/AboutSection.svelte";
  import ContactSection from "../components/ContactSection.svelte";
  import { overlayIsOpen, project, content } from "../stores.js";

  let grid;
  let gutter = 40;

  export let projects = {};

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

<svelte:component this={ContentOverlay} {...projects[$project]} />

<div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl mt-12 lg:text-7xl lg:mt-32">
      {@html $content.project.headline}
    </h1>
  </div>

  <section
    id="projects"
    class="md:pb-48 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
    <div bind:this={grid}>

      {#each projects as project, i}
        <ProjectTeaser
          image={project.image}
          title={project.title}
          {gutter}
          categories={project.categories}
          index={i} />
      {/each}

    </div>
  </section>

  <AboutSection />

  <ContactSection />

</div>
