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

	// Declare a variable to store the scroll position
	let scrollY = 0;
	let shadow = false;
	// Define a function to handle the scroll event
	function handleScroll(event) {
		// Get the current scroll position from the event target
		scrollY = event.target.scrollingElement.scrollTop;
	}

	$: shadow = scrollY > 0;
</script>

<svelte:window on:scroll={handleScroll} />

<header class:shadow>
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
		/* position: fixed; */
		position: sticky;
		top: 0;
		z-index: 4;
		background-color: var(--clr-bg);
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		/* margin: 0;
		padding: 0; */
	}

	.shadow {
		height: 100%;
		width: 100%;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
