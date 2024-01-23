// src/pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const MY_EMAIL = "contact-me@tuvalsimha.com";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const { data, error } = await resend.emails.send({
    from: MY_EMAIL,
    to: [email],
    subject,
    text: message,
    react: EmailTemplate({
      email,
      subject,
      message,
    }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
