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
        className="max-w-7xl text-white font-spaceGrotesk pl-4 mx-auto text-xl md:text-5xl font-bold dark:text-neutral-200"
      >
        Explore My{" "}
        <span className="relative">
          Greatness{" "}
          <svg
            viewBox="0 0 446 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-14 left-0 bottom-0 right-0"
          >
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              d="M2 27C2 27 29.2929 3.23735 50.5 2.49996C71.7071 1.76257 85.4833 29.2121 103.5 27C121.517 24.7878 124.877 3.52701 143 2.49996C161.123 1.47291 175.365 31.0148 188 27C200.635 22.9851 198.548 5.32938 211.5 2.49996C224.452 -0.32946 233.589 28.85 248 27C262.411 25.15 261.625 4.61612 276 2.49996C290.375 0.383809 300.61 29.751 314 27C327.39 24.249 325.781 5.97989 339 2.49996C352.219 -0.979964 368.102 30.0932 382 27C395.898 23.9067 394.863 4.19582 409 2.49996C423.137 0.80411 443.5 27 443.5 27"
              stroke="#F60004"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        .
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
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    linksrc: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: null,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    linksrc: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: null,
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    linksrc: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: null,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    linksrc: "",
    content: null,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    linksrc: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: null,
  },
];
