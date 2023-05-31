// A function that scrolls to an element with a given speed
function scrollToElement(element, speed) {
	// Get the current scroll position and the element position
	const scrollPosition = window.pageYOffset;
	const elementPosition = element.getBoundingClientRect().top;

	// Calculate the distance and the duration
	const distance = elementPosition - scrollPosition;
	const duration = Math.abs(distance / speed);

	// Define a start time
	let startTime;

	// Define an animation function
	function animateScroll(currentTime) {
		// Set the start time if it is not defined
		if (!startTime) startTime = currentTime;

		// Calculate the elapsed time and the progress
		const elapsedTime = currentTime - startTime;
		const progress = Math.min(elapsedTime / duration, 1);

		// Calculate the new scroll position using an easing function
		const newScrollPosition = scrollPosition + distance * easeInOutQuad(progress);

		// Scroll to the new position
		window.scrollTo(0, newScrollPosition);

		// Request another animation frame if the progress is not 100%
		if (progress < 1) requestAnimationFrame(animateScroll);
	}

	// Request an animation frame to start the animation
	requestAnimationFrame(animateScroll);
}

// An easing function to make the animation smooth
function easeInOutQuad(t) {
	return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

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
		// Use a custom function to scroll with a given speed
		scrollToElement(element, 1); // 0.5 pixels per millisecond
	}
}
