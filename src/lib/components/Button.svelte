<script>
	// export let buttonIcon = null;
  import EnvelopeIcon from 'svelte-icons/fa/FaRegEnvelope.svelte'
  import FileDownloadIcon from 'svelte-icons/fa/FaFileDownload.svelte'


  export let href;
  export let icon;
  // console.log(href)

 
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
		color: white;
		text-decoration: none;
		background-color: var(--color, black);
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
    color: white;
  }

   @media screen and (max-width: 668px) {
    slot {
      display: none;
    }
		a {
     color: white;
		background-color: var(--color, black);
		padding: 1em;
		border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 215px;
    width: 5em;
    justify-content: center;
    margin-top: 0em;
    margin-bottom: 7em;
    }
	}
</style>
