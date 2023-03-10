<script lang="ts">
	import scrollTo from '../../utils/functions';
	export let customClass = '';
	export let navLinks;
	import { generateNavigationLinks } from '../../utils/data';

		let links;
	$: if (navLinks) links = generateNavigationLinks(navLinks)
	
</script>

<nav >
	{#if links}
	<ul class='nav {customClass}'>
		{#each links as { href, name }}
			<li>
				<a {href} on:click|preventDefault={scrollTo} aria-label={`Scroll to ${name}`}>{name}</a>
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
		gap: 2em;
		font-size: 1rem;
		font-weight: 700;
	}
	
	.nav.modal {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0;
		padding: 0;
		gap: 2em;
		font-size: 2rem;
		color: var(--clr-secondary);
		font-weight: 700;
	}
	li {
		list-style: none;
	}
	a {
		color: inherit;
		padding: 0.2rem 0.5rem;
	}
	a:hover {
		background-color: #e2e8ec;
		color: black;
		border-radius: 6px;
		padding: 0.5rem;
		transition: color 0.3s ease, background-color 0.3s ease;
	}
</style>
