<!-- <script lang='ts'>
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
		color: var(--clr-font);
		letter-spacing: -0.1rem;
		margin: 0;
	}
</style> -->
<script>
	// Variable to control the visibility of the SVG
  let showSvg = false;

  // Delay the appearance of the SVG after 3 seconds
  setTimeout(() => {
    showSvg = true;
  }, 1000);
</script>

<div>
{#if showSvg}

	<svg height="100" stroke="black" stroke-width="2" class="text-line" width="100%"
	><text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">fab</text></svg
	>
	{/if}
</div>
<style>
.text-line {
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: dash 2s linear forwards, filling 0.5s ease-in forwards;
	/* animation-delay: 3s; */
  font-size: 3rem;
}

.text-line text {
  font-family: League Spartan;
  font-weight: normal;
  font-style: normal;
	/* letter-spacing: -2px; */
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes filling {
  0%, 90% { fill: black; fill-opacity: 0; }
  100% { fill: black; fill-opacity: 1; }
}
</style>


