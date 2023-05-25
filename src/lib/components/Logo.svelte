<script>
	import scrollTo from '../../utils/functions';
  export let fontSize;

  console.log(fontSize)
</script>

<h1 class="h1-font" style="font-size: {fontSize}rem">
	<a href="#home"  on:click|preventDefault={(e) => scrollTo(e)}
		>fab<span style="color: blue">. </span>
	</a>
</h1>

<style>
	.h1-font {
		font-family: 'League Spartan', sans-serif;
		/* font-size: var(--fontSize); */
		font-weight: 900;
		display: inline-block;
		position: relative;
		z-index: 1;
		color: var(--clr-font);
		letter-spacing: -0.1rem;
		margin: 0;
	}
</style>
