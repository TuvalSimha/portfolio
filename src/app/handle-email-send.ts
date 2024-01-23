import { Resend } from "resend";

type handleEmailSendProps = {
  email: string;
  subject: string;
  message: string;
};

const MY_EMAIL = "tuval.simha@gmail.com";

export async function handleEmailSend({
  email,
  subject,
  message,
}: handleEmailSendProps) {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
  try {
    const response = await resend.emails.send({
      to: MY_EMAIL,
      from: email,
      subject: subject,
      html: `<p>Hi</p><p>${message}</p>`,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
