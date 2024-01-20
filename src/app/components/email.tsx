"use client";
import React, { useState } from "react";
import { Resend } from "resend";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Social } from "./social";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const formSchema = z.object({
  email: z.string(),
  subject: z.string(),
  message: z.string(),
});

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setEmailSubmitted(true);
    resend.emails.send({
      from: values.email,
      to: "tuval.simha@gmail.com",
      subject: values.subject,
      html: values.message,
    });
  }

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s talk!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Feel free to reach out and connect with me!
          <br />
          Whether you have a question or simply want to say hello, I&apos;ll do
          my utmost to respond to you promptly!
        </p>
        <Social />
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <Form {...form}>
            <form
              className="flex flex-col"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="mb-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white block mb-2 text-sm font-medium">
                        Email
                      </FormLabel>
                      <FormControl>
                        <input
                          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                          placeholder="your@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-6">
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white block mb-2 text-sm font-medium">
                        Subject
                      </FormLabel>
                      <FormControl>
                        <input
                          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                          placeholder="Just saying hi"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-6">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white block mb-2 text-sm font-medium">
                        Message
                      </FormLabel>
                      <FormControl>
                        <input
                          className="bg-[#18191E] border h-[100px] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                          placeholder="Let's talk about..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          </Form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
