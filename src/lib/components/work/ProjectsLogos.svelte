<script lang="ts">
	import { ProjectCard } from '$components';
	import type { Language } from '../../../types';

	export let selectedProject: string;
	export let projectCardLang: Language['work']['projectCard'];

	import scrollTo from '../../../utils/functions';
</script>

<div class="logos">
	<input
		type="radio"
		id="wannago"
		name="logos"
		value="wannago"
		bind:group={selectedProject}
		on:change={scrollTo}
	/>
	<label class="wannago project-label" for="wannago">WannaGo<span>&gt;</span></label>

	{#if selectedProject === 'wannago'}
		<div class="project-card">
			<ProjectCard {selectedProject} {projectCardLang} />
		</div>
	{/if}

	<input
		type="radio"
		id="huddler"
		name="logos"
		value="huddler"
		bind:group={selectedProject}
		on:change={scrollTo}
	/>
	<label class="huddler project-label" for="huddler">Huddler<span>&gt;</span></label>

	{#if selectedProject === 'huddler'}
		<div class="project-card">
			<ProjectCard {selectedProject} {projectCardLang} />
		</div>
	{/if}

	<input
		type="radio"
		id="road-trip"
		name="logos"
		value="road-trip"
		bind:group={selectedProject}
		on:change={scrollTo}
	/>
	<label class="road-trip project-label" for="road-trip">Road trip<span>&gt;</span></label>

	{#if selectedProject === 'road-trip'}
		<div class="project-card">
			<ProjectCard {selectedProject} {projectCardLang} />
		</div>
	{/if}
</div>

<style>
	@font-face {
		font-family: 'Overmuch Regular';
		src: url('/overmch.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Montserrat Alternates';
		src: url('/MontserratAlternates-SemiBoldItalic.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Cabin Regular';
		src: url('/Cabin-Regular.ttf') format('truetype');
	}

	/* Common styles for span */
	span {
		padding-left: 1rem;
		font-family: system-ui;
		font-size: 2rem;
		vertical-align: 35%;
		color: #01446c;
		font-weight: 100;
	}

	/* Additional paddings for certain spans */
	.road-trip span {
		padding-left: 1.5rem;
	}
	.huddler span {
		padding-left: 0.8rem;
	}

	/* Common styles for labels */
	label {
		display: inline-block;
		position: relative;
		color: #016aa1;
		height: 78px;
		text-shadow: 2px 2px 8px #c8d0d4;
		-webkit-text-stroke: 1px #01446c;
		white-space: nowrap;
	}

	/* Specific styles for each label type */
	.wannago {
		font-family: 'Montserrat Alternates', sans-serif;
		font-size: 4rem;
		letter-spacing: -5px;
	}

	.huddler {
		font-family: 'Overmuch Regular', sans-serif;
		font-size: 4.6rem;
		margin-left: 0.5rem;
	}

	.road-trip {
		font-family: 'Cabin', sans-serif;
		font-size: 5.3rem;
		letter-spacing: -4px;
	}

	/* Styles for .logos */
	.logos {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 3rem 0;
	}

	.logos input[type='radio'] {
		display: none;
	}
	.logos label {
		cursor: pointer;
		transition: color 0.8s ease-in-out 0.5s;
	}

	.logos label::before {
		content: '';
		position: absolute;
		width: 0%;
		height: 98%;
		top: 0px;
		left: -13px;
		z-index: -2;
		transform: rotate(-1deg);
		background-color: var(--clr-accent);
		transition: width 0.5s ease-in-out 0.5s;
	}

	/* Custom styles for each type when checked */
	.logos input[type='radio']:checked + .road-trip::before {
		top: 13px;
	}
	.logos input[type='radio']:checked + .wannago::before {
		left: -6px;
	}
	.logos input[type='radio']:checked + .huddler::before {
		left: -11px;
	}

	.logos input[type='radio']:checked + label::before {
		width: 100%;
	}

	.logos input[type='radio']:checked + label {
		color: white;
		margin-left: 1rem;
		text-shadow: none;
	}

	.logos input[type='radio']:checked + label span {
		display: none;
	}

	@media (min-width: 996px) {
		.project-card {
			display: none;
		}
	}
</style>
