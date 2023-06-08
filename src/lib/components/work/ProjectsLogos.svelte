<script lang="ts">
	import { ProjectCard } from '$components';
	import type { Language } from '../../../types';

	export let selectedProject: string;
	export let projectCardLang: Language['work']['projectCard'];
	//Export innerWidth to not to scroll to the viewport in bigger screens
	import {innerWidth} from '../../../store'

	import scrollTo from '../../../utils/functions';
</script>

<div class="logos-container">
	<input
		type="radio"
		id="wannago"
		name="logos"
		value="wannago"
		bind:group={selectedProject}
		on:change={$innerWidth < 996 && scrollTo}
	/>
	<label class="wannago project-label" for="wannago">WannaGo<span class="arrow">&gt;</span></label>

	{#if selectedProject === 'wannago'}
		<div class="project-card">
			{#if $innerWidth < 995}
			<ProjectCard {selectedProject} {projectCardLang} />
			{/if}
		</div>
	{/if}

	<input
		type="radio"
		id="huddler"
		name="logos"
		value="huddler"
		bind:group={selectedProject}
		on:change={$innerWidth < 996 && scrollTo}
		/>
		<label class="huddler project-label" for="huddler">Huddler<span class="arrow">&gt;</span></label>
		
		{#if selectedProject === 'huddler'}
		<div class="project-card">
			{#if $innerWidth < 995}
			<ProjectCard {selectedProject} {projectCardLang} />
			{/if}
		</div>
		{/if}
		
		<input
		type="radio"
		id="road-trip"
		name="logos"
		value="road-trip"
		bind:group={selectedProject}
		on:change={$innerWidth < 996 && scrollTo}
		/>
		<label class="road-trip project-label" for="road-trip"
		>Road trip<span class="arrow">&gt;</span></label
		>
		
		{#if selectedProject === 'road-trip'}
		<div class="project-card">
			{#if $innerWidth < 995}
			<ProjectCard {selectedProject} {projectCardLang} />
			{/if}
		</div>
		{/if}
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

	.project-card{
		margin: 0.5rem;
	}
	/* Styles for .logos */
	div.logos-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* margin- */
		/* gap: 0.5rem; */
		/* margin-inline: 0.5rem; */
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
		/* margin-block:auto; */
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
