<script>
	export let href = '';
	export let contactInfo = '';
	export let cardTitle = '';

</script>


<div class="contact-card">
<div class='icons'>
	<slot/>
</div>

	<div>
		{cardTitle}
		<br />
		<a {href} target='_blank'class="email">{contactInfo} </a>
	</div>
</div>

<style>
	.contact-card {
		display: flex;
		align-items: center;
    /* justify-content: start; */
		gap: 1rem;
    width: 18rem;
	}

	.email {
		font-size: 1.15rem;
		font-weight: 700;
	}

  	.icons {
		width: 3rem;
		height: 3rem;
	}
</style>
