import Link from "next/link"
import { Recycle, Instagram, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Recycle className="h-6 w-6 text-[#4CAF50]" />
              <span className="font-bold text-xl text-[#1F2937] dark:text-white">Recycled Relief</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Recycled Relief is dedicated to repurposing materials for communities in need, promoting sustainability,
              and creating positive environmental impact.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#4CAF50] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-[#4CAF50] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:info@recycledrelief.org" className="text-gray-500 hover:text-[#4CAF50] transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-[#1F2937] dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-[#4CAF50] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-[#4CAF50] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/initiatives"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#4CAF50] transition-colors"
                >
                  Our Initiatives
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary focus:text-primary transition-colors duration-200"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary focus:text-primary transition-colors duration-200"
                >
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-[#1F2937] dark:text-white mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600 dark:text-gray-400 space-y-2">
              <p>123 Sustainability St</p>
              <p>Green City, CA 94123</p>
              <p>info@recycledrelief.org</p>
              <p>(555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} Recycled Relief. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-600 dark:text-gray-400 text-sm hover:text-[#4CAF50] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 dark:text-gray-400 text-sm hover:text-[#4CAF50] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-500 dark:text-gray-500 text-sm flex items-center justify-center">
          <span>Made with</span>
          <Heart className="h-4 w-4 mx-1 text-red-500" />
          <span>for a greener planet</span>
        </div>
      </div>
    </footer>
  )
}

