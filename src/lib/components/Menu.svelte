<script>
  import MenuIcon from 'svelte-icons/io/IoIosMenu.svelte'
  import { ToggleDark, Nav } from '$components';
  import CloseIcon from 'svelte-icons/io/IoIosClose.svelte'
  export let language;
  let isShowMenu = false;
  function toggleMenu() {
    isShowMenu = !isShowMenu;
  }

  $: console.log(isShowMenu)
</script>

<div class='menu-and-toggle'>
  <button class='icons' on:click|preventDefault={toggleMenu}>
    {#if isShowMenu}
    <modal class='modal'>
      <div class='icons close'>
        <CloseIcon/>
      </div>
      <div class='nav'>
        <Nav {language} customClass='modal'/>
      </div>
    </modal>
    {:else} 
    <MenuIcon/>
    {/if}
  </button>
</div>

<style>
  .menu-and-toggle {
    display: none;
  }

  .modal {
    background-color: var(--clr-bg);
    position: fixed;
    z-index: 2;
    top:0;
    left:0;
    height: 100svh;
    width: 100svw;
    display: flex;
    flex-direction: column;
  
  }
.close {
  width: 2.5rem;
  height: 2.5rem;
  margin-top: 1.8rem;
  left: 0.7rem;
 /* align-self: flex-start; */
}

.nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


	@media (max-width: 658px) {
	 .menu-and-toggle {
    display: flex;
    gap: 1rem;
  }
	}
</style>