"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    id: 'deloitte',
    company: 'Deloitte',
    title: 'Data Engineer Intern @ Deloitte',
    date: 'Aug 2024 - Present',
    responsibilities: [
        'Acquired proficiency in Python and SQL during the internship',
        'Gained hands-on experience with cloud platforms: Azure and AWS',
        'Handled Data Warehousing solutions and tools',
        'Worked with Databricks and PySpark to process and analyze large datasets, improving data pipeline efficiency',
        'Analyzed real-world case studies focusing on data analytics and cloud-based solutions',
        'Developed and optimized Spark jobs to handle ETL tasks, enabling faster data processing for real-time analytics',
    ]
  }
]

const Experience = () => {
  const [activeTab, setActiveTab] = useState('deloitte')

  return (
    <section id="experience" className="py-20 bg-[#0B1224]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="flex items-center gap-2 text-4xl font-bold mb-8">
            <span className="text-blue-400 font-mono text-sm">02.</span>
            <span className="text-gray-200">My Work Experience</span>
            <div className="h-px bg-gray-700 flex-grow ml-4"></div>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Company tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex md:flex-col overflow-x-auto md:overflow-x-visible md:w-32"
          >
            {experiences.map((experience) => (
              <button
                key={experience.id}
                onClick={() => setActiveTab(experience.id)}
                className={`px-4 py-2 text-sm font-mono whitespace-nowrap text-left border-b-2 md:border-b-0 md:border-l-2 transition-colors duration-200 ${
                  activeTab === experience.id
                    ? 'text-blue-400 border-blue-400'
                    : 'text-gray-500 border-gray-700 hover:text-blue-400 hover:bg-blue-400/5'
                }`}
              >
                {experience.company}
              </button>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-2/3"
          >
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className={`space-y-6 ${activeTab === experience.id ? 'block' : 'hidden'}`}
              >
                <h3 className="text-xl text-gray-200">
                  {experience.title}
                </h3>
                <p className="font-mono text-sm text-gray-400">
                  {experience.date}
                </p>
                <ul className="space-y-4">
                  {experience.responsibilities.map((item, index) => (
                    <li key={index} className="flex gap-2 text-gray-400">
                      <span className="text-blue-400 flex-shrink-0">◦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience

