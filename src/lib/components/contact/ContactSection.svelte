<script lang="ts">
	import { onMount } from 'svelte';

	import CardGrid from './contactCards/CardGrid.svelte';
	import ContactForm from './ContactForm.svelte';
	import type { Language } from '../../../types';

	export let contactLang: Language['contact'];
	export let title: string;

	let contactSection: HTMLElement;
	let animatedDot: HTMLElement;
	//Animation on scroll in the dot
	onMount(() => {
		let firstObservation = true;

		const observer = new IntersectionObserver(
			(entries) => {
				console.log('Observer callback triggered');
				entries.forEach((entry) => {
					console.log('Is intersecting:', entry.isIntersecting);

					if (firstObservation) {
						firstObservation = false;
						return;
					}

					if (entry.isIntersecting) {
						console.log('Adding animate class to animatedDot');
						animatedDot.classList.add('animate');
						// Stop observing the element once it has intersected
						observer.unobserve(contactSection);
					}
				});
			},
			{
				rootMargin: '0px',
				threshold: 0.1
			}
		);

		observer.observe(contactSection);
	});
</script>

<section id="contact" bind:this={contactSection}>
	<h1>{title}<span id="animatedDot" bind:this={animatedDot} style="color: blue;">.</span></h1>
	<h2>{contactLang.h1}.</h2>
	<div class="contact-container">
		<CardGrid cardGrid={contactLang.cardGrid} />
		<ContactForm formLang={contactLang.contactForm} />
	</div>
</section>

<style>
	#animatedDot {
		opacity: 0;
		transition: opacity 1s 0.5s; /* duration and delay */
	}

	:global(#contact #animatedDot.animate) {
		opacity: 1;
	}
	section#contact {
		max-width: 1000px;
	}
	section h1 {
		margin-bottom: 0;
	}

	section h2 {
		font-size: clamp(2rem, 4vw, 2.5rem);
		color: var(--clr-secondary);
		font-weight: 400;
		line-height: 2rem;
	}

	section h1,
	section h2 {
		text-align: center;
	}

	div.contact-container {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: clamp(1.3rem, 1.4vw, 1.6rem);
		gap: 2rem;
		flex-wrap: wrap;
		margin-bottom: 2.1rem;
	}
</style>
