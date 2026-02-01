"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Request failed");

      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    } finally {
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-slate-900">
        Send us a message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="you@company.com"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-700">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            placeholder="How can we help?"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-700">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            placeholder="Tell us a bit about your project or challenge..."
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={formStatus === "sending"}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold text-slate-900 bg-gradient-to-r from-sky-400 to-cyan-300 hover:shadow-lg hover:-translate-y-0.5 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formStatus === "sending" ? (
            "Sending…"
          ) : (
            <>
              <Send className="w-5 h-5" />
              Start the Conversation
            </>
          )}
        </button>

        {/* Status messages */}
        {formStatus === "success" && (
          <div className="rounded-lg bg-emerald-50 text-emerald-700 px-4 py-3 text-sm">
            Message sent successfully. We’ll get back to you shortly.
          </div>
        )}

        {formStatus === "error" && (
          <div className="rounded-lg bg-rose-50 text-rose-700 px-4 py-3 text-sm">
            Something went wrong. Please try again in a moment.
          </div>
        )}
      </form>
    </div>
  );
}
