<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import scrollTo from '../../utils/functions';
	import { generateNavigationLinks } from '../../utils/data';
	import type { Language } from '../../types';

	export let customClass = '';
	export let navLinksLang: Language['navLinks'];

	let links: { href: string; name: string }[] = [];
	$: if (navLinksLang) links = generateNavigationLinks(navLinksLang);
	const dispatch = createEventDispatcher();

	function handleClick(link: string, event: MouseEvent) {
		dispatch('linkClick', link);
		scrollTo(event);
	}
</script>

<nav class={customClass}>
	{#if links}
		<ul class="nav {customClass}">
			{#each links as { href, name }}
				<li>
					<a
						{href}
						on:click|preventDefault={(event) => handleClick(name, event)}
						aria-label={`Scroll to ${name}`}>{name}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</nav>

<style>
	.nav {
		display: flex;
		margin: 0;
		padding: 0;
		gap: 2rem;
		font-size: 1rem;
	}

	.nav.modal {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		color: var(--clr-secondary);
		font-weight: 400;
	}
	li {
		list-style: none;
	}
	a {
		color: inherit;
		padding: 0.2rem 0.5rem;
	}
	a:hover {
		background-color: var(--clr-hover);
		/* color: black; */
		border-radius: 6px;
		padding: 0.5rem;
		transition: color 0.3s ease, background-color 0.3s ease;
	}
</style>
