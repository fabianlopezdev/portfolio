<script>
	import CardGrid from './contactCards/CardGrid.svelte';
	import ContactForm from './ContactForm.svelte';
</script>

<section id="contact">
	<h1>Tell me about your project!</h1>
	<div class="form-and-contactcard-container">
		<CardGrid />
		<ContactForm />
	</div>
</section>

<style>
	section {
		align-items: center;
		margin: 0 auto;
		width: fit-content;
		/* max-width: 866px; */
		/* width: clamp(375px, (100vw - 40px), 866px); */
	}

	.form-and-contactcard-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		align-items: center;
		/* flex-wrap: wrap; */
	}
	h1 {
		margin: 0;
	}
</style>
