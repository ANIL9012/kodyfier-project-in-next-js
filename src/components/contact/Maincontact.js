"use client";

import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function MainContact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  // INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // CONSOLE DATA
    console.log("Form Data:", formData);

    // WHATSAPP MESSAGE
    const whatsappMessage = `
🚀 New Contact Form Submission

👤 Name: ${formData.name}
📱 Mobile: ${formData.mobile}
📧 Email: ${formData.email}

💬 Message:
${formData.message}
    `;

    // WHATSAPP URL
    const whatsappURL = `https://wa.me/919411894517?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    // OPEN WHATSAPP
    window.open(whatsappURL, "_blank");

    // RESET FORM
    setFormData({
      name: "",
      mobile: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#f5f5f5] py-14 sm:py-16 md:py-20 lg:py-24">
      {/* WAVE BACKGROUND */}
      <div
        className="
        absolute
        bottom-[-40px]
        left-0
        h-[180px]
        w-full
        sm:bottom-[-80px]
        sm:h-[250px]
        md:bottom-[-100px]
        md:h-[320px]
        lg:bottom-[-154px]
        lg:h-[500px]
        "
      >
        <Image
          src="/images/homeimg/contact_wave.png"
          alt="wave"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT SIDE */}
          <div className="order-2 lg:order-1">
            {/* HEADING */}
            <h2
              className="
              mb-8
              text-[32px]
              font-bold
              leading-tight
              text-[#07112d]
              sm:text-[40px]
              md:text-[46px]
              lg:mb-10
              lg:text-[56px]
              "
            >
              Contact Us
            </h2>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6 lg:space-y-7"
            >
              {/* INPUTS */}
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                {/* NAME */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="
                  h-[54px]
                  w-full
                  rounded-[12px]
                  border-2
                  border-[#39c97d]
                  bg-[#dff3e8]
                  px-4
                  text-[15px]
                  text-[#4d5565]
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-[#7b7b7b]
                  focus:scale-[1.01]
                  focus:shadow-[0_0_20px_rgba(57,201,125,0.25)]
                  sm:h-[58px]
                  sm:px-5
                  sm:text-[16px]
                  lg:h-[62px]
                  lg:text-[17px]
                  "
                />

                {/* MOBILE */}
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  required
                  className="
                  h-[54px]
                  w-full
                  rounded-[12px]
                  border-2
                  border-[#39c97d]
                  bg-[#dff3e8]
                  px-4
                  text-[15px]
                  text-[#4d5565]
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-[#7b7b7b]
                  focus:scale-[1.01]
                  focus:shadow-[0_0_20px_rgba(57,201,125,0.25)]
                  sm:h-[58px]
                  sm:px-5
                  sm:text-[16px]
                  lg:h-[62px]
                  lg:text-[17px]
                  "
                />
              </div>

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
                className="
                h-[54px]
                w-full
                rounded-[12px]
                border-2
                border-[#39c97d]
                bg-[#dff3e8]
                px-4
                text-[15px]
                text-[#4d5565]
                outline-none
                transition-all
                duration-300
                placeholder:text-[#7b7b7b]
                focus:scale-[1.01]
                focus:shadow-[0_0_20px_rgba(57,201,125,0.25)]
                sm:h-[58px]
                sm:px-5
                sm:text-[16px]
                lg:h-[62px]
                lg:text-[17px]
                "
              />

              {/* MESSAGE */}
              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here.."
                required
                className="
                min-h-[180px]
                w-full
                resize-none
                rounded-[12px]
                border-2
                border-[#39c97d]
                bg-[#dff3e8]
                p-4
                text-[15px]
                text-[#4d5565]
                outline-none
                transition-all
                duration-300
                placeholder:text-[#7b7b7b]
                focus:scale-[1.01]
                focus:shadow-[0_0_20px_rgba(57,201,125,0.25)]
                sm:min-h-[220px]
                sm:p-5
                sm:text-[16px]
                lg:min-h-[260px]
                lg:text-[17px]
                "
              />

              {/* BUTTONS */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                {/* SEND BUTTON */}
                <button
                  type="submit"
                  className="
                  flex
                  h-[54px]
                  min-w-[135px]
                  items-center
                  justify-center
                  rounded-[12px]
                  border-2
                  border-[#1e7f4d]
                  bg-[#43c97f]
                  px-7
                  text-[18px]
                  font-semibold
                  text-[#07112d]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#2fbb6d]
                  hover:shadow-[0_14px_35px_rgba(67,201,127,0.35)]
                  active:scale-95
                  sm:h-[58px]
                  sm:min-w-[150px]
                  sm:text-[20px]
                  lg:text-[22px]
                  "
                >
                  Send
                </button>

                {/* WHATSAPP BUTTON */}
                <a
                  href="https://wa.me/919411894517"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  group
                  relative
                  flex
                  h-[56px]
                  w-[56px]
                  items-center
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-[#25D366]
                  to-[#1ebe5d]
                  text-white
                  shadow-[0_12px_30px_rgba(37,211,102,0.45)]
                  transition-all
                  duration-500
                  hover:w-[220px]
                  hover:scale-105
                  hover:shadow-[0_18px_40px_rgba(37,211,102,0.55)]
                  sm:h-[60px]
                  sm:w-[60px]
                  "
                >
                  {/* GLOW */}
                  <span
                    className="
                    absolute
                    inset-0
                    rounded-full
                    bg-white/20
                    opacity-0
                    blur-xl
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    "
                  />

                  {/* ICON */}
                  <span
                    className="
                    relative
                    z-10
                    flex
                    h-[56px]
                    w-[56px]
                    shrink-0
                    items-center
                    justify-center
                    sm:h-[60px]
                    sm:w-[60px]
                    "
                  >
                    <FaWhatsapp
                      className="
                      text-[30px]
                      transition-all
                      duration-500
                      group-hover:scale-125
                      group-hover:rotate-[12deg]
                      "
                    />
                  </span>

                  {/* TEXT */}
                  <span
                    className="
                    relative
                    z-10
                    whitespace-nowrap
                    pr-6
                    text-[15px]
                    font-semibold
                    tracking-wide
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    "
                  >
                    +91 94118 94517
                  </span>
                </a>
              </div>
            </form>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 flex items-center justify-center lg:order-2">
            {/* GLOW */}
            <div
              className="
              absolute
              h-[180px]
              w-[180px]
              rounded-full
              bg-[#43c97f]
              opacity-20
              blur-[70px]
              sm:h-[250px]
              sm:w-[250px]
              lg:h-[340px]
              lg:w-[340px]
              "
            />

            {/* IMAGE */}
            <div
              className="
              relative
              z-20
              h-[240px]
              w-[240px]
              transition-all
              duration-500
              hover:scale-[1.03]
              sm:h-[320px]
              sm:w-[320px]
              md:h-[380px]
              md:w-[380px]
              lg:h-[560px]
              lg:w-[560px]
              "
            >
              <Image
                src="/images/contactimg/contactman.webp"
                alt="Contact Support"
                fill
                priority
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
