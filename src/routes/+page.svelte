<script lang="ts">
	import english from '../languages/en.json'
	import spanish from '../languages/es.json';
	import { NavLinks, About, Projects, Contact, Header, Home, Footer } from '$components';
	import type { Language } from '../types';

	//Data is received from a load function in page.server.ts
	export let data;

	// Destructure lang from data and make it reactive
	$: ({ lang } = data || 'en');

	let navLinks: Language['navLinks']
	let home: Language['home']
	let contact: Language['contact']
	let footer: Language['footer']
	// Assign language based on lang and make it reactive
	$: navLinksLang = lang === 'en' ? english.navLinks : spanish.navLinks;
	$: homeLang = lang === 'en' ? english.home : spanish.home;
	$: contactLang = lang === 'en' ? english.contact : spanish.contact;
	$: footerLang = lang === 'en' ? english.footer : spanish.footer;

	// Declare a variable to store the scroll position
	let scrollY = 0;
	let bottomShadow = false;
	// Define a function to handle the scroll event
	function handleScroll(event: UIEvent) {
		// Cast the event target to a document object
		if (event) {
			scrollY = (event.target as Document).scrollingElement?.scrollTop ?? 0;
		}
	}

	$: bottomShadow = scrollY > 0;
</script>

<svelte:window on:scroll={handleScroll} />


	<header class="header" class:header-bottom-shadow={bottomShadow}>
		<!-- Passing lang, because header has the language toggle -->
		<Header  {lang} {navLinksLang} />
	</header>
	
	<main>
	<Home {homeLang} />
	<About />
	<Projects />
	<Contact {contactLang} />
</main>

<footer>
	<Footer {footerLang}/>
</footer>


<style>
	header {
		position: sticky;
		top: 0;
		z-index: 4;
		background-color: var(--clr-bg);
		box-sizing: border-box;
		display: flex;
		justify-content: center;
	}

	.header-bottom-shadow {
		height: 100%;
		width: 100%;
		border-bottom: 0.5px solid var(--clr-shadow);
		box-shadow: 0 0.5px 1px var(--clr-shadow);
	}

	footer {
		display: flex;
		justify-content: center;
	}
</style>
