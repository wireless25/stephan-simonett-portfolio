<script>
	export let segment;
</script>

<style>
	nav {
		font-weight: 300;
		padding: 0 1em;
		z-index: 2;
		position: relative;
	}
@media (min-width: 75rem) {
	nav {
		padding: 0;
		width: 75rem;
		margin: 0 auto;
	}
}

ul {
	margin: 0;
	padding: 0;
	width: fit-content;
	margin: 0 0 0 auto;
}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected,
	a:hover {
		position: relative;
		display: inline-block;
	}

	.selected::after,
	a:hover::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 8px;
		background-color: #F5FF19;
		display: block;
		bottom: 1.25rem;
		left: 0;
		z-index: -1;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5rem;
		display: block;
		font-size: 1.125rem;
		margin: 0 1.25rem;
	}
	li:last-child a {
		margin-right: 0;
	}
</style>

<nav>
	<ul id="menu">
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>Home</a></li>
		<!-- <li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>Projects</a></li> -->
		<!-- <li><a class='{segment === "about" ? "selected" : ""}' href='about'>About</a></li>
		<li><a class='{segment === "contact" ? "selected" : ""}' href='contact'>Contact</a></li> -->
		<li><a href='https://www.linkedin.com/in/stephansimonett' target="_blank" class="linkedin">LinkedIn</a></li>
		<li><a href='https://github.com/wireless25' target="_blank" class="github">Github</a></li>
		<!-- <li><a class='{segment === "about" ? "selected" : ""}' href='about'>About</a></li> -->
	</ul>
</nav>