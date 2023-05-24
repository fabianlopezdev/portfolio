<script lang='ts'>
 import { NavLinks, SocialLinks } from '$components';
 export let lang: string | undefined;
 export let navLinks: Language['navLinks'];
 import IoMdHeart from 'svelte-icons/io/IoMdHeart.svelte'
</script>

<nav class='footer'>
  <div class='logo-copyright'>
    <h1 class='h1-font'>
      fab<span style='color: blue'>.</span>
    </h1>
    © 2023 fab. Apps
  </div>
  <div class='toggles-container'>
    Made with
      <div class='icons'>
      <IoMdHeart/>
    </div>
    <a href='https://svelte.dev/'>

    Svelte
    </a>
  </div>
    <SocialLinks/>

</nav>
	

  <style>
    .logo-copyright {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .h1-font {
		font-family: 'League Spartan', sans-serif;
		font-size: 2rem;
		font-weight: 900;
		display: inline-block;
		position: relative;
		z-index: 1;
		color: var(--clr-font);
		letter-spacing: -0.1rem;
		margin: 0;
	}
    .footer {
      position: relative;
		display: flex;
		align-self: center;
		align-items: center;
		justify-content: space-between;
		min-height: var(--size-header);
		width: clamp(375px, 100vw, 866px);
		margin: 0.4rem 0.5rem 0.3rem 0.8rem;
    }

    .toggles-container {
		display: flex;
		align-items: center;
		/* height: inherit; */
		gap: 0.5rem;
		margin: 0;
		padding: 0;
	}
    .icons {
    color: #FF3E00
    }

    a:hover {
      text-decoration: underline;
    }
</style>