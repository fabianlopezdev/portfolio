<script>
  import LeftArrowIcon from 'svelte-icons/io/IoIosArrowBack.svelte'
  import RightArrowIcon from 'svelte-icons/io/IoIosArrowForward.svelte'
  let slides = [
    {src: '/photos/projects/wannago/dashboard - mobile 2.png', alt: 'Image 1 description'},
    {src: '/photos/projects/wannago/dashboard - mobile.png', alt: 'Image 2 description'},
    {src: '/photos/projects/wannago/main - mobile.png', alt: 'Image 3 description'},

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
</script>

<div class="carousel">
  {#each slides as slide, index (slide.src)}
    <img src={slide.src} alt={slide.alt} 
      class="carousel__img 
        {currentIndex === index ? 'active' : ''} 
        {prevIndex === index && currentIndex !== index ? 'outgoing' : ''} 
        {direction}" 
    />
  {/each}
  <button on:click={prevSlide} class="carousel__button carousel__button--prev"><div class='icons'><LeftArrowIcon/></div></button>
  <button on:click={nextSlide} class="carousel__button carousel__button--next"><div class='icons'><RightArrowIcon/></button>
</div>

<style>
  .carousel {
    position: relative;
    display: flex;
    overflow: hidden;
    height: 200px;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  .carousel__img {
    display: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    animation: slide-in-from-left 0.5s forwards;
  }

  .carousel__img.next.outgoing {
    animation: slide-out-to-right 0.5s forwards;
  }

  .carousel__img.prev.active {
    animation: slide-in-from-right 0.5s forwards;
  }

  .carousel__img.prev.outgoing {
    animation: slide-out-to-left 0.5s forwards;
  }

  .carousel__button {
    position: absolute;
    top: 50%;
    background-color: rgba(255,255,255,0.7);
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