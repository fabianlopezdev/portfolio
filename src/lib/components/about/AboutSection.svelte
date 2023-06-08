<script lang="ts">
	import { onMount } from 'svelte';
	import { SelfImage } from '$components';
	export let aboutLang: Language['about'];
	export let title;

	let aboutSection: HTMLElement;
	let animatedDot: HTMLElement;
	//Animation on scroll in the dot
	onMount(() => {
		let firstObservation = true;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (firstObservation) {
						firstObservation = false;
						return;
					}

					if (entry.isIntersecting) {
						animatedDot.classList.add('animate');
						// Stop observing the element once it has intersected
						observer.unobserve(aboutSection);
					}
				});
			},
			// Animation on scrolling in ::after underline
			{
				rootMargin: '0px',
				threshold: 0.1
			}
		);

		observer.observe(aboutSection);
	});
</script>

<section id="about-section" bind:this={aboutSection}>
	<h1 class="about-section__title">
		{title}<span id="animatedDot" bind:this={animatedDot} style="color: blue;">.</span>
	</h1>

	<article class="about-section__container">
		<div class="about-section__text">
			<p>{aboutLang.firstParagraph}</p>
			<p>{aboutLang.secondParagraph}</p>
			<p>{aboutLang.thirdParagraph}</p>
		</div>
		<aside class="about-section__image">
			<SelfImage />
		</aside>
		<div />
	</article>
</section>

<style>
	#animatedDot {
		opacity: 0;
		transition: opacity 1s 0.5s; /* duration and delay */
	}

	:global(#animatedDot.animate) {
		opacity: 1;
	}
	#about-section {
		text-align: center;
		max-width: 1000px;
	}
	.about-section__title {
		margin-bottom: 0;
	}
	.about-section__container {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: left;
		justify-self: center;
		align-self: center;
		margin: auto;
		margin-inline: 1rem;
	}

	.about-section__text {
		font-size: clamp(1.3rem, 1.4vw, 1.6rem);
		flex: 1;
		line-height: 1.6;
	}

	.about-section__image {
		width: 20rem;
		margin-bottom: 4rem;
		text-align: center;
	}

	@media (max-width: 800px) {
		.about-section__title {
			margin-bottom: 0.5rem;
		}
		.about-section__container {
			flex-direction: column-reverse;
		}
		.about-section__image {
			margin-bottom: 0;
			/* width: 15rem; */
		}
	}
</style>
