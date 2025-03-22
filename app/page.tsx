"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Twitter, Facebook, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import FlipCard from "@/components/flip-card"
import ImageComparisonSlider from "@/components/image-comparison-slider"
import ScrollingNewsTicker from "@/components/scrolling-ticker"
import LocationMap from "@/components/location-map"

export default function Home() {
  // Consolidated state using a single state object for form-related states
  const [formState, setFormState] = useState({
    email: "",
    message: "",
    subscribed: false,
    contactSubmitted: false
  })

  const robinWilliamsRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: robinWilliamsRef,
    offset: ["start end", "end start"],
  })

  const colorFill = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (formState.email) {
      setFormState({
        ...formState,
        subscribed: true,
        email: ""
      })
    }
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formState.email && formState.message) {
      setFormState({
        ...formState,
        contactSubmitted: true,
        email: "",
        message: ""
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // News items for the ticker
  const newsItems = [
    { id: 1, text: "Recycled Relief featured in Local News for innovative approach to mental health" },
    { id: 2, text: "Team wins Odyssey Angels recognition for community impact" },
    { id: 3, text: "Over 500 fidget toys distributed to local schools" },
    { id: 4, text: "New partnership with community mental health center announced" },
    { id: 5, text: "Recycled Relief expands to three new locations" },
  ]

  // Relief basket locations
  const basketLocations = [
    {
      id: 1,
      name: "John P. Stevens School Counseling Office",
      address: "855 Grove Ave, Edison, NJ",
      zipCode: "08820",
    },
    {
      id: 2,
      name: "Minnie B. Veal Community Center",
      address: "1070 Grove Ave, Edison, NJ 08820",
      zipCode: "08820",
    },
    {
      id: 3,
      name: "KCM Therapy",
      address: "776 Mountain Blvd., Suite 114 Watchung, NJ, 07069",
      zipCode: "07069",
    },
    {
      id: 4,
      name: "Woodbridge Community Center",
      address: "600 Main St, Woodbridge, NJ 07095",
      zipCode: "07095",
    },
    {
      id: 5,
      name: "Pediatrician's Office",
      address: "1000 Woodbridge Center Dr #106, Woodbridge, NJ 07095",
      zipCode: "07095",
    },
    {
      id: 6,
      name: "ACE Dental",
      address: "35-37 Progress St a6, Edison, NJ 08820",
      zipCode: "08820",
    },
    {
      id: 7,
      name: "Martin Luther King Elementary School",
      address: "285 Tingley Ln, Edison, NJ 08820",
      zipCode: "08820",
    },
  ]

  // Gallery images
  const galleryImages = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Team Meeting",
      caption: "Planning our next community outreach",
    },
    {
      src: "/placeholder.svg?height=400&width=300",
      alt: "Fidget Toy Creation",
      caption: "Crafting fidget toys from recycled materials",
    },
    {
      src: "/placeholder.svg?height=350&width=350",
      alt: "School Donation",
      caption: "Donating fidget toys to local schools",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Community Event",
      caption: "Raising awareness at a community event",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section (Kept as is) */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Environmental efforts"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Recycled Relief
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Turning today's trash into tomorrow's treasure. 2 long term problems. 1 spontaneous solution.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-[#4CAF50] hover:bg-green-700 text-white">
              <Link href="/about">Learn More</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Problems (Interactive Flip Cards) */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">The Problems We're Solving</h2>
            <p className="text-muted-foreground">
              Two global challenges that need immediate attention. Click on each card to learn more.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="h-64"
            >
              <FlipCard
                frontContent={
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">1 in 5</h3>
                    <p className="text-muted-foreground">people will experience a mental health condition.</p>
                  </div>
                }
                backContent={
                  <p>Yet, nearly two-thirds of people never seek help due to stigma and lack of resources.</p>
                }
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-64"
            >
              <FlipCard
                frontContent={
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">2 Billion+</h3>
                    <p className="text-muted-foreground">tons of waste are generated annually.</p>
                  </div>
                }
                backContent={<p>Low-income communities near landfills face severe health risks from toxic exposure.</p>}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-64"
            >
              <FlipCard
                frontContent={
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">450 Years</h3>
                    <p className="text-muted-foreground">is how long plastic bottles take to decompose.</p>
                  </div>
                }
                backContent={
                  <p>By 2050, landfills could reach unsustainable levels, causing irreversible environmental damage.</p>
                }
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Emotional Story: Robin Williams */}
      <section className="py-20 bg-background" ref={robinWilliamsRef}>
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Robin Williams"
                  fill
                  className="object-cover grayscale"
                />
                <div
                  className={`absolute inset-0 color-fill-overlay`}
                  style={{ clipPath: `polygon(0 0, ${colorFill.get()}% 0, ${colorFill.get()}% 100%, 0 100%)` }}
                />
                <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white text-center"
                  >
                    He seemed happy... right?
                  </motion.h2>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <p className="text-muted-foreground mb-4">
                Robin Williams brought joy to millions, yet behind his smile was a battle with depression that many
                never saw.
              </p>
              <p className="text-muted-foreground">
                Mental health struggles often remain invisible, even in those who seem the happiest. This is why
                breaking the stigma and providing support is so crucial.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mountain or Landfill? */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">Mountain or Landfill?</h2>
            <p className="text-muted-foreground">Drag the slider to reveal the truth.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <ImageComparisonSlider
              beforeImage="/placeholder.svg?height=600&width=800"
              afterImage="/placeholder.svg?height=600&width=800"
              beforeAlt="What appears to be a mountain"
              afterAlt="Actually a landfill"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 text-center"
            >
              <p className="text-muted-foreground font-medium">
                If you guessed mountain... you are incorrect! By 2050, landfills could dominate our landscapes if we
                don't act.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rocky the Raccoon */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-square max-w-[300px] mx-auto">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Rocky the Raccoon"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-4 text-foreground">Meet Rocky</h2>
              <p className="text-muted-foreground mb-4">
                Rocky the Raccoon represents the millions of animals affected by our waste problem.
              </p>
              <p className="text-muted-foreground font-medium">
                Each year, over 1 million mammals lose their homes due to waste disposal sites.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Solution</h2>
            <p className="text-muted-foreground">
              How we're addressing both mental health and waste challenges with one innovative approach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Fidget toy creation process"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground">Fidget Toys with Purpose</h3>
              <p className="text-muted-foreground mb-4">
                As a team, we decided that by using repurposed materials and our passion, we could create fidget toys
                for those who may need some extra assistance with getting through the day.
              </p>
              <p className="text-muted-foreground mb-4">
                Each fidget toy comes with a handwritten unique note and also includes a QR code the recipient can scan
                that takes them to our Youtube channel where we post weekly videos of professionals we interview and of
                people who speak on their own challenges of mental health for support and education.
              </p>

              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    1
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-foreground">Collect & Clean</h4>
                    <p className="text-muted-foreground">
                      We gather recyclable materials from community donations and clean them thoroughly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    2
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-foreground">Create & Customize</h4>
                    <p className="text-muted-foreground">
                      Our team transforms these materials into fidget toys designed for different sensory needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-foreground">Distribute & Support</h4>
                    <p className="text-muted-foreground">
                      We provide these tools to those in need along with educational resources and ongoing support.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Media & Recognition */}
      <section className="py-12 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">We're in the News!</h2>
            <p className="text-muted-foreground">See what people are saying about Recycled Relief</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <ScrollingNewsTicker news={newsItems} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link href="#">Read Full Articles</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Find a Recycled Relief Basket */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">Find a Recycled Relief Basket</h2>
            <p className="text-muted-foreground">Locate the nearest basket to access our fidget toys and resources</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <LocationMap locations={basketLocations} />
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Journey in Pictures</h2>
            <p className="text-muted-foreground">Glimpses of our work and impact in the community</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative overflow-hidden rounded-lg shadow-md group"
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.alt}
                    </h3>
                    <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Button asChild className="bg-[#4CAF50] hover:bg-green-700 text-white">
              <Link href="/gallery">See Full Gallery</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact & Social Media */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">Connect With Us</h2>

              <div className="flex flex-wrap gap-6 mb-8">
                <motion.a
                  href="#"
                  whileHover={{ y: -5 }}
                  className="bg-primary/10 hover:bg-primary/20 p-4 rounded-full"
                >
                  <Instagram className="h-8 w-8 text-primary" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -5 }}
                  className="bg-primary/10 hover:bg-primary/20 p-4 rounded-full"
                >
                  <Twitter className="h-8 w-8 text-primary" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -5 }}
                  className="bg-primary/10 hover:bg-primary/20 p-4 rounded-full"
                >
                  <Facebook className="h-8 w-8 text-primary" />
                </motion.a>
                <motion.a
                  href="mailto:info@recycledrelief.org"
                  whileHover={{ y: -5 }}
                  className="bg-primary/10 hover:bg-primary/20 p-4 rounded-full"
                >
                  <Mail className="h-8 w-8 text-primary" />
                </motion.a>
              </div>

              <p className="text-muted-foreground">
                Follow us on social media to stay updated on our latest projects, events, and ways to get involved.
                Together, we can make a difference in mental health awareness and environmental sustainability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problems We're Facing - Combined Interactive Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">The Reality Behind the Issues</h2>
            <p className="text-muted-foreground">
              Behind every statistic are real stories and hidden truths that need to be uncovered.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-20">
            {/* First Issue: Mental Health Visibility */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="relative overflow-hidden rounded-xl shadow-xl h-[400px]">
                <Image
                  src="/placeholder.svg?height=720&width=720"
                  alt="Robin Williams smiling"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">He seemed happy... right?</h3>
                  <p className="text-white/80 text-sm">Click to reveal the truth</p>
                </div>
                <motion.div 
                  className="absolute inset-0 bg-black/80 flex items-center justify-center p-6"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-white max-w-md">
                    <p className="mb-4">
                      Robin Williams brought joy to millions, yet behind his smile was a battle with depression that many never saw.
                    </p>
                    <p className="font-medium">
                      Mental health struggles often remain invisible, even in those who seem the happiest.
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">The Invisible Struggle</h3>
                <p className="text-muted-foreground">
                  What we see on the surface rarely tells the whole story. Like Robin Williams, many people 
                  hide their mental health struggles behind smiles and laughter.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Over 50% of those suffering from depression never seek professional help</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Stigma prevents many from acknowledging their mental health needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Simple tools can make a significant difference in daily coping</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <Link href="/mental-health">Learn More About Mental Health</Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Second Issue: Environmental Impact */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 md:order-1 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">What We Choose Not to See</h3>
                <p className="text-muted-foreground">
                  Our waste doesn't disappear—it accumulates in places we choose to ignore, with devastating consequences 
                  for both wildlife and vulnerable communities.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Over 1 million mammals lose their homes annually due to landfill expansion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>By 2050, there could be more plastic than fish in our oceans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Recycling one ton of plastic saves the equivalent of 1,000–2,000 gallons of gasoline</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <Link href="/environment">Learn About Environmental Impact</Link>
                  </Button>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="max-w-md mx-auto">
                  <div className="mb-6 relative">
                    <ImageComparisonSlider
                      beforeImage="/placeholder.svg?height=600&width=800"
                      afterImage="/placeholder.svg?height=600&width=800"
                      beforeAlt="What appears to be a mountain"
                      afterAlt="Actually a landfill"
                    />
                    <p className="mt-2 text-sm text-center text-muted-foreground italic">
                      Drag to see the truth: What looks like a mountain is actually a landfill
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-4 flex items-center space-x-4">
                    <div className="relative h-20 w-20 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="Rocky the Raccoon"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Meet Rocky</h4>
                      <p className="text-sm text-muted-foreground">
                        Just one of millions of animals whose habitats are threatened by our waste problem every year.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

