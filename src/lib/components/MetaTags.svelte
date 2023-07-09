<script lang='ts'>
  import type { Language } from '../../types';
  export let metaTagsLang: Language['metaTags'];
</script>

<svelte:head>
	<title>{metaTagsLang.title}</title>
	{@html `<meta name="description" content="${metaTagsLang.description}" />`}
	{@html `<meta property="og:url" content="${metaTagsLang.url}" />`}
	{@html `<meta property="og:description" content="${metaTagsLang.description}"/>`}
	{@html `<meta property="og:type" content="website" />`}
	{@html `<meta property="og:title" content="${metaTagsLang.title}" />`}
	{@html `<meta property="og:image" itemprop="image" content="${metaTagsLang.image}" />`}

	{@html `<meta name="twitter:card" content="summary_large_image" />`}
	{@html `<meta name="twitter:domain" content="fabapps.dev" />`}
	{@html `<meta name="twitter:url" content="${metaTagsLang.url}" />`}
	{@html `<meta name="twitter:title" content="${metaTagsLang.title}" />`}
	{@html `<meta name="twitter:description" content="${metaTagsLang.description}" />`}
	{@html `<meta name="twitter:image" content="${metaTagsLang.image}" />`}
</svelte:head>