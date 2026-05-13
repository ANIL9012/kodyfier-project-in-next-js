"use client";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

export default function MasterMindsSection() {
  const members = [
    {
      name: "Jay Shinde",
      role: "Founder & Director Kodyfier",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      description:
        "Having 13 plus years of collective experience in Digital Marketing, Software and Web Development. Helped 200 plus clients from India and abroad to grow their businesses and trained 1000 plus students.",
    },
    {
      name: "Vinod Bahadur Thapa",
      role: "Founder & Director Kodyfier",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
      description:
        "A Software Engineer & Youtuber. Having 7 plus years of collective experience in Software and Web Development.",
    },
  ];

  const socialIcons = [
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaDiscord,
  ];

  return (
    <section className="w-full bg-[#f7f7f7] py-[55px] sm:py-[70px] lg:py-[100px] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-[28px] leading-[2.2rem] sm:text-[40px] sm:leading-tight lg:text-[58px] font-bold text-[#061132]">
            MasterMinds Behind Kodyfier
          </h2>

          <p className="text-[#5f6675] text-[15px] sm:text-[18px] mt-3 leading-7">
            You can get all the Member information
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="
              group
              relative
              overflow-hidden
              bg-white
              border
              border-[#ececec]
              rounded-[14px]
              p-5
              sm:p-7
              lg:p-8
              shadow-[0_10px_30px_rgba(0,0,0,0.04)]
              transition-all
              duration-500
              ease-in-out
              hover:-translate-y-3
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
              "
            >
              {/* TOP GRADIENT */}
              <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#46c889] via-[#72e0ad] to-[#46c889]"></div>

              {/* HOVER LIGHT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <div className="absolute -top-20 -right-16 w-44 h-44 bg-[#46c889]/10 rounded-full blur-3xl"></div>

                <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#46c889]/10 rounded-full blur-3xl"></div>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                {/* IMAGE */}
                <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                  <div className="absolute inset-0 rounded-full bg-[#46c889]/20 blur-xl scale-110"></div>

                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                    relative
                    w-[85px]
                    h-[85px]
                    sm:w-[95px]
                    sm:h-[95px]
                    rounded-full
                    object-cover
                    border-[4px]
                    border-white
                    shadow-lg
                    "
                  />
                </div>

                {/* TEXT */}
                <div className="flex-1 text-center sm:text-left">
                  {/* NAME */}
                  <h3 className="text-[24px] sm:text-[30px] font-semibold text-[#58cf95] leading-tight mb-2 transition-all duration-300 group-hover:text-[#2db975]">
                    {member.name}
                  </h3>

                  {/* ROLE */}
                  <p className="text-[#2f3747] text-[15px] sm:text-[17px] mb-4">
                    {member.role}
                  </p>

                  {/* LINE */}
                  <div className="w-[45px] h-[2px] bg-[#d7d7d7] mb-5 mx-auto sm:mx-0 transition-all duration-300 group-hover:w-[85px] group-hover:bg-[#46c889]"></div>

                  {/* DESCRIPTION */}
                  <p className="text-[#5f6675] text-[15px] sm:text-[16px] leading-[1.9rem]">
                    {member.description}
                  </p>

                  {/* SOCIAL ICONS */}
                  <div className="flex items-center justify-center sm:justify-start gap-3 mt-6 flex-wrap">
                    {socialIcons.map((Icon, i) => (
                      <div
                        key={i}
                        className="
                        group/icon
                        w-[42px]
                        h-[42px]
                        rounded-full
                        bg-[#f3f4f8]
                        flex
                        items-center
                        justify-center
                        text-[#31456a]
                        text-[14px]
                        cursor-pointer
                        transition-all
                        duration-300
                        ease-in-out
                        hover:bg-[#46c889]
                        hover:text-white
                        hover:-translate-y-1
                        hover:shadow-[0_10px_25px_rgba(70,200,137,0.35)]
                        "
                      >
                        <Icon className="transition-transform duration-300 group-hover/icon:scale-110" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CONTENT */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <h2 className="text-[30px] leading-[2.5rem] sm:text-[42px] lg:text-[58px] font-bold text-[#061132] mb-5">
            Join With KodyFier
          </h2>

          <p className="text-[#5f6675] text-[15px] sm:text-[17px] lg:text-[18px] leading-[2rem] sm:leading-[2.2rem] max-w-[1250px]">
            Join us at Kodyfier and unlock your coding potential. Whether you
            aspire to develop cutting-edge software applications, pursue a
            career in web development, or simply want to enhance your
            problem-solving skills, we have the right program for you. Let us be
            your trusted partner in your journey towards becoming a proficient
            programmer.
          </p>
        </div>
      </div>
    </section>
  );
}
