"use client"
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="bg-[#0B1224] text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-bold mb-4 text-teal-400"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4 text-blue-300"
        >
          Hi! I'm Subhajoy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8 text-gray-300"
        >
          I'm a a Software Engineer and Data Engineer with a passion for full-stack development, data engineering, and machine learning. I specialize in creating intuitive, impactful solutions for complex problems.
        </motion.p>
        <a href="https://github.com/Subhajoy4831" target="_blank" rel="noopener noreferrer">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-600 transition duration-300"
        >
          View My Work
        </motion.button>
        </a>
      </div>
    </section>
  )
}

export default Hero

