<script lang="ts">
	import HamburgerMenuIcon from 'svelte-icons/io/IoIosMenu.svelte';
	import CloseIcon from 'svelte-icons/io/IoIosClose.svelte';
	import { NavLinks } from '$components';
	import type { Language } from '../../../types';

	export let navLinks: Language['navLinks'];

	let isShowMenu = false;

	function toggleMenu() {
		isShowMenu = !isShowMenu;
	}

	function handleLinkClick() {
		toggleMenu();
	}
</script>

{#if isShowMenu}
	<button type="button" on:click|preventDefault={toggleMenu} aria-label="Close menu">
		<div class="header-icons">
			<CloseIcon />
		</div>
	</button>
	<div class="modal">
		<nav>
			<NavLinks {navLinks} customClass="modal" on:linkClick={handleLinkClick} />
		</nav>
	</div>
{:else}
	<button type="button" on:click|preventDefault={toggleMenu} aria-label="Open menu">
		<div class="header-icons">
			<HamburgerMenuIcon />
		</div>
	</button>
{/if}

<style>
	button {
		display: flex;
		border: none;
		background-color: var(--clr-bg);
		padding: 0;
		z-index: 3;
	}

	.modal {
		display: flex;
		flex-direction: column;
		background-color: var(--clr-bg);
		position: fixed;
		top: 0;
		left: 0;
		height: 100svh;
		width: 100svw;
	}
	nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	@media (max-width: 658px) {
		button {
			display: flex;
		}
	}
</style>
