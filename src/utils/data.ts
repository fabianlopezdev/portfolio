import type { Language } from "../types";

export const generateNavigationLinks = ({ about, work, contact }: Language['navLinks']) => {
	return [
		{ href: '#about', name: about },
		{ href: '#work', name: work },
		{ href: '#contact', name: contact }
	];
};
