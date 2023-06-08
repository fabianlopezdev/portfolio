<script lang="ts">
	import CardGrid from './contactCards/CardGrid.svelte';
	import ContactForm from './ContactForm.svelte';
	import type { Language } from '../../../types';

	export let contactLang: Language['contact'];
	export let title: string;
</script>

<section id="contact">
	<h1>{title}<span style="color: blue;">.</span></h1>
	<h2>{contactLang.h1}.</h2>
	<div class="contact-container">
		<CardGrid cardGrid={contactLang.cardGrid} />
		<ContactForm formLang={contactLang.contactForm} />
	</div>
</section>

<style>
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

	section h1, section h2 {
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
