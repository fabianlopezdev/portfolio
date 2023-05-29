<script lang="ts">
	import { generateProjectInfo } from '../../../utils/data';
	import GitHubIcon from 'svelte-icons/fa/FaGithub.svelte';
	import GoToArrow from 'svelte-icons/go/GoLinkExternal.svelte'
	import type { Language, ProjectType } from '../../../types';
	export let projectCardLang: Language['work']['projectCard'];
	export let selectedProject: string;

	let project: ProjectType;
	$: console.log('type', selectedProject);
	$: console.log('lang', projectCardLang);
	$: {
		if (selectedProject === 'wannago') {
			console.log(projectCardLang.wannago);

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
	<div class='icons-container'>
		<a href={project?.githubLink} target="_blank"  rel="noopener noreferrer"><div class="icons"><GitHubIcon /></div></a>
		{#if project.website}
			<a href={project?.website} target="_blank"  rel="noopener noreferrer"><div class="goToArrow icons"><GoToArrow /></div></a
			>
		{/if}
	</div>
</div>

<style>
	.card-container {
		/* box-sizing: content-box; */
		padding: 1rem;
		border: 1px solid black;
		border-radius: 5px;
		width: 20rem;
		flex: 0 0 60%;
	}

	h3 {
		margin-top: 0;
	}

	
</style>
