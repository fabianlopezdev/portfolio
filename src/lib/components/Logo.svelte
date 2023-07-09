<script lang='ts'>
	import scrollTo from '../../utils/functions';
  export let fontSize: Number;
	export let letterSpacing: Number;
</script>

<h2 class="h2-font" style="font-size: {fontSize}rem; letter-spacing: -{letterSpacing}rem">
	<a href="#home"  on:click|preventDefault={(e) => scrollTo(e)}
		>fab<span style="color: blue;">.</span>
	</a>
</h2>

<style>
	.h2-font {
		font-family: 'League Spartan', sans-serif;
		font-weight: 900;
		display: inline-block;
		position: relative;
		z-index: 1;
		margin: 0;
	}
  

  a {
    color: var(--clr-font);
  }
</style>