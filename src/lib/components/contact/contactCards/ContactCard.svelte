<script>
	export let href = '';
	export let contactInfo = '';
	export let cardTitle = '';
</script>



<a href="{href}" target="_blank">
  <div class="contact-card">
    <div class="icons">
      <slot />
    </div>
    <div>
      {cardTitle}
      <br />
      <span class="email">{contactInfo}</span>
    </div>
  </div>
</a>

<style>
	a {
		color: black;
	}
	.contact-card {
		display: flex;
		align-items: center;
		/* justify-content: center; */
    /* justify-content: start; */
		gap: 1rem;
    width: 17.5rem;
		  /* background-color: #fff; */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
	border-radius: 1rem;
	border: 0.1rem solid var(--clr-secondary);
	padding: 1rem 1.5rem;
		background: white;
	/* position: relative */
	}
.contact-card:hover {
	 box-shadow: 0 0 20px rgba(30, 144, 255, 0.2),
              0 0 20px rgba(30, 144, 255, 0.2),
              0 0 20px rgba(30, 144, 255, 0.2),
              0 0 20px rgba(30, 144, 255, 0.2);
}

	.email {
		font-size: 1.15rem;
		font-weight: 700;
	}

  	.icons {
		width: 3rem;
		height: 3rem;
		display: flex;
		justify-content: center;
	}


</style>
