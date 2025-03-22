"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import { useState, useRef } from "react"
import { ArrowRightIcon, ChevronDown, Heart, Leaf, Users, Clock, ArrowRight, Award } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission")
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  })
  
  const scaleProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const background = useTransform(
    scaleProgress,
    [0, 1],
    ["rgba(76, 175, 80, 0)", "rgba(76, 175, 80, 0.2)"]
  )

  const teamMembers = [
    {
      name: "Sanya Kochhar",
      role: "Co-Founder",
      bio: "Junior student passionate about mental health awareness and sustainability.",
      image: "/placeholder.svg?height=300&width=300",
      socials: ["twitter", "linkedin"]
    },
    {
      name: "Isabel Alvaran",
      role: "Co-Founder",
      bio: "Junior student dedicated to creative problem-solving and community service.",
      image: "/placeholder.svg?height=300&width=300",
      socials: ["instagram", "twitter"]
    },
    {
      name: "Daya Karakkatt",
      role: "Team Member",
      bio: "Contributes creative ideas and helps with production of repurposed fidget toys.",
      image: "/placeholder.svg?height=300&width=300",
      socials: ["linkedin"]
    },
    {
      name: "Ragha Donthireddy",
      role: "Team Member",
      bio: "Focuses on educational content and community outreach initiatives.",
      image: "/placeholder.svg?height=300&width=300",
      socials: ["twitter", "instagram"]
    },
    {
      name: "Siya Gour",
      role: "Team Member",
      bio: "Specializes in material collection and sustainable repurposing techniques.",
      image: "/placeholder.svg?height=300&width=300",
      socials: ["linkedin", "twitter"]
    },
    {
      name: "Smayan Satyavolu",
      role: "Team Member",
      bio: "Works on product design and improving the functionality of fidget toys.",
      image: "/placeholder.svg?height=300&width=300",
      socials: ["instagram"]
    },
    {
      name: "Jenna Trotman",
      role: "Team Member",
      bio: "Manages social media presence and helps spread mental health awareness.",
      image: "/placeholder.svg?height=300&width=300",
      socials: ["twitter", "instagram"]
    },
  ]

  const historyEvents = [
    {
      year: "2023",
      title: "Foundation",
      description:
        "Recycled Relief was founded by the Odyssey of the Mind team members as part of the Odyssey Angels program.",
      icon: <Users className="w-5 h-5" />,
      color: "bg-blue-500"
    },
    {
      year: "2023",
      title: "First Products",
      description: "Created our first batch of fidget toys from repurposed materials for local schools.",
      icon: <Leaf className="w-5 h-5" />,
      color: "bg-green-500"
    },
    {
      year: "2023",
      title: "Educational Platform",
      description: "Launched our educational platform to help those struggling with mental health issues.",
      icon: <Heart className="w-5 h-5" />,
      color: "bg-red-500"
    },
    {
      year: "2024",
      title: "Community Outreach",
      description: "Expanded our reach to multiple schools and community centers in the area.",
      icon: <Users className="w-5 h-5" />,
      color: "bg-purple-500"
    },
    {
      year: "2024",
      title: "Website Launch",
      description: "Launched our official website to reach more people and share our mission.",
      icon: <Clock className="w-5 h-5" />,
      color: "bg-yellow-500"
    },
  ]

  return (
    <main className="flex flex-col min-h-screen" ref={scrollRef}>
      {/* Parallax Hero Section */}
      <section className="py-16 bg-[#F9FAFB]">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#1F2937]">About Us</h1>
            <p className="text-gray-600">
            Making a difference in mental health and sustainability through creative problem-solving and community service.
            </p>
          </motion.div>
      </section>

      {/* Tabbed Mission Section */}
      <section id="mission" className="py-20 relative bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
                  Our vision for a <span className="text-[#4CAF50]">healthier</span> mind and <span className="text-[#4CAF50]">greener</span> planet
                </h2>
                
                <div className="flex flex-col gap-2 mb-8">
                  <button 
                    onClick={() => setActiveTab("mission")}
                    className={cn(
                      "text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center",
                      activeTab === "mission" ? "bg-[#4CAF50]/10 font-medium text-[#4CAF50]" : "hover:bg-muted text-foreground"
                    )}
                  >
                    <div className={cn(
                      "w-2 h-2 rounded-full mr-3 transition-all duration-300",
                      activeTab === "mission" ? "bg-[#4CAF50]" : "bg-gray-300"
                    )} />
                    Mission Statement
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab("who")}
                    className={cn(
                      "text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center",
                      activeTab === "who" ? "bg-[#4CAF50]/10 font-medium text-[#4CAF50]" : "hover:bg-muted text-foreground"
                    )}
                  >
                    <div className={cn(
                      "w-2 h-2 rounded-full mr-3 transition-all duration-300",
                      activeTab === "who" ? "bg-[#4CAF50]" : "bg-gray-300"
                    )} />
                    Who We Are
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab("what")}
                    className={cn(
                      "text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center",
                      activeTab === "what" ? "bg-[#4CAF50]/10 font-medium text-[#4CAF50]" : "hover:bg-muted text-foreground"
                    )}
                  >
                    <div className={cn(
                      "w-2 h-2 rounded-full mr-3 transition-all duration-300",
                      activeTab === "what" ? "bg-[#4CAF50]" : "bg-gray-300"
                    )} />
                    What We Do
                  </button>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2">
              {activeTab === "mission" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card p-8 rounded-2xl shadow-xl"
                >
                  <div className="mb-6 h-1 w-12 bg-[#4CAF50]"></div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Our Mission Statement</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    We strive to create products to help those struggling with mental health issues and break the stigma of
                    mental health by educating others on this topic while simultaneously shrinking our landfills.
                  </p>
                  <div className="aspect-video relative rounded-xl overflow-hidden">
                    <Image 
                      src="https://plus.unsplash.com/premium_photo-1681987448179-4a93b7975018?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=720&width=1280" 
                      alt="Our mission in action" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              )}
              
              {activeTab === "who" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card p-8 rounded-2xl shadow-xl"
                >
                  <div className="mb-6 h-1 w-12 bg-[#4CAF50]"></div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Who We Are</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Recycled Relief is an organization founded by two juniors, Sanya Kochhar and Isabel Alvaran, along with
                    the rest of their Odyssey of the Mind team which includes Daya Karakkatt, Ragha Donthireddy, Siya Gour,
                    Smayan Satyavolu, and Jenna Trotman.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    This year they decided they wanted to give back to their communities after participating in a creative
                    problem-solving club called Odyssey of the Mind. They entered into the Odyssey Angels program. This
                    program encourages students to use their creative problem-solving skills in the real world. Thus, Recycled
                    Relief was created.
                  </p>
                  <div className="aspect-video relative rounded-xl overflow-hidden">
                    <Image 
                      src="https://plus.unsplash.com/premium_photo-1663089270259-5e23b75bfb99?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=720&width=1280" 
                      alt="Our team collaborating" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              )}
              
              {activeTab === "what" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card p-8 rounded-2xl shadow-xl"
                >
                  <div className="mb-6 h-1 w-12 bg-[#4CAF50]"></div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">What We Do</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    We create fidget toys made of repurposed materials and have created a platform to help and educate those
                    struggling with mental health issues such as anxiety, depression, etc.
                  </p>
                  <div className="aspect-video relative rounded-xl overflow-hidden mb-6">
                    <Image 
                      src="https://www.messymommacrafts.com/wp-content/uploads/2022/10/cardboard-fidget-spinner-Red-Ted-Art.jpg?height=720&width=1280" 
                      alt="Our products" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <a
                    href="https://docs.google.com/document/d/19Ase9vjGL37JOZDKQNbt0OBGuqVyJVM_NF247sr2zsU/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#4CAF50] hover:text-green-700 font-medium group"
                  >
                    Learn more about our process
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Odyssey Angels Showcase Section */}
      <section id="odyssey-angels" className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-12 items-center"
            >
              <div className="lg:w-1/2 order-2 lg:order-1">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#4CAF50]/20 to-[#4CAF50]/5 rounded-2xl blur-lg -z-10"></div>
                  <div className="bg-card p-8 rounded-2xl shadow-xl relative z-10">
                    <div className="flex items-center mb-6">
                      <Award className="h-8 w-8 text-[#4CAF50] mr-3" />
                      <h3 className="text-2xl font-bold text-foreground">Odyssey Angels Showcase</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Starting with two 13 year olds who discovered that mental health issues linger all around us, Sanya and
                      Isabel turned Recycled Relief into an organization that has raised awareness for many of the matters of
                      mental health and the stigmas that surround it.
                    </p>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Through the Odyssey Angels program, our team learned to apply creative problem-solving skills to real-world challenges.
                      We hope to solve 2 long term problems with our 1 spontaneous solution: mental health stigma and environmental waste.
                    </p>
                    
                    <div className="flex space-x-4">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#4CAF50] text-white px-4 py-2 rounded-lg flex items-center"
                      >
                        Learn about Odyssey Angels
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="lg:w-1/2 order-1 lg:order-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                    <Image 
                      src="https://vaodyssey.org/wp-content/uploads/Odyssey-angels-logo.jpg" 
                      alt="Odyssey Angels Showcase" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <motion.div 
                    className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#4CAF50]/10 rounded-full -z-10"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  
                  <motion.div 
                    className="absolute -top-4 -left-4 w-20 h-20 bg-[#4CAF50]/10 rounded-full -z-10"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 6,
                      delay: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members 3D Cards */}
      <section id="team" className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="text-muted-foreground">
              The dedicated individuals bringing mental health awareness and sustainability together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl overflow-hidden transform-gpu"
              >
                <div className="aspect-square relative">
                  <Image 
                    src={member.image || "/placeholder.svg"} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-500 hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex space-x-3 justify-center">
                        {member.socials.map((social, i) => (
                          <a 
                            key={i} 
                            href="#" 
                            className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-[#4CAF50] transition-colors duration-300"
                          >
                            <span className="sr-only">{social}</span>
                            {social === "twitter" ? <span className="text-xs">T</span> : 
                             social === "linkedin" ? <span className="text-xs">in</span> : 
                             <span className="text-xs">Ig</span>}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-[#4CAF50] font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-[#4CAF50]/20 to-background"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Join Our Mission</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Together, we can make a difference in mental health awareness and environmental sustainability.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-[#4CAF50] hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full shadow-md transition-colors duration-300"
          >
            Get Involved
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.a>
        </div>
      </motion.section>
    </main>
  )
}

