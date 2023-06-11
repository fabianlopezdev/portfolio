<script lang="ts">
	import EnvelopeIcon from 'svelte-icons/fa/FaRegEnvelope.svelte';
	import FileDownloadIcon from 'svelte-icons/fa/FaFileDownload.svelte';

	export let href = '';
	export let icon = '';
</script>

{#if icon === 'envelope'}
	<a class="button" {href} on:click|preventDefault aria-label="Contact">
		<div class='text'>
			<slot />
		</div>
		<div class="center">
			<div class="icons">
				<EnvelopeIcon aria-hidden="true" />
			</div>
		</div>
	</a>
{:else}
	<a class="button file" {href} target={'_blank'} aria-label="Download resume">
		<div class='text'>
		<slot />
		</div>
		<div class='center'>
			<div class="icons">
				<FileDownloadIcon aria-hidden="true" />
			</div>
		</div>
	</a>
{/if}

<style>
	.text {
		width: 5rem;
	}
	.center {
		width: 2rem;
		/* margin: auto; */
	}

	.icons {
		color: inherit;
		margin:auto;
	}

	.file {
		color: var(--clr-font-contrast-black-bg);
	}

	.file .icons {
		color: inherit;
	}

	.button:hover {
		background-color: blue;
	}

	.button.file:hover {
		background-color: black;
	}
	/* a:hover {
		background-color: red;
	} */

	@media (max-width: 544px) {
		.button {
			/* flex-direction: column;
			align-items: center; */
			/* width: 8.5rem; */
			/* height: 5rem; */
			/* margin: 0; */
			/* gap: 0; */
		}
	}
</style>
