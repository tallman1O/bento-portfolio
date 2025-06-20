"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "motion/react";

export default function Projects() {
  const cards = data.map((card) => <Card key={card.src} card={card} />);

  return (
    <div className="w-full max-h-screen py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="max-w-7xl text-white font-spaceGrotesk pl-4 mx-auto text-2xl md:text-5xl font-bold dark:text-neutral-200"
      >
        Explore My{" "}
        <span className="relative">
          Greatness.{" "}
          <svg
            viewBox="0 0 446 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-7 md:top-14 left-0 bottom-0 right-0 w-32 md:w-auto h-4 md:h-auto"
          >
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              d="M2 27C2 27 29.2929 3.23735 50.5 2.49996C71.7071 1.76257 85.4833 29.2121 103.5 27C121.517 24.7878 124.877 3.52701 143 2.49996C161.123 1.47291 175.365 31.0148 188 27C200.635 22.9851 198.548 5.32938 211.5 2.49996C224.452 -0.32946 233.589 28.85 248 27C262.411 25.15 261.625 4.61612 276 2.49996C290.375 0.383809 300.61 29.751 314 27C327.39 24.249 325.781 5.97989 339 2.49996C352.219 -0.979964 368.102 30.0932 382 27C395.898 23.9067 394.863 4.19582 409 2.49996C423.137 0.80411 443.5 27 443.5 27"
              stroke="#F60004"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="md:stroke-[6px]"
            />
          </svg>
        </span>
      </motion.h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Nextjs, Tailwind, NeonDB, Clerk, Gemini ",
    title: "Prepmate - AI-Powered Mock Interview Prep",
    src: "/images/prepmate.png",
    linksrc: "https://prepmate-ai.vercel.app",
    content: null,
  },
];
