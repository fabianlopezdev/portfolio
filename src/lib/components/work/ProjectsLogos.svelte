<script lang="ts">
	import { ProjectCard } from '$components';
	import type { Language } from '../../../types';

	export let selectedProject: string;
	export let projectCardLang: Language['work']['projectCard'];
	//Export innerWidth to not to scroll to the viewport in bigger screens
	export let innerWidth;

	import scrollTo from '../../../utils/functions';
</script>

<div class="logos-container">
	<input
		type="radio"
		id="wannago"
		name="logos"
		value="wannago"
		bind:group={selectedProject}
		on:change={innerWidth < 996 && scrollTo}
	/>
	<label class="wannago project-label" for="wannago">WannaGo<span class="arrow">&gt;</span></label>

	{#if selectedProject === 'wannago'}
		<div class="project-card">
			<ProjectCard {selectedProject} {projectCardLang} isFromProjectsLogos={true} />
		</div>
	{/if}

	<input
		type="radio"
		id="huddler"
		name="logos"
		value="huddler"
		bind:group={selectedProject}
		on:change={innerWidth < 996 && scrollTo}
	/>
	<label class="huddler project-label" for="huddler">Huddler<span class="arrow">&gt;</span></label>

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
		on:change={innerWidth < 996 && scrollTo}
	/>
	<label class="road-trip project-label" for="road-trip"
		>Road trip<span class="arrow">&gt;</span></label
	>

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

	/* Styles for .logos */
	div.logos-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	/* Common styles for labels */
	label {
		position: relative;
		height: 98px;
		text-shadow: 3px 3px 5px rgba(0,0,0,0.2), 
            	-3px -3px 5px rgba(255,255,255,0.7);;
		cursor: pointer;
		white-space: nowrap;
		transition: color 0.5s ease-in-out 0.1s;
		/* color: #007BFF; */
		/* -webkit-text-stroke: 2px #01446c; */

	
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
		margin-left: 1rem;
		text-shadow: none;
		-webkit-text-stroke: 3px #01446c;
	}

	/*::before pseudoclass styles  */
	div.logos-container label::before {
		content: '';
		position: absolute;
		width: 0%;
		height: 75%;
		top: 0px;
		left: -13px;
		z-index: -2;
		transform: rotate(-1deg);
		background-color: var(--clr-accent);
		transition: width 0.3s ease-in-out 0.1s;
	}

	div.logos-container input:checked + label::before {
		width: 100%;
	}

	/* Custom styles for each type when checked */
	div.logos-container input:checked + label.road-trip::before {
		top: 13px;
	}
	div.logos-container input:checked + label.wannago::before {
		left: -6px;
	}
	div.logos-container input:checked + label.huddler::before {
		left: -11px;
	}

	/* Common styles for span */
	span.arrow {
		padding-left: 1rem;
		font-family: system-ui;
		font-size: 2rem;
		vertical-align: 35%;
		/* color: #01446c; */
		font-weight: 100;
	}

	/* Additional paddings for certain spans */
	label.road-trip span {
		padding-left: 1.5rem;
	}
	label.huddler span {
		padding-left: 0.8rem;
	}

	div.logos-container input:checked + label span.arrow {
		display: none;
	}

	@media (min-width: 996px) {
		.project-card {
			display: none;
		}
	}
</style>
