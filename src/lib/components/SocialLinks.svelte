<script lang='ts'>
  import LinkedInIcon from 'svelte-icons/fa/FaLinkedinIn.svelte';
  import GitHubIcon from 'svelte-icons/fa/FaGithub.svelte';
  import Tooltip from './Tooltip.svelte';

  const envLinkedInLink = import.meta.env.VITE_LINKEDIN_LINK;
  const envGitHubLink = import.meta.env.VITE_GITHUB_LINK;

  let linkedinTooltip = '';
  let githubTooltip = '';

  function showTooltip(type: string) {
    if (type === 'linkedin') {
      linkedinTooltip = 'LinkedIn';
    } else if (type === 'github') {
      githubTooltip = 'GitHub';
    }
  }

  function hideTooltip() {
    linkedinTooltip = '';
    githubTooltip = '';
  }
</script>

<div>
  <div
    class="icon-container"
    on:mouseover={() => showTooltip('linkedin')}
    on:mouseout={hideTooltip}
		  on:focus={() => showTooltip('github')}
    on:blur={hideTooltip}
  >
    <a
      class="icons"
      href={envLinkedInLink}
      aria-label="Link to my LinkedIn profile"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInIcon />
    </a>
    <Tooltip text="{linkedinTooltip}" />
  </div>
  <div
    class="icon-container"
    on:mouseover={() => showTooltip('github')}
    on:mouseout={hideTooltip}
		  on:focus={() => showTooltip('github')}
    on:blur={hideTooltip}
  >
    <a
      class="icons"
      href={envGitHubLink}
      aria-label="Link to my GitHub profile"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubIcon />
    </a>
    <Tooltip text="{githubTooltip}" />
  </div>
</div>

<style>
  .icon-container {
    position: relative;
    display: inline-flex;
    cursor: pointer;
  }

  div {
    display: flex;
    justify-content: center;

    gap: 0.5rem;
		color: gray;
  }



 
</style>
