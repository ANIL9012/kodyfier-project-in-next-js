"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";
import Image from "next/image";

const CodingEducation = () => {
  const features = [
    {
      title: "Comprehensive Curriculum",
      description:
        "Our curriculum covers a wide range of programming languages, ensuring a holistic learning experience. From foundational concepts to advanced techniques, we leave no stone unturned in equipping our students with a strong programming foundation.",
      side: "left",
    },
    {
      title: "Experienced Instructors",
      description:
        "Our instructors are industry professionals with extensive experience in software development. They bring their real-world expertise into the classroom, delivering practical insights and best practices that go beyond textbooks.",
      side: "right",
    },
    {
      title: "Flexible Learning Options",
      description:
        "We understand the diverse needs of our students, which is why we offer both online and offline classes. Our interactive online platform allows for seamless virtual learning, while our well-equipped physical classrooms provide a conducive environment for face-to-face interactions.",
      side: "left",
    },
    {
      title: "Personalized Approach",
      description:
        "We believe in recognizing the unique strengths and learning styles of each student. Our classes are kept small to facilitate individual attention and personalized guidance, ensuring that every student receives the support they need to succeed.",
      side: "right",
    },
  ];

  // Animation Variant: Uper se niche aane ke liye
  const slideFromTop = {
    hidden: { opacity: 0, y: -80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section className="relative w-full py-16 px-6 md:py-24 bg-white overflow-hidden font-sans">
        {/* Heading Animation - Ab ye har bar trigger hoga */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }} // once: false se animation repeat hoga
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight">
            Why Invest In Our{" "}
            <span className="text-[#3ECF8E] bg-[#E2F8F1] px-3 py-1 rounded-lg">
              Coding
            </span>{" "}
            Education And Project Services?
          </h2>
          <div className="w-32 md:w-72 h-3 bg-[#48c989] mx-auto mt-6 rounded-full opacity-90" />

          <p className="mt-8 text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Invest in our coding education and project services and see the
            difference for yourself, we are committed to providing the best
            value for your money.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center Line (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-green-100 -translate-x-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 md:gap-y-28">
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={slideFromTop}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }} // Har bar scroll par uper se aayega
                className={`flex flex-col items-center ${
                  item.side === "left"
                    ? "md:items-end md:text-right"
                    : "md:items-start md:text-left"
                } text-center relative`}
              >
                {/* Green Title Box */}
                <div className="bg-[#96E6C5] text-[#064E3B] font-bold text-lg md:text-xl py-4 px-10 rounded-xl shadow-sm w-full md:w-fit min-w-[280px] mb-6 transform transition-all hover:scale-105 active:scale-95 cursor-default">
                  {item.title}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-7 max-w-md">
                  {item.description}
                </p>

                {/* Center Dot (Desktop Only) */}
                <div
                  className={`hidden md:block absolute top-6 w-5 h-5 rounded-full bg-[#96E6C5] border-4 border-white shadow-md z-20 ${
                    item.side === "left" ? "-right-[62px]" : "-left-[62px]"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Scroll Button */}
        <div className="fixed bottom-10 right-10 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#3ECF8E] p-4 rounded-full text-white shadow-2xl hover:bg-[#34b87d] hover:-translate-y-1 transition-all duration-300"
          >
            <FaChevronUp size={20} />
          </button>
        </div>
      </section>
      <section className="w-full py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[0.9fr_1.5fr] gap-4 md:gap-6 items-center">
          {/* LEFT IMAGE */}
          <div className="relative flex justify-center md:justify-start h-full">
            {/* Background Shape */}
            <div className="absolute inset-y-0 left-0 w-[260px] bg-[#dceee5] rounded-xl -left-6 hidden md:block"></div>

            {/* Main Image */}
            <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/homeimg/writing.webp"
                alt="student"
                width={260}
                height={320}
                className="object-cover w-[260px] h-[320px] md:w-[300px] md:h-[380px]"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-[#cfe3d9] px-6 py-10 md:px-10 md:py-35 rounded-md">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-gray-900">
              <span className="text-[#43b97f]">Practical</span> Oriented
              Software Training Institute In Pune
            </h2>

            <div className="w-20 h-1 bg-[#43b97f] mt-4 mb-6 rounded"></div>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              A practical oriented software institute in Pune immerses hands on
              dynamic learning with live sessions, Webinars and structured
              guidance to make your career bright in software industry.
            </p>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Are your Seeking a{" "}
              <span className="font-semibold text-gray-900">
                software training institute in Pune with Guaranteed placement?
              </span>{" "}
              If you search software classes near me in Pune on search we will
              be there. To join Kodyfier for comprehensive learning and expert
              guidance is your best bet for IT courses In Pune.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CodingEducation;
