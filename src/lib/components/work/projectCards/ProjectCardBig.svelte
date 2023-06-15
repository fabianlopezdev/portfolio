<script lang="ts">
	import type { Language } from '../../../../types';
	import GitHubIcon from 'svelte-icons/fa/FaGithub.svelte';
	import GoToArrow from 'svelte-icons/go/GoLinkExternal.svelte';
	import CloseIcon from 'svelte-icons/io/IoIosClose.svelte';
	import { fade } from 'svelte/transition';

	export let projectCardLang: Language['work']['projectCard'];
	export let selectedProject: keyof Language['work']['projectCard'];

	let project: Language['work']['projectCard'] | null;
	let dialog: HTMLDialogElement;

	// Use reactive declaration instead of assignment
	$: {
		project = selectedProject ? projectCardLang[selectedProject] : null;
	}
</script>

<svelte:window on:click={() => dialog.close()} />

{#if project}
	<!-- The each is used to make the transition work, since we give a key to project, this gets rerendered instead of only the children  -->
	{#each [project] as project (project)}
		<section class="card-container" in:fade={{ duration: 500, delay: 200 }}>
			{#if project.Images}
				<button class="imgs-container" on:click|stopPropagation={() => dialog.showModal()}>
					{#each project.Images.slice(0, 3) as image, i}
						<img
							src={image.src}
							alt={image.alt}
							class={String.fromCharCode(97 + i)}
							loading="lazy"
						/>
					{/each}
				</button>

				<dialog bind:this={dialog}>
					{#each project.Images as image, i}
						<img src={image.src} alt={image.alt} class="carousel" />
					{/each}
					<button class="close-modal-btn" on:click={() => dialog.close()}>
						<div class="header-icons"><CloseIcon /></div>
					</button>
				</dialog>
			{/if}
			<h4>
				{Object.keys(project).at(2)}
			</h4>
			<p class="description">
				{project.Description || project.Descripción}
			</p>

			<div class="info-container">
				<div class="descriptions-container">
					<h4>
						{Object.keys(project).at(3)}
					</h4>
					<p>
						{project.Role || project.Rol}
					</p>
					<h4>
						{Object.keys(project).at(4)}
					</h4>
					<p class="responsibilities">
						{project.Responsibilities || project.Responsabilidades}
					</p>
				</div>

				<div class="skills">
					<div class='separator'>
						<h4>{Object.keys(project).at(5)}</h4>
						<div class="line" />
					</div>
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
						<div class='separator'>
						<h4>Links</h4>
						<div class="line" />
					</div>
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
								Web
								<div class="icons"><GoToArrow /></div>
							</a>
						{/if}
					</div>
				</div>
			</div>
		</section>
	{/each}
{/if}

<style>
	
	section.card-container {
		justify-content: center;
	}

	/* carcontainer/imgs-container */
	button.imgs-container {
		display: grid;
		grid-template-areas:
			'a a b b'
			'a a c c';
		grid-template-rows: 10vh 10vh;
		gap: 0.5rem;
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
		margin-bottom: 0.5rem;
	}

	img {
		background-color: #d0dff0;
		object-fit: contain;
		width: 100%;
		height: 100%;
		border: 1px solid rgb(221, 221, 221);
	}

	img.a {
		grid-area: a;
		border-radius: 1rem 0 0 1rem;
	}

	img.b {
		grid-area: b;
		border-radius: 0 1rem 0 0;
	}

	img.c {
		grid-area: c;
		border-radius: 0 0 1rem 0;
	}

	dialog {
		margin: auto;
		height: 86vh;
		border: none;
		border-radius: 1rem;
		padding: 2rem 2rem 0 2rem;
		background-color: var(--clr-bg-projectCard);
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	dialog img.carousel {
		width: 45vw;
		height: auto;
		margin-bottom: 2rem;
		border-radius: 1rem;
	}

	/* Hide scrollbar for Chrome, Safari and Opera */
	dialog::-webkit-scrollbar {
		display: none;
	}

	div.header-icons {
		width: 2.5rem;
		height: 2.5rem;
	}

	/*card-container/info-container*/
	div.info-container {
		display: flex;
		margin-top: 0.5rem;
		gap: 1rem;
	}

	h4 {
		margin: 0;
		margin-bottom: 0.5rem;
	}

	p {
		margin: 0;
		margin-bottom: 1rem;
		line-height: 1.6;
	}

	p.description,
	p.responsibilities {
		margin-bottom: 0;
	}

	.descriptions-container {
		flex: 30%;
	}
	/*card-container/info-container/skills  */
	.skills {
		flex: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		gap: 0.5rem;
		border: 1px solid rgb(221, 221, 221);
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
		border-radius: 1rem;
		background-color: var(--clr-bg-projectCard);
		padding: 1rem;
		/* width: 70%; */
	}

	div.skills h4 {
		margin: 0;
	}

	.separator {
		width: 100%;
		text-align: center;
	}
	div.line {
		border-bottom: 1px solid rgb(221, 221, 221);
		width: 100%;
		margin: 0;
	}

	a.external-links {
		display: flex;
		align-items: center;
		gap: 2px;
		text-decoration: underline;
	}

	div.icons-container {
		align-self: flex-end;
		display: flex;
		gap: 1rem;
	}

	div.icons {
		display: flex;
		height: 1rem;
		width: 1rem;
	}
</style>
