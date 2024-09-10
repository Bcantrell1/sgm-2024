import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

interface FormData {
  customerType: string;
  project: string;
  projectSpecifics: string[];
  traffic: string;
  location: string;
  petsTrue: boolean;
  finishFormData: {
    fullName: string;
    email: string;
    phone: string;
    streetAddress: string;
    message: string;
  };
}

async function sendEmail(body: FormData) {
  const msg = {
    to: process.env.EMAIL_TO as string,
    from: process.env.EMAIL_FROM as string,
    subject: 'Project Wizard Inquiry',
    text: `
      Customer Type: ${body.customerType}
      Project: ${body.project}
      Project Specifics: ${body.projectSpecifics.join(', ')}
      Traffic: ${body.traffic}
      Location: ${body.location}
      Has Pets: ${body.petsTrue ? 'Yes' : 'No'}
      Full Name: ${body.finishFormData.fullName}
      Email: ${body.finishFormData.email}
      Phone: ${body.finishFormData.phone}
      Street Address: ${body.finishFormData.streetAddress}
      Message: ${body.finishFormData.message}
    `,
    html: `
      <h1>Project Wizard Inquiry</h1>
      <p><strong>Customer Type:</strong> ${body.customerType}</p>
      <p><strong>Project:</strong> ${body.project}</p>
      <p><strong>Project Specifics:</strong> ${body.projectSpecifics.join(', ')}</p>
      <p><strong>Traffic:</strong> ${body.traffic}</p>
      <p><strong>Location:</strong> ${body.location}</p>
      <p><strong>Has Pets:</strong> ${body.petsTrue ? 'Yes' : 'No'}</p>
      <p><strong>Full Name:</strong> ${body.finishFormData.fullName}</p>
      <p><strong>Email:</strong> ${body.finishFormData.email}</p>
      <p><strong>Phone:</strong> ${body.finishFormData.phone}</p>
      <p><strong>Street Address:</strong> ${body.finishFormData.streetAddress}</p>
      <p><strong>Message:</strong> ${body.finishFormData.message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
  } catch (error: unknown) {
    console.error('SendGrid error:', error);
    if (error instanceof Error && 'response' in error) {
      const sgError = error as { response: { body: any } };
      console.error(sgError.response.body);
    }
    throw new Error('Failed to send email');
  }
}

export async function POST(request: Request) {
  try {
    const body: FormData = await request.json();

    // Validate input
    if (!body.customerType || !body.project || !body.projectSpecifics || !body.traffic || !body.location || 
        !body.finishFormData.fullName || !body.finishFormData.email || !body.finishFormData.phone) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Send email
    try {
      await sendEmail(body);
    } catch (error) {
      console.error('Email error:', error);
      return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Project wizard request submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ message: 'An unexpected error occurred' }, { status: 500 });
  }
}