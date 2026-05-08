"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", mobile: "", email: "", message: "" });
  };

  return (
    <section className="relative min-h-screen w-full bg-white flex items-center justify-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      {/* Background wave bottom-left */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 220"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 C360,220 720,80 1440,160 L1440,220 L0,220 Z"
            fill="#e6f9f0"
          />
        </svg>
      </div>

      {/* Scroll-to-top button */}

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — Form */}
          <div className="w-full">
            <h2 className="mb-8 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contact Us
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Row: Name + Mobile */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full rounded-lg border border-[#7de0ae] bg-[#f0fdf6] px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:border-[#3dba7a] focus:ring-2 focus:ring-[#3dba7a]/30"
                />
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  required
                  className="w-full rounded-lg border border-[#7de0ae] bg-[#f0fdf6] px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:border-[#3dba7a] focus:ring-2 focus:ring-[#3dba7a]/30"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
                className="w-full rounded-lg border border-[#7de0ae] bg-[#f0fdf6] px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:border-[#3dba7a] focus:ring-2 focus:ring-[#3dba7a]/30"
              />

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here.."
                required
                rows={7}
                className="w-full resize-y rounded-lg border border-[#7de0ae] bg-[#f0fdf6] px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:border-[#3dba7a] focus:ring-2 focus:ring-[#3dba7a]/30"
              />

              {/* Send Button */}
              <div>
                <button
                  type="submit"
                  className="rounded-lg bg-[#3dba7a] px-8 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#2fa868] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#3dba7a]/50"
                >
                  {submitted ? "Sent ✓" : "Send"}
                </button>
              </div>

              {submitted && (
                <p className="text-sm font-medium text-[#3dba7a]">
                  Your message has been sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* Right — Image */}
          <div className="flex w-full justify-center lg:justify-end">
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl sm:max-w-md lg:max-w-full">
              {/* Teal overlay tint */}
              <div className="absolute inset-0 rounded-2xl bg-[#c6f4de]/30 mix-blend-multiply" />
              {/* Replace src with your actual image path, e.g. /images/contact-photo.jpg */}
              <img
                src="/images/homeimg/contact.webp"
                alt="Person working at desk"
                className="h-auto w-full rounded-2xl object-cover"
                style={{ maxHeight: "520px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
