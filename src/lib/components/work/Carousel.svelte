<script lang="ts">
	import LeftArrowIcon from 'svelte-icons/io/IoIosArrowBack.svelte';
	import RightArrowIcon from 'svelte-icons/io/IoIosArrowForward.svelte';
	import CloseIcon from 'svelte-icons/io/IoIosClose.svelte';
	import { CarouselZoom } from '$components';

	let slides = [
		{ src: '/photos/projects/wannago/wannago-landing.png', alt: 'Image 1 description' },
		{ src: '/photos/projects/wannago/wannago-invitation.png', alt: 'Image 2 description' },
		{ src: '/photos/projects/wannago/wannago-general-stats.png', alt: 'Image 3 description' }
	];

	let currentIndex = 0;
	let prevIndex = 0;
	let direction = '';

	function prevSlide() {
		direction = 'prev';
		prevIndex = currentIndex;
		if (currentIndex === 0) {
			currentIndex = slides.length - 1;
		} else {
			currentIndex--;
		}
	}

	function nextSlide() {
		direction = 'next';
		prevIndex = currentIndex;
		if (currentIndex === slides.length - 1) {
			currentIndex = 0;
		} else {
			currentIndex++;
		}
	}
	let isModalOpen = false;

	

	//To not to let scrolling on the app while modal open
	$: if (isModalOpen) {
		console.log('helloooooo');
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
	}

	// $: if (modal) {
	// 	modal.addEventListener('close', () => (currentIndex = modal.returnValue));

	// 	console.log('return', modal.returnValue);
	// }
</script>

<div class="carousel">
	{#each slides as slide, index (slide.src)}
		<button class="image-button"on:click={() => isModalOpen = !isModalOpen}>
			<img
				src={slide.src}
				alt={slide.alt}
				class="carousel__img {direction}"
				class:active={currentIndex === index}
				class:outgoing={prevIndex === index && currentIndex !== index}
			/>
		</button>
		{/each}
		{#if isModalOpen}
			<CarouselZoom bind:currentIndex {slides} bind:isModalOpen/>
		{/if}
		<!-- <dialog bind:this={modal}>
			{#if isModalOpen}
				<button class="close-modal-btn" on:click={handleCloseButton}>
					<div class="header-icons"><CloseIcon /></div>
				</button>
				<CarouselZoom bind:currentIndex bind:prevIndex  {slides} {isModalOpen} />
			{/if}
		</dialog> -->
	<button on:click={prevSlide} class="carousel__button carousel__button--prev"
		><div class="icons"><LeftArrowIcon /></div></button
	>
	<button on:click={nextSlide} class="carousel__button carousel__button--next"
		><div class="icons"><RightArrowIcon /></div></button
	>

	<div class="carousel__dots">
		{#each slides as _, index}
			<div class="carousel__dot" class:active-dot={currentIndex === index} />
		{/each}
	</div>
</div>

<style>
	.header-icons {
		height: 2rem;
		width: 2rem;
	}
	.close-modal-btn {
		/* background-color: red; */
		z-index: 1;
		color: #d0dff0;
	}

	.image-button {
		cursor: pointer;
		border: none;
		outline: none;
		background-color: transparent;
		padding: 0;
		display: block;
	}
	.carousel {
		position: relative;
		display: flex;
		overflow: hidden;
		height: 30%;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
	}

	.carousel__img {
		display: none;
		width: 100%;
		height: 100%;
		object-fit: contain;
		padding-bottom: 0.7rem;
		position: absolute;
		top: 0;
	}

	.carousel__img.active {
		display: block;
	}

	.carousel__img.outgoing {
		display: block;
		position: absolute;
		top: 0;
	}

	.carousel__img.next.active {
		animation: slide-in-from-left 0.5s forwards ease-in-out;
	}

	.carousel__img.next.outgoing {
		animation: slide-out-to-right 0.5s forwards ease-in-out;
	}

	.carousel__img.prev.active {
		animation: slide-in-from-right 0.5s forwards ease-in-out;
	}

	.carousel__img.prev.outgoing {
		animation: slide-out-to-left 0.5s forwards ease-in-out;
	}

	.carousel__button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background-color: inherit;
		border: none;
		padding: 10px;
		cursor: pointer;
	}

	.carousel__button--prev {
		left: 10px;
	}

	.carousel__button--next {
		right: 10px;
	}

	.carousel__dots {
		position: absolute;
		bottom: 10px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.carousel__dot {
		width: 10px;
		height: 10px;
		background-color: #d0dff0;
		border-radius: 50%;
		margin: 0 5px;
		transition: background-color 0.3s ease-in-out;
	}

	.active-dot {
		background-color: #96acc5;
	}

	@keyframes slide-in-from-right {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(0);
		}
	}

	@keyframes slide-in-from-left {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(0);
		}
	}

	@keyframes slide-out-to-right {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(100%);
		}
	}

	@keyframes slide-out-to-left {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}
</style>
