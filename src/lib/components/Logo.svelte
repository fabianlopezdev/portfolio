<script lang='ts'>
	import scrollTo from '../../utils/functions';
  export let fontSize: Number;

</script>

<h1 class="h1-font" style="font-size: {fontSize}rem">
	<a href="#home"  on:click|preventDefault={(e) => scrollTo(e)}
		>fab<span style="color: blue">. </span>
	</a>
</h1>

<style>
	.h1-font {
		font-family: 'League Spartan', sans-serif;
		font-weight: 900;
		display: inline-block;
		position: relative;
		z-index: 1;
		letter-spacing: -0.1rem;
		margin: 0;
	}
  
  a {
    color: var(--clr-font);
  }
</style>