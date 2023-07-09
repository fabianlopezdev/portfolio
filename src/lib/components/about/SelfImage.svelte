<script lang="ts">
	import {animateOnScroll} from '../../../actions/intersectionObserver'
	let imgTouched = false;
	let isScrollTransition = false;
	function handleTouch() {
		imgTouched = !imgTouched;
	}

	function handleAnimationEnd(event) {
		if (isScrollTransition) return;
		isScrollTransition = true;
		event.currentTarget.classList.remove('animate');
	}

</script>

<button on:touchstart={handleTouch}>
	<div class="person">
		<div use:animateOnScroll on:transitionend={handleAnimationEnd} class="person-container" class:active={imgTouched}>
			<img class="person-circle" src="./blue-dots.avif" alt="Background"/>
			<img width="1" height="1" class="person-img" src="./fabian-photo.avif" alt="Fabian being welcoming" />
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
    margin-inline: 1rem;
	}
	.person {
		--transform-speed: 500ms;
		position: relative;
		max-width: 20rem;
		margin-inline: auto;
	}
	.person-container {
		aspect-ratio: 1/ 1.25;
		display: grid;
		align-items: end;
		border-radius: 0 0 100vw 100vw;
		overflow: hidden;
		transition: transform var(--transform-speed) ease 0.1s;
	}
	.person-circle {
		aspect-ratio: 1/1;
		position: absolute;
		inset: auto 0 0;
		width: 100%;
		border-radius: 50%;
		margin-inline: auto;
		object-fit: cover;
	}
	.person-img {
		position: relative;
		z-index: 2;
		transform: scale(1);
		transition: transform calc(var(--transform-speed) * 1.2) ease 0.1s;
		 width: 100%;  
  	height: auto; 
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

	:global(.person-container.animate) {
	transform: scale(1.1);
}

:global(.person-container.animate .person-img) {
	transform: scale(1) translateY(-1.28rem);
}


	@media (max-width: 430px) {
		.person {
			width: 15rem;
		}
	}
</style>