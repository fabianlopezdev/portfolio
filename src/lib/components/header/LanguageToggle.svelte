<script lang="ts">
	import { enhance } from '$app/forms';
	export let lang: string | undefined;
	function toggleLang() {
		lang = lang === 'en' ? 'es' : 'en';
		const langForm = document.getElementById('lang-form') as HTMLFormElement;
		if (langForm) {
			langForm.submit();
		}
	}
</script>

<form method="POST" action="/?/setLang" use:enhance>
	<input type="hidden" name="lang" bind:value={lang} />
	<button title='English / Spanish' on:click={toggleLang} aria-label='Toggle between English and Spanish'>
		<span class="header-icons">
			{lang === 'en' ? 'ES' : 'EN'}
		</span>
	</button>
</form>

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
</style>
