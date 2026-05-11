"use client";

import Image from "next/image";
import React from "react";

function AboutHero() {
  return (
    <section className="w-full overflow-hidden bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-[#07122B] sm:text-4xl md:text-5xl lg:text-[40px]">
            About Kodyfier Future Techno Training
            <br className="hidden md:block" />
            Private Limited
          </h2>

          <div className="mx-auto mt-5 h-[7px] w-[140px] rounded-full bg-[#47C97E] sm:w-[220px]" />

          <p className="mx-auto mt-8 max-w-6xl text-[15px] leading-8 text-[#555] sm:text-[17px] md:text-[19px]">
            Kodyfier, your premier destination for comprehensive software
            language training in Pune. At Kodyfier, we are dedicated to
            empowering individuals with the knowledge and skills needed to excel
            in the dynamic world of computer programming. Whether you're a
            beginner looking to embark on a coding journey or a seasoned
            professional aiming to enhance your skills, we have the right
            programs to cater to your needs.
          </p>
        </div>
      </div>

      <div className="mt-16 grid items-center gap-0 md:grid-cols-[0.9fr_1.5fr]">
        <div className="relative flex justify-center md:justify-start">
          {/* Background Shape */}
          <div className="absolute left-0 top-0 hidden h-full w-[280px] rounded-r-[30px] bg-[#dceee5] md:block"></div>

          <div className="relative z-10 overflow-hidden rounded-[24px] shadow-xl md:ml-24">
            <Image
              src="/images/homeimg/writing.webp"
              alt="student"
              width={320}
              height={420}
              className="h-[320px] w-[260px] object-cover sm:h-[360px] sm:w-[300px] md:h-[420px] md:w-[320px]"
            />
          </div>
        </div>

        <div className="bg-[#cfe3d9] px-6 py-10 md:px-12 md:py-24">
          <h2 className="text-2xl font-bold leading-snug text-[#07122B] sm:text-3xl md:text-4xl lg:text-[52px]">
            Our
            <span className="text-[#43b97f] px-4">Vision</span> At Kodyfier
          </h2>

          <div className="mt-5 mb-6 h-[10px] w-60 rounded-full bg-[#43b97f]"></div>

          <p className="mb-5 text-sm leading-8 text-[#555] sm:text-[16px] md:text-[17px]">
            A practical oriented software institute in Pune immerses hands on
            dynamic learning with live sessions, Webinars and structured
            guidance to make your career bright in software industry.
          </p>

          <p className="text-sm leading-8 text-[#555] sm:text-[16px] md:text-[17px]">
            Are your Seeking a{" "}
            <span className="font-semibold text-[#07122B]">
              software training institute in Pune with Guaranteed placement?
            </span>{" "}
            If you search software classes near me in Pune on search we will be
            there. To join Kodyfier for comprehensive learning and expert
            guidance is your best bet for IT courses In Pune.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
