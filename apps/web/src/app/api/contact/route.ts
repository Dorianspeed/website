import { createTransport, getTestMessageUrl } from 'nodemailer';

import type { ContactFormProps } from '@/components/contact/contactForm/ContactForm.schema';

const handler = async (request: Request) => {
  try {
    const { companyName, email, message, name }: ContactFormProps = await request.json();

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
        html: `
          <h1>Réception d’une nouvelle demande de contact</h1>
          <h2>M ou Mme ${name} de la société ${companyName}</h2>
          <p>Email de contact : ${email}</p>
          <p>Voici le message :</p>
          <br />
          <p>
            ${message.replace(/\n/g, '<br/>')}
          </p>
          <br />
          <p>Bonne réception !</p>
        `,
        subject: `Dorian Garcia EI - Demande de contact - ${name} société ${companyName} `,
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
        html: `
          <h1>Accusé de réception</h1>
          <h2>Votre demande de contact a bien été prise en compte !</h2>
          <p>Voici un récapitulatif des informations fournies :</p>
          <ul>
            <li>Nom : ${name}</li>
            <li>Nom de votre société : ${companyName}</li>
            <li>Email : ${email}</li>
            <li>Votre message :
              <p>
                ${message.replace(/\n/g, '<br/>')}
              </p>
            </li>
          </ul>
          <br />
          <p>Je vous répondrai dans les meilleurs délais, merci de votre compréhension.</p>
          <p>Cordialement,</p>
          <p>Dorian Garcia</p>
        `,
        subject: 'Dorian Garcia EI - Accusé de réception de votre demande de contact',
        to: email
      },
      (error, info) => {
        if (error) {
          //* Do not stop process, this email sending is not required
          console.error(error);
        }

        if (process.env.NODE_ENV === 'development') {
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
