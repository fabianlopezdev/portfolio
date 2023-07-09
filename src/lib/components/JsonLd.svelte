<script lang='ts'>
  
type PersonJsonLd = {
		'@context': string;
		'@type': string;
		name: string;
		url: string;
		image: string;
		sameAs: string[];
		jobTitle: string;
	};
  
export let jsonLd: PersonJsonLd ;

</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

