import Image from "next/image";
import React from "react";

function Mission() {
  return (
    <>
      <section className="w-full bg-[#cfe3d9] py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="flex items-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
              <div className="relative flex items-center justify-center w-[110px] h-[110px] mr-4">
                <Image
                  src="/images/aboutimg/Blob14.svg"
                  alt="mission"
                  width={130}
                  height={130}
                  className="absolute object-contain"
                />

                <span className="relative z-10 text-white text-[40px] font-bold">
                  Our
                </span>
              </div>

              <span>Mission at Kodyfier</span>
            </h2>

            <div className="w-40 h-2 bg-[#43b97f] mt-4 mb-6 rounded"></div>

            <p className="text-gray-700 text-sm md:text-base leading-[32px] mb-4">
              Our mission is to empower individuals with practical,
              industry-relevant programming skills that enable them to thrive in
              the
              <br />
              rapidly evolving tech landscape.
            </p>

            <p className="text-gray-700 text-sm md:text-base leading-[32px] mb-4">
              We are passionate about bridging the gap between theoretical
              knowledge and practical application, ensuring that our students
              gain hands-on experience and develop problem-solving abilities.
            </p>

            <p className="text-gray-700 text-sm md:text-base leading-[32px] mb-6">
              Our team of experienced instructors is dedicated to providing
              personalized attention, guiding and mentoring students at every
              <br />
              step of their learning journey.
            </p>

            <button className="w-fit rounded-md border-2 border-black bg-[#43b97f] px-6 py-2.5 text-black transition-all duration-300 hover:bg-white hover:text-[#cfe3d9]">
              Explore more
            </button>
          </div>

          <div className="relative w-full h-full min-h-[600px]">
            <Image
              src="/images/homeimg/about.webp"
              alt="students"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Mission;
