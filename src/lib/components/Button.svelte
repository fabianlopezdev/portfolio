<script lang="ts">
	import EnvelopeIcon from 'svelte-icons/fa/FaRegEnvelope.svelte';
	import FileDownloadIcon from 'svelte-icons/fa/FaFileDownload.svelte';

	export let href = '';
	export let icon = '';
</script>

{#if icon === 'envelope'}
	<a class="g-button" {href} on:click|preventDefault aria-label="Contact">
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
	<a class="g-button file" {href} target={'_blank'} aria-label="Download resume">
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
		display: flex;
		align-items: center;
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

	.g-button {
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}

.g-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: blue;
  transition: transform 0.3s ease;
  z-index: -1;
}

.g-button:hover::before {
  transform: translateX(100%);
}

.g-button:hover {
  color: white; 
}

.g-button.file::before {
  background-color: black;
}


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
