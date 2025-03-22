"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2Icon, CreditCardIcon, UsersIcon, PackageIcon } from "lucide-react"

export default function GetInvolvedPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "event-support",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
  }

  const volunteerOpportunities = [
    {
      title: "Event Support",
      description: "Help organize and run recycling drives, workshops, and community events.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <UsersIcon className="h-10 w-10 text-[#4CAF50]" />,
    },
    {
      title: "Material Donations",
      description: "Contribute materials like plastic, wood, textiles, or electronics for our projects.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <PackageIcon className="h-10 w-10 text-[#4CAF50]" />,
    },
    {
      title: "Fundraising",
      description: "Assist with grant writing, donor outreach, and fundraising campaigns.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <CreditCardIcon className="h-10 w-10 text-[#4CAF50]" />,
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#1F2937]">Get Involved</h1>
            <p className="text-gray-600">
              There are many ways to contribute to our mission. Whether you can volunteer your time, donate materials,
              or support us financially, your help makes a difference.
            </p>
          </motion.div>

          {/* Volunteer Opportunities */}
          <h2 className="text-2xl font-bold text-center mb-8 text-[#1F2937]">Volunteer Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative h-48">
                  <Image
                    src={opportunity.image || "/placeholder.svg"}
                    alt={opportunity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {opportunity.icon}
                    <h3 className="text-xl font-bold ml-3 text-[#1F2937]">{opportunity.title}</h3>
                  </div>
                  <p className="text-gray-600">{opportunity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Donation Options */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-[#1F2937]">Donation Options</h2>
            <p className="text-gray-600 mb-6">
              Your financial support helps us expand our programs and reach more communities. We accept donations
              through various methods:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-[#1F2937] mb-2">PayPal</h3>
                <p className="text-sm text-gray-600">
                  Make a secure donation through our PayPal account at donate@recycledrelief.org
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-[#1F2937] mb-2">Venmo</h3>
                <p className="text-sm text-gray-600">Send your contribution to @RecycledRelief on Venmo</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-[#1F2937] mb-2">Direct Bank Transfer</h3>
                <p className="text-sm text-gray-600">Contact us at finance@recycledrelief.org for our bank details</p>
              </div>
            </div>
          </div>

          {/* Signup Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-[#1F2937]">Sign Up to Volunteer</h2>
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
              >
                <CheckCircle2Icon className="h-12 w-12 text-[#4CAF50] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1F2937] mb-2">Thank You for Signing Up!</h3>
                <p className="text-gray-600">
                  We've received your information and will contact you soon about volunteer opportunities.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="mb-6">
                  <Label>Preferred Volunteer Role</Label>
                  <RadioGroup
                    name="role"
                    value={formData.role}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, role: value }))}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="event-support" id="event-support" />
                      <Label htmlFor="event-support">Event Support</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="material-donations" id="material-donations" />
                      <Label htmlFor="material-donations">Material Donations</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fundraising" id="fundraising" />
                      <Label htmlFor="fundraising">Fundraising</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="mb-6">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your skills, availability, or any questions you have"
                    className="h-32"
                  />
                </div>
                <Button type="submit" className="w-full bg-[#4CAF50] hover:bg-green-700 text-white">
                  Submit
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

