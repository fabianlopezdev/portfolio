<script lang="ts">
	import GitHubIcon from 'svelte-icons/fa/FaGithub.svelte';
	import GoToArrow from 'svelte-icons/go/GoLinkExternal.svelte';
	import type { Language } from '../../../types';
	import { Carousel } from '$components';
	import CloseIcon from 'svelte-icons/io/IoIosClose.svelte';

	export let projectCardLang: Language['work']['projectCard'];
	export let selectedProject: string;

	import { slide } from 'svelte/transition';

	export let isFromProjectsLogos = false;

	let project: Language['work']['projectCard'];
	let dialog: HTMLAllCollection;

	// Use reactive declaration instead of assignment
	$: project = selectedProject ? projectCardLang[selectedProject] : null;
</script>

{#if project}
	<div class="card-container" in:slide={{ delay: 1000, duration: 1000 }}>
		<div class="carousel-container">
			<Carousel />
		</div>
		<div class="details">
			<!-- Use semantic elements instead of generic ones -->
			<section>
				{#each Object.entries(project) as projectItem}
					{#if projectItem.at(0) !== 'Description' && projectItem.at(0) !== 'Website' && projectItem.at(0) !== 'githubLink' && projectItem.at(0) !== 'Name'}
						<section>
							{#if projectItem.at(0) === 'Short Description'}
								<h5>Description</h5>
								<p class="items-descriptions">
									{projectItem.at(1)}
									<button class="open-modal-btn" on:click={() => dialog.showModal()}>
										{project.btnReadMore}
									</button>
									<dialog bind:this={dialog}>
										<p>{project.Description}</p>
										<button class="close-modal-btn" on:click={() => dialog.close()}>
											<div class="header-icons"><CloseIcon /></div>
										</button>
									</dialog>
								</p>
							{:else if projectItem.at(0) === 'Skills'}
								<h5>{projectItem.at(0)}</h5>
								<ul class="skills-container">
									{#each projectItem.at(1) as skill}
										<li>{skill}</li>
									{/each}
								</ul>
							{:else}
								<h5>{projectItem.at(0)}</h5>
								<p class="items-descriptions">{projectItem.at(1)}</p>
							{/if}

						</section>
					{/if}
				{/each}

				<div class="icons-container">
					<a
						href={project?.githubLink}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						GitHub
						<div class="icons"><GitHubIcon /></div>
					</a>
					{#if project.website}
						<a href={project?.website} target="_blank" rel="noopener noreferrer" aria-label="Visit website">
							Visit
							<div class="icons"><GoToArrow /></div>
						</a>
					{/if}
				</div>
			</section>
		</div>
	</div>
{/if}

<style>
	h5 {
		margin: 0;
		font-size: 1rem;
	}

	.items-descriptions {
		font-size: 1rem;
		margin: 0;
	}

	.project-description {
		margin-bottom: 0;
	}

	a {
		display: flex;
		align-items: center;
		font-size: 1rem;
		gap: 2px;
		text-decoration: underline;
	}

	.icons {
		height: 1rem;
		width: 1rem;
		display: flex;
		/* align-items: center; */
	}

	.open-modal-btn {
		cursor: pointer;
		background-color: var(--color);
		border: none;
		color: #016aa1;
		font-weight: 700;
		letter-spacing: 0.5px;
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

	.icons-container {
		align-self: flex-end;
		display: flex;
		gap: 1rem;
	}

	.carousel-container {
		/* height: 350px; */
	}

	.card-container {
		/* box-sizing: content-box; */
		/* background-color: rgba(255,255,255,0.7); */
		box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
		border-radius: 1rem;
		font-size: 1rem;
		line-height: 1.6;
		display: flex;
		flex-direction: column;
		/* width: 20rem; */
		/* opacity: 0.5; */
	}

	.details {
		flex: 1;
		/* padding: 1rem; */
		display: flex;
		flex-direction: column;
		justify-content: space-around;
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

	@media (max-width: 995px) {
		.carousel-container {
			flex: 0 0 30%;
			overflow: hidden;
		}

		.card-container {
			/* display: none; */
			height: 80dvh;
			width: 95dvw;
			max-width: 430px; /*iphone X width*/
			max-height: 588px; /*iphone X height*/

			/*iphone X width*/
			/*iphone X height*/

			/*iphone X width*/
			/*iphone X height*/

			/*iphone X width*/
			/*iphone X height*/

			/*iphone X width*/
			/*iphone X height*/
		}

		.details {
			padding-inline: 1rem;
			display: flex;
			flex-direction: column;
		}
	}
</style>
