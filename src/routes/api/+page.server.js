import nodemailer from 'nodemailer';

export default async function post(name, email, message) {
	console.log('heerrreeee');

	// Validate form input
	if (!name || !email || !message) {
		return res.status(400).json({ error: 'All fields are required.' });
	}

	// Set up Nodemailer transporter
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'fabianin86@gmail.com',
			pass: 'here is my password'
		}
	});

	// Set up email options
	const mailOptions = {
		from: email,
		to: 'fabianin86@gmail.com',
		subject: 'New contact form submission',
		text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
	};

	// Send the email
	try {
		await transporter.sendMail(mailOptions);
		res.status(200).json({ message: 'Email sent successfully.' });
	} catch (error) {
		console.error('Error sending email:', error);
		res.status(500).json({ error: 'Failed to send email.' });
	}
}
