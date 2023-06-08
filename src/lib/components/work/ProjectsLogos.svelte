<script lang="ts">
	import { ProjectCard } from '$components';
	import type { Language } from '../../../types';
	import { innerWidth } from '../../../store';
	import scrollTo from '../../../utils/functions';

	export let selectedProject: string;
	export let projectCardLang: Language['work']['projectCard'];

	let projects = [
		{ id: 'wannago', label: 'WannaGo', class: 'wannago' },
		{ id: 'road-trip', label: 'Road trip', class: 'road-trip' },
		{ id: 'huddler', label: 'Huddler', class: 'huddler' }
	];
</script>

<div class="logos-container">
	{#each projects as project (project.id)}
		<input
			type="radio"
			id={project.id}
			name="logos"
			value={project.id}
			bind:group={selectedProject}
			on:change={$innerWidth < 996 && scrollTo}
		/>
		<label class={`${project.class} project-label`} for={project.id}>
			{project.label}<span class="arrow">&gt;</span>
		</label>
		{#if $innerWidth < 995}
			{#if selectedProject === project.id}
				<div class="project-card">
					<ProjectCard {selectedProject} {projectCardLang} isFromProjectsLogos={true} />
				</div>
			{/if}
		{/if}
	{/each}
</div>

<style>
	@font-face {
		font-family: 'Overmuch Regular';
		font-style: normal;
		font-weight: 700;
		src: url('/fonts/overmch.woff2') format('truetype');
	}

	@font-face {
		font-family: 'Montserrat Alternates';
		font-style: normal;
		font-weight: 700;
		src: url('/fonts/MontserratAlternates-SemiBoldItalic.woff2') format('truetype');
	}

	@font-face {
		font-family: 'Cabin Regular';
		font-style: normal;
		font-weight: 700;
		src: url('/fonts/Cabin-Regular.woff2') format('truetype');
	}

	.project-card {
		margin: 0.5rem;
	}
	/* Styles for .logos */
	div.logos-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	/* Common styles for labels */
	label {
		display: flex;
		align-items: center;
		position: relative;
		height: 98px;
		text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2), -3px -3px 5px rgba(255, 255, 255, 0.7);
		cursor: pointer;
		white-space: nowrap;
		transition: color 0.5s ease-in-out 0.1s;
	}

	/* Specific styles for each label type */
	label.wannago {
		font-family: 'Montserrat Alternates', sans-serif;
		font-size: 4rem;
		letter-spacing: -5px;
	}

	label.huddler {
		font-family: 'Overmuch Regular', sans-serif;
		font-size: 4.6rem;
		margin-left: 0.5rem;
	}

	label.road-trip {
		font-family: 'Cabin', sans-serif;
		font-size: 5.3rem;
		letter-spacing: -4px;
	}

	div.logos-container input {
		display: none;
	}
	div.logos-container input:checked + label {
		color: white;
		margin-inline: 1rem;
		text-shadow: none;
		-webkit-text-stroke: 3px #01446c;
	}

	/*::before pseudoclass styles  */
	div.logos-container label::before {
		content: '';
		position: absolute;
		width: 0%;
		height: 75%;
		top: 10px;
		left: -13px;
		z-index: -2;
		transform: rotate(-1deg);
		background-color: var(--clr-accent);
		transition: width 0.3s ease-in-out 0.1s;
	}

	div.logos-container input:checked + label::before {
		width: 108%;
	}

	/* Custom styles for each type when checked */
	div.logos-container input:checked + label.road-trip::before {
		top: 13px;
	}
	/* Common styles for span */
	span.arrow {
		padding-left: 1rem;
		font-family: system-ui;
		font-size: 2rem;
		vertical-align: 35%;
		font-weight: 100;
	}

	/* Additional paddings for certain spans */
	label.huddler span {
		padding-left: 0.8rem;
	}

	div.logos-container input:checked + label span.arrow {
		display: none;
	}
</style>
