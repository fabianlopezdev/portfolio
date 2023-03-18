<!-- Parent Grid Code -->
<script>
  import { ContactCard } from '$components';
  import EnvelopeIcon from 'svelte-icons/fa/FaRegEnvelope.svelte';
  import GoCalendar from 'svelte-icons/go/GoCalendar.svelte';
  import FaWhatsapp from 'svelte-icons/fa/FaWhatsapp.svelte';
  import LinkedInIcon from 'svelte-icons/fa/FaLinkedinIn.svelte';
  import GitHubIcon from 'svelte-icons/fa/FaGithub.svelte';
  import FaRegCalendarCheck from 'svelte-icons/fa/FaRegCalendarCheck.svelte';
</script>

<div class="contact-card-container">
  <ContactCard
    href={'fabianlopez@pm.me'}
    cardTitle={'Send me an email:'}
    contactInfo={'fabianlopez@pm.me'}
  >
    <EnvelopeIcon />
  </ContactCard>
  <ContactCard
    href={'https://wa.me/34664359284'}
    cardTitle={'Whatsapp me!'}
    contactInfo={'/Fabi'}
  >
    <FaWhatsapp />
  </ContactCard>
  <ContactCard
    href={'https://calendly.com/fabian-lopez-gonzalez'}
    cardTitle={'Schedule a call with Calendy'}
    contactInfo={'/fabian-lopez-gonzalez'}
  >
    <FaRegCalendarCheck />
  </ContactCard>
</div>

<style>
  .contact-card-container {
  display: flex;
	flex-direction: column;
	gap: 2rem;
  }
</style>
