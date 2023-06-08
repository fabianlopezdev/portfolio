<script lang="ts">
	import HamburgerMenuIcon from 'svelte-icons/io/IoIosMenu.svelte';
	import CloseIcon from 'svelte-icons/io/IoIosClose.svelte';
	import { Logo, NavLinks, SocialLinks } from '$components';
	import type { Language } from '../../../types';

	export let navLinksLang: Language['navLinks'];

	let isShowMenu = false;

	function toggleMenu() {
		isShowMenu = !isShowMenu;
		  if (isShowMenu) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
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
		<div class='logo'>
			<Logo fontSize={4}/>
		</div>
		<nav>
			<NavLinks {navLinksLang} customClass="modal" on:linkClick={handleLinkClick} />
		</nav>
		<div class='socialLinks'>

			<SocialLinks gap={1}/>
		</div>
	</div>
{:else}
	<button type="button" on:click|preventDefault={toggleMenu} aria-label="Open menu">
		<div class="header-icons">
			<HamburgerMenuIcon />
		</div>
	</button>
{/if}

<style>
	.logo {
		display:flex;
		justify-content: center;
		padding-top:6rem;
	}

	.socialLinks {
		position: fixed;
		left: 0;
		right:0;
		top: 30rem;
	}
	button {
		display: flex;
		border: none;
		background-color: var(--clr-bg);
		padding: 0;
		z-index: 3;
		color: gray;
	}

	.modal {
		display: flex;
		flex-direction: column;
		background-color: var(--clr-bg);
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	/* .header-icons{
		color: #F8FDFD 
	} */
	@media (max-width: 658px) {
		button {
			display: flex;
		}
	}
</style>
