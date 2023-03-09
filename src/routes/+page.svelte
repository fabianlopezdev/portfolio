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
	$: language = lang === 'en' ? english : spanish;

	function toggleLang(event) {
		 if (lang === 'en') {
      lang = 'es';
    } else {
      lang = 'en';
    }
    document.getElementById('lang-form').submit();
	}
</script>

<header>
	<div class="header-container">
		<Menu language={language.nav}/>
		<Logo />
		<div class="toggle-and-socialLinks">
			<div class="toggle">
				<ToggleDark />
			</div>
			<form class="toggle" method="POST" action="/?/setLang" use:enhance>
				  <input type="hidden" name="lang" bind:value={lang} />
  <button on:click={toggleLang}>
    {lang === 'en' ? 'ES' : 'EN'}
  </button>
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
	button {
		appearance: none;
		border: none;
		border-radius: none;
		color: gray;
		font-weight: 500;
		/* font-size: 0.8rem; */
		padding: 0.5;
		cursor: pointer;
		background-color: inherit;
		outline: none;
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
