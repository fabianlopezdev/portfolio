<script>
	import MoonIcon from 'svelte-icons/fa/FaRegMoon.svelte';
	import SunIcon from 'svelte-icons/fa/FaRegSun.svelte';
	import { onMount } from 'svelte';

	let isDark = null;

	function setTheme(theme) {
		isDark = theme === 'dark';
		if (isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		try {
			localStorage.setItem('theme', theme);
		} catch (e) {
			console.error('Could not set theme in localStorage:', e);
		}
	}

	onMount(() => {
		try {
			const theme = localStorage.getItem('theme') || 'light';
			setTheme(theme);
		} catch (e) {
			console.error('Could not get theme from localStorage:', e);
			setTheme('light'); // default to light theme if localStorage is inaccessible
		}
	});

	function toggleTheme() {
		const newTheme = isDark ? 'light' : 'dark';
		setTheme(newTheme);
	}
</script>

<!-- This gets hoists before the html is mounted, I keep it here instead of +layout bacause it is easier to debug keeping the logic of toggling dark-mode together -->
<svelte:head>
	<script>
		if (document) {
			let mode = localStorage.theme || 'light';
			if (mode === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark');
				localStorage.theme = 'dark';
			} else {
				document.documentElement.classList.remove('dark');
				localStorage.theme = 'light';
			}
		}
	</script>
</svelte:head>

<button title="Light / Dark" aria-label="Toggle between light and dark mode" on:click={toggleTheme}>
	<span class="header-icons">
		{#if isDark !== null}
			{#if isDark}
				<SunIcon />
			{:else}
				<MoonIcon />
			{/if}
		{/if}
	</span>
</button>

<style>
	button {
		appearance: none;
		border: none;
		border-radius: none;
		color: var(--clr-font);
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
