import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// #50d4e3 blue
// #ee6352 red

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">
              <span className="text-[#50d4e3]">Course</span>
              <span className="text-[#ee6352]">Hub</span>
            </h3>
            <p className="text-sm text-[#ee6352]">
              We provide high-quality courses in dancing, singing, and panting
              to help you discover and develop your talents.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#ee6352] hover:text-[#50d4e3]">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-[#ee6352] hover:text-[#50d4e3]">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#ee6352] hover:text-[#50d4e3]">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-[#ee6352] hover:text-[#50d4e3]">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#ee6352]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-[#ee6352] hover:text-[#50d4e3]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm text-[#ee6352] hover:text-[#50d4e3]"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-sm text-[#ee6352] hover:text-[#50d4e3]"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#ee6352] hover:text-[#50d4e3]"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#ee6352] hover:text-[#50d4e3]"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#ee6352]">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/register"
                  className="text-sm text-[#ee6352] hover:text-[#50d4e3]"
                >
                  Dancing Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-sm text-[#ee6352] hover:text-[#50d4e3]"
                >
                  Singing Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-sm text-[#ee6352] hover:text-[#50d4e3]"
                >
                  Panting Classes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#ee6352]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 text-[#ee6352]" />
                <span className="text-sm text-[#ee6352]">
                  123 Course Street, Education City, 400001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#ee6352]" />
                <span className="text-sm text-[#ee6352]">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#ee6352]" />
                <span className="text-sm text-[#ee6352]">
                  info@coursehub.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-[#ee6352]">
            &copy; {new Date().getFullYear()} CourseHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
