<script lang="ts">
	import GitHubIcon from 'svelte-icons/fa/FaGithub.svelte';
	import GoToArrow from 'svelte-icons/go/GoLinkExternal.svelte';
	import type { Language } from '../../../../types';
	import { Carousel } from '$components';
	import CloseIcon from 'svelte-icons/io/IoIosClose.svelte';

	export let projectCardLang: Language['work']['projectCard'];

	export let selectedProject: keyof Language['work']['projectCard'];;

	import { slide } from 'svelte/transition';

	let project: any;
	let dialog: HTMLDialogElement;

	// Use reactive declaration instead of assignment
	$: project = selectedProject ? projectCardLang[selectedProject] : null;
</script>

{#if project}
	<div class="card-container" >
		<Carousel slides={project.Images}/>
		<section class='card-info'>
			{#each Object.entries(project) as projectItem}
				{#if projectItem.at(0) === 'Short Description' || projectItem.at(0) === 'Role' || projectItem.at(0) === 'Responsibilities'}
					{#if projectItem.at(0) === 'Short Description'}
						<h4>Description</h4>
						<p class="items-descriptions">
							{projectItem.at(1)}
							<button class="open-modal-btn" on:click={() => dialog.showModal()}>
								{projectCardLang.btnReadMore}
							</button>
							<dialog bind:this={dialog}>
								<p>{project.Description}</p>
								<button class="close-modal-btn" on:click={() => dialog.close()}>
									<div class="header-icons"><CloseIcon /></div>
								</button>
							</dialog>
						</p>
					{:else}
						<h4>{projectItem.at(0)}</h4>
						<p class="items-descriptions">{projectItem.at(1)}</p>
					{/if}
				{/if}
			{/each}

			<h4>Skills</h4>
			<ul class="skills-container">
					{#if project.Skills}
						{#each project.Skills as skill}
							<li>{skill}</li>
						{/each}
					{:else}
						{#each project.Herramientas as skill}
							<li>{skill}</li>
						{/each}
					{/if}
				</ul>

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
			</div>
		</section>
	</div>
{/if}

<style>
	.card-info {
		height: 70%;
		display: flex;
		justify-content: space-evenly;
		align-items: space-around;
	}
	.card-container {
		box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
		/* border: solid 0.01rem black; */
		border-radius: 1rem;
		font-size: 1rem;
		line-height: 1.4;
		background-color: white;
		/* margin-top: 1rem; */
	}
	section {
		padding-inline: 1rem;
	}

	h4 {
		margin: 0;
		margin-top: 10px;
	}

	.items-descriptions {
		margin: 0;
	}

	.header-icons {
		height: 2rem;
		width: 2rem;
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

	.open-modal-btn {
		cursor: pointer;
		background-color: var(--color);
		border: none;
		color: #016aa1;
		font-size: 0.8rem;
		padding: 0;
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
		padding-top: 5px;
	}

	.icons {
		display: flex;
		height: 1rem;
		width: 1rem;
	}

	@media (max-width: 995px) {
		.card-container {
			height: 80svh;
			width: 95dvw;
			max-width: 430px; /*iphone X width*/
			max-height: 588px; /*iphone X height*/
		}
	}
</style>
