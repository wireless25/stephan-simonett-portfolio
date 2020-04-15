<script>
  import ProjectTeaser from "../components/ProjectTeaser.svelte";
  import { data } from "../content.js";
</script>

<svelte:head>
  <title>Stephan Simonett | PM and Frontend Developer</title>
</svelte:head>

<div>
  <h1>{data.title}</h1>
  <div>{data.byline}</div>
</div>

<section>
  <h2>{data.project.headline}</h2>
  <div>

    {#each data.projects as project}
      <ProjectTeaser
        image={project.image}
        title={project.title}
        desc={project.desc}
        url={project.url} />
    {/each}

  </div>
</section>

<section>
  <div>
    <h2>{data.about.headline}</h2>
    <p>
      {@html data.about.data}
    </p>
  </div>
</section>
