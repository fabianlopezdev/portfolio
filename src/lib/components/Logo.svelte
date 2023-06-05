<script>
	let showSvg = false;
	let showDot = false;

	setTimeout(() => {
		showSvg = true;
		setTimeout(() => {
			showDot = true;
		}, 1500); // Adjust this time to match the duration of the text-line animation
	}, 1000);
</script>

<div class="logo">
	{#if showSvg}
		<svg height="60" stroke="black" stroke-width="2" class="text-line" width="50%">
			<text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">fab</text>
		</svg>
		{#if showDot}
			<span class="dot">.</span>
		{/if}
	{/if}
</div>

<style>
	.logo {
		position: relative;
	}

	.text-line {
		stroke-dasharray: 500;
		stroke-dashoffset: 500;
		animation: dash 2s linear forwards, filling 0.8s ease-in forwards;
		font-size: 3rem;
		position: relative;
		width: 4rem;
		height: 3.1rem;
		margin-top: 0.8rem;
		margin-left: 0.3rem;
		letter-spacing: -2px;
	}

	.text-line text {
		font-family: League Spartan;
		font-weight: normal;
		font-style: normal;
	}

	@keyframes dash {
		to {
			stroke-dashoffset: 0;
		}
	}

	@keyframes filling {
		0%,
		90% {
			fill: black;
			fill-opacity: 0;
		}
		100% {
			fill: black;
			fill-opacity: 1;
		}
	}

	.dot {
		position: absolute;
		color: blue;
		font-size: 4rem;
		bottom: 1px;
		left: 3.9rem;
	}
</style>