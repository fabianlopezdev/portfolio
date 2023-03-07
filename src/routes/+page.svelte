<script lang="ts">
	import { enhance } from '$app/forms';
	import english from '../lib/languages/en.json'
	import spanish from '../lib/languages/es.json'
	import {
		Nav,
		About,
		Projects,
		Contact,
		ToggleDark,
		SocialLinks,
		Logo,
		Home,
		Menu
	} from '$components';

	export let data;
	let language;
	// Destructure lang from data and make it reactive
$: ({lang} = data);

// Assign language based on lang and make it reactive
$: if (lang === 'en') language = english;
else language = spanish;

	function submitOnChange(event) {
		event.target.parentElement.submit()
	}

</script>

<header>
	<div class="header-container">
		<Menu />
		<Logo />
		<div class='toggle-and-socialLinks'>
			<div class='toggle'>
				<ToggleDark/>
			</div>
			<div class="socialLinks">
				<SocialLinks />
			</div>
		</div>
	</div>
	<form method='POST' action="/?/setLang" use:enhance>
		<select name="lang" on:change={submitOnChange} bind:value={lang}>
			<option value="en">EN</option>
			<option value="es">ES</option>
		</select>
	</form>
	<div class="not-in-header-container">
		<Nav />
	</div>
</header>

<main>
	<h1>Your current lang is {lang}</h1>
	<h1>Your current lang is {language.home.slogan}</h1>
	<Home />
	<About />
	<Projects />
	<Contact />
</main>

<footer>
	<Nav />
</footer>

<style>
	header {
		position: relative;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
	}
	.header-container {
		height: var(--size-header);
		display: flex;
		align-self: center;
		align-items: center;
		justify-content: space-between;
		width: clamp(375px, (100vw - 40px), 866px);
	}
	.toggle-and-socialLinks {
		display: flex;
		align-items: center;
		gap: 2rem;
	}
	.not-in-header-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	@media (max-width: 658px) {
		.not-in-header-container {
			display: none;
		}
		.toggle {
			display: none;
		}
		.toggle-and-socialLinks {
			gap: 1rem;
			justify-content: space-around;
			margin-left: 1rem;
		}
	}
</style>
