"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { QuoteIcon } from "lucide-react";

interface Quote {
  text: string;
  author: string;
}

interface RandomQuotesProps {
  onLoad?: () => void;
}

export const RandomQuotes: React.FC<RandomQuotesProps> = ({ onLoad }) => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("/api/quotes");
        if (!response.ok) {
          throw new Error("Failed to fetch quote");
        }
        const data = await response.json();
        setQuote(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching quote:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch quote");
      } finally {
        setIsLoading(false);
        onLoad?.();
      }
    };

    fetchQuote();
  }, [onLoad]);

  if (isLoading) {
    return (
      <div className="w-full h-40 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-40 flex items-center justify-center text-white/50">
        Failed to load quote
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-start justify-center gap-4 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-[0_0_8px_2px_rgba(255,255,255,0.6)]"
    >
      <div className="flex flex-col items-start gap-2 w-fit pl-4">
        <p className="text-white/80 text-lg italic relative">
          <QuoteIcon className="absolute top--14 text-gray-400/50 right-0 w-14 h-14" />{" "}
          {quote?.text}
        </p>
        <p className="text-white/50 text-sm">- {quote?.author}</p>
      </div>
    </motion.div>
  );
};
