"use client";

export default function WhatSetsUs() {
  return (
    <section className="w-full bg-[#f7f7f7] py-[80px] lg:py-[120px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* HEADING */}
        <div className="text-center mb-[90px]">
          <h2 className="text-[32px] sm:text-[42px] lg:text-[56px] font-bold text-[#061132] leading-none">
            What Sets Us{" "}
            <span className="relative inline-block text-[#5fd39d]">
              Apart
              <span className="absolute left-0 bottom-[6px] w-full h-[14px] bg-[#5fd39d]/20 rounded-sm -z-10"></span>
            </span>
          </h2>

          <div className="w-[180px] h-[10px] bg-[#5fd39d] rounded-full mx-auto mt-5"></div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block relative">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[4px] h-full bg-[#dff4e7]"></div>

          {/* ROW 1 */}
          <div className="grid grid-cols-2 gap-0 relative mb-[120px]">
            {/* LEFT */}
            <div className="pr-[90px] text-right">
              {/* BOX */}
              <div className="relative inline-block mb-10">
                <div className="bg-[#7ad8a6] px-[40px] py-[20px] min-w-[420px] text-center rounded-[4px]">
                  <h3 className="text-[#061132] text-[22px] font-medium">
                    Comprehensive Curriculum
                  </h3>
                </div>

                {/* CONNECTOR */}
                <div className="absolute top-1/2 -right-[82px] -translate-y-1/2">
                  <div className="w-[82px] h-[8px] bg-[#7ad8a6] rotate-[32deg] origin-left rounded-full"></div>
                </div>
              </div>

              {/* TEXT */}
              <p className="text-[#4b5563] text-[18px] leading-[2.2rem] max-w-[620px] ml-auto">
                Our curriculum covers a wide range of programming languages,
                ensuring a holistic learning experience. From foundational
                concepts to advanced techniques, we leave no stone unturned in
                equipping our students with a strong programming foundation.
              </p>
            </div>

            {/* RIGHT */}
            <div className="pl-[90px]">
              {/* BOX */}
              <div className="relative inline-block mb-10">
                <div className="bg-[#7ad8a6] px-[40px] py-[20px] min-w-[420px] text-center rounded-[4px]">
                  <h3 className="text-[#061132] text-[22px] font-medium">
                    Experienced Instructors
                  </h3>
                </div>

                {/* CONNECTOR */}
                <div className="absolute top-1/2 -left-[82px] -translate-y-1/2">
                  <div className="w-[82px] h-[8px] bg-[#7ad8a6] -rotate-[32deg] origin-right rounded-full"></div>
                </div>
              </div>

              {/* TEXT */}
              <p className="text-[#4b5563] text-[18px] leading-[2.2rem] max-w-[620px]">
                Our instructors are industry professionals with extensive
                experience in software development. They bring their real-world
                expertise into the classroom, delivering practical insights and
                best practices that go beyond textbooks.
              </p>
            </div>

            {/* CENTER DOT */}
            <div className="absolute left-1/2 top-[62px] -translate-x-1/2 w-[44px] h-[44px] bg-[#7ad8a6] rounded-full border-[7px] border-[#f7f7f7] z-10"></div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-2 gap-0 relative">
            {/* LEFT */}
            <div className="pr-[90px] text-right">
              {/* BOX */}
              <div className="relative inline-block mb-10">
                <div className="bg-[#7ad8a6] px-[40px] py-[20px] min-w-[420px] text-center rounded-[4px]">
                  <h3 className="text-[#061132] text-[22px] font-medium">
                    Flexible Learning Options
                  </h3>
                </div>

                {/* CONNECTOR */}
                <div className="absolute top-1/2 -right-[82px] -translate-y-1/2">
                  <div className="w-[82px] h-[8px] bg-[#7ad8a6] rotate-[32deg] origin-left rounded-full"></div>
                </div>
              </div>

              {/* TEXT */}
              <p className="text-[#4b5563] text-[18px] leading-[2.2rem] max-w-[620px] ml-auto">
                We understand the diverse needs of our students, which is why we
                offer both online and offline classes. Our interactive online
                platform allows for seamless virtual learning, while our
                well-equipped physical classrooms provide a conducive
                environment for face-to-face interactions.
              </p>
            </div>

            {/* RIGHT */}
            <div className="pl-[90px]">
              {/* BOX */}
              <div className="relative inline-block mb-10">
                <div className="bg-[#7ad8a6] px-[40px] py-[20px] min-w-[420px] text-center rounded-[4px]">
                  <h3 className="text-[#061132] text-[22px] font-medium">
                    Personalized Approach
                  </h3>
                </div>

                {/* CONNECTOR */}
                <div className="absolute top-1/2 -left-[82px] -translate-y-1/2">
                  <div className="w-[82px] h-[8px] bg-[#7ad8a6] -rotate-[32deg] origin-right rounded-full"></div>
                </div>
              </div>

              {/* TEXT */}
              <p className="text-[#4b5563] text-[18px] leading-[2.2rem] max-w-[620px]">
                We believe in recognizing the unique strengths and learning
                styles of each student. Our classes are kept small to facilitate
                individual attention and personalized guidance, ensuring that
                every student receives the support they need to succeed.
              </p>
            </div>

            {/* CENTER DOT */}
            <div className="absolute left-1/2 top-[62px] -translate-x-1/2 w-[44px] h-[44px] bg-[#7ad8a6] rounded-full border-[7px] border-[#f7f7f7] z-10"></div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden relative">
          {/* LINE */}
          <div className="absolute left-[18px] top-0 w-[3px] h-full bg-[#dff4e7]"></div>

          <div className="space-y-14">
            {[
              {
                title: "Comprehensive Curriculum",
                desc: "Our curriculum covers a wide range of programming languages, ensuring a holistic learning experience.",
              },
              {
                title: "Experienced Instructors",
                desc: "Our instructors are industry professionals with extensive experience in software development.",
              },
              {
                title: "Flexible Learning Options",
                desc: "We offer both online and offline classes for seamless learning experience.",
              },
              {
                title: "Personalized Approach",
                desc: "Every student receives personalized attention and support to succeed.",
              },
            ].map((item, index) => (
              <div key={index} className="relative pl-16">
                {/* DOT */}
                <div className="absolute left-0 top-2 w-9 h-9 bg-[#7ad8a6] rounded-full border-[5px] border-[#f7f7f7] z-10"></div>

                {/* CONNECTOR */}
                <div className="absolute left-7 top-[19px] w-10 h-[6px] bg-[#7ad8a6] rounded-full"></div>

                {/* CONTENT */}
                <div>
                  <div className="bg-[#7ad8a6] inline-block px-6 py-4 rounded-[4px] mb-5">
                    <h3 className="text-[#061132] text-[18px] sm:text-[20px] font-medium">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[#4b5563] text-[16px] sm:text-[17px] leading-[2rem]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
