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

<button
	class="icons"
	aria-label="Toggle between light and dark mode"
	on:click|preventDefault={toggleTheme}
>
	{#if isDark}
		<SunIcon />
	{:else}
		<MoonIcon />
	{/if}
</button>

<style>

.icons {
	width: 1em;
	height: 1em;
}

/* button {
	margin: 1rem;
} */


</style>