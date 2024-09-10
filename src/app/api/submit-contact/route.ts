// import { db } from '@/firebase/clientApp';
import sgMail from '@sendgrid/mail';
// import { addDoc, collection } from 'firebase/firestore';
import { NextResponse } from 'next/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

interface ContactFormData {
  name: string;
  number: string;
  email: string;
  workType: string;
  hasPets?: boolean;
  message: string;
}

async function sendEmail(body: ContactFormData) {
  const msg = {
    to: process.env.EMAIL_TO as string,
    from: process.env.EMAIL_FROM as string,
    subject: 'Contact Page Inquiry',
    text: `
      Name: ${body.name}
      Phone: ${body.number}
      Email: ${body.email}
      Work Type: ${body.workType}
      ${body.workType === 'Turf' ? `Has Pets: ${body.hasPets ? 'Yes' : 'No'}` : ''}
      Message: ${body.message}
    `,
    html: `
      <h1>Contact Page Inquiry</h1>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Phone:</strong> ${body.number}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Work Type:</strong> ${body.workType}</p>
      ${body.workType === 'Turf' ? `<p><strong>Has Pets:</strong> ${body.hasPets ? 'Yes' : 'No'}</p>` : ''}
      <p><strong>Message:</strong> ${body.message}</p>
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
    const body: ContactFormData = await request.json();

    // Validate input
    if (!body.name || !body.number || !body.email || !body.workType || !body.message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Add to Firestore
    // try {
    //   await addDoc(collection(db, "clientRequests"), {
    //     ...body,
    //     status: 'pending',
    //     date: new Date().toISOString(),
    //   });
    // } catch (error) {
    //   console.error('Firestore error:', error);
    //   return NextResponse.json({ message: 'Error saving to database' }, { status: 500 });
    // }

    // Send email
    try {
      await sendEmail(body);
    } catch (error) {
      console.error('Email error:', error);
      // Note: We're not returning here because we still saved to the database
      // You might want to implement a retry mechanism or notify admins of the email failure
    }

    return NextResponse.json({ message: 'Request submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ message: 'An unexpected error occurred' }, { status: 500 });
  }
}