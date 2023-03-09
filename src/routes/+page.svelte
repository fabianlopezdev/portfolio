<script lang="ts">
	import { enhance } from '$app/forms';
	import english from '../languages/en.json';
	import spanish from '../languages/es.json';
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
	$: ({ lang } = data || 'en');

	// Assign language based on lang and make it reactive
	$: if (lang === 'en') language = english;
	else language = spanish;

	function submitOnChange(event) {
		event.target.parentElement.submit();
	}
</script>

<header>
	<div class="header-container">
		<Menu />
		<Logo />
		<div class="toggle-and-socialLinks">
			<div class="toggle">
				<ToggleDark />
			</div>
			<form class="toggle" method="POST" action="/?/setLang" use:enhance>
				<select name="lang" on:change={submitOnChange} bind:value={lang}>
					<option value="en">ES</option>
					<option value="es">EN</option>
				</select>
			</form>
		</div>
	</div>

	<div class="not-in-header-container">
		<Nav language={language.nav}/>
	</div>
</header>

<main>
	<Home language={language.home} />
	<About language={language.about} />
	<Projects language={language.projects} />
	<Contact language={language.contact} />
</main>

<footer>
	<Nav />
</footer>

<style>
	select {
		appearance: none;
		border: none;
		border-radius: none;
		color: gray;
		font-weight: 500;
		/* font-size: 1rem; */
		padding: 0.5;
		cursor: pointer;
		background-color: inherit;
		outline: none;
	}

	option {
		font-size: 1.1em;
		/* padding: 1rem; */
	}
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
		/* align-items: center; */
		/* justify-content: center; */
		gap: 2rem;
	}
	.toggle {
		display: flex;
		align-self:center;
		justify-self:center;
		padding: 0.5rem;
	}

	.toggle:hover {
		background-color: #e2e8ec;
		color: black;
		border-radius: 6px;
		/* margin: 1rem; */
		transition: color 0.3s ease, background-color 0.3s ease;
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
	
		.toggle-and-socialLinks {
			gap: 1rem;
			justify-content: space-around;
			margin-left: 1rem;
		}
	}
</style>
