<script>
export let image
export let title
export let desc
export let icons
export let url
export let repo
export let locked

</script>

<style>
.project-teaser {
    padding: 2rem;
    border-radius: 4px;
    -webkit-box-shadow: 0 0 0 1px rgba(0,0,0,.06), 0 4px 6px -4px rgba(0,0,0,.15);
    box-shadow: 0 0 0 1px rgba(0,0,0,.06), 0 4px 6px -4px rgba(0,0,0,.15);
    background-color: #fff;
    transition: all 80ms ease-in;
    margin-bottom: 2rem;
}
@media (min-width: 800px) {
    .project-teaser {
        flex: 0 1 calc(50% - 5rem);
    }
}
.project-teaser:hover {
    -webkit-box-shadow: 0 6px 12px -2px rgba(50,50,93,.25), 0 3px 7px -3px rgba(0,0,0,.3);
    box-shadow: 0 6px 12px -2px rgba(50,50,93,.25), 0 3px 7px -3px rgba(0,0,0,.3);
    transition: all 80ms ease-in;
}

.project-teaser img {
    width: calc(100% + 4rem);
    height: auto;
    margin: -2rem -2rem 0 -2rem;
}
/* .devicons :global(.devicon-javascript-plain:hover) {
    color: #f0db4f;
}
.devicons :global(.devicon-wordpress-plain:hover) {
    color: #494949;
}
.devicons :global(.devicon-php-plain:hover) {
    color: #6181b6;
}
.devicons :global(.devicon-stripe-plain:hover path),
.devicons :global(.devicon-stripe-plain:hover polygon) {
    fill: #32325D;
} */

:global(.devicons .project-teaser .devicon-stripe-plain g path),
:global(.devicons .project-teaser .devicon-stripe-plain g polygon) {
    fill: #505050;
}
.devicons {
    display: block;
    float: left;
    padding: 0 1rem 0 0;
    font-size: 3rem;
    color: #505050;
}
.devicons-list {
    padding: 0
}
.devicons-list::after {
    content: '';
    display: block;
    clear: both;
}
.devicons :global(i) {
    transition: all 80ms ease-in;
}
.links {padding: 0;}
.links li {
    list-style: none;
}
.links li a {
    text-decoration: none;
    float: left;
    margin-right: 2rem;
}
hr {
    border: none;
    border-top: 1px solid #e1e1e1;
}
</style>

<div class="project-teaser link-slideright">
    <img class="project-image" src="{image}" alt="Screenshot of the Meribel Ski Transfer Website">
    <h3>{title}</h3>
    <p>{desc}</p>
    <hr>
    <h4>Technology used</h4>
    <ul class="devicons-list">
        {#each icons as icon}
            <li class="devicons">
                {@html icon}
            </li>
        {/each}
    </ul>
    <ul class="links">
        <li><a href="{url}" target="_blank">
            Site
        </a></li>

        {#if locked}
            <li>
                <a href aria-disabled="true">
					<span class="icon-lock"></span>
					Github
			    </a>
            </li>
        {:else}
            <li>
                <a href="{repo}" target="_blank">
                    Github
                </a>
            </li>
        {/if}
    </ul>
</div>