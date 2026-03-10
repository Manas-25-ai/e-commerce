"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Get In Touch</h1>
        <p className="text-gray-600">
          Have a question about an order, a product, or just want to say hello?
          We&apos;d love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact info */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Contact Information
          </h2>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-xl">
                <Phone size={20} className="text-primary-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Phone / WhatsApp</p>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-xs text-gray-500 mt-1">
                  Mon – Sat, 10 AM – 7 PM
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-xl">
                <Mail size={20} className="text-primary-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600">priya.fashionhub@gmail.com</p>
                <p className="text-xs text-gray-500 mt-1">
                  We reply within 24 hours
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-xl">
                <MapPin size={20} className="text-primary-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Address</p>
                <p className="text-gray-600">
                  12, Nehru Nagar, Bapu Nagar,
                  <br />
                  Jaipur, Rajasthan – 302015
                </p>
              </div>
            </div>
          </div>

          {/* Quick FAQ */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Help</h3>
            <div className="space-y-3">
              {[
                {
                  q: "How long does delivery take?",
                  a: "3–7 business days across India.",
                },
                {
                  q: "Do you offer Cash on Delivery?",
                  a: "Yes! COD is available on all orders.",
                },
                {
                  q: "What is the return policy?",
                  a: "We offer 7-day easy returns on all products.",
                },
                {
                  q: "How can I track my order?",
                  a: "You'll receive a tracking link via WhatsApp/SMS.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="border border-gray-200 rounded-lg px-4 py-3"
                >
                  <summary className="font-medium text-sm text-gray-800 cursor-pointer">
                    {faq.q}
                  </summary>
                  <p className="text-sm text-gray-600 mt-2">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div>
          <div className="card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-5">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thank you for reaching out. We&apos;ll get back to you within
                  24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-primary-600 font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="e.g. Priya Sharma"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="e.g. priya@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="e.g. +91 98765 43210"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="How can we help you?"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
