<script>
	import MoonIcon from 'svelte-icons/fa/FaRegMoon.svelte';
	import SunIcon from 'svelte-icons/fa/FaRegSun.svelte';
	import { tick } from 'svelte';

	export let isDark = false;

	async function toggleTheme() {
		window.document.body.classList.toggle('dark-mode');
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
	appearance: none;
		border: none;
		border-radius: none;
		color: gray;
		font-size: 0.9rem;
		cursor: pointer;
		background-color: inherit;
		outline: none;
		padding: 0;
	}
	/* .header-icons {
			width: 20.8px;
		height: 20.8px;
	} */


</style>
