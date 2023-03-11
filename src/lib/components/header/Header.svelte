<script lang="ts">
	import { ToggleLang, ToggleTheme, ModalMenu, Logo, NavLinks } from '$components';

	export let lang: string | undefined;
	export let navLinks: Object;
</script>

<nav class="header-container">
	<!-- <ModalMenu {navLinks} /> -->
	<h1 class="h1-font">Fabian Lopez</h1>
	<ul class="toggles-container">
		<li>
			<ToggleTheme />
		</li>
		<li >
			<ToggleLang {lang} />
		</li>
		<li class="modal" >
			<ModalMenu {navLinks} />
		</li>
	</ul>
</nav>

<nav class="nav-links-container">
	<NavLinks {navLinks} />
</nav>

<style>
	.h1-font {
		font-family: 'League Spartan', sans-serif;
		font-size: 2.3rem;
		/* font-weight: 300; */
		display: inline-block;
		position: relative;
		z-index: 1;
		color: var(--clr-font-contrast);
	}

	h1::before {
		content: '';
		position: absolute;
		width: 110%;
		height: 110%;
		top: -3px;
		left: -10px;
		z-index: -1;
		transform: rotate(-1deg);
		background-color: var(--clr-accent);
	}

	.header-container {
		display: flex;
		align-self: center;
		align-items: center;
		justify-content: space-between;
		height: var(--size-header);
		width: clamp(375px, (100vw - 40px), 866px);
	}

	.toggles-container {
		display: flex;
		gap: 0.5rem;
		/* gap: 0.5rem; */
		margin: 0;
		/* margin-right: 1rem; */
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

	@media (max-width: 745px) {
		.nav-links-container {
			display: none;
		}

		.toggles-container:hover {
			background-color: transparent;
			color: inherit;
		}

		.modal {
			display: block;
		}
	}
</style>
