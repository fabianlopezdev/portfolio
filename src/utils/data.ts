import type { Language } from "../types";

export const generateNavigationLinks = ({ about, projects, contact }: Language['nav']) => {
	return [
		{ href: '#about', name: about },
		{ href: '#projects', name: projects },
		{ href: '#contact', name: contact }
	];
};
