<script lang='ts'>
	function scrollTo(event: Event) {
		const target = event.target as HTMLAnchorElement
		const element = document.querySelector(target.getAttribute('href') as string);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
  import { ToggleDark } from '$components'
</script>

<nav>
	<ul>
		<li><a href="#about" on:click|preventDefault={scrollTo}>About</a></li>
		<li><a href="#projects" on:click|preventDefault={scrollTo}>Projects</a></li>
		<li class='svg-size'><a href="#contact" on:click|preventDefault={scrollTo}>Contact</a></li>
	</ul>
</nav>


<style>
  ul {
    display: flex;
		margin:0;
		padding:0;	
    gap: 2em;

  }
	li {
		list-style: none;
	}
	a {
    text-decoration: none;
    color: inherit;
    font-size: 1em;
  }

</style>
