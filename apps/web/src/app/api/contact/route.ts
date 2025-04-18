import { render } from '@react-email/render';
import ContactRequest from '@website/transactional/emails/contactRequest/ContactRequest';
import ReceiptConfirmation from '@website/transactional/emails/receiptConfirmation/ReceiptConfirmation';
import { createTransport, getTestMessageUrl } from 'nodemailer';
import sanitizeHtml from 'sanitize-html';

import type { ContactFormProps } from '@/components/contact/contactForm/ContactForm.schema';

const handler = async (request: Request) => {
  try {
    const { companyName, email, message, name }: ContactFormProps = await request.json();

    const contactInfoSanitized = {
      companyName,
      email,
      message: sanitizeHtml(message),
      name
    } satisfies ContactFormProps;

    const transporter = createTransport({
      auth: {
        pass: process.env.NODEMAILER_AUTH_PASS,
        user: process.env.NODEMAILER_AUTH_USER
      },
      host: process.env.NODEMAILER_HOST,
      port: Number(process.env.NODEMAILER_PORT),
      secure: JSON.parse(`${process.env.NODEMAILER_SECURE}`)
    });

    transporter.sendMail(
      {
        from: process.env.NODEMAILER_AUTH_USER,
        html: await render(ContactRequest(contactInfoSanitized)),
        subject: `Dorian Garcia EI - Nouvelle demande de contact - ${name} - ${companyName}`,
        to: process.env.NODEMAILER_AUTH_USER
      },
      (error, info) => {
        if (error) {
          //* We stop the process if an error occured
          throw error;
        }

        if (process.env.NODE_ENV === 'development') {
          console.log('Preview URL: %s', getTestMessageUrl(info));
        }
      }
    );

    transporter.sendMail(
      {
        from: process.env.NODEMAILER_AUTH_USER,
        html: await render(ReceiptConfirmation(contactInfoSanitized)),
        subject: 'Dorian Garcia EI - Accusé de réception de votre demande de contact',
        to: email
      },
      (error, info) => {
        if (error) {
          //* Do not stop process, this email sending is not required
          console.error(error);
        }

        if (!error && process.env.NODE_ENV === 'development') {
          console.log('Preview URL: %s', getTestMessageUrl(info));
        }
      }
    );

    return Response.json({ message: 'Email sent with success' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json(error, { status: 500 });
  }
};

export { handler as POST };
