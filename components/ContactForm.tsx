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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 3000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

      <div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
              placeholder="How can we help?"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={formStatus === "sending"}
            className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {formStatus === "sending" ? (
              <span>Sending...</span>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>

          {formStatus === "success" && (
            <div className="p-4 bg-green-100 text-green-700 rounded-lg">
              Message sent successfully! We&apos;ll get back to you soon.
            </div>
          )}

          {formStatus === "error" && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg">
              Failed to send message. Please try again.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
