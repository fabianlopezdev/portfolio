import type { Language } from "../types";

export const generateNavigationLinks = ({ about, projects, contact }: Language['navLinks']) => {
	return [
		{ href: '#home', name: about },
		{ href: '#about', name: about },
		{ href: '#projects', name: projects },
		{ href: '#contact', name: contact }
	];
};
