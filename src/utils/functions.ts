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
	console.log('element', element);

	// Scroll to the element if it exists
	if (element) {
		element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		// Adjust scroll position (if header is showing all the time)
		// if (attribute === 'href') {
			// setTimeout(() => {
			// 	const offset = -50;
			// 	window.scrollBy({ top: -offset, behavior: 'smooth' });
			// }, 400);
		}
	}

