<script lang="ts">
	import EnvelopeIcon from 'svelte-icons/fa/FaRegEnvelope.svelte';
	import FileDownloadIcon from 'svelte-icons/fa/FaFileDownload.svelte';

	export let href = '';
	export let icon = '';
</script>

{#if icon === 'envelope'}
	<a class='button' {href} on:click|preventDefault aria-label="Contact">
		<slot />
		<div class="icons">
			<EnvelopeIcon aria-hidden="true" />
		</div>
	</a>
{:else}
	<a class='button file' {href}  target={'_blank'} aria-label="Download resume">
		<slot />
		<div class="icons">
			<FileDownloadIcon aria-hidden="true" />
		</div>
	</a>
{/if}

<style>


	.icons {
		color: inherit;
	}

	.file {
		color: var(--clr-font-contrast-black-bg);
	}

	.file .icons {
		color: inherit;
	}

	@media (max-width: 544px) {
		a {
			/* flex-direction: column;
			align-items: center; */
			width: 10rem;
			/* height: 5rem; */
			margin: 0;
			/* gap: 0; */
		}
	}
</style>
