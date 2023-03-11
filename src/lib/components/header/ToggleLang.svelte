<script>
	import { enhance } from '$app/forms';
	export let lang;
	function toggleLang(event) {
		if (lang === 'en') {
			lang = 'es';
		} else {
			lang = 'en';
		}
		document.getElementById('lang-form').submit();
	}
</script>

<form  method="POST" action="/?/setLang" use:enhance>
	<input type="hidden" name="lang" bind:value={lang} />
	<button on:click={toggleLang}>
		<div class='header-icons'>
			{lang === 'en' ? 'ES' : 'EN'}
		</div>
	</button>
</form>

<style>
  button {
		appearance: none;
		border: none;
		border-radius: none;
		color: gray;
		font-size: 0.9rem;
		/* font-weight: 500; */
		/* font-size: 0.8rem; */
		/* padding: 0.5; */
    /* padding:0; */
		cursor: pointer;
		background-color: inherit;
		outline: none;
		padding: 0;
	}


</style>