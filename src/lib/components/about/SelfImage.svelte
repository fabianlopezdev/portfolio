<script lang='ts'>
  export let isScrollingDown;
	let imgTapped = false;
  // let scrolledUp = false
	// function onImageTapped() {
	// 	imgTapped = !imgTapped;
	// 	console.log(imgTapped);
	// }

  // let scrollY = 0;
	
	// Define a function to handle the scroll event
	// function handleScroll(event: UIEvent) {
	// 	let previousScroll = scrollY;
	// 	// Cast the event target to a document object
	// 	if (event) {
	// 		scrollY = (event.target as Document).scrollingElement?.scrollTop ?? 0;
	// 	}
	// 	scrollY > previousScroll ? console.log('down') : console.log('up')
	// }
 
</script>

<button>
	<div class="person" >
		<div class="person-container" class:active={isScrollingDown}>
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

	@media (min-width: 600px) {
		.person-container:hover {
			transform: scale(1.1);
		}

		.person-container:hover .person-img {
			transform: scale(1) translateY(-1.28rem);
		}
	}

	@media (max-width: 599px) {
		.active {
			transform: scale(1.1);
		}

		.active .person-img {
			transform: scale(1) translateY(-1.28rem);
		}
	}
</style>
