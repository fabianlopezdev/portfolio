<script lang="ts">
	import scrollTo from '../../utils/functions';

	const links = [
		{ href: '#about', name: 'About' },
		{ href: '#projects', name: 'Projects' },
		{ href: '#contact', name: 'Contact' }
	];
</script>

<nav>
	<ul>
		{#each links as { href, name }}
			<li>
				<a {href} on:click|preventDefault={scrollTo} aria-label={`Scroll to ${name}`}>{name}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	ul {
		display: flex;
		margin: 0;
		padding: 0;
		gap: 2em;
	}
	li {
		list-style: none;
	}
	a {
		text-decoration: none;
		color: var(--clr-font);
		font-size: 1em;
		padding: 0.2rem 0.5rem;
	}
	a:hover {
		background-color: #e2e8ec;
		color: black;
		border-radius: 6px;
		transition: color 0.3s ease, background-color 0.3s ease;
	}
</style>
