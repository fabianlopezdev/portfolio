export interface Language {
	home: {
		slogan1: string;
		highlight1: string;
		slogan2: string;
		highlight2: string;
		welcome: string;
		buttonContact: string;
		buttonResume: string;
	};
	contact: {
		cardGrid: {
			emailCard: {
				href: string;
				title: string;
				info: string;
			};
			whatsappCard: {
				href: string;
				title: string;
				info: string;
			};
			calendlyCard: {
				href: string;
				title: string;
				info: string;
			};
		};
	};
	navLinks: {
		about: string;
		projects: string;
		contact: string;
	};
}