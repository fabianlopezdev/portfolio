<script>
	import MoonIcon from 'svelte-icons/fa/FaRegMoon.svelte';
  import SunIcon from 'svelte-icons/fa/FaRegSun.svelte'
  let isDark = false;
</script>

<button class='icons' aria-label='Toggle between light and dark mode' on:click|preventDefault={() => isDark = !isDark}>
	{#if isDark}
  <MoonIcon/>
  {:else}
  <SunIcon style='color: #016AA1'/>
{/if}
</button>



