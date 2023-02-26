<script>
	import MoonIcon from 'svelte-icons/fa/FaRegMoon.svelte';
  import SunIcon from 'svelte-icons/fa/FaRegSun.svelte'
  export let isDark = false;

  function toggleTheme() {
    window.document.body.classList.toggle('dark') 
    isDark =!isDark;

  }
</script>

<button class='icons' aria-label='Toggle between light and dark mode' on:click|preventDefault={toggleTheme}>
	{#if isDark}
  <SunIcon/>
  {:else}
  <MoonIcon/>
{/if}
</button>



