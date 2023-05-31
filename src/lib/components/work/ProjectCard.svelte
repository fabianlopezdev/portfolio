<script lang="ts">
	import GitHubIcon from 'svelte-icons/fa/FaGithub.svelte';
	import GoToArrow from 'svelte-icons/go/GoLinkExternal.svelte';
	import type { Language } from '../../../types';
	import { Carousel } from '$components';
	export let projectCardLang: Language['work']['projectCard'];
	export let selectedProject: string;
	import { slide } from 'svelte/transition';

	let project: Language['work']['projectCard'];
	$: {
		if (selectedProject) {
			project = projectCardLang[selectedProject];
		}
	}
</script>

{#if project}
	<div class="card-container" in:slide={{delay: 1000, duration: 1000 }} >
		<div class="carousel">
			<Carousel />
		</div>
		<div class='details'>

			<h3>{project.name}</h3>
			<p>{project.description}</p>
		<ul class="skills-container">
			{#each project.skills as skill}
				<li>
					{skill}
				</li>
			{/each}
		</ul>
		<div class="icons-container">
			<a href={project?.githubLink} target="_blank" rel="noopener noreferrer"
			><div class="icons"><GitHubIcon /></div></a
			>
			{#if project.website}
			<a href={project?.website} target="_blank" rel="noopener noreferrer"
			><div class="icons"><GoToArrow /></div></a
			>
			{/if}
		</div>
	</div>
</div>
{/if}

<style>
	.carousel {
		/* height: 350px; */
	}
	.card-container {
		/* box-sizing: content-box; */
		
	
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
		border-radius: 1rem;
		/* width: 20rem; */
	}
.details {
padding: 1rem;
}
	h3 {
		margin: 0;
	}

	p {
		margin: 7px 0;
	}
	.skills-container {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
	}

	.skills-container li {
		padding: 0.4rem;
		background-color: #d0dff0;
		color: #016aa1;
		border-radius: 5px;
		margin-right: 7px;
		margin-bottom: 7px;
		font-weight: 500;
	}

	@media (min-width: 995px) {
		/* .project-card {
			display: none;
		} */
	}
</style>
