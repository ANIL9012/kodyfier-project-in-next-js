"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "MySQL Master Classes",
    originalPrice: 19999,
    discountedPrice: 4999,
    discount: "92% off",
    image: "/images/homeimg/banner/mysql-masterclass-web-banner.png",
  },
  {
    id: 2,
    title: "Python Online Master Class",
    originalPrice: 19999,
    discountedPrice: 4999,
    discount: "75% off",
    image: "/images/homeimg/banner/python_poster.png",
  },
  {
    id: 3,
    title: "JavaScript Mastery",
    originalPrice: 24999,
    discountedPrice: 5999,
    discount: "76% off",
    image: "/images/homeimg/banner/coming_soon.png",
  },
  {
    id: 4,
    title: "React & Next.js Advanced",
    originalPrice: 29999,
    discountedPrice: 6999,
    discount: "77% off",
    image: "/images/homeimg/banner/coming_soon.png",
  },
  {
    id: 5,
    title: "Data Science & AI",
    originalPrice: 34999,
    discountedPrice: 8999,
    discount: "74% off",
    image: "/images/homeimg/banner/coming_soon.png",
  },
];

const ITEMS_PER_SLIDE = 2;

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slidesCount = Math.ceil(courses.length / ITEMS_PER_SLIDE);

  const getCurrentCourses = () => {
    const start = currentSlide * ITEMS_PER_SLIDE;
    const end = start + ITEMS_PER_SLIDE;
    return courses.slice(start, end);
  };

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slidesCount - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, slidesCount]);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slidesCount - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, slidesCount]);

  const handleDotClick = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const slides = Array.from({ length: slidesCount }, (_, idx) =>
    courses.slice(
      idx * ITEMS_PER_SLIDE,
      idx * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE,
    ),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slidesCount - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slidesCount]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      className="min-h-screen bg-[#f2faf5] py-16 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto grid gap-12 lg:gap-16 lg:grid-cols-[0.9fr_1.1fr] items-start"
      >
        <motion.section
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="rounded-[36px] bg-[#e8f9ee] p-10 sm:p-14 shadow-[0_30px_80px_rgba(67,185,127,0.12)] h-full flex flex-col justify-center"
        >
          <div className="max-w-lg">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight mb-6">
              What <span className="text-[#43b97f]">Skills</span> Would You Like
              To
              <br /> Acquire?
            </h2>
            <div className="h-1.5 w-32 rounded-full bg-[#43b97f]" />
          </div>
        </motion.section>

        <motion.section
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="absolute right-0 top-0 flex gap-3 z-10">
            <button
              onClick={handlePrev}
              disabled={isTransitioning}
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white border border-gray-200 shadow-sm text-[#0f5132] hover:bg-[#effaf0] disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#43b97f] text-white shadow-sm hover:bg-[#369a6b] disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="overflow-hidden pt-6">
            <motion.div
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex gap-8"
            >
              {slides.map((slideCourses, slideIndex) => (
                <div
                  key={slideIndex}
                  className="min-w-full flex-shrink-0 grid grid-cols-1 gap-8 lg:grid-cols-2"
                >
                  {slideCourses.map((course, idx) => (
                    <motion.div
                      key={course.id}
                      initial={{ y: 80, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: idx * 0.1,
                      }}
                    >
                      <CourseCard course={course} />
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: slidesCount }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "bg-[#2f855a]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.section>
      </motion.div>
    </motion.main>
  );
}

function CourseCard({ course }) {
  const [imageError, setImageError] = useState(false);

  const fallbackImage = "/images/homeimg/banner/coming_soon.png";

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[#d6f1e3] bg-white shadow-[0_24px_60px_rgba(26,117,75,0.12)]">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[#e8faf0]" />
      <div className="relative h-72 overflow-hidden rounded-t-[32px] bg-[#f2fcf5]">
        <Image
          src={imageError ? fallbackImage : course.image}
          alt={course.title}
          fill
          className="object-cover"
          onError={() => setImageError(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-[#43b97f] text-white text-xs font-semibold uppercase tracking-[0.12em] px-3 py-2 rounded-full shadow-lg shadow-[#1f5c39]/15">
          {course.discount}
        </div>
      </div>

      <div className="relative p-6">
        <div className="mb-5 rounded-[24px] bg-[#43b97f] px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-[#276e45]/10">
          {course.title}
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-end gap-3">
            <span className="text-4xl font-bold text-[#0f2f1f]">
              ₹{course.discountedPrice.toLocaleString()}
            </span>
            <span className="text-sm text-[#2f855a] bg-[#e6faed] px-3 py-1 rounded-full font-semibold">
              {course.discount}
            </span>
          </div>

          <div className="text-sm text-gray-400 line-through">
            ₹{course.originalPrice.toLocaleString()}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-gray-600">
              100% live no recorded classes
            </span>
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#effdf4] text-[#43b97f] shadow-sm shadow-[#44b87f]/20">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
