export default function scrollTo(id: string) {
	if (id) {
		const element = document.getElementById(id);
		if (element) {
			const rect = element.getBoundingClientRect();
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			const top = rect.top + scrollTop;
			window.scroll({
				top: top, // Adjust this value to set the position of the element after scrolling
				behavior: 'smooth'
			});
		}
	}
}
