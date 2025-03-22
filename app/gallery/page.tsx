"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import MasonryGrid from "@/components/masonry-grid"
import { Container } from "@/components/container"

// Gallery image component with caption
const GalleryImage = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-lg shadow-md group"
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {alt}
        </h3>
        <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {caption}
        </p>
      </div>
    </motion.div>
  )
}

// Gallery images array with captions
const galleryImages = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Fidget Toy Workshop",
    caption: "Students creating fidget toys from recycled materials",
  },
  {
    src: "/placeholder.svg?height=600&width=400",
    alt: "Mental Health Awareness Event",
    caption: "Our team at a local school discussing mental health awareness",
  },
  {
    src: "/placeholder.svg?height=500&width=600",
    alt: "Material Collection Drive",
    caption: "Community members donating recyclable materials for our projects",
  },
  {
    src: "/placeholder.svg?height=400&width=500",
    alt: "Fidget Toy Distribution",
    caption: "Distributing our handmade fidget toys to students",
  },
  {
    src: "/placeholder.svg?height=600&width=600",
    alt: "Team Meeting",
    caption: "Weekly planning session with the Recycled Relief team",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Educational Workshop",
    caption: "Teaching students about the connection between mental health and sustainability",
  },
  {
    src: "/placeholder.svg?height=500&width=400",
    alt: "Recycling Process",
    caption: "Sorting and cleaning materials for our fidget toys",
  },
  {
    src: "/placeholder.svg?height=450&width=600",
    alt: "Community Outreach",
    caption: "Presenting our mission at a local community center",
  },
]

export default function GalleryPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 ">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#1F2937]">Gallery</h1>
            <p className="text-gray-600">
              Capturing moments of innovation, mental health awareness, and sustainability
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 pb-16">
        <Container>
          <MasonryGrid columns={{ default: 1, sm: 2, md: 3, lg: 3 }} gap={24}>
            {galleryImages.map((image, index) => (
              <GalleryImage key={index} src={image.src} alt={image.alt} caption={image.caption} />
            ))}
          </MasonryGrid>
        </Container>
      </section>
    </main>
  )
}

