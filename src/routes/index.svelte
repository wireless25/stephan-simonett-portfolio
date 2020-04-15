<script>
  import ProjectTeaser from "../components/ProjectTeaser.svelte";
  import { data } from "../content.js";
</script>

<svelte:head>
  <title>Stephan Simonett | PM and Frontend Developer</title>
</svelte:head>

<div class="hero-container">
  <div class="hero-section">
    <svg
      viewBox="0 0 986 855"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      id="hero">
      <defs>
        <path
          d="M534.006317,854.1734 C704.528489,854.1734 868.346467,779.743459
          906.421525,607.494497 C924.457384,525.901502 977.689688,557.472044
          977.689688,468.290595 C977.689688,421.056731 996.262992,370.396213
          977.689688,328.212261 C907.812105,169.505295 893.191919,0.173399686
          669.980631,0.173399686 C570.029458,0.173399686 458.840677,55.6794297
          358.057239,101.508763 C260.154976,146.027937 140.574959,124.619642
          73.2975314,197.508022 C14.0567771,261.689468 0.944489844,418.376347
          0.944489844,486.442107 C0.944489844,584.944405 193.887967,668.523402
          266.990045,738.955447 C360.823918,829.362063 375.191787,854.1734
          534.006317,854.1734 Z"
          id="path-1" />
      </defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd">
        <g id="Desktop-HD" transform="translate(-120.000000, -81.000000)">
          <g
            id="1_86C7475_www__1_-removebg"
            transform="translate(120.000000, 81.000000)">
            <mask id="mask-2" fill="white">
              <use xlink:href="#path-1" />
            </mask>
            <use id="Mask" fill="#F5FF19" xlink:href="#path-1" />
            <image
              id="stephan-hero"
              mask="url(#mask-2)"
              x="265"
              y="282"
              width="519"
              height="580"
              xlink:href="/stephan-hero.png" />
          </g>
        </g>
      </g>
    </svg>

    <div>
      <h1>{data.title}</h1>
      <div>{data.byline}</div>
    </div>
  </div>
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
