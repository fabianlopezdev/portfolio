<div class="toggle">
  <input type="radio" id="project" name="toggle" checked>
  <label class='dale'for="project">Projects</label>
  <input type="radio" id="skills" name="toggle">
  <label for="skills">Skills</label>
  <span class="slider"><span class="dot"></span></span>
</div>


<style>
  label {
    /* width: 100px; */
    /* border-radius: 6px; */
    /* z-index: 10; */
    padding: 0;
  }

  .toggle {
    /* padding:0; */
    position: relative;
    display: flex;
    max-width: 215px;
    width: 15rem;
    font-size: 15.8;
    font-weight: 700;
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid black;
    background-color: #ddd;
    margin-left: 1rem;
    justify-content: space-between;
    align-items: center;
  }

.toggle input[type="radio"] {
    display: none;
}

.toggle label {
    padding: 10px 20px;
    cursor: pointer;
    color: #000;
    flex-grow: 1;
    text-align: center;
    z-index: 1;
    transition: color 0.2s;
     border-radius: 1rem;
     flex: 0 0 45%;
    /* border: 3px solid #d0dff0; */
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
    /* box-sizing:content-box; */
    /* padding-left: 1rem; */
     /* margin-right: 100px; */
    /* z-index:1; */
}

#skills:checked ~ .slider {
    left: 50%;
}
.toggle input[type="radio"]:not(:checked) + label {
    color: #888; /* or whatever color you want for the disabled look */
    background-color: #ddd; /* or whatever background color you want for the disabled look */
}

.dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: blue; /* choose your desired color */
  border-radius: 50%;
  margin-left: 0.5rem;
}
label[for="project"] {
  padding-left: 25px;
}
#skills:checked ~ .slider .dot {
  transform: translateX(100%);
}

</style>