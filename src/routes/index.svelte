<script context="module">
  import client, { defaultRequestConfig as reqConfig } from '../storyblokClient'
  
  export async function preload(page, session) {
    const response = await client.getAll('cdn/stories', reqConfig)
  
    return { stories: response || [] }
  }
</script>

<script>
import ProjectTeaser from '../components/ProjectTeaser.svelte';
import content from '../../static/content.js';

export let stories = []


// VW van for the best
console.log(String.fromCharCode(32,32,32,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,13,10,32,96,47,34,34,34,34,47,34,34,34,34,47,124,34,34,124,39,124,34,34,124,124,34,34,124,32,32,32,39,32,92,46,13,10,32,47,32,32,32,32,47,32,32,32,32,47,32,124,95,95,124,32,124,95,95,124,124,95,95,124,32,32,32,32,32,32,124,13,10,47,45,45,45,45,45,45,45,45,45,45,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,61,124,13,10,124,32,92,32,32,47,86,92,32,32,47,32,32,32,32,95,46,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,124,13,10,124,40,41,92,32,92,87,47,32,47,40,41,32,32,32,95,32,32,32,32,32,32,32,32,32,32,32,32,95,32,32,32,124,13,10,124,32,32,32,92,32,32,32,47,32,32,32,32,32,47,32,92,32,32,32,32,32,32,32,32,32,32,47,32,92,32,32,124,45,40,32,41,13,10,61,67,61,61,61,61,61,61,61,61,67,61,61,95,124,32,41,32,124,45,45,45,45,45,45,45,45,124,32,41,32,95,47,61,61,93,32,95,45,123,95,125,95,41,13,10,32,92,95,92,95,47,95,95,46,46,32,32,92,95,92,95,47,95,32,92,95,92,95,47,32,92,95,92,95,47,95,95,46,95,95,46,13,10));
console.log(stories)
</script>
<style>
	.hero-container {
		padding-bottom: 4rem;
	}
	.hero-section {
		position: relative;
	}
	#hero {
		width: 125%;
		margin-left: -25%;
	}
	h1 {
		font-size: 2rem;
		font-weight: 900;
	}
	.hero-content {
		font-weight: 300;
		line-height: 1.2;
		font-size: 1.25rem;
		margin-top: 2.5rem;
	}
	@media (min-width: 800px) {
		#hero {
			width: 84%;
			margin-top: -10%;
		}
		h1 {
			font-size: 4rem;
			margin-left: -1.5rem;
		}
		.hero-content {
			left: 50%;
			top: 40%;
			font-size: 2.5rem;
			position: absolute;
			margin: 0;
		}
	}

	/* Project teaser */
	.project-teasers {
		display: flex;
		flex-direction: column;
	}
	@media (min-width: 800px) {
		.project-teasers {
			flex-direction: row;
  			flex-wrap: wrap;
			justify-content: space-between;
			font-size: 1.325rem;
			
		}
	}
	code[class*="language-"], pre[class*="language-"] {
		white-space: pre-line;
		border-radius: 30px;
	}

	@media screen and (min-width: 800px) {
		code[class*="language-"], pre[class*="language-"] {
			white-space: pre-wrap;
			border-radius: 30px;
		}
	}

	.code-block {
		min-width: 0; /* added */
  	overflow: auto;
	}
</style>

<svelte:head>
	<title>Stephan Simonett | PM and Frontend Developer</title>
	<link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-okaidia.css" rel="stylesheet" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-core.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/plugins/autoloader/prism-autoloader.min.js"></script>
</svelte:head>

<div class="hero-container">
	<div class="hero-section">
		<svg viewBox="0 0 986 855" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="hero">
			<defs>
				<path d="M534.006317,854.1734 C704.528489,854.1734 868.346467,779.743459 906.421525,607.494497 C924.457384,525.901502 977.689688,557.472044 977.689688,468.290595 C977.689688,421.056731 996.262992,370.396213 977.689688,328.212261 C907.812105,169.505295 893.191919,0.173399686 669.980631,0.173399686 C570.029458,0.173399686 458.840677,55.6794297 358.057239,101.508763 C260.154976,146.027937 140.574959,124.619642 73.2975314,197.508022 C14.0567771,261.689468 0.944489844,418.376347 0.944489844,486.442107 C0.944489844,584.944405 193.887967,668.523402 266.990045,738.955447 C360.823918,829.362063 375.191787,854.1734 534.006317,854.1734 Z" id="path-1"></path>
			</defs>
			<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<g id="Desktop-HD" transform="translate(-120.000000, -81.000000)">
					<g id="1_86C7475_www__1_-removebg" transform="translate(120.000000, 81.000000)">
						<mask id="mask-2" fill="white">
							<use xlink:href="#path-1"></use>
						</mask>
						<use id="Mask" fill="#F5FF19" xlink:href="#path-1"></use>
						<image id="stephan-hero" mask="url(#mask-2)" x="265" y="282" width="519" height="580" xlink:href="/stephan-hero.png"></image>
					</g>
				</g>
			</g>
		</svg>

		<div class="hero-content">
			<h1>{content.title}</h1>
			<div>{content.byline}</div>
			<div>{stories}</div>
		</div>
	</div>
</div>

<section id="projects">
	<h2>{content.project.headline}</h2>
	<div class="project-teasers">

		{#each content.projects as project}
		<ProjectTeaser 
			image={project.image}
			title={project.title}
			desc={project.desc}
			icons={project.icons}
			url={project.url}
			repo={project.repo}
			locked={project.locked} />
		{/each}

	</div>
</section>

<section>
	<div class="content link-slideright">
		<h2>{content.about.headline}</h2>
		<p>{@html content.about.content}</p>
	</div>
	<div class="code-block">
		<pre class="language-javascript"><code class="language-javascript"><span></span>{@html content.about.code}</code></pre>
	</div>
</section>