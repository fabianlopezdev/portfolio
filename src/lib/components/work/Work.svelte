<script lang='ts'>
	import { Switch, ProjectsLogos, ProjectCard } from '$components';

	

	import type { Language } from '../../../types';
	export let workLang: Language['work'];

	$: projectCardLang = workLang.projectCard
	$: switchLang = workLang.projectCard

	
	let selectedOption = 'projects';
	let selectedProject = 'wannago';
</script>

<section id="work">
	<h2>
		Work<span style="color: blue">.</span>
	</h2>
	<Switch bind:selectedOption={selectedOption} {switchLang}/>
	{#if selectedOption === 'projects'}
	<div class='projects-container'  class:active={selectedOption === 'projects'}>
			<ProjectsLogos bind:selectedProject={selectedProject}/>
			<ProjectCard {selectedProject} {projectCardLang}/>
		</div>
		{/if}
	{#if selectedOption === 'skills'}
	<div class='skills-container' class:active={selectedOption === 'skills'}>
			This is skills
		</div>
		{/if}
</section>

<style>
	section {
		min-height: 100vh;
		align-items: center;
		/* gap: 1rem; */
	}
	
	.projects-container {
		width: clamp(350px, 50vw, 900px);
		display:flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 2rem;
	}
</style>
