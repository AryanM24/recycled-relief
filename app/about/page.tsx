"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRightIcon } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sanya Kochhar",
      role: "Co-Founder",
      bio: "Junior student passionate about mental health awareness and sustainability.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Isabel Alvaran",
      role: "Co-Founder",
      bio: "Junior student dedicated to creative problem-solving and community service.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Daya Karakkatt",
      role: "Team Member",
      bio: "Contributes creative ideas and helps with production of repurposed fidget toys.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Ragha Donthireddy",
      role: "Team Member",
      bio: "Focuses on educational content and community outreach initiatives.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Siya Gour",
      role: "Team Member",
      bio: "Specializes in material collection and sustainable repurposing techniques.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Smayan Satyavolu",
      role: "Team Member",
      bio: "Works on product design and improving the functionality of fidget toys.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Jenna Trotman",
      role: "Team Member",
      bio: "Manages social media presence and helps spread mental health awareness.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const historyEvents = [
    {
      year: "2023",
      title: "Foundation",
      description:
        "Recycled Relief was founded by the Odyssey of the Mind team members as part of the Odyssey Angels program.",
    },
    {
      year: "2023",
      title: "First Products",
      description: "Created our first batch of fidget toys from repurposed materials for local schools.",
    },
    {
      year: "2023",
      title: "Educational Platform",
      description: "Launched our educational platform to help those struggling with mental health issues.",
    },
    {
      year: "2024",
      title: "Community Outreach",
      description: "Expanded our reach to multiple schools and community centers in the area.",
    },
    {
      year: "2024",
      title: "Website Launch",
      description: "Launched our official website to reach more people and share our mission.",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      {/* Mission Statement */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#1F2937]">About Us</h1>
            <p className="text-xl md:text-2xl text-[#4CAF50] font-medium mb-8">Our Mission Statement</p>
            <p className="text-gray-600 mb-8">
              We strive to create products to help those struggling with mental health issues and break the stigma of
              mental health by educating others on this topic while simultaneously shrinking our landfills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#1F2937]">Who We Are</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-gray-600 mb-6">
              Recycled Relief is an organization founded by two juniors, Sanya Kochhar and Isabel Alvaran, along with
              the rest of their Odyssey of the Mind team which includes Daya Karakkatt, Ragha Donthireddy, Siya Gour,
              Smayan Satyavolu, and Jenna Trotman.
            </p>
            <p className="text-gray-600 mb-6">
              This year they decided they wanted to give back to their communities after participating in a creative
              problem-solving club called Odyssey of the Mind. They entered into the Odyssey Angels program. This
              program encourages students to use their creative problem-solving skills in the real world. Thus, Recycled
              Relief was created.
            </p>
            <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#4CAF50] mb-4">Odyssey Angels Showcase</h3>
              <p className="text-gray-600 mb-4">
                Starting with two 13 year olds who discovered that mental health issues linger all around us, Sanya and
                Isabel turned Recycled Relief into an organization that has raised awareness for many of the matters of
                mental health and the stigmas that surround it. As a group, we hope to be able to turn Recycled Relief
                into a global program where people all around the world can create tools with the materials close to
                them for those who may need it.
              </p>
              <p className="text-gray-600">
                We hope that with the help of the showcase the Odyssey Angels provides, we can carry our messages
                throughout the world and these global issue. We hope to solve 2 long term problems with our 1
                spontaneous solution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#1F2937]">What We Do</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-gray-600 mb-6 text-center">
              We create fidget toys made of repurposed materials and have created a platform to help and educate those
              struggling with mental health issues such as anxiety, depression, etc.
            </p>
            <div className="mt-8 text-center">
              <a
                href="https://docs.google.com/document/d/19Ase9vjGL37JOZDKQNbt0OBGuqVyJVM_NF247sr2zsU/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#4CAF50] hover:text-green-700 font-medium"
              >
                Learn more about our process
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1F2937]">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
              >
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1F2937]">{member.name}</h3>
                  <p className="text-[#4CAF50] font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1F2937]">Our History</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-4 border-[#4CAF50] pl-8 ml-4">
              {historyEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-12 w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="inline-block bg-[#FACC15] text-[#1F2937] px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold text-[#1F2937] mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

