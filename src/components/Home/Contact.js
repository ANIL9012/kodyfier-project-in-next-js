"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Console Data
    console.log("Form Submitted Data:");
    console.log("Name:", formData.name);
    console.log("Mobile:", formData.mobile);
    console.log("Email:", formData.email);
    console.log("Message:", formData.message);

    // WhatsApp Message
    const whatsappMessage = `Hello,

Name: ${formData.name}
Mobile: ${formData.mobile}
Email: ${formData.email}

Message:
${formData.message}`;

    // Open WhatsApp
    window.open(
      `https://wa.me/919411894517?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
    );

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    // Reset Form
    setFormData({
      name: "",
      mobile: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="relative w-full bg-white overflow-hidden px-4 py-14 md:py-16 lg:py-20 sm:px-6 lg:px-8">
      {/* Bottom Wave */}
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

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Section */}
          <div className="w-full">
            <h2 className="mb-8 text-3xl md:text-4xl font-extrabold text-gray-900">
              Contact Us
            </h2>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/919411894517"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 flex items-center gap-4 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 transition-all duration-300 hover:scale-[1.02] hover:bg-green-100"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md">
                <FaWhatsapp size={26} />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Chat on WhatsApp
                </p>

                <h3 className="text-lg font-bold text-gray-900">
                  +91 9411894517
                </h3>
              </div>
            </a>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name + Mobile */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl border border-[#7de0ae] bg-[#f0fdf6] px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#3dba7a] focus:ring-2 focus:ring-[#3dba7a]/30"
                />

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  required
                  className="w-full rounded-xl border border-[#7de0ae] bg-[#f0fdf6] px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#3dba7a] focus:ring-2 focus:ring-[#3dba7a]/30"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full rounded-xl border border-[#7de0ae] bg-[#f0fdf6] px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#3dba7a] focus:ring-2 focus:ring-[#3dba7a]/30"
              />

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
                rows={7}
                className="w-full resize-none rounded-xl border border-[#7de0ae] bg-[#f0fdf6] px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#3dba7a] focus:ring-2 focus:ring-[#3dba7a]/30"
              />

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="rounded-xl bg-[#25D366] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#1ebe5d] active:scale-95"
                >
                  {submitted ? "Opening WhatsApp..." : "Send Message"}
                </button>
              </div>

              {/* Success Message */}
              {submitted && (
                <p className="text-sm font-medium text-[#25D366]">
                  Redirecting to WhatsApp...
                </p>
              )}
            </form>
          </div>

          {/* Right Image */}
          <div className="flex w-full justify-center lg:justify-end">
            <div className="relative w-full max-w-sm overflow-hidden rounded-3xl sm:max-w-md lg:max-w-[520px]">
              <div className="absolute inset-0 rounded-3xl bg-[#c6f4de]/30 mix-blend-multiply" />

              <img
                src="/images/homeimg/contact.webp"
                alt="Contact"
                className="w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
