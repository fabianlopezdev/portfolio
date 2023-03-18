<script>
	import CardGrid from './contactCards/CardGrid.svelte';
	import ContactForm from './ContactForm.svelte';
</script>

<section id="contact">
	<h1>Let me know about your project.</h1>
	<div class='contact-container'>

		<CardGrid />
		<ContactForm />
	</div>
</section>

<style>
	section {
		align-items: center;
		justify-content: center;
		gap: 3rem;
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

	.contact-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 3rem;
		flex-wrap: wrap;
		padding: 0 2rem;
		/* max-height: fit-content; */
	}
	h1 {
		margin: 0;
	}
</style>
