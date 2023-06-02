<script lang="ts">
	import GitHubIcon from 'svelte-icons/fa/FaGithub.svelte';
	import GoToArrow from 'svelte-icons/go/GoLinkExternal.svelte';
	import type { Language } from '../../../types';
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
	<div class="card-container" in:slide={{ delay: 1000, duration: 1000 }}>
		<Carousel />
		<section>
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
				{#each project.Skills as skill}
					<li>{skill}</li>
				{/each}
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
	.card-container {
		box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
		border-radius: 1rem;
		font-size: 1rem;
		line-height: 1.4;
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

	.close-modal-btn {
		position: absolute;
		top: 0;
		right: 0;
		padding-top: 1rem;
		padding-right: 1rem;
		background-color: var(--color);
		border: none;
	}

	.icons-container {
		align-self: flex-end;
		display: flex;
		gap: 1rem;
	}

	.skills-container {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
		font-size: 0.8rem;
		margin: 0;
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
			height: 80dvh;
			width: 95dvw;
			max-width: 430px; /*iphone X width*/
			max-height: 588px; /*iphone X height*/
		}
	}
</style>
