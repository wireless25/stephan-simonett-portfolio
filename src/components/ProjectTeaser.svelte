<script>
  export let image;
  export let title;
  export let desc;
  export let url;
</script>

<div class="project-teaser link-slideright">
  <img class="project-image" src={image} alt="Screenshot of the website" />
  <h3>{title}</h3>
  <p>{desc}</p>
  <hr />
  <h4>Technology used</h4>
  <a href={url} target="_blank" rel="noopener">Site</a>
</div>
