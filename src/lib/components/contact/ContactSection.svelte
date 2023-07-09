<script lang="ts">
	import { animateOnScroll } from '../../../actions/intersectionObserver';
	import CardGrid from './contactCards/CardGrid.svelte';
	import ContactForm from './ContactForm.svelte';
	import type { Language } from '../../../types';

	export let contactLang: Language['contact'];
	export let title: string;
</script>

<section id="contact">
	<h2>{title}<span id="animatedDot1" use:animateOnScroll style="color: blue;">.</span></h2>
	<h3>{contactLang.h1}.</h3>
	<div class="contact-container">
		<CardGrid cardGrid={contactLang.cardGrid} />
		<ContactForm formLang={contactLang.contactForm} />
	</div>
</section>

<style>
	section#contact {
		max-width: 1000px;
	}
	section h2 {
		margin-bottom: 0;
	}

	section h3 {
		font-size: clamp(2rem, 4vw, 2.5rem);
		color: var(--clr-secondary);
		font-weight: 400;
		line-height: 2rem;
	}

	section h2,
	section h3 {
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
