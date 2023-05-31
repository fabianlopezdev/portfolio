type PostRequestBody = {
	name: string;
	email: string;
	message: string;
};

export type PostRequest = {
	body: PostRequestBody;
};

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
	about: {
		firstParagraph: string;
		secondParagraph: string;
		thirdParagraph: string;
	};
	work: {
		projectCard: {
			name: string;
			shortDescripion: string;
			description: string;
			githubLink: string;
			website?: string;
			role: string;
			responsibilities: string;
			skills: string[];
		};
	};
	contact: {
		h1: string;
		cardGrid: {
			emailCard: {
				href: string;
				title: string;
				info: string;
				clicked: string;
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
		contactForm: {
			p: string;
			name: string;
			email: string;
			subject: string;
			message: string;
			button: string;
			success: string;
			error: string;
		};
	};
	footer: {
		madeWith: string;
		language: string;
	};
	navLinks: {
		about: string;
		work: string;
		contact: string;
	};
}

