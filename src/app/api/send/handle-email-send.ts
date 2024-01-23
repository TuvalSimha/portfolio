import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const MY_EMAIL = "tuval.simha@gmail.com";

interface PostProps {
  email: string;
  subject: string;
  message: string;
}

export async function handleEmailSent({ email, subject, message }: PostProps) {
  try {
    const data = await resend.emails.send({
      from: MY_EMAIL,
      to: email,
      subject,
      text: message,
      react: EmailTemplate({ message, email, subject }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
