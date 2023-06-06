<script lang="ts">
	import { Switch, ProjectsLogos, ProjectCard,Skills, ProjectCardBig } from '$components';

	import type { Language } from '../../../types';
	export let workLang: Language['work'];
	export let title;

	$: projectCardLang = workLang.projectCard;
	$: switchLang = workLang.projectCard;

	let selectedOption = 'projects';
	let selectedProject = '';

	let innerWidth: number | undefined;

	$: {if (innerWidth && innerWidth > 995) {
		selectedProject = 'wannago';
	}}
</script>


<svelte:window bind:innerWidth />

<section id="work">
	<Switch bind:selectedOption {switchLang} />
	{#if selectedOption === 'projects'}
		<div class="projects-container" class:active={selectedOption === 'projects'}>
			<div class="project-logos">
				<ProjectsLogos bind:selectedProject {projectCardLang} {innerWidth}/>
			</div>
			<div class="project-card">
				<ProjectCardBig {selectedProject} {projectCardLang} />
			</div>
		</div>
	{/if}
	{#if selectedOption === 'skills'}
	<Skills/>
	{/if}
</section>

<style>
	section {
		max-width: 1000px;
		/* overflow-y:visible; */
	}
	
	.projects-container {
		display: flex;
		align-items: center;
		margin: auto;
		/* flex-wrap: wrap; */
		/* height: 560px; */
		gap: 2rem;
		/* height: 100% */
	}

	.project-logos {
		display: flex;
		align-items: center;
		min-height: 560px;
		/* flex: 0 0 20%; */
	}

		@media (max-width: 995px) {
		.project-card {
			display: none;
		}

		.project-logos {
			min-height: 326px;
		}
		
	}
</style>
