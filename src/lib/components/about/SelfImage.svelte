<script lang="ts">
	let imgTapped = false;
	let isTouchable = false;

	function onImageTapped() {
		if (!isTouchable) return;
		imgTapped = !imgTapped;
	}

	function handleTouch() {
		if (isTouchable) return;
		isTouchable = true;
		console.log('touchablleeee');
	}
</script>

<svelte:window on:touchstart={handleTouch} />

<button on:click={onImageTapped}>
	<div class="person">
		<div class="person-container" class:active={imgTapped}>
			<img class="person-circle" src="./blue-dots.jpg" alt="" />
			<img class="person-img" src="./self-foto.png" alt="Fabian being welcoming" />
		</div>
	</div>
</button>

<style>
	button {
		background-color: transparent;
		border: none;
		color: inherit;
		font-family: inherit;
		font-size: inherit;
		font-weight: inherit;
		line-height: inherit;
		padding: 0;
	}

	.person {
		--transform-speed: 250ms;
		position: relative;
		max-width: 15rem;
		margin-inline: auto;
	}

	.person-container {
		aspect-ratio: 1/ 1.25;
		display: grid;
		align-items: end;
		border-radius: 0 0 100vw 100vw;
		overflow: hidden;
		transition: transform var(--transform-speed) ease;
	}

	.person-circle {
		position: absolute;
		inset: auto 0 0;
		width: 100%;
		aspect-ratio: 1/1;
		border-radius: 50%;
		margin-inline: auto;
		object-fit: cover;
	}
	.person-img {
		position: relative;
		z-index: 2;
		transform: scale(1);
		transition: transform calc(var(--transform-speed) * 1.2) ease;
	}

	.active {
		transform: scale(1.1);
	}

	.active .person-img {
		transform: scale(1) translateY(-1.28rem);
	}
	@media (hover: hover) {
		.person-container:hover {
			transform: scale(1.1);
		}

		.person-container:hover .person-img {
			transform: scale(1) translateY(-1.28rem);
		}
	}
</style>
