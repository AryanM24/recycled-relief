"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface MasonryGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number
  gap?: number
  children: React.ReactNode
}

export default function MasonryGrid({
  columns = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = 16,
  children,
  className,
  ...props
}: MasonryGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [columnCount, setColumnCount] = useState(columns.default || 1)
  const [childrenArray, setChildrenArray] = useState<React.ReactNode[]>([])

  // Convert children to array
  useEffect(() => {
    setChildrenArray(React.Children.toArray(children))
  }, [children])

  // Update column count based on screen size
  useEffect(() => {
    const updateColumnCount = () => {
      const width = window.innerWidth
      if (width >= 1024 && columns.lg) {
        setColumnCount(columns.lg)
      } else if (width >= 768 && columns.md) {
        setColumnCount(columns.md)
      } else if (width >= 640 && columns.sm) {
        setColumnCount(columns.sm)
      } else {
        setColumnCount(columns.default || 1)
      }
    }

    updateColumnCount()
    window.addEventListener("resize", updateColumnCount)
    return () => window.removeEventListener("resize", updateColumnCount)
  }, [columns])

  // Distribute children into columns
  const getColumnItems = (colIndex: number) => {
    return childrenArray.filter((_, index) => index % columnCount === colIndex)
  }

  return (
    <div
      ref={containerRef}
      className={cn("grid", className)}
      style={{
        gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
        gap: `${gap}px`,
      }}
      {...props}
    >
      {Array.from({ length: columnCount }).map((_, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4">
          {getColumnItems(colIndex)}
        </div>
      ))}
    </div>
  )
}

