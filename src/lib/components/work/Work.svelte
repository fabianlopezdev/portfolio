<script lang="ts">
	import { Switch, ProjectsLogos, ProjectCard,Skills } from '$components';

	import type { Language } from '../../../types';
	export let workLang: Language['work'];

	$: projectCardLang = workLang.projectCard;
	$: switchLang = workLang.projectCard;

	let selectedOption = 'projects';
	let selectedProject = '';

	let innerWidth: number | undefined;

	$: {if (innerWidth && innerWidth > 995) {
		selectedProject = 'wannago';
	}}

	$:console.log('inner',innerWidth)
</script>


<svelte:window bind:innerWidth />

<section id="work">
	<h2>
		Work<span style="color: blue">.</span>
	</h2>
	<Switch bind:selectedOption {switchLang} />
	{#if selectedOption === 'projects'}
		<div class="projects-container" class:active={selectedOption === 'projects'}>
			<div class="project-logos">
				<ProjectsLogos bind:selectedProject {projectCardLang} {innerWidth}/>
			</div>
			<div class="project-card">
				<ProjectCard {selectedProject} {projectCardLang} />
			</div>
		</div>
	{/if}
	{#if selectedOption === 'skills'}
	<Skills/>
	{/if}
</section>

<style>
	section {
		min-height: 100vh;
		align-items: center;
		/* gap: 1rem; */
	}
	
	.projects-container {
		width: clamp(375px, 100vw, 1000px);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 2rem;
		padding-inline:1rem;
		/* width: 900px; */
	}

	.project-logos {
		flex: 0 0 20%;
	}

	.project-card {
		flex: 0 0 60%;
	}

		@media (max-width: 995px) {
		.project-card {
			display: none;
		}
	}
</style>
