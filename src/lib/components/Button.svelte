<script>
	// export let buttonIcon = null;
  import EnvelopeIcon from 'svelte-icons/fa/FaRegEnvelope.svelte'
  import FileDownloadIcon from 'svelte-icons/fa/FaFileDownload.svelte'


  export let href;
  export let icon;
  // console.log(href)

 
</script>


	<a {href} on:click|preventDefault target={href === '#contact' ? null : '_blank'}>
		<slot>Contact me</slot>
    <div class='icons'>
      {#if icon === 'envelope'}
      <EnvelopeIcon/>
      {:else}
      <FileDownloadIcon/>
      {/if}
    </div>
	</a>


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

   @media screen and (max-width: 570px) {
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
    margin-bottom: 3em;
    }
	}
</style>
