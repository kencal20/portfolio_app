"use client";

import { useState } from "react";
import HeroSection from "../heroSection";
import { InputComponent } from "@/components/ui/inputComponent";
import emailjs from "@emailjs/browser";

const YOUR_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const YOUR_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const YOUR_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function ContactSection() {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    user_phoneNumber: "",
    message: "",
  });
  const [status, setStatus] = useState<{ message: string; type: "error" | "success" | null }>({
    message: "",
    type: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateForm = () => {
    if (!form.user_name) return "Name is required.";
    if (!form.message) return "Message is required.";
    if (!form.user_email && !form.user_phoneNumber)
      return "Please provide at least an email or phone number.";
    return "";
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorMsg = validateForm();
    if (errorMsg) return setStatus({ message: errorMsg, type: "error" });
    setStatus({ message: "", type: null });
    setLoading(true);

    const contact_info = [form.user_email, form.user_phoneNumber].filter(Boolean).join(", ");

    try {
      await emailjs.send(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        { ...form, contact_info },
        YOUR_PUBLIC_KEY
      );
      setStatus({ message: "Message sent successfully!", type: "success" });
      setForm({ user_name: "", user_email: "", user_phoneNumber: "", message: "" });
    } catch (error: any) {
      setStatus({
        message: error.text || "Failed to send message.",
        type: "error",
      });
      console.error("Email sending failed:", error.text);
    } finally {
      setLoading(false);
    }
  };

  return (
    <HeroSection
      id="contact"
      title="Contact Me"
      subtitle="Let’s collaborate or chat about your project"
      gradient="from-white to-blue-50 dark:from-slate-900 dark:to-slate-950"
    >
      <form
        onSubmit={sendEmail}
        className="flex flex-col items-center space-y-4 mx-auto w-full max-w-md"
      >
        {status.message && (
          <p className={`text-center ${status.type === "error" ? "text-red-500" : "text-green-500"}`}>
            {status.message}
          </p>
        )}

        <InputComponent
          label="Name"
          name="user_name"
          value={form.user_name}
          onChange={handleChange}
          className="w-80"
        />
        <InputComponent
          label="Email"
          name="user_email"
          type="email"
          value={form.user_email}
          onChange={handleChange}
          className="w-80"
        />
        <InputComponent
          label="Phone"
          name="user_phoneNumber"
          type="tel"
          value={form.user_phoneNumber}
          onChange={handleChange}
          className="w-80"
        />
        <InputComponent
          label="Message"
          name="message"
          type="textarea"
          value={form.message}
          onChange={handleChange}
          className="w-80"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-40 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </HeroSection>
  );
}
