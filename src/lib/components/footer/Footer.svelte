<script lang='ts'>
 import { NavLinks, SocialLinks } from '$components';
 export let lang: string | undefined;
 export let navLinks: Language['navLinks'];
 import IoMdHeart from 'svelte-icons/io/IoMdHeart.svelte'

 const currentYear = new Date().getFullYear();

</script>

<nav class='footer'>
  <div class='desktop-screen'>

    <div class='logo-copyright'>
      <h1 class='h1-font'>
      fab<span style='color: blue'>.</span>
    </h1>
    ©{currentYear} fab. Apps
  </div>
  <div class='toggles-container'>
    Made with
    <div class='icons'>
      <IoMdHeart/>
    </div>
    <a href='https://svelte.dev/' target="_blank" rel="noopener noreferrer">
      Svelte
    </a>
  </div>
  <SocialLinks/>
</div>

 <div class='small-screen'>
   <SocialLinks/>
   <div class='logo-svelte-container'>
    <div class='logo-copyright'>
      <h1 class='h1-font'>
      fab<span style='color: blue'>.</span>
    </h1>
    ©{currentYear} fab. Apps
  </div>
  <div class='toggles-container'>
    Made with
    <div class='icons'>
      <IoMdHeart/>
    </div>
    <a href='https://svelte.dev/' target="_blank" rel="noopener noreferrer">
      Svelte
    </a>
  </div>
   </div>
    
</div>

</nav>
	

  <style>
    .desktop-screen {
     position: relative;
		display: flex;
		align-self: center;
		align-items: center;
		justify-content: space-between;
		min-height: var(--size-header);
		width: clamp(375px, 100vw, 866px);
		margin: 0.4rem 0.5rem 0.3rem 0.8rem;
    }
    .logo-copyright {
      display: flex;
      flex-direction: column;
      /* align-items: center; */
    }
    .small-screen {
      display: none;
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

    @media (max-width: 544px) {
      .desktop-screen {
        display: none;
      }
      .small-screen {
        display: block;
        padding: 0rem 2rem;
      }
       .logo-svelte-container {
      display: flex;
      width: clamp(375px, 100vw, 866px);
    }
	}

</style>