import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#081C33] via-[#0B2A4A] to-[#0E3A66] text-white overflow-hidden">
        {/* Decorative icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
          <img src="/brand/icon.png" alt="" className="w-[420px] rotate-12" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Let’s talk about your goals and how Stellar North Services can help
            guide your next digital move.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-slate-900">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-sky-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-slate-600">
                      Serving clients across the US and Europe
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-sky-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:contact@stellarnorthservices.com"
                      className="text-sky-600 hover:underline"
                    >
                      office@stellarnorthservices.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-sky-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+18478059655"
                      className="text-sky-600 hover:underline"
                    >
                      +1 (847) 805-9655
                    </a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10">
                <h3 className="font-semibold mb-4 text-slate-900">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/stellar-north-services/"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center hover:bg-sky-700 transition"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/SdZika"
                    aria-label="GitHub"
                    className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-slate-900 transition"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
