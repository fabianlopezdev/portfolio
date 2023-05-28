<div class="toggle">
  <input type="radio" id="project" name="toggle" checked>
  <label for="project"><span class='label-text'>Projects</span></label>
  <input type="radio" id="skills" name="toggle">
  <label for="skills"><span class='label-text'>Skills</span></label>
  <span class="slider"></span>
</div>

<style>
  .toggle {
    position: relative;
    display: flex;
    max-width: 215px;
    width: 15rem;
    font-size: 15.8px;
    font-weight: 700;
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid black;
    background-color: #ddd;
    justify-content: space-between;
    align-items: center;
  }

  .toggle input[type="radio"] {
    display: none;
  }

  .toggle label {
    position: relative;
    overflow: hidden;
    padding: 10px 20px;
    cursor: pointer;
    color: #000;
    z-index: 1;
    transition: color 0.2s;
    border-radius: 1rem;
    flex: 0 0 45%;
    letter-spacing: 1px;
    text-align: center;
  }

  .toggle .label-text {
    position: relative;
    display: inline-block;
  }

  .toggle .label-text::after {
    content: "";
    position: absolute;
    bottom: -17%;
    left: 0;
    right: 0;
    height: 2px;
    background: blue;
    transition: transform 0.5s;
    transform: scaleX(0);
    transform-origin: center;
    border-radius: 1rem;
  }

  #project:checked ~ label[for="project"] .label-text::after,
  #skills:checked ~ label[for="skills"] .label-text::after {
    transform: scaleX(1);
  }

  #project:checked ~ label[for="project"],
  #skills:checked ~ label[for="skills"] {
    color: black;
  }

  .slider {
    position: absolute;
    background: #f9fcfd;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    transition: left 0.2s;
    z-index: 0;
    border-radius: 1rem;
    color: blue;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid black;
    flex: 0 0 10%;
  }

  #skills:checked ~ .slider {
    left: 50%;
  }

  .toggle input[type="radio"]:not(:checked) + label {
    color: #888;
    background-color: #ddd;
  }

  #skills:not(:checked) ~ label[for="skills"] .dot {
    display:none;
  }

  label[for="project"] {
    padding-left: 17px;
  }

  #skills:checked ~ .slider .dot {
    transform: translateX(100%);
  }
</style>
