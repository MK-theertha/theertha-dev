"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Please add a subject."),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      if (!serviceId || !templateId || !publicKey) {
        console.info("EmailJS credentials not configured. Contact form submission simulated.", values);
        setStatus("success");
        form.reset();
        return;
      }

      await emailjs.send(serviceId, templateId, {
        from_name: values.name,
        from_email: values.email,
        subject: values.subject,
        message: values.message,
      }, {
        publicKey,
      });

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS submission failed", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 rounded-[28px] border border-white/10 bg-slate-950/50 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
            Name
          </label>
          <input
            id="name"
            {...form.register("name")}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400/50 focus:outline-none"
            placeholder="Your name"
          />
          {form.formState.errors.name && (
            <p className="mt-2 text-xs text-rose-300">{form.formState.errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...form.register("email")}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400/50 focus:outline-none"
            placeholder="you@example.com"
          />
          {form.formState.errors.email && (
            <p className="mt-2 text-xs text-rose-300">{form.formState.errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-200">
          Subject
        </label>
        <input
          id="subject"
          {...form.register("subject")}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400/50 focus:outline-none"
          placeholder="Project inquiry"
        />
        {form.formState.errors.subject && (
          <p className="mt-2 text-xs text-rose-300">{form.formState.errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...form.register("message")}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400/50 focus:outline-none"
          placeholder="Tell me about your project, role, or opportunity."
        />
        {form.formState.errors.message && (
          <p className="mt-2 text-xs text-rose-300">{form.formState.errors.message.message}</p>
        )}
      </div>

      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={isSubmitting} className="min-w-[180px] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:brightness-110">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" /> Send Message
            </>
          )}
        </Button>

        {status === "success" && (
          <p className="text-sm text-emerald-300">Your message is ready to send.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-rose-300">Something went wrong. Please try again.</p>
        )}
      </div>
    </form>
  );
}
