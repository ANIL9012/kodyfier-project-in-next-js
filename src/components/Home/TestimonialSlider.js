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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const visibleCards = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
  ];

  return (
    <section className="relative w-full bg-[#fff] py-12 md:py-16 overflow-hidden mt-6 md:mt-10">
      {/* Left Shape */}
      <div className="absolute top-0 left-0 w-[140px] md:w-[220px] h-[180px] md:h-[230px] bg-[#dff3e7] rounded-br-[80px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 md:mb-10">
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#07122b] leading-tight">
              Students Feedback <br /> & Perspectives
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 md:self-end">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {visibleCards.map((item) => (
            <div
              key={item.id}
              className="relative bg-[#dff3e7] rounded-[24px] overflow-hidden shadow-md min-h-[300px] md:min-h-[320px]"
            >
              <div className="p-5 md:p-6 pb-28">
                <FaQuoteLeft className="text-[#4FD08A] text-3xl md:text-4xl mb-4" />

                <p className="text-[#555] text-[14px] md:text-[15px] leading-7">
                  {item.text}
                </p>
              </div>

              {/* Bottom */}
              <div className="absolute bottom-0 left-0 w-full bg-white rounded-tr-[60px] md:rounded-tr-[80px] px-4 md:px-5 py-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[15px] md:text-[17px] text-[#111]">
                      {item.name}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-[#4FD08A] text-xs md:text-sm"
                    />
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
