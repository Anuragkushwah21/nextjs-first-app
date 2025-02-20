import { footer } from "framer-motion/client";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        {/* About Us Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            1 Music School is a premier institution dedicated to teaching the
            art and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi, 400041</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: +91 12345 67890</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>
          &copy; {new Date().getFullYear()} 1 Music School. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
