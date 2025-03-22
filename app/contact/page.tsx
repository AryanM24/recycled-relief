"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2Icon, Mail, MapPin, Phone, Instagram, Linkedin } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formError, setFormError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError("Please fill out all fields")

      // Add shake animation to form
      const form = e.target
      form.classList.add("animate-shake")
      setTimeout(() => {
        form.classList.remove("animate-shake")
      }, 500)

      return
    }

    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    setFormError(null)
  }

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#1F2937]">Contact Us</h1>
            <p className="text-gray-600">
              Have questions or want to learn more about our initiatives? We'd love to hear from you. Reach out using
              the form below or through our contact information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center h-full flex flex-col items-center justify-center">
                  <CheckCircle2Icon className="h-16 w-16 text-[#4CAF50] mb-4" />
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-2">Message Sent!</h2>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-2xl font-bold mb-6 text-[#1F2937]">Send Us a Message</h2>

                  {formError && <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 text-sm">{formError}</div>}

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 h-32"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#4CAF50] hover:bg-green-700 text-white">
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Information and Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-[#1F2937]">Contact Information</h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#4CAF50] mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-[#1F2937]">Address</h3>
                      <p className="text-gray-600">123 Sustainability St, Green City, CA 94123</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-[#4CAF50] mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-[#1F2937]">Email</h3>
                      <p className="text-gray-600">info@recycledrelief.org</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-[#4CAF50] mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-[#1F2937]">Phone</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-[#1F2937] mt-8 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                    <Instagram className="h-5 w-5 text-[#1F2937]" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                    <Linkedin className="h-5 w-5 text-[#1F2937]" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:info@recycledrelief.org"
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                  >
                    <Mail className="h-5 w-5 text-[#1F2937]" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-2 flex-grow">
                <div className="rounded-lg overflow-hidden h-full min-h-[300px] bg-gray-100 flex items-center justify-center">
                  {/* In a real app, you would use a Google Maps embed here */}
                  <div className="text-center p-4">
                    <MapPin className="h-10 w-10 text-[#4CAF50] mx-auto mb-2" />
                    <p className="text-gray-600">Google Maps would be embedded here</p>
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

