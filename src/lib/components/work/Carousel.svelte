<script>
  let currentIndex = 0;
  let slides = [
    {src: 'image1.jpg', alt: 'Image 1 description'},
    {src: 'image2.jpg', alt: 'Image 2 description'},
    {src: 'image3.jpg', alt: 'Image 3 description'},
  ];

  let direction = '';

  function prevSlide() {
    direction = 'prev';
    if (currentIndex === 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex--;
    }
  }

  function nextSlide() {
    direction = 'next';
    if (currentIndex === slides.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
  }
</script>

<div class="carousel">
  {#each slides as slide, index (slide.src)}
    <img src={slide.src} alt={slide.alt} class="carousel__img {currentIndex === index ? 'active' : ''} {direction}" />
  {/each}
  <button on:click={prevSlide} class="carousel__button carousel__button--prev">Previous</button>
  <button on:click={nextSlide} class="carousel__button carousel__button--next">Next</button>
</div>

<style>
  .carousel {
    position: relative;
    display: flex;
    overflow: hidden;
    height: 400px;
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

  .carousel__img.next {
    animation: slide-in-from-left 0.5s forwards;
  }

  .carousel__img.prev {
    animation: slide-in-from-right 0.5s forwards;
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
</style>
