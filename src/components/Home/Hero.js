"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { FaRegClipboard } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function TopHeading() {
  return (
    <>
      {/* TOP HEADING */}
      <section className="w-full py-14 md:py-20 bg-[#f5f7f6]">
        <div className="max-w-6xl mx-auto text-center relative px-4">
          {/* Left Decoration */}
          <div className="hidden md:block absolute left-0 top-0 -translate-y-6">
            <Image
              src="/images/homeimg/hero_heading_icon1.png"
              alt=""
              width={120}
              height={60}
            />
          </div>

          {/* Right Decoration */}
          <div className="hidden md:block absolute right-0 top-0 -translate-y-6">
            <Image
              src="/images/homeimg/hero_heading_icon2.png"
              alt=""
              width={120}
              height={60}
            />
          </div>

          <h1 className="text-[#43b97f] font-extrabold uppercase leading-tight tracking-wide text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
            IT TRAINING INSTITUTE
          </h1>

          <h2 className="text-[#0f172a] font-bold mt-4 md:mt-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            IN PUNE
          </h2>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="w-full overflow-hidden bg-gradient-to-t from-[#cfe3d9] via-[#e6f2ec] to-[#f7faf9] py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="max-w-xl">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Kodyfier – Top IT Training Institute in Pune is an ideal place for
              individuals looking to upgrade their skills and advance their
              careers in the fast-growing tech industry. Offering a plethora of
              IT courses, including popular courses such as Web Development
              courses and Software classes in Pune, the Institute provides
              hands-on training and practical experience to help students stay
              ahead of the curve.
            </p>

            {/* Button + Arrow */}
            <div className="mt-6 relative w-fit">
              <button
                className="
      cursor-pointer
      border border-transparent
      bg-[#43b97f] text-black font-semibold px-6 py-2 rounded-lg shadow-md
      transition-all duration-300 ease-in-out
      hover:bg-[#2f855a] hover:shadow-lg hover:border-transparent
    "
              >
                Enroll Now
              </button>

              <Image
                src="/images/homeimg/hero_arrow.png"
                alt="Arrow"
                width={30}
                height={30}
                className="absolute left-[110%] top-2 hidden sm:block"
              />
            </div>

            {/* Features */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center border-2 border-[#43b97f] rounded-full text-[#43b97f]">
                  <FaPlay size={14} />
                </div>
                <span className="text-gray-800 font-medium">Live Classes</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center border-2 border-[#43b97f] rounded-md text-[#43b97f]">
                  <FaRegClipboard size={16} />
                </div>
                <span className="text-gray-800 font-medium">
                  Modern Projects
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center border-2 border-[#43b97f] rounded-full text-[#43b97f]">
                  <FaUser size={14} />
                </div>
                <span className="text-gray-800 font-medium">
                  Industry Level
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center overflow-hidden">
            {/* Circles (important for UI match) */}

            <div className="absolute w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] border-[20px] md:border-[30px] border-[#dff1e8] rounded-full"></div>

            <div className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[320px] md:h-[320px] border-[12px] md:border-[20px] border-[#bfe3d2] rounded-full"></div>

            <div className="absolute w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[220px] md:h-[220px] bg-[#cfe9dd] rounded-full"></div>
            <Image
              src="/images/homeimg/hero.webp"
              alt="student"
              width={320}
              height={320}
              className="relative z-10 object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}
