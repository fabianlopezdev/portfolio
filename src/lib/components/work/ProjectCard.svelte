<script lang="ts">
	import GitHubIcon from 'svelte-icons/fa/FaGithub.svelte';
	import GoToArrow from 'svelte-icons/go/GoLinkExternal.svelte';
	import type { Language } from '../../../types';
	import { Carousel } from '$components';
	import CloseIcon from 'svelte-icons/io/IoIosClose.svelte';

	export let projectCardLang: Language['work']['projectCard'];
	export let selectedProject: string;
	//Using out:fade just to delay the unmounting of the div to work properly with the scrollTo function
	import { slide, fade } from 'svelte/transition';
	export let isFromProjectsLogos = false;
	let project: Language['work']['projectCard'];
	let dialog;
	$: {
		if (selectedProject) {
			project = projectCardLang[selectedProject];
		}
	}
</script>

{#if project}
	<div class="card-container" in:slide={{ delay: 1000, duration: 1000 }}>
		<div class="carousel">
			<Carousel />
		</div>
		<div class="details">
			<h3>{project.name}</h3>
			<p>
				{project.shortDescription}
				<button class="open-modal-btn" on:click={() => dialog.showModal()}>Read more</button>

				<dialog bind:this={dialog}>
					<p>{project.description}</p>
					<button class="close-modal-btn" on:click={() => dialog.close()}
						><div class="header-icons">
						<CloseIcon /></div></button
					>
				</dialog>
			</p>
			<ul class="skills-container">
				{#each project.skills as skill}
					<li>
						{skill}
					</li>
				{/each}
			</ul>
			<div class="icons-container">
				<a href={project?.githubLink} target="_blank" rel="noopener noreferrer"
					><div class="icons"><GitHubIcon /></div></a
				>
				{#if project.website}
					<a href={project?.website} target="_blank" rel="noopener noreferrer"
						><div class="icons"><GoToArrow /></div></a
					>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.open-modal-btn {
		cursor: pointer;
		background-color: var(--color);
		border: none;
		color: #016aa1;
		/* text-decoration: none; */
	}

	.close-modal-btn {
		position: absolute;
		top: 0;
		right: 0;
		padding-top: 1rem;
		padding-right: 1rem;
		background-color: var(--color);
		border: none;
	}
	dialog {
		position: fixed;
		top: 0;
  right: 0;
  bottom: 0;
  left: 0;
		border: none;
		border-radius: 1rem;
		background-color: #f9fcfd;
		padding: 2rem;
	}
	.carousel {
		/* height: 350px; */
	}
	.card-container {
		/* box-sizing: content-box; */
		/* background-color: rgba(255,255,255,0.7); */
		box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
		border-radius: 1rem;
		font-size: 1.3rem;
		line-height: 1.6;
		/* width: 20rem; */
		/* opacity: 0.5; */
	}
	.details {
		padding: 1rem;
	}
	h3 {
		margin: 0;
	}

	p {
		margin: 7px 0;
	}
	.skills-container {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
		font-size: 1rem;
	}

	.skills-container li {
		padding: 0.4rem;
		background-color: #d0dff0;
		color: #016aa1;
		border-radius: 5px;
		margin-right: 7px;
		margin-bottom: 7px;
		font-weight: 500;
	}

	@media (min-width: 995px) {
		/* .project-card {
			display: none;
		} */
	}
</style>
