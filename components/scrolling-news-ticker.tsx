"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

interface NewsItem {
  id: number
  text: string
  link?: string
}

interface ScrollingNewsTickerProps {
  news: NewsItem[]
}

export default function ScrollingNewsTicker({ news }: ScrollingNewsTickerProps) {
  const tickerRef = useRef<HTMLDivElement>(null)

  // Duplicate the news items to create a seamless loop
  const duplicatedNews = [...news, ...news]

  return (
    <div className="w-full overflow-hidden bg-gray-100 dark:bg-gray-800 py-4 rounded-lg">
      <div className="relative flex">
        <motion.div
          ref={tickerRef}
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedNews.map((item, index) => (
            <div key={`${item.id}-${index}`} className="inline-block px-4">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4CAF50] hover:underline font-medium"
                >
                  {item.text}
                </a>
              ) : (
                <span className="text-gray-800 dark:text-gray-200">{item.text}</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

