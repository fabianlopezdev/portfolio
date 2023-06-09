<script lang="ts">
	import { Switch, ProjectsLogos, ProjectCard, Skills, ProjectCardBig } from '$components';
	import { crossfade } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
	import type { Language } from '../../../types';
	import { fly } from 'svelte/transition';
	//I am using innerWidth to dynamically rendery ProjectCardBid or ProjectCard (this one in ProjectLogos.svelte) instead of media queries, because media queries loads both and renders one, this way I only load and render one
	import { innerWidth } from '../../../store';

	export let workLang: Language['work'];
	export let title;

	$: projectCardLang = workLang.projectCard;
	$: switchLang = workLang.switch;

	let selectedOption = 'projects';
	let selectedProject = '';

	$: {
		if ($innerWidth && $innerWidth > 995) {
			selectedProject = 'portfolio';
		}
	}
</script>

<section id="work">
	<div class="switch">
		<Switch bind:selectedOption {switchLang} />
	</div>

	<div class="conditional-container">
		{#if selectedOption === 'projects'}
			<div
				class="projects-container"
				class:active={selectedOption === 'projects'}
				in:fly={{ y: 0, x: $innerWidth + 500, duration: 800 }}
			>
				<div class="project-logos">
					<ProjectsLogos bind:selectedProject {projectCardLang} {innerWidth} />
				</div>
				{#if $innerWidth > 995}
					<div class="project-card">
						<ProjectCardBig {selectedProject} {projectCardLang} />
					</div>
				{/if}
			</div>
		{/if}

		{#if selectedOption === 'skills'}
			<div class="skills" in:fly={{ y: 0, x: -$innerWidth - 500, duration: 800 }}>
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
		width: 100%;
		min-height: 444px;
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
</style>
