export default function scrollTo(event: MouseEvent | Event) {
	// Cast the event target to HTMLAnchorElement or HTMLInputElement
	const target = event.target as HTMLAnchorElement | HTMLInputElement;

	// Determine the attribute based on the event type
	const attribute = event.type === 'click' ? 'href' : event.type === 'change' ? 'value' : '';

	// Return early if the event type is neither click nor change
	if (!attribute) {
		return;
	}

	// Get the value of the attribute from the target element
	const selector = target.getAttribute(attribute);

	let element;
	// Select the element based on the attribute
	if (selector) {
		if (attribute === 'href') {
			element = document.querySelector(selector);
		} else {
			element = document.querySelector(`.${selector}`);
		}
	}

	// Scroll to the element if it exists
	if (element) {
		if (attribute === 'href') {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		} else {
			setTimeout(()=> {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}, 200)
		}
		// Adjust scroll position
		setTimeout(() => {
			const offset = 8; // Replace 50 with your desired offset
			window.scrollBy({ top: -offset, behavior: 'smooth' });
		},500)
	}
}
