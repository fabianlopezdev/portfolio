<script lang='ts'>
	import CardGrid from './contactCards/CardGrid.svelte';
	import ContactForm from './ContactForm.svelte';
	import type { Language } from '../../../types';

	export let contactLang: Language['contact'];


</script>

<section id="contact">
	<h1>{contactLang.h1}<span>.</span></h1>
	<div class='contact-container'>

		<CardGrid cardGrid={contactLang.cardGrid}/>
		<ContactForm formLang={contactLang.contactForm} />
	</div>
</section>

<style>
	section {
		/* background-color: #c0e6ef;
		align-items: center;
		justify-content: center;
		gap: 3rem;
		padding-bottom: 2rem; */
		/* overflow: hidden; */
		/* height:min-content; */
		/* max-height: 100%; */
		/* margin-top: 3.7rem;
		margin-bottom: 3.7rem; */


}
	

	h1 {
		font-size: clamp(1.5rem, 3vw, 2rem);
		color: var(--clr-secondary);
		margin: 0;
	}
	span {
		color: black;
		font-size: 3rem;
	}
	.contact-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 3rem;
		flex-wrap: wrap;
		/* padding: 0 0rem; */
		/* max-height: fit-content; */
	}

	
</style>
