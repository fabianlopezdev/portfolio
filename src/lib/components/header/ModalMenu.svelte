<script lang="ts">
	import HamburgerMenuIcon from 'svelte-icons/io/IoIosMenu.svelte';
	import CloseIcon from 'svelte-icons/io/IoIosClose.svelte';
	import { NavLinks } from '$components';
	export let navLinks: Object;
	let isShowMenu = false;
	function toggleMenu() {
		isShowMenu = !isShowMenu;
	}
	
	function handleLinkClick(event) {
		toggleMenu();
	}
</script>

{#if isShowMenu}
	<button on:click|preventDefault={toggleMenu}>
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
	<button on:click|preventDefault={toggleMenu}>
		<div class="header-icons">
			<HamburgerMenuIcon />
		</div>
	</button>
{/if}

<style>
	button {
		display: none;
		border: none;
		background-color: var(--clr-bg);
		padding: 0;
		z-index: 100;
	}
	/* .header-icons {
		z-index: 2;
	} */
	.modal {
		display: flex;
		flex-direction: column;
		background-color: var(--clr-bg);
		position: fixed;
		z-index: 2;
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

