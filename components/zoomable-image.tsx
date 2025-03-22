"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface ZoomableImageProps {
  image: string
  alt: string
  initialZoom?: number
}

export default function ZoomableImage({
  image,
  alt,
  initialZoom = 3.5
}: ZoomableImageProps) {
  const [isZoomedOut, setIsZoomedOut] = useState(false)
  
  const toggleZoom = () => {
    setIsZoomedOut(!isZoomedOut)
  }

  return (
    <div className="relative rounded-xl overflow-hidden cursor-pointer shadow-lg">
      <motion.div
        initial={{ scale: initialZoom, originX: 0.5, originY: 0.5 }}
        animate={{ scale: isZoomedOut ? 1 : initialZoom }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        onClick={toggleZoom}
        className="w-full"
      >
        <Image
          src={image}
          alt={alt}
          width={800}
          height={500}
          className="w-full object-cover"
        />
      </motion.div>
      <motion.div 
        className="absolute inset-0 bg-black pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isZoomedOut ? 0.4 : 0 }}
        transition={{ duration: 0.5 }}
      />
      
      <motion.div
        className="absolute bottom-4 left-0 right-0 text-center bg-black/70 text-white py-2 px-4 mx-4 rounded"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isZoomedOut ? 1 : 0, y: isZoomedOut ? 0 : 20 }}
        transition={{ duration: 0.5, delay: isZoomedOut ? 0.2 : 0 }}
      >
        <p className="text-sm font-medium">What looked like a mountain is actually a landfill</p>
      </motion.div>
    </div>
  )
}