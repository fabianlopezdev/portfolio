<script lang="ts">
	import scrollTo from '../../utils/functions';
	import { links } from '../../utils/data';
	export let customClass = '';
</script>

<nav >
	<ul class='nav {customClass}'>
		{#each links as { href, name }}
			<li>
				<a {href} on:click|preventDefault={scrollTo} aria-label={`Scroll to ${name}`}>{name}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.nav {
		display: flex;
		margin: 0;
		padding: 0;
		gap: 2em;
		font-size: 1rem;
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
		transition: color 0.3s ease, background-color 0.3s ease;
	}
</style>
