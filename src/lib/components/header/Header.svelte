<script lang="ts">
	import { ToggleLang, ToggleTheme, ModalMenu, NavLinks } from '$components';
	import type { Language } from '../../../types';
	import scrollTo from '../../../utils/functions';
	export let lang: string | undefined;
	export let navLinks: Language['navLinks'];
</script>

<nav class="header-container">
	<h1>
		<a href="#home" class="h1-font" on:click|preventDefault={(e) => scrollTo(e)}>fab<span style='color: blue'>. </span> </a>
	</h1>
	<ul class="toggles-container">
		<li>
			<ToggleTheme />
		</li>
		<li>
			<ToggleLang {lang} />
		</li>
		<li class="modal">
			<ModalMenu {navLinks} />
		</li>
	</ul>
	<nav class="nav-links-container">
		<NavLinks {navLinks} />
	</nav>
</nav>

<style>
	.h1-font {
		font-family: 'League Spartan', sans-serif;
		font-size: 2.5rem;
		font-weight: 900;
		display: inline-block;
		position: relative;
		z-index: 1;
		color: var(--clr-font);
		letter-spacing: -0.1rem;
		margin: 0;
	}

	.header-container {
		position: relative;
		display: flex;
		align-self: center;
		align-items: center;
		justify-content: space-between;
		height: var(--size-header);
		width: clamp(375px, 100vw, 866px);
		margin: 0.4rem 0.5rem 0.3rem 0.8rem;
	}

	.toggles-container {
		display: flex;
		align-items: center;
		height: inherit;
		gap: 0.5rem;
		margin: 0;
		padding: 0;
	}

	li {
		appearance: none;
		list-style: none; /* Remove bullet points on list item */
		margin: 0; /* Remove default margin */
	}

	.modal {
		display: none;
	}

	.nav-links-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	@media only screen and (orientation: portrait) {
		.nav-links-container {
			display: none;
		}

		.toggles-container:hover {
			background-color: transparent;
			color: inherit;
		}

		.modal {
			display: flex;
			z-index: 3;
		}
	}
</style>
