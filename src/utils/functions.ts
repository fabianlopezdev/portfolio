export default function scrollTo(event: MouseEvent) {
	const target = event.target as HTMLAnchorElement;
	// Retrieve the `href` attribute of the target.
	const selector = target.getAttribute('href');

	// Check if a selector is found.
	if (selector) {
		const element = document.querySelector(selector);

		// Check if an element is found.
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
}
