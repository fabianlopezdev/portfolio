<script>

export let title = '';

    function handleButtonClick() {
  
        const target = document.getElementById('about-section'); 
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
     
    }
  

 
  </script>
  

    
  
  <div class="svg-container">
    <button id="pillButton" style="height: 30px;" title={title} on:click={handleButtonClick}>
      <svg
        width="18"
        height="29"
        viewBox="0 0 18 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          id="Rectangle51"
          x="1"
          y="1"
          width="16"
          height="26"
          rx="8"
          stroke="var(--clr-font)"
          stroke-width="2"
        />
        <path
          id="Line20"
          d="M9 8L9 11"
          stroke="var(--clr-font)"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
    </button>
  
    <!-- Separate SVG for the vertical line -->
  
  </div>
  
  <style>
   
    #pillButton {
      background-color: transparent;
      border: none;
      padding: 0;
      margin: 0;
      cursor: pointer;
    }

    @keyframes scrollAnimation {
      0% {
        transform: translateY(0);
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: translateY(9px);
        opacity: 0;
      }
    }
  
    #Line20 {
      animation: scrollAnimation 2s infinite;
    }
  
    #Rectangle51:hover,
    #Line20:hover {
      cursor: pointer;
    }


	@media (max-width: 648px) {
		.svg-container {
			margin-bottom: 1rem;
		}
	}
  </style>
  