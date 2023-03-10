<script lang="ts">
	import english from '../languages/en.json';
	import spanish from '../languages/es.json';
	import { NavLinks, About, Projects, Contact, Header, Home } from '$components';

	//Data is received from a load function in page.server.ts
	export let data;

	// Destructure lang from data and make it reactive
	$: ({ lang } = data || 'en');

	// Assign language based on lang and make it reactive
	$: ({ navLinks, home } = lang === 'en' ? english : spanish);
</script>

<header>
	<Header {lang} {navLinks} />
</header>

<main>
	<Home language={home} />
	<About />
	<Projects />
	<Contact />
</main>

<footer>
	<NavLinks {navLinks} />
</footer>

<style>
	header {
		position: relative;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
	}
</style>
