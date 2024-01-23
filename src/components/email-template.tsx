import * as React from "react";

interface EmailTemplateProps {
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  subject,
  message,
}) => (
  <div>
    <h1>Welcome,!</h1>
    <p>You have a new message from {email}</p>
    <p>Subject: {subject}</p>
    <p>Message: {message}</p>
  </div>
);
