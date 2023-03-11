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

<button aria-label="Toggle between light and dark mode" on:click|preventDefault={toggleTheme}>
	{#if isDark}
		<div class="header-icons">
			<SunIcon />
		</div>
	{:else}
		<div class="header-icons moon">
			<MoonIcon />
		</div>
	{/if}
</button>

<style>
	button {
		/* display: none; */
		border: none;
		appearance: none;
		background-color: var(--clr-bg);
		padding: 0;
		/* color: black; */
	}

	.header-icons {
		width: 1rem;
		padding-left: 0.45rem;
		padding-right: 0.45rem;
	}
	/* button {
	margin: 1rem;
} */
</style>
