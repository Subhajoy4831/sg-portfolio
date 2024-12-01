"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

const technologies = [
  [ 'Python','JavaScript','PySpark'],
  ['React', 'Next.js'],
  ['Node.js', 'Django'],
  ['Firebase','Supabase']
]

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0B1224]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="w-full md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="flex items-center gap-2 text-4xl font-bold mb-8">
                <span className="text-blue-400 font-mono text-sm">01.</span>
                <span className="text-gray-200">About Me</span>
                <div className="h-px bg-gray-700 flex-grow ml-4"></div>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6 text-gray-400 leading-relaxed"
            >
              <p>
              Hello, I&apos;m Subhajoy, a Software and Data Engineer with expertise in full-stack development, data engineering, and machine learning. 
              Passionate about creating innovative solutions, 
              I specialize in building scalable applications and leveraging data to drive intelligent decision-making. 
              With experience in technologies like React, Node.js, Python, and AWS, 
              I thrive on tackling complex challenges and delivering high-impact projects
              </p>

              <p className="text-gray-400 mb-4">
                Here are a few technologies I've been working with recently:
              </p>

              <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                {technologies.map((row, rowIndex) => (
                  <div key={rowIndex}>
                    {row.map((tech) => (
                      <li key={tech} className="flex items-center gap-2 text-gray-400">
                        <span className="text-blue-400">◦</span>
                        {tech}
                      </li>
                    ))}
                  </div>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full md:w-1/3 mt-8 md:mt-0"
          >
            <div className="relative mx-auto w-60 h-60">
              <div className="absolute inset-0 bg-blue-400/20 translate-x-4 translate-y-4 rounded"></div>
              <div className="absolute inset-0 bg-blue-400/10 translate-x-2 translate-y-2 rounded"></div>
              <div className="relative rounded overflow-hidden">
                <Image
                  src="/Photo.jpg?height=240&width=240"
                  alt="Profile"
                  width={240}
                  height={240}
                  className="rounded grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

