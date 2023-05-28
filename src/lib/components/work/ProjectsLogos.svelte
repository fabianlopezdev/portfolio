<script></script>
<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@200&family=Montserrat+Alternates:ital,wght@1,700&display=swap"
    rel="stylesheet"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Cabin:wght@700&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<div class="logos">
  <input type="radio" id="wannago" name="logos" checked />
  <label class="wannago" for="wannago">Wannago</label>
  <input type="radio" id="huddler" name="logos" />
  <label class="huddler" for="huddler">Huddler</label>
  <input type="radio" id="road-trip" name="logos" />
  <label class="road-trip" for="road-trip">Road Trip</label>
</div>
<style>
  @font-face {
    font-family: "Overmuch Regular";
    src: url("/overmch.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  .wannago {
    font-family: "Montserrat Alternates", sans-serif;
    font-size: 3.4rem;
    letter-spacing: -5px;
  }
  .huddler {
    font-family: "Overmuch Regular", sans-serif;
    font-size: 3.9rem;
  }
  .road-trip {
    font-family: "Cabin", sans-serif;
    font-size: 3.9rem;
  }
  .logos {
    display: flex;
    flex-direction: column;
  }
  .logos input[type="radio"] {
    display: none;
  }
  .logos label {
    cursor: pointer;
  }
  label {
    display: inline-block;
    position: relative;
    color: #888;
    height: 78px;
  }
  .logos label::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 98%;
    top: 0px;
    left: -2px;
    z-index: -2;
    transform: rotate(-1deg);
    background-color: var(--clr-accent);
    transition: width 0.5s ease-in-out;
  }
  .logos input[type="radio"]:checked + label::before {
    width: 100%;
  }
  .logos input[type="radio"]:checked + label {
    color: white;
  }
</style>
