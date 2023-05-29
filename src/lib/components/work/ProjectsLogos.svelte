<script>
	//Default checked
  export let selectedProject;
  import IoIosArrowDown from 'svelte-icons/io/IoIosArrowDown.svelte'
</script>

<div class="logos">
  <input type="radio" id="wannago" name="logos" value="wannago" bind:group={selectedProject}/><label class="wannago" for="wannago">WannaGo<span >&gt;</span>
  </label>
  <input type="radio" id="huddler" name="logos" value="huddler" bind:group={selectedProject} />
  <label class="huddler" for="huddler">Huddler<span >&gt;</span></label>
  <input type="radio" id="road-trip" name="logos" value="road-trip" bind:group={selectedProject} />
  <label class="road-trip" for="road-trip">Road trip<span>&gt;</span></label>
</div>

<style>
  @font-face {
    font-family: "Overmuch Regular";
    src: url("/overmch.ttf") format("truetype");
  }

  @font-face {
    font-family: "Montserrat Alternates";
    src: url("/MontserratAlternates-SemiBoldItalic.ttf") format("truetype");
  }

  @font-face {
    font-family: "Cabin Regular";
    src: url("/Cabin-Regular.ttf") format("truetype");
  }
  
  .road-trip span {
    vertical-align:30%;
  }
  
  span {
    padding-left: 1rem;
    font-family: system-ui;
    font-size: 2rem;
    vertical-align:35%;
    color: #01446c;
    font-weight: 100;
  }
  .wannago {
    font-family: "Montserrat Alternates", sans-serif;
    font-size: 4rem;
    letter-spacing: -5px;
  }
  .huddler {
    font-family: "Overmuch Regular", sans-serif;
    font-size: 4.6rem;
  }
  .road-trip {
    font-family: "Cabin", sans-serif;
    font-size: 5.3rem;
    letter-spacing: -4px;
  }


  .logos {
    display: flex;
    flex-direction: column;
		gap: 2rem;
		padding: 3rem 0;
		flex: 0 0 30%;
  }
  .logos input[type="radio"] {
    display: none;
  }
  .logos label {
    cursor: pointer;
    transition: color 0.5s ease-in-out; /* Transition added here */
  }
  label {
    display: inline-block;
    position: relative;
    color: #016aa1;
    height: 78px;
    color: #016aa1;
    text-shadow: 2px 2px 8px #c8d0d4;
    -webkit-text-stroke: 1px #01446c;
  }
  .logos label::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 98%;
    top: 0px;
    left: -20px;
    z-index: -2;
    transform: rotate(-1deg);
    background-color: var(--clr-accent);
    transition: width 0.3s ease-in-out;
  }

  .logos input[type="radio"]:checked + .road-trip::before {
  /* your custom styles here */
  top: 13px;
}
.logos input[type="radio"]:checked + .wannago::before {
  /* your custom styles here */
  left: -14px;
}
  .logos input[type="radio"]:checked + label::before {
    width: 100%;
  }
  .logos input[type="radio"]:checked + label {
    color: white;
    /* margin-left: 1rem; */
    text-shadow: none;
  }

  .logos input[type="radio"]:checked + label span {
    display: none;
  }
</style>
