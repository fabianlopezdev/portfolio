<script>
	import CardGrid from './contactCards/CardGrid.svelte';
	import ContactForm from './ContactForm.svelte';
</script>

<section id="contact">
	<h1>Tell me about your project!</h1>
		<CardGrid />
		<ContactForm />

</section>

<style>
	section {
		align-items: center;
	}

	
	h1 {
		margin: 0;
	}
</style>
