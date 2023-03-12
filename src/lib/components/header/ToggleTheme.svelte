<script>
	import MoonIcon from 'svelte-icons/fa/FaRegMoon.svelte';
	import SunIcon from 'svelte-icons/fa/FaRegSun.svelte';
	import { tick } from 'svelte';

	export let isDark = false;

	async function toggleTheme() {
		window.document.body.classList.toggle('dark');
		await tick();
		isDark = !isDark;
	}
</script>

<button aria-label="Toggle between light and dark mode" on:click={toggleTheme}>
	<span class="header-icons">
		{#if isDark}
			<SunIcon />
		{:else}
			<MoonIcon />
		{/if}
	</span>
</button>

<style>
	button {
		border: none;
		appearance: none;
		background-color: var(--clr-bg);
		padding: 0;
	}

	.header-icons {
		width: 1rem;
		padding-left: 0.45rem;
		padding-right: 0.45rem;
	}
</style>
