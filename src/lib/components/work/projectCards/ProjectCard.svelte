<script lang="ts">
	import GitHubIcon from 'svelte-icons/fa/FaGithub.svelte';
	import GoToArrow from 'svelte-icons/go/GoLinkExternal.svelte';
	import type { Language } from '../../../../types';
	import { Carousel } from '$components';
	import CloseIcon from 'svelte-icons/io/IoIosClose.svelte';
	import {fade} from 'svelte/transition'
	export let projectCardLang: Language['work']['projectCard'];

	export let selectedProject: keyof Language['work']['projectCard'];

	let project: any;
	let dialog: HTMLDialogElement;
	let projectArr;

	// Use reactive declaration instead of assignment
	$: {
		project = selectedProject ? projectCardLang[selectedProject] : null;
		projectArr = Object.entries(project);
	}
</script>

{#if project}
	<section class="card-container" in:fade={{duration: 1000,delay: 200}}>
		<Carousel slides={project.Images} />
		<div class="card-info">

			<article>
				<h4 class="first-h4">{projectArr[2][0]}</h4>
				<p class="items-descriptions">
					{projectArr[1][1]}
					<button class="open-modal-btn" on:click={() => dialog.showModal()}>
						{projectCardLang.btnReadMore}
					</button>
				</p>
			</article>

			<article>
				<h4>{projectArr[3][0]}</h4>
				<p class="items-descriptions">{projectArr[3][1]}</p>
			</article>

			<article>
				<h4>{projectArr[4][0]}</h4>
				<p class="items-descriptions">{projectArr[4][1]}</p>
			</article>

			<article>
				<h4>{projectArr[5][0]}</h4>
				<ul class="skills-container">
					{#if project.Skills}
						{#each projectArr[5][1] as skill}
							<li>{skill}</li>
						{/each}
					{:else}
						{#each project.Herramientas as skill}
							<li>{skill}</li>
						{/each}
					{/if}
				</ul>
			</article>

			<div class="icons-container">
				<a
					class="external-links"
					href={project?.githubLink}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
				>
					GitHub
					<div class="icons"><GitHubIcon /></div>
				</a>
				{#if project.Website}
					<a
						class="external-links"
						href={project?.Website}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visit website"
					>
						Visit
						<div class="icons"><GoToArrow /></div>
					</a>
				{/if}
				<dialog bind:this={dialog}>
					<p>{projectArr[2][1]}</p>
					<button class="close-modal-btn" on:click={() => dialog.close()}>
						<div class="header-icons"><CloseIcon /></div>
					</button>
				</dialog>
			</div>
		</div>
	</section>
{/if}

<style>
	section.card-container {
		border-radius: 1rem;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
		background-color: white;
		font-size: 1rem;
		line-height: 1.4;
		margin-inline: 0.5rem;
	}

	div.card-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1rem;
	}

	p.items-descriptions {
		margin: 0;
	}

	h4 {
		margin: 1rem 0rem 0.3rem 0rem;
	}

	h4.first-h4 {
		margin-top: 0;
	}

	.header-icons {
		height: 2rem;
		width: 2rem;
	}

	button.open-modal-btn {
		cursor: pointer;
		background-color: var(--color);
		border: none;
		color: #016aa1;
		font-size: 0.8rem;
		padding: 0;
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

	.icons-container {
		align-self: flex-end;
		display: flex;
		gap: 1rem;
	}

	.external-links {
		display: flex;
		align-items: center;
		gap: 2px;
		text-decoration: underline;
		margin-top: 1rem;
	}

	.icons {
		display: flex;
		height: 1rem;
		width: 1rem;
	}

	@media (max-width: 995px) {
		.card-container {
			max-width: 430px; /*iphone X width*/
			max-height: 588px; /*iphone X height*/
		}
	}
</style>
