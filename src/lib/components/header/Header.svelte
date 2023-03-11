<script lang="ts">
	import { ToggleLang, ToggleTheme, ModalMenu, Logo, NavLinks } from '$components';

	export let lang: string | undefined;
	export let navLinks: Object;
</script>

<nav class="header-container">
	<ModalMenu {navLinks} />
	<Logo />
	<ul class="toggles-container">
		<li>
			<ToggleTheme />
		</li>
		<li >
			<ToggleLang {lang} />
		</li>
	</ul>
</nav>

<nav class="nav-links-container">
	<NavLinks {navLinks} />
</nav>

<style>
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

	.nav-links-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	@media (max-width: 658px) {
		.nav-links-container {
			display: none;
		}

		.toggles-container:hover {
			background-color: transparent;
			color: inherit;
		}
	}
</style>
