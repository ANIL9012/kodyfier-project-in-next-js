"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SkillsBuilding() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section
        ref={ref}
        className="min-h-screen bg-white flex items-start justify-center px-4 py-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end"
        >
          {/* LEFT CARD (thoda delay ke saath) */}
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="group bg-[#F3FBF7] rounded-xl shadow-lg w-[340px] md:w-[370px] border-4 border-transparent transition-all duration-300 hover:border-[#2f855a] hover:shadow-xl">
              <div className="overflow-hidden rounded-t-xl">
                <Image
                  src="/images/homeimg/banner/mysql-masterclass-web-banner.png"
                  alt="MySQL Masterclass"
                  width={370}
                  height={180}
                  className="object-cover w-full h-[180px]"
                />
              </div>

              <div className="bg-[#D6F5E6] px-4 py-2 text-[#3DC47E] text-sm font-medium">
                Python Online Master Class
              </div>

              <div className="flex items-center justify-between px-4 py-4">
                <span className="text-3xl font-bold text-gray-700">2999₹</span>

                {/* Arrow Animation */}
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

          {/* RIGHT CONTENT (thoda aur delay) */}
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="relative mb-6">
              <span className="text-[#3DC47E] text-3xl font-bold bg-[#D6F5E6] px-2 rounded-md absolute -left-6 top-4 z-10">
                Upcoming
              </span>

              <div className="bg-[#D6F5E6] rounded-md pl-28 pr-6 pt-4 pb-2">
                <h2 className="text-4xl font-bold text-gray-900">
                  Skill-Building <br /> Courses
                </h2>
                <div className="h-2 w-48 bg-[#3DC47E] mt-2 rounded" />
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
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

      <section className="w-full bg-white">
        <div className="container mx-auto flex justify-center">
          {/* Quote Card Container */}
          <div className="relative w-full bg-green-50 rounded-lg p-8 md:p-12 shadow-sm">
            {/* Quote Icon Top Left */}
            <div className="absolute -top-4 ">
              <Image
                src="/images/homeimg/quote.svg"
                alt="Quote Icon"
                width={40}
                height={40}
                className="w-10 h-10 md:w-16 md:h-16"
              />
            </div>

            {/* Content */}
            <div className="text-center px-4 md:px-8">
              <p className="text-xl md:text-3xl lg:text-4xl text-[#545150] font-medium leading-relaxed">
                When educating the minds of our youth, we must not{" "}
                <br className="hidden md:block" /> forget to educate their ❤️
              </p>
              <div className="mt-8">
                <p className="text-2xl md:text-4xl font-semibold text-[#545150]">
                  Dalai Lama
                </p>
                {/* <div className="w-48 h-1 bg-green-500 mx-auto mt-2 rounded-full"></div> */}
                <Image
                  src="/images/homeimg/stroke.png"
                  alt="Line"
                  width={192}
                  height={16}
                  className="w-90 h-3 mx-auto mt-2 rounded-full"
                />
              </div>
            </div>

            {/* Quote Icon Bottom Right */}

            <div className="absolute -bottom-4 right-4">
              <Image
                src="/images/homeimg/quote.svg"
                alt="Quote Icon"
                width={40}
                height={40}
                className="w-10 h-10 md:w-16 md:h-16"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
