<script lang="ts">
	import type { Language } from '../../../../types';
	import GitHubIcon from 'svelte-icons/fa/FaGithub.svelte';
	import GoToArrow from 'svelte-icons/go/GoLinkExternal.svelte';
	import CloseIcon from 'svelte-icons/io/IoIosClose.svelte';
	export let projectCardLang: Language['work']['projectCard'];
	import { Carousel } from '$components';
	export let selectedProject: keyof Language['work']['projectCard'];

	let project: any;
	let dialog;

	// Use reactive declaration instead of assignment
	$: project = selectedProject ? projectCardLang[selectedProject] : null;
</script>

<svelte:window on:click={() => dialog.close()} />
{#if project}
	<section class="card-container">
		<button class="imgs-container" on:click|stopPropagation={() => dialog.showModal()}>
			{#each project.Images as image, i}
				<img
					src={image.src}
					alt={image.alt}
					class="img {String.fromCharCode(97 + i)}"
					loading="lazy"
				/>
			{/each}
		</button>

		<dialog bind:this={dialog}>
			{#each project.Images as image, i}
				<img src={image.src} alt={image.alt} class="img carousel" />
			{/each}
			<button class="close-modal-btn" on:click={() => dialog.close()}>
				<div class="header-icons"><CloseIcon /></div>
			</button>
		</dialog>
		<h4>
			{Object.keys(project).at(2)}
		</h4>
		<p class="description">
			{project.Description || project.Descripción}
		</p>

		<div class="info-container">
			<div class="descriptions-container">
				<h4>
					{Object.keys(project).at(6)}
				</h4>
				<p>
					{project.Role || project.Rol}
				</p>
				<h4>
					{Object.keys(project).at(5)}
				</h4>
				<p class="responsibilities">
					{project.Responsibilities || project.Responsabilidades}
				</p>
			</div>
			<div class="skills">
				<h4>{Object.keys(project).at(7)}</h4>
				<div class="line" />
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
				<h4>Links</h4>
				<div class="line" />
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
			</div>
		</div>
	</section>
{/if}

<style>
	p {
		margin: 0;
		margin-bottom: 1rem;
		line-height: 1.6;
		/* font-weight: 0.1rem; */
	}
	p.description,
	p.responsibilities {
		margin: 0;
		margin-bottom: 0;
	}

	.img.carousel {
		width: 45vw;
		height: auto;
		margin-bottom: 2rem;
		border-radius: 1rem;
	}

	.line {
		border-bottom: 1px solid rgb(221, 221, 221);
		width: 80%;
		margin-bottom: 7px;
	}
	.card-container {
		justify-content: center;
		max-height: 560px;
	}

	.imgs-container {
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
	}

	.img {
		background-color: #d0dff0;
		object-fit: contain;
		width: 100%;
		height: 100%;
		border: 1px solid rgb(221, 221, 221);
	}

	.img.a {
		grid-area: a;
		border-radius: 1rem 0 0 1rem;
	}

	.img.b {
		grid-area: b;
		border-radius: 0 1rem 0 0;
	}

	.img.c {
		grid-area: c;
		border-radius: 0 0 1rem 0;
	}

	.info-container {
		display: flex;
		margin-top: 0.5rem;
	}

	.descriptions-container {
		max-width: 245px;
		padding-right: 1rem;
	}
	.skills {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		border: 1px solid rgb(221, 221, 221);
		box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
		/* border: solid 0.01rem black; */
		border-radius: 1rem;
		background-color: #fffefe;
		padding-block: 0.5rem;
		padding-inline: 1rem;
		/* height: auto; */
	}
	.skills-container {
		/* font-size: 1.1rem; */
	}
	h4 {
		margin: 0;
		margin-bottom: 0.5rem;
		/* padding:0; */
	}

	.external-links {
		display: flex;
		align-items: center;
		gap: 2px;
		text-decoration: underline;
		/* padding-top: 5px; */
	}
	.skills-container {
		/* flex-grow: 1; */
		margin: auto;
	}
	.icons-container {
		align-self: flex-end;
		display: flex;
		gap: 1rem;
	}
	.skills-container li {
	}
	.icons {
		display: flex;
		height: 1rem;
		width: 1rem;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	dialog {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
	dialog {
		margin: auto;
		height: 86vh;
		border: none;
		border-radius: 1rem;
		padding: 2rem 2rem 0 2rem;
		/* position: relative; */
		/* overflow: hidden; */
	}
	/* Hide scrollbar for Chrome, Safari and Opera */
	dialog::-webkit-scrollbar {
		display: none;
	}

	.header-icons {
		width: 2.5rem;
		height: 2.5rem;
	}
</style>
