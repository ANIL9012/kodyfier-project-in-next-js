"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const feedbacks = [
  {
    id: 1,
    rating: 66,
    name: "Chandan Mishra",
    role: "Student",
    stars: 4,
    feedback:
      "Wow, this 7-day Python Bootcamp was absolutely awesome! I can't believe how much we covered in such a short time. From the basics like for loops, while loops, dictionaries, sets, and functions, to diving into Python OOPs and file handling, this bootcamp truly covered it all!",
  },
  {
    id: 2,
    rating: 66,
    name: "Navin Rai",
    role: "Student",
    stars: 4,
    feedback:
      'I enrolled for 7 days Bootcamp python course. The course was so interesting that it taught every concepts from basics to advance level which I was looking for. It\'s truly worthy. The teachers are very experienced, expetised in their fields and believe guys "they Teach from their hearts".',
  },
  {
    id: 3,
    rating: 66,
    name: "Chandan Mishra",
    role: "Student",
    stars: 4,
    feedback:
      "Wow, this 7-day Python Bootcamp was absolutely awesome! I can't believe how much we covered in such a short time. From the basics like for loops, while loops, dictionaries, sets, and functions, to diving into Python OOPs and file handling, this bootcamp truly covered it all!",
  },
  {
    id: 4,
    rating: 66,
    name: "Navin Rai",
    role: "Student",
    stars: 4,
    feedback:
      'I enrolled for 7 days Bootcamp python course. The course was so interesting that it taught every concepts from basics to advance level which I was looking for. It\'s truly worthy. The teachers are very experienced, expetised in their fields and believe guys "they Teach from their hearts".',
  },
  {
    id: 5,
    rating: 66,
    name: "Chandan Mishra",
    role: "Student",
    stars: 4,
    feedback:
      "Wow, this 7-day Python Bootcamp was absolutely awesome! I can't believe how much we covered in such a short time. From the basics like for loops, while loops, dictionaries, sets, and functions, to diving into Python OOPs and file handling, this bootcamp truly covered it all!",
  },
  {
    id: 6,
    rating: 66,
    name: "Navin Rai",
    role: "Student",
    stars: 4,
    feedback:
      'I enrolled for 7 days Bootcamp python course. The course was so interesting that it taught every concepts from basics to advance level which I was looking for. It\'s truly worthy. The teachers are very experienced, expetised in their fields and believe guys "they Teach from their hearts".',
  },
];

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Show 2 cards per slide (fixed)
  const cardsPerView = 2;
  const totalSlides = Math.ceil(feedbacks.length / cardsPerView);

  const getVisibleFeedbacks = () => {
    const start = currentSlide * cardsPerView;
    const end = start + cardsPerView;
    return feedbacks.slice(start, end);
  };

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, totalSlides]);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, totalSlides]);

  const handleDotClick = (slideIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(slideIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const visibleFeedbacks = getVisibleFeedbacks();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header - Removed as per your image, but kept clean */}

        {/* Slider Section */}
        <div className="relative px-4 sm:px-8">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:shadow-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 text-gray-700"
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

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:shadow-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 text-gray-700"
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

          {/* Cards Grid - Always 2 cards */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
              >
                {visibleFeedbacks.map((feedback, idx) => (
                  <motion.div
                    key={feedback.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <TestimonialCard feedback={feedback} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot Indicators - 5 dots that turn blue on click */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === idx
                  ? "w-2.5 h-2.5 bg-blue-600 ring-2 ring-blue-200"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ feedback }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
      <div className="mb-3">
        <span className="text-4xl font-bold text-gray-800">
          {feedback.rating}
        </span>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
        {feedback.feedback}
      </p>

      <div className="border-t border-gray-100 pt-4 mt-auto">
        {/* Name */}
        <h4 className="font-semibold text-gray-900 text-base">
          {feedback.name}
        </h4>

        <p className="text-xs text-gray-500 mt-0.5 mb-2">{feedback.role}</p>

        {/* Star Rating */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-4 h-4 ${
                index < feedback.stars ? "text-yellow-400" : "text-gray-200"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}
