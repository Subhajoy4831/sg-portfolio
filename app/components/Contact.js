"use client"
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'
import Modal from './Modal'
import { useState } from 'react'

const ContactLink = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition duration-300"
    whileHover={{ scale: 1.1 }}
  >
    {icon}
    <span>{label}</span>
  </motion.a>
)

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="contact" className="py-20 bg-[#0B1224]">
      <div className="container mx-auto px-6">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="flex items-center gap-2 text-4xl font-bold mb-8">
            <span className="text-blue-400 font-mono text-sm">04.</span>
            <span className="text-gray-200">Contact Me</span>
            <div className="h-px bg-gray-700 flex-grow ml-4"></div>
          </h2>
        </motion.div>
        <div className="flex flex-col items-center space-y-6">
          <ContactLink href="mailto:ghoshsubhajoy02@gmail.com" icon={<Mail size={24} />} label="ghoshsubhajoy02@gmail.com" />
          <ContactLink href="https://github.com/Subhajoy4831" icon={<Github size={24} />} label="GitHub" />
          <ContactLink href="https://www.linkedin.com/in/subhajoy-ghosh-a62625283/" icon={<Linkedin size={24} />} label="LinkedIn" />
        </div>
        <div className="text-center">
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-600 transition duration-300"
          >
            Contact Me
          </motion.button>
        </div>
      </div>

      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-white">Get in Touch</h3>
          <form action="https://formspree.io/f/mwpkzgwv" method="POST" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </div>
      </Modal>
    </section>
  )
}

export default Contact

