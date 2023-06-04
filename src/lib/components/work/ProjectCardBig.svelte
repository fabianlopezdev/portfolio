<script lang="ts">
	import type { Language } from '../../../types';
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
	<section class="card-container" >
		<button class="imgs-container" on:click|stopPropagation={() => dialog.showModal()}>
			{#each project.Images as image, i}
				<img src={image.src} alt={image.alt} class="img {String.fromCharCode(97 + i)}" />
			{/each}
		</button>
		<dialog bind:this={dialog} >
			{#each project.Images as image, i}
				<img src={image.src} alt={image.alt} class='img carousel' />
			{/each}
			<button class="close-modal-btn" on:click={() => dialog.close()}>
				<div class="header-icons"><CloseIcon /></div>
			</button>
		</dialog>
		<div class="info-container">
			<div class="descriptions-container">
				<h4>
					{Object.keys(project).at(2)}
				</h4>
				<p>
					{project.Description}
				</p>
				<h4>
					{Object.keys(project).at(5)}
				</h4>
				<p>
					{project.Role}
				</p>
				<h4>
					{Object.keys(project).at(6)}
				</h4>
				<p>
					{project.Responsibilities}
				</p>
			</div>
			<div class="skills">
				<h4>Skills</h4>
				<div class="line" />
				<ul class="skills-container">
					{#each project.Skills as skill}
						<li>{skill}</li>
					{/each}
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
  .header-icons {
    width: 2.5rem;
    height:2.5rem;
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

/* Hide scrollbar for IE, Edge and Firefox */
dialog {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
  .img.carousel {
    width: 45vw;
    height: auto;
    margin-bottom: 2rem;
    border-radius: 1rem;
  }
	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	.line {
		border-bottom: 1px solid rgb(221, 221, 221);
		width: 80%;
	}
	.card-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 80vh;
	}
	.imgs-container {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		gap: 0.5rem;
		height: 30%;
	}

	.img {
		background-color: #d0dff0;
		width: 100%;
		height: 100%;
		object-fit: contain;
		border: 1px solid rgb(221, 221, 221);

		/* box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1); */
	}

	.a {
		grid-area: 1 / 1 / 5 / 4;
		border-top-left-radius: 1rem;
		border-bottom-left-radius: 1rem;
	}
	.b {
		grid-area: 1 / 4 / 3 / 6;
		border-top-right-radius: 1rem;
	}
	.c {
		grid-area: 3 / 4 / 5 / 6;
		border-bottom-right-radius: 1rem;
	}
	.info-container {
		display: flex;
		margin-top: 0.5rem;
	}

	.descriptions-container {
		max-width: 61%;
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
		padding: 1rem;
		height: auto;
	}

	h4 {
		margin: 0;
		margin-bottom: 0.5rem;
		/* padding:0; */
	}

	p {
		margin: 0;
		margin-bottom: 1rem;
		line-height: 1.6;
		/* font-weight: 0.1rem; */
	}

	.external-links {
		display: flex;
		align-items: center;
		gap: 2px;
		text-decoration: underline;
		padding-top: 5px;
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
		font-size: 1.2rem;
	}
	.icons {
		display: flex;
		height: 1rem;
		width: 1rem;
	}
</style>
