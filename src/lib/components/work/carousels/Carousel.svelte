<script lang="ts">
	import LeftArrowIcon from 'svelte-icons/io/IoIosArrowBack.svelte';
	import RightArrowIcon from 'svelte-icons/io/IoIosArrowForward.svelte';
	import { CarouselZoom } from '$components';

	export let slides;

	let currentIndex = 0;
	let prevIndex = 0;
	let direction = '';

	function prevSlide() {
		direction = 'prev';
		prevIndex = currentIndex;
		currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
	}

	function nextSlide() {
		direction = 'next';
		prevIndex = currentIndex;
		currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
	}
 console.log('imageees', slides);
 
	let isModalOpen = false;

	//To not to let scrolling on the app while modal open
	$: isModalOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
</script>

<section class="carousel">
	{#each slides as slide, index}
		<button
			class="image-button"
			on:click={() => (isModalOpen = !isModalOpen)}
			aria-label="Open Image Modal"
		>
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
		<CarouselZoom bind:currentIndex {slides} bind:isModalOpen />
	{/if}

	<button
		on:click={prevSlide}
		class="carousel__button carousel__button--prev"
		aria-label="Previous Slide"
	>
		<div class="icons"><LeftArrowIcon /></div>
	</button>

	<button
		on:click={nextSlide}
		class="carousel__button carousel__button--next"
		aria-label="Next Slide"
	>
		<div class="icons"><RightArrowIcon /></div>
	</button>

	<div role="list" class="carousel__dots">
		{#each slides as _, index}
			<div role="listitem" class="carousel__dot" class:active-dot={currentIndex === index} />
		{/each}
	</div>
</section>

<style>
	section.carousel {
		position: relative;
		display: flex;
		overflow: hidden;
		height: 10rem;
		border-radius: 1rem 1rem 0 0;
	}

	.carousel__img {
		display: none;
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
		padding-bottom: 0.7rem;
		background-color: #D0DFF0;
	}

	.carousel__img.active,
	.carousel__img.outgoing {
		display: block;
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
		bottom: 0px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-block: 0.5rem;
	}

	.carousel__dot {
		width: 10px;
		height: 10px;
		background-color: #96acc5;
		border-radius: 50%;
		margin: 0 5px;
		transition: background-color 0.3s ease-in-out;
	}

	.active-dot {
		background-color: white;
	}

	.image-button {
		cursor: pointer;
		border: none;
		outline: none;
		background-color: transparent;
		padding: 0;
		display: block;
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
