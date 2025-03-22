"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface FlipCardProps {
  frontContent: React.ReactNode
  backContent: React.ReactNode
}

export default function FlipCard({ frontContent, backContent }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div 
      className="w-full h-full perspective-1000 cursor-pointer" 
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Flip card to see more information"
    >
      <div 
        className={`relative w-full h-full transition-all duration-500 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div 
          className={`absolute w-full h-full backface-hidden bg-card border rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center ${
            isFlipped ? "invisible" : ""
          }`}
        >
          {frontContent}
          <div className="mt-4 text-xs text-muted-foreground">Click to flip</div>
        </div>

        {/* Back */}
        <div 
          className={`absolute w-full h-full backface-hidden bg-primary/5 border border-primary/20 rounded-xl shadow-md p-6 flex items-center justify-center text-center rotate-y-180 ${
            isFlipped ? "" : "invisible"
          }`}
        >
          {backContent}
        </div>
      </div>
    </div>
  )
}

