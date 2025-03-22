"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"

export default function InitiativesPage() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "School Supplies from Recycled Materials",
      shortDescription: "Creating educational tools from recycled plastics for underfunded schools.",
      fullDescription:
        "Our School Supplies initiative transforms plastic waste into valuable educational resources. We collect plastic bottles, containers, and packaging, then clean and process them into rulers, pencil cases, and other school supplies. These items are distributed to schools in underserved communities, providing essential tools for education while reducing plastic waste. Since launching in 2017, we've provided supplies to over 50 schools and diverted 15 tons of plastic from landfills.",
      image: "/placeholder.svg?height=400&width=600",
      status: "Active",
    },
    {
      id: 2,
      title: "Community Garden Initiatives",
      shortDescription: "Building garden beds from reclaimed wood for community food programs.",
      fullDescription:
        "The Community Garden Initiative repurposes discarded wooden pallets, furniture, and construction scraps into raised garden beds for community gardens. These gardens provide fresh produce for food-insecure neighborhoods and create green spaces in urban areas. We also offer workshops on sustainable gardening practices. This program has established 25 community gardens, producing thousands of pounds of fresh vegetables annually while diverting wood waste from landfills.",
      image: "/placeholder.svg?height=400&width=600",
      status: "Active",
    },
    {
      id: 3,
      title: "Upcycled Furniture Workshop",
      shortDescription: "Teaching communities how to transform discarded furniture into functional pieces.",
      fullDescription:
        "Our Upcycled Furniture Workshop is both an educational program and a community service. We collect discarded furniture, then host workshops where participants learn woodworking, upholstery, and design skills to transform these items into beautiful, functional pieces. The restored furniture is either returned to the community through donations to families in need or sold to fund our programs. This initiative builds skills, creates employment opportunities, and keeps furniture out of landfills.",
      image: "/placeholder.svg?height=400&width=600",
      status: "Active",
    },
    {
      id: 4,
      title: "Textile Recycling Program",
      shortDescription: "Converting unwanted clothing into blankets, bags, and other useful items.",
      fullDescription:
        "The Textile Recycling Program addresses the growing problem of textile waste. We collect unwanted clothing, linens, and fabric scraps, then sort them for various uses. Some materials are converted into blankets for homeless shelters, some become reusable shopping bags, and others are transformed into art supplies for schools. This program has diverted over 8 tons of textiles from landfills while providing necessary items to those in need.",
      image: "/placeholder.svg?height=400&width=600",
      status: "Active",
    },
    {
      id: 5,
      title: "Electronic Waste Recovery",
      shortDescription: "Safely dismantling electronics to recover valuable materials and reduce hazardous waste.",
      fullDescription:
        "Our E-Waste Recovery initiative focuses on the growing problem of electronic waste. We collect discarded electronics, safely dismantle them to recover valuable materials like copper and aluminum, and ensure hazardous components are properly disposed of. Some devices are refurbished and donated to schools and community centers. This program prevents toxic materials from entering landfills while providing technology access to underserved communities.",
      image: "/placeholder.svg?height=400&width=600",
      status: "Active",
    },
    {
      id: 6,
      title: "Plastic-to-Art Program",
      shortDescription: "Transforming plastic waste into community art installations.",
      fullDescription:
        "The Plastic-to-Art Program combines environmental action with community beautification. We collect plastic waste and work with local artists and community members to transform it into public art installations. These colorful, thought-provoking pieces raise awareness about plastic pollution while enhancing public spaces. Each installation includes educational signage about recycling and waste reduction, making them both beautiful and informative.",
      image: "/placeholder.svg?height=400&width=600",
      status: "Past",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#1F2937]">Our Initiatives</h1>
            <p className="text-gray-600">
              Explore our active and past projects that are making a difference in communities while promoting
              sustainability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute top-2 right-2 bg-white/90 text-[#1F2937] px-3 py-1 rounded-full text-xs font-medium">
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#1F2937]">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.shortDescription}</p>
                  <Button
                    variant="ghost"
                    className="text-[#10B981] hover:text-[#4CAF50] p-0 flex items-center"
                    onClick={() => setSelectedProject(project)}
                  >
                    Read More <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#1F2937]">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-[#4CAF50] font-medium">
              {selectedProject?.status} Initiative
            </DialogDescription>
          </DialogHeader>
          <div className="relative h-60 my-4">
            {selectedProject && (
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover rounded-md"
              />
            )}
          </div>
          <p className="text-gray-600 my-4">{selectedProject?.fullDescription}</p>
          <div className="flex justify-end">
            <Button asChild className="bg-[#4CAF50] hover:bg-green-700 text-white">
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </main>
  )
}

