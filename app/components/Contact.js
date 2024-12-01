"use client"
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

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
      </div>
    </section>
  )
}

export default Contact

