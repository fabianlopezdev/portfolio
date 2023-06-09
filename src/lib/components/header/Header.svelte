<script lang="ts">
	import { LogoAnimated, LanguageToggle, LightDarkModeToggle, ModalMenu, NavLinks } from '$components';
	import type { Language } from '../../../types';

	export let lang: string | undefined;
	export let navLinksLang: Language['navLinks'];
</script>

<nav class="header-container">
	<!-- fontSize value is in rem -->
	<LogoAnimated/>
	<ul class="icons-container">
		<li>
			<LightDarkModeToggle />
		</li>
		<li>
			<LanguageToggle {lang} />
		</li>
		<li class="modal">
			<ModalMenu {navLinksLang} />
		</li>
	</ul>
	<nav class="nav-links-container">
		<NavLinks {navLinksLang} />
	</nav>
</nav>

<style>
	.header-container {
		position: relative;
		display: flex;
		align-self: center;
		align-items: center;
		justify-content: space-between;
		height: var(--height-header);
		width: clamp(375px, 100vw, 1300px);
		margin: 0.4rem 0.7rem 0.3rem 0.8rem;
		background-color: var(--clr-bg);
		transition: background-color 0.5s ease, color 0.5s;
	}

	.icons-container {
		display: flex;
		align-items: center;
		/* height: inherit; */
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
		
		.icons-container:hover {
			background-color: transparent;
			color: inherit;
		}
		
		.modal {
			display: flex;
			z-index: 3;
		}
	}
	
	@media only screen and (orientation: landscape) {
		.header-container {
		margin: 0.4rem 1rem 0.3rem 0.8rem;
			
		}
	}
</style>
