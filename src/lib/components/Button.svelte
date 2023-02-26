<script>
	// export let buttonIcon = null;
  import EnvelopeIcon from 'svelte-icons/fa/FaRegEnvelope.svelte'
  import FileDownloadIcon from 'svelte-icons/fa/FaFileDownload.svelte'


  export let href = '';
  export let icon = '';
 

</script>

{#if icon === 'envelope'}
  <a {href} on:click|preventDefault >
    <slot/>
    <div class='icons'>
      <EnvelopeIcon/>
    </div>
	</a>
  {:else}
	<a {href} target={'_blank'}>
		<slot/>
    <div class='icons'>
      <FileDownloadIcon/>
    </div>
	</a>
  {/if}


<style>
	a {
		color: var(--clr-font-contrast);
		text-decoration: none;
		background-color: var(--color);
		padding: 1em;
		border-radius: 1rem;
    display: flex;
    max-width: 215px;
    width: 15em;
    gap:1em;
    justify-content: center;
    font-size: 15.8px;
    font-weight: 700;
	}

  div {
    color: var(--clr-font-contrast);
  }

   @media screen and (max-width: 668px) {
		a {
    flex-direction: column;
    align-items: center;
    width: 5em;
    margin-top: 0em;
    margin-bottom: 7em;
    }
	}
</style>
