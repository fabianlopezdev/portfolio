<script lang="ts">
	import { Switch, ProjectsLogos, ProjectCard, Skills, ProjectCardBig } from '$components';
	import { crossfade } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
	import type { Language } from '../../../types';
	export let workLang: Language['work'];
	export let title;
	import { fly, fade } from 'svelte/transition';
	// import { cubicOut, elastic } from 'svelte/easing';
	const [send, receive] = crossfade({ duration: 300, easing: quadInOut });


	$: projectCardLang = workLang.projectCard;
	$: switchLang = workLang.switch;

	let selectedOption = 'projects';
	let selectedProject = '';

	let innerWidth: number | undefined;

	$: {
		if (innerWidth && innerWidth > 995) {
			selectedProject = 'wannago';
		}
	}
</script>

<svelte:window bind:innerWidth />

<section id="work">
	<div class="switch">
		<Switch bind:selectedOption {switchLang} />
	</div>

	<div class="conditional-container">
		{#if selectedOption === 'projects'}
			<div
				class="projects-container"
				class:active={selectedOption === 'projects'}
				in:fly={{ y: 0, x: innerWidth + 500, duration: 800 }}
			>
				<div  class="project-logos">
					<ProjectsLogos bind:selectedProject {projectCardLang} {innerWidth} />
				</div>
				<div class="project-card">
					<ProjectCardBig {selectedProject} {projectCardLang} />
				</div>
			</div>
		{/if}

		{#if selectedOption === 'skills'}
			<div
				class="skills"
				in:fly={{ y: 0, x: -innerWidth - 500, duration: 800}}
				
			>
				<Skills />
			</div>
		{/if}
	</div>
</section>

<style>
	section#work {
		max-width: 1000px;
		align-items: center;
	}

	div.switch {
		display: flex;
		justify-content: center;
	}

	div.conditional-container {
		display: flex;
		justify-content: center;
		min-height: 25rem;
		width: 100vw;
		overflow: hidden;
	}
	div.projects-container {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	div.project-logos {
		display: flex;
		align-items: center;
	}

	div.project-card {
		width: 38.412rem;
	}

	div.skills {
		display: flex;
		justify-content: center;
	}

	@media (max-width: 995px) {
		.project-card {
			display: none;
		}
	}
</style>
