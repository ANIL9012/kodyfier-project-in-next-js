// app/page.jsx

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const supportCards = [
  {
    title: "VISIT US",
    value: "Rampur, Uttar Pradesh",
    icon: <FaMapMarkerAlt />,
  },
  {
    title: "CALL US",
    value: "+91 9411894517",
    icon: <FaPhoneAlt />,
  },
  {
    title: "WHATSAPP US",
    value: "+91 9411894517",
    icon: <FaWhatsapp />,
  },
  {
    title: "MAIL US",
    value: "9012kumaranil@gmail.com",
    icon: <FaEnvelope />,
  },
];

export default function SupportCards() {
  return (
    <main className="min-h-screen bg-[#dff3e8] px-5 py-16 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a]">
            Quick Support
          </h1>

          <p className="mt-3 text-base md:text-lg text-[#5b6470]">
            You can get all the contact information
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {supportCards.map((item, index) => (
            <div
              key={index}
              className="
                group
                rounded-2xl
                border-2 border-[#46c37b]
                p-7
                transition-all
                duration-300
                hover:-translate-y-2
                hover:bg-white/40
                hover:shadow-xl
              "
            >
              {/* Icon */}
              <div
                className="
                  mb-6
                  flex h-16 w-16 items-center justify-center
                  rounded-full
                  bg-[#46c37b]/10
                  text-3xl
                  text-[#46c37b]
                  transition-all duration-300
                  group-hover:scale-110
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold tracking-wide text-[#46c37b]">
                {item.title}
              </h3>

              {/* Value */}
              <p className="mt-5 text-base md:text-lg text-[#374151] break-words">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
