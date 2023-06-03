<script>
	import LeftArrowIcon from 'svelte-icons/io/IoIosArrowBack.svelte';
	import RightArrowIcon from 'svelte-icons/io/IoIosArrowForward.svelte';
	import CloseIcon from 'svelte-icons/io/IoIosClose.svelte';
	export let currentIndex = 0;
	let isShowCarousel = false;
	export let slides = [];
	export let isModalOpen = false;
	export let prevIndex = 0;
	// export let nextIndex;

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
</script>

<div class="carousel">
	<button class="close-modal-btn" on:click={() => (isModalOpen = !isModalOpen)}>
		<div class="header-icons"><CloseIcon /></div>
	</button>

    {#each slides as slide, i}
      {console.log('currentInd', currentIndex)}
      {console.log('current i', i)}
      <img
        src={slide.src}
        alt={slide.alt}
        class="carousel__img {direction}"
        class:active={currentIndex === i}
        class:outgoing={prevIndex === i && currentIndex !== i}
      />
    {/each}

	<button on:click={prevSlide} class="carousel__button carousel__button--prev"
		><div class="icons"><LeftArrowIcon /></div></button
	>
	<button on:click={nextSlide} class="carousel__button carousel__button--next"
		><div class="icons"><RightArrowIcon /></div></button
	>

	<div class="carousel__dots">
		{#each slides as _, i}
			<div class="carousel__dot" class:active-dot={currentIndex === i} />
		{/each}
	</div>
</div>

<style>
	.close-modal-btn {
		/* background-color: red; */
		z-index: 5;
		color: #d0dff0;
	}
	.carousel {
		display: flex;
		/* flex-direction: column;
		justify-content: center;
		align-items: center; */
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: black;
		z-index: 1000;
    height: 100dvh;
	}
	.carousel__img {
		display: none;

		width: 100%;
		height: auto;
		object-fit: contain;
    top:25%;
    position: absolute;
    padding-inline: 0.2rem;
		/* position: fixed; */
	}

	.carousel__img.active {
		display: block;
		/* position: fixed; */
	}

	.carousel__img.outgoing {
		display: block;
    position:absolute;
    top:25%;
		/* position: absolute; */
		/* top: 25%; */

		/* height: 50%;
 object-fit:contain; */
		/* position: absolute;
 top: 0; */
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
		background-color: transparent;
		border: none;
		padding: 10px;
		cursor: pointer;
	}

	.icons {
		color: #d0dff0;
	}

  .header-icons {
    width: 2rem;
    height: 2rem;
  }

	.carousel__button--prev {
		left: -5px;
	}

	.carousel__button--next {
		right: -5px;
	}

	.carousel__dots {
		position: absolute;
		bottom: 30px;
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
