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
  let showSvg = false;
  let showDot = false;

  setTimeout(() => {
    showSvg = true;
    setTimeout(() => {
      showDot = true;
    }, 2000); // Adjust this time to match the duration of the text-line animation
  }, 1000);
</script>

<div class='logo'>
  {#if showSvg}
    <svg height="60" stroke="black" stroke-width="2" class="text-line" width="50%">
      <text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">fab</text>
    </svg>
    {#if showDot}
      <span class='dot'>.</span>
    {/if}
  {/if}
</div>

<style>
	.logo {
		position: relative;
	}

.dot {
	position: absolute;
	color: blue;
	font-size: 4rem;
	bottom: 1px;
	left: 4.1rem;

}


.text-line {
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: dash 2s linear forwards, filling 1s ease-in forwards;
	/* animation-delay: 3s; */
  font-size: 3rem;
	/* display: inline-block; */
	position: relative;
	width: 4rem;
	height: 3rem;
	margin-top: 0.8rem;
	margin-left: 0.3rem;
}

.text-line text {
  font-family: League Spartan;
  font-weight: normal;
  font-style: normal;
	/* letter-spacing: -2px; */
	/* position: absolute;
	left: 0; */
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


