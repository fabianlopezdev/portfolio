<script lang="ts">
	import english from '../languages/en.json';
	import spanish from '../languages/es.json';
	import { NavLinks, About, Work, Contact, Header, Home, Footer } from '$components';
	import type { Language } from '../types';

	//Data is received from a load function in page.server.ts
	export let data;

	// Destructure lang from data and make it reactive
	$: ({ lang } = data || 'en');

	// let navLinks: Language['navLinks'];
	// let home: Language['home'];
	// let contact: Language['contact'];
	// let footer: Language['footer'];
	// Assign language based on lang and make it reactive
	$: navLinksLang = lang === 'en' ? english.navLinks : spanish.navLinks;
	$: homeLang = lang === 'en' ? english.home : spanish.home;
	$: aboutLang = lang === 'en' ? english.about : spanish.about;
	$: workLang = lang === 'en' ? english.work : spanish.work;
	$: contactLang = lang === 'en' ? english.contact : spanish.contact;
	$: footerLang = lang === 'en' ? english.footer : spanish.footer;

	// Declare a variable to store the scroll position
	let currentScroll = 0;
	// Declare a variable to store previous scroll
	let prevScroll = 0;
	let isBottomShadow = false;
	let isScrollDown = false;
	// Define a function to handle the scroll event
	function handleScroll(event: UIEvent) {
		// Cast the event target to a document object
		if (event) {
			prevScroll = currentScroll;
			currentScroll = (event.target as Document).scrollingElement?.scrollTop ?? 0;
		}

		if (prevScroll < currentScroll && currentScroll > 0) isScrollDown = true;
		else isScrollDown = false;
	}

	$: isBottomShadow = currentScroll > 0;
</script>

<svelte:window on:scroll={handleScroll} />

<header class="header" class:header-bottom-shadow={!isScrollDown && currentScroll !== 0} class:disappearing-header={isScrollDown}>
	<!-- Passing lang, because header has the language toggle -->
	<Header {lang} {navLinksLang} />
</header>

<main>
	<Home {homeLang} />
	<About {aboutLang}/>
	<Work {workLang}/>
	<Contact {contactLang} />
</main>

<footer>
	<Footer {footerLang} />
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
  /* Add a transition for the transform property */
  transition: transform 0.3s ease-in-out;
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

/* Use transform instead of display to hide and show the header */
.disappearing-header {
  transform: translateY(-100%);
}

</style>
