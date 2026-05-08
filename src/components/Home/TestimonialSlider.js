"use client";

import { useState } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const testimonials = [
  {
    id: 1,
    name: "Chandan Mishra",
    role: "Student",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    text: `Wow, this 7-day Python Bootcamp was absolutely awesome! 
    I can't believe how much we covered in such a short time.`,
  },
  {
    id: 2,
    name: "Navin Rai",
    role: "Student",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
    text: `The course was very interesting and covered concepts 
    from basics to advanced level in a simple way.`,
  },
  {
    id: 3,
    name: "Ankit Sharma",
    role: "Student",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=300&auto=format&fit=crop",
    text: `One of the best learning experiences I’ve had. 
    Mentors explained everything practically.`,
  },
  {
    id: 4,
    name: "Riya Singh",
    role: "Student",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    text: `Amazing bootcamp! I gained confidence in coding 
    and loved the interactive sessions.`,
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Next Slide
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Previous Slide
  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  // Show 2 Cards
  const visibleCards = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
  ];

  return (
    <section className="relative w-full bg-[#fff] py-14 overflow-hidden mt-10">
      {/* Left Background Shape */}
      <div className="absolute top-0 left-0 w-[180px] md:w-[240px] h-[230px] bg-[#dff3e7]" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
          {/* Heading */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#07122b] leading-tight">
              Students Feedback <br /> & Perspectives
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-30">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-[#4FD08A] flex items-center justify-center text-[#4FD08A] hover:bg-[#4FD08A] hover:text-white transition duration-300"
            >
              <IoChevronBack size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-[#4FD08A] flex items-center justify-center text-[#4FD08A] hover:bg-[#4FD08A] hover:text-white transition duration-300"
            >
              <IoChevronForward size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleCards.map((item) => (
            <div
              key={item.id}
              className="relative bg-[#dff3e7] rounded-[24px] overflow-hidden shadow-md min-h-[320px] transition-all duration-500"
            >
              {/* Content */}
              <div className="p-6">
                <FaQuoteLeft className="text-[#4FD08A] text-4xl mb-4" />

                <p className="text-[#555] text-[15px] leading-8">{item.text}</p>
              </div>

              {/* Bottom Section */}
              <div className="absolute bottom-0 left-0 w-full bg-white rounded-tr-[80px] px-5 py-4 flex items-center justify-between">
                {/* User */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[17px] text-[#111]">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#4FD08A] text-sm" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
