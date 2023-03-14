<script lang="ts">
	import EnvelopeIcon from 'svelte-icons/fa/FaRegEnvelope.svelte';
	import FileDownloadIcon from 'svelte-icons/fa/FaFileDownload.svelte';

	export let href = '';
	export let icon = '';
</script>

{#if icon === 'envelope'}
	<a {href} on:click|preventDefault aria-label="Contact">
		<slot />
		<div class="icons">
			<EnvelopeIcon aria-hidden="true" />
		</div>
	</a>
{:else}
	<a {href} class="file" target={'_blank'} aria-label="Download resume">
		<slot />
		<div class="icons">
			<FileDownloadIcon aria-hidden="true" />
		</div>
	</a>
{/if}

<style>
	a {
		display: flex;
		justify-content: center;
		color: var(--clr-font-contrast);
		text-decoration: none;
		max-width: 215px;
		width: 15rem;
		padding: 1rem;
		border-radius: 1rem;
		font-size: 15.8px;
		font-weight: 700;
		color: var(--clr-font-contrast);
		background-color: var(--color);
		gap: 1rem;
	}

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
			width: 8rem;
			/* height: 5rem; */
			margin: 0;
			/* gap: 0; */
		}
	}
</style>
