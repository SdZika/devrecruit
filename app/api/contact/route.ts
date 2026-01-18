import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // TODO: Integrate with your email service here
    // Example services: SendGrid, AWS SES, Nodemailer, Resend
    //
    // Example with SendGrid:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'your-email@company.com',
    //   from: 'noreply@company.com',
    //   subject: `Contact Form: ${subject}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    //   html: `<strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br><br>${message}`,
    // });

    console.log("Contact form submission:", { name, email, subject, message });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
