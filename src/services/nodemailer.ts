import nodemailer from 'nodemailer';
import type { PostRequest } from '../types';
const envNodemailerPass = import.meta.env.VITE_NODEMAILER_PASS;
const envGmailEmail = import.meta.env.VITE_GMAIL_EMAIL;
const envFabappsEmail = import.meta.env.VITE_FABAPPS_EMAIL;

export async function post(request: PostRequest) {
	const { name, email, message } = request.body;

	// Validate form input
	if (!name || !email || !message) {
		return { status: 400, body: { error: 'All fields are required.' } };
	}
	console.log('name:', name);

	// Set up Nodemailer transporter
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: envGmailEmail,
			pass: envNodemailerPass
		}
	});

	// Set up email options
	const mailOptions = {
		from: email,
		to: envFabappsEmail,
		subject: 'New contact form submission',
		text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
	};

	// Send the email
	try {
		await transporter.sendMail(mailOptions);
		return { status: 200, body: { message: 'Email sent successfully.' } };
	} catch (error) {
		console.error('Error sending email:', error);
		return { status: 500, body: { error: 'Failed to send email.' } };
	}
}
