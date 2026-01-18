import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-center mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-600 text-center mb-16">
          Let&apos;s discuss how we can help your business grow
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-600">
                    123 Business Street
                    <br />
                    Suite 100
                    <br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:info@devrecruit.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@devrecruit.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+15551234567"
                    className="text-blue-600 hover:underline"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
