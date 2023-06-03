<script>
	import LeftArrowIcon from 'svelte-icons/io/IoIosArrowBack.svelte';
	import RightArrowIcon from 'svelte-icons/io/IoIosArrowForward.svelte';
	import CloseIcon from 'svelte-icons/io/IoIosClose.svelte';

	// Carousel control variables
	export let currentIndex = 0;
	let prevIndex = 0;
	let direction = '';
	export let slides = [];

	// Modal control variable
	export let isModalOpen = false;

	// Swipe control variables
	let touchstartX = 0;
	let touchendX = 0;

	// Function to move to previous slide
	function movePrevSlide() {
		direction = 'prev';
		prevIndex = currentIndex;
		currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
	}

	// Function to move to next slide
	function moveNextSlide() {
		direction = 'next';
		prevIndex = currentIndex;
		currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
	}

	// Function to handle touch start
	const handleTouchStart = (e) => {
		touchstartX = e.touches[0].clientX;
	};

	// Function to handle touch end
	const handleTouchEnd = (e) => {
		touchendX = e.changedTouches[0].clientX;
		handleSwipeGesture();
	};

	// Function to handle swipe gesture
	const handleSwipeGesture = () => {
		if (touchendX < touchstartX) movePrevSlide();
		if (touchendX > touchstartX) moveNextSlide();
	};
</script>

<main class="carousel" on:touchstart={handleTouchStart} on:touchend={handleTouchEnd}>
	<button
		class="close-modal-btn"
		on:click={() => (isModalOpen = !isModalOpen)}
		aria-label="Close Modal"
	>
		<div class="header-icons"><CloseIcon /></div>
	</button>
	{#each slides as slide, i (slide.src)}
		<img
			src={slide.src}
			alt={slide.alt}
			class="carousel__img {direction}"
			class:active={currentIndex === i}
			class:outgoing={prevIndex === i && currentIndex !== i}
		/>
	{/each}

	<button
		on:click={movePrevSlide}
		class="carousel__button carousel__button--prev"
		aria-label="Previous Slide"
	>
		<div class="icons"><LeftArrowIcon /></div>
	</button>

	<button
		on:click={moveNextSlide}
		class="carousel__button carousel__button--next"
		aria-label="Next Slide"
	>
		<div class="icons"><RightArrowIcon /></div>
	</button>

	<div class="carousel__dots">
		{#each slides as _, i (i)}
			<div class="carousel__dot" class:active-dot={currentIndex === i} />
		{/each}
	</div>
</main>

<style>
    /* Modal styles */
    .carousel {
        display: flex;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: black;
        height: 100dvh;
        z-index: 1000;
    }

    .close-modal-btn {
        z-index: 5;
        color: #d0dff0;
    }

    /* Image styles */
    .carousel__img {
        display: none;
        position: absolute;
        top: 25%;
        width: 100%;
        height: auto;
        object-fit: contain;
        padding-inline: 0.2rem;
    }

    .carousel__img.active {
        display: block;
    }

    .carousel__img.outgoing {
        display: block;
        position: absolute;
        top: 25%;
    }

    /* Button styles */
    .carousel__button {
        position: absolute;
        top: 50%;
        background-color: transparent;
        border: none;
        padding: 10px;
        cursor: pointer;
        transform: translateY(-50%);
    }

    .icons, .header-icons {
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

    /* Dot styles */
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

    /* Animation styles */
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

    /* Animations */
    @keyframes slide-in-from-right {
        0% { transform: translateX(100%); }
        100% { transform: translateX(0); }
    }

    @keyframes slide-in-from-left {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(0); }
    }

    @keyframes slide-out-to-right {
        0% { transform: translateX(0); }
        100% { transform: translateX(100%); }
    }

     @keyframes slide-out-to-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
    }
</style>
