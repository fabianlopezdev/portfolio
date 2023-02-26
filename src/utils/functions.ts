export default function scrollTo(event: Event) {
  console.log('hellloooooo')
	const target = event.target as HTMLAnchorElement;
	const element = document.querySelector(target.getAttribute('href') as string);
  console.log('element', element)
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
}
