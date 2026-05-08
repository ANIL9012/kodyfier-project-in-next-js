import Image from "next/image";

export default function JobOriented() {
  return (
    <section className="w-full bg-[#cfe3d9] py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            <span className="text-[#43b97f]">Job</span> Oriented Programming{" "}
            <br />
            Classes In Pune
          </h2>

          <div className="w-24 h-1 bg-[#43b97f] mt-4 mb-6 rounded"></div>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            A practical oriented software institute in Pune immerses hands on
            dynamic learning with live sessions, Webinars and structured
            guidance to make your career bright in software industry.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            Kodyfier offers the best programming classes in Pune with a strong
            emphasis on practical learning and IT guidance.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            If you're seeking to enhance your programming skills, Kodyfier is
            the ideal choice.
          </p>

          <button className="bg-[#43b97f] text-white px-6 py-2.5 rounded-md w-fit">
            Explore more
          </button>
        </div>

        <div className="relative w-full h-full min-h-[300px]">
          <Image
            src="/images/homeimg/about.webp"
            alt="students"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
