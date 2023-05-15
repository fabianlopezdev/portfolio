<!-- Parent Grid Code -->
<script lang='ts'>
  import { ContactCard } from '$components';
  import EnvelopeIcon from 'svelte-icons/fa/FaRegEnvelope.svelte';
  import GoCalendar from 'svelte-icons/go/GoCalendar.svelte';
  import FaWhatsapp from 'svelte-icons/fa/FaWhatsapp.svelte';
  import LinkedInIcon from 'svelte-icons/fa/FaLinkedinIn.svelte';
  import GitHubIcon from 'svelte-icons/fa/FaGithub.svelte';
  import FaRegCalendarCheck from 'svelte-icons/fa/FaRegCalendarCheck.svelte';
	import Home from '$components/home/Home.svelte';
	import type { Language } from '../../../../types';

	export let cardGrid: Language['contact']['cardGrid'];
</script>

<div class="contact-card-container">
  <ContactCard
    href={cardGrid.emailCard.href}
    cardTitle={cardGrid.emailCard.title}
    contactInfo={cardGrid.emailCard.info}
  >
    <EnvelopeIcon />
  </ContactCard>
  <ContactCard
   href={cardGrid.whatsappCard.href}
    cardTitle={cardGrid.whatsappCard.title}
    contactInfo={cardGrid.whatsappCard.info}
  >
    <FaWhatsapp />
  </ContactCard>
  <ContactCard
    href={cardGrid.calendlyCard.href}
    cardTitle={cardGrid.calendlyCard.title}
    contactInfo={cardGrid.calendlyCard.info}
  >
    <FaRegCalendarCheck />
  </ContactCard>
</div>

<style>
  .contact-card-container {
  display: flex;
	flex-direction: column;
	gap: 2rem;
  /* color: black; */
  }
</style>
