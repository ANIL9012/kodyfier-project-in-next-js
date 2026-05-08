"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SkillsBuilding() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <>
      {/* SECTION 1 */}
      <section
        ref={ref}
        className="w-full bg-white flex items-start justify-center px-4 py-10 md:py-12 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center"
        >
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center md:justify-start"
          >
            <div className="group bg-[#F3FBF7] rounded-2xl shadow-lg w-full max-w-[340px] md:max-w-[370px] border-4 border-transparent transition-all duration-300 hover:border-[#2f855a] hover:shadow-xl">
              {/* Image */}
              <div className="overflow-hidden rounded-t-2xl">
                <Image
                  src="/images/homeimg/banner/mysql-masterclass-web-banner.png"
                  alt="MySQL Masterclass"
                  width={370}
                  height={180}
                  className="object-cover w-full h-[180px]"
                />
              </div>

              {/* Badge */}
              <div className="bg-[#D6F5E6] px-4 py-2 text-[#3DC47E] text-sm font-medium">
                Python Online Master Class
              </div>

              {/* Price */}
              <div className="flex items-center justify-between px-5 py-5">
                <span className="text-2xl md:text-3xl font-bold text-gray-700">
                  2999₹
                </span>

                {/* Arrow */}
                <span
                  className="text-[#1f7a55] text-3xl font-extrabold
                  transition-all duration-300
                  group-hover:translate-x-2"
                >
                  →
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            {/* Heading */}
            <div className="relative mb-6">
              <span className="text-[#3DC47E] text-xl sm:text-2xl md:text-3xl font-bold bg-[#D6F5E6] px-2 rounded-md absolute -left-2 sm:-left-4 md:-left-6 top-4 z-10">
                Upcoming
              </span>

              <div className="bg-[#D6F5E6] rounded-md pl-24 sm:pl-28 pr-4 sm:pr-6 pt-4 pb-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Skill-Building <br /> Courses
                </h2>

                <div className="h-2 w-36 sm:w-48 bg-[#3DC47E] mt-3 rounded" />
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-gray-600 text-base sm:text-lg leading-8">
              Join our virtual MySQL classroom and embark on a coding journey
              like no other. Kodyfier offers online MySQL training in Pune,
              designed for learners of all levels. Are you ready to dive into
              the world of MySQL programming? Look no further! Our comprehensive
              MySQL curriculum covers everything from basics to advanced MySQL
              concepts, ensuring you build a solid foundation and become a MySQL
              master.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2 */}
      <section className="w-full bg-white px-4 pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full bg-[#F3FBF7] rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm overflow-hidden">
            {/* Top Quote */}
            <div className="absolute top-3 left-3 md:-top-4 md:left-4">
              <Image
                src="/images/homeimg/quote.svg"
                alt="Quote Icon"
                width={60}
                height={60}
                className="w-8 h-8 md:w-14 md:h-14"
              />
            </div>

            {/* Content */}
            <div className="text-center px-2 sm:px-6 md:px-10">
              <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[#545150] font-medium leading-relaxed">
                When educating the minds of our youth, we must not
                <br className="hidden md:block" />
                forget to educate their ❤️
              </p>

              {/* Author */}
              <div className="mt-8">
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#545150]">
                  Dalai Lama
                </p>

                <Image
                  src="/images/homeimg/stroke.png"
                  alt="Line"
                  width={192}
                  height={16}
                  className="w-40 sm:w-52 md:w-72 h-3 mx-auto mt-3"
                />
              </div>
            </div>

            {/* Bottom Quote */}
            <div className="absolute bottom-3 right-3 md:-bottom-4 md:right-4 rotate-180">
              <Image
                src="/images/homeimg/quote.svg"
                alt="Quote Icon"
                width={60}
                height={60}
                className="w-8 h-8 md:w-14 md:h-14"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
