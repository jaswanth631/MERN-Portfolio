import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  console.log('NODEMAILER_EMAIL:', process.env.NODEMAILER_EMAIL);
  console.log('NODEMAILER_PASSWORD:', process.env.NODEMAILER_PASSWORD ? '*****' : 'Not set'); // Log obscured password

  // Create a transporter using your email service details
  // For Gmail, you might need to enable "Less secure app access" or use App Passwords
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email service, e.g., 'Outlook365', 'SendGrid'
    auth: {
      user: process.env.NODEMAILER_EMAIL, // Your email address (e.g., your_email@gmail.com)
      pass: process.env.NODEMAILER_PASSWORD, // Your email password or app-specific password
    },
  });

  // Email to you (the portfolio owner)
  const mailOptionsToOwner = {
    from: process.env.NODEMAILER_EMAIL,
    to: 'jaswanthraju63@gmail.com',
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  // Auto-responder email to the sender
  const mailOptionsToSender = {
    from: 'jaswanthraju63@gmail.com', // Or a no-reply email if you prefer
    to: email,
    subject: 'Thank you for contacting Jaswanth Varma!',
    html: `
      <p>Hi,</p>
      <p>Thank you for reaching out to us! We have received your request, and we'll get back to you within 2-3 business days.</p>
      <p>Best regards,<br/>Jaswanth Varma</p>
    `,
  };

  try {
    // Send email to owner
    await transporter.sendMail(mailOptionsToOwner);
    console.log('Email sent to owner successfully');

    // Send auto-responder to sender
    await transporter.sendMail(mailOptionsToSender);
    console.log('Auto-responder sent to sender successfully');

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
} 