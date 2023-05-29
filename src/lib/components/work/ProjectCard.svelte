<script lang="ts">
	import GitHubIcon from 'svelte-icons/fa/FaGithub.svelte';
	import GoToArrow from 'svelte-icons/go/GoLinkExternal.svelte';
	import type { Language, ProjectType } from '../../../types';
	export let projectCardLang: Language['work']['projectCard'];
	export let selectedProject: string;

	let project: ProjectType;
	$: {
		if (selectedProject === 'wannago') {
			project = projectCardLang.wannago;
		} else if (selectedProject === 'huddler') {
			project = projectCardLang.huddler;
		} else if (selectedProject === 'road-trip') {
			project = projectCardLang.roadTrip;
		}
	}
</script>

<div class="card-container">
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

<style>
	.card-container {
		/* box-sizing: content-box; */
		padding: 1rem;
		border: 1px solid black;
		border-radius: 1rem;
		/* width: 20rem; */
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
