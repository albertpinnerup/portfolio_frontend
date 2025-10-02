import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const { name, email, message } = await request.json();

		// Basic validation
		if (!name || !email || !message) {
			return NextResponse.json({ error: 'Name, email and message are required' }, { status: 400 });
		}

		const data = await resend.emails.send({
			from: 'Your Portfolio Contact Form <onboarding@resend.dev>',
			to: process.env.CONTACT_EMAIL as string, // Your email address
			subject: `New Contact Form Submission from ${name}`,
			text: `
				Name: ${name}
				Email: ${email}
				Message: ${message}
      `,
			replyTo: email,
		});

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error: error instanceof Error ? error.message : 'Failed to send email' }, { status: 500 });
	}
}
