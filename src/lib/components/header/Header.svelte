<script lang="ts">
	import { Logo, LanguageToggle, LightDarkModeToggle, ModalMenu, NavLinks } from '$components';
	import type { Language } from '../../../types';

	export let lang: string | undefined;
	export let navLinksLang: Language['navLinks'];
</script>

<nav class="header-container">
	<!-- fontSize value is in rem -->
	<Logo fontSize={3} />
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
		width: clamp(375px, 100vw, 866px);
		margin: 0.4rem 0.5rem 0.3rem 0.8rem;
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
</style>
