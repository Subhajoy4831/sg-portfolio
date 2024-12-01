"use client"
import { useState,useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const featuredProjects = [
  { 
    id: 1, 
    title: 'Hive-Soc', 
    description: 'Developed a social networking platform using Next.js and Supabase, allowing users to connect based on shared interests, join communities, and interact with like-minded individuals. Features include profile management, content sharing, likes/comments, and real-time interactions.',
    github: 'https://github.com/Subhajoy4831/hive-soc', 
    live: 'https://hive-soc.vercel.app/',
    image: '/hive-soc.jpg?height=600&width=800',
    tags: ['Next.js', 'Firebase', 'Supabase', 'React', 'JavaScript']
  },
  { 
    id: 2, 
    title: 'ECC Calculator', 
    description: 'Developed an elliptical curve calculator which can perform point operations on Short Weierstrass Curve. Developed Baby-Step Giant-Step (BSGS) algorithm for discrete logarithm problems',
    github: 'https://github.com/Subhajoy4831/ECC-Calculator', 
    live: 'https://ellipticcurvecalculator.onrender.com/',
    image: '/ecc-calc.jpg?height=600&width=800',
    tags: ['Python', 'Django']
  },
]

const otherProjects = [
    { id: 3, 
        title: 'Web Weather', 
        description: 'A weather app that uses OpenWeatherMap API to display forecasts.', 
        github: 'https://github.com/Subhajoy4831/web-weather', 
        live: 'sg-weatherweb.netlify.app/' },
    { id: 4, 
        title: 'Machine Learning', 
        description: 'Developed and implemented Machine Learning models including various classifiers and Neural Networks for predictive analysis.', 
        github: 'https://github.com/Subhajoy4831/ML-codes', },
    { id: 5, 
        title: 'Tic-Tac-Toe', 
        description: 'A web app that helps users find recipes based on available ingredients.', 
        github: 'https://github.com/Subhajoy4831/Tic-tac-toe', 
        live: ' sg-tictactoeweb.netlify.app/ ' },
    { id: 6, 
        title: 'Web Chat', 
        description: 'A responsive online chat website built with React, Websocket and Tailwind CSS.', 
        github: 'https://github.com/Subhajoy4831/web-chat-socketIO', },
  ]
  
  const Tag = ({ children }) => (
    <span className="px-3 py-1 text-sm text-gray-300 bg-gray-800/50 rounded-full">
      {children}
    </span>
  )
  
  const ProjectCard = ({ project, isFeatured }) => {
    if (isFeatured) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative grid grid-cols-1 md:grid-cols-2 bg-[#0B1224] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl"
        >
          <div className="relative h-[300px] md:h-auto">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-8 flex flex-col justify-between">
            <div>
              <span className="text-emerald-400 text-sm font-medium">Featured Project</span>
              <h3 className="text-3xl font-bold text-white mt-2 mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              {project.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              )}
            </div>
            <div className="flex space-x-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <ExternalLink size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      )
    }
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-800 rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300 col-span-1"
      >
        <h3 className="text-xl font-semibold mb-2 text-blue-300">{project.title}</h3>
        <p className="text-sm text-gray-400 mb-4">{project.description}</p>
        <div className="flex space-x-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-300 hover:text-blue-400 transition duration-300"
          >
            <Github size={24} />
          </motion.a>
          {project.live && (
            <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition duration-300"
            >
                <ExternalLink size={24} />
            </motion.a>
)}
        </div>
      </motion.div>
    )
  }
  
  const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState(3)
    const [hasLoaded, setHasLoaded] = useState(false)

    useEffect(() => {
    setHasLoaded(true)
  }, [])
  
    const showMoreProjects = () => {
      setVisibleProjects(prevVisible => Math.min(prevVisible + 3, otherProjects.length))
    }
  
    return (
        <section id="projects" className="py-20 bg-[#020C1B]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">My Projects</h2>
            
            <div className="grid gap-8 mb-12">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isFeatured={true} />
              ))}
            </div>
    
            <h3 className="text-2xl font-bold mb-6 text-gray-300">Other Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              <AnimatePresence initial={false}>
                {otherProjects.slice(0, visibleProjects).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={hasLoaded ? { opacity: 0, y: 20 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} isFeatured={false} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {visibleProjects < otherProjects.length && (
              <div className="mt-8 text-center">
                <motion.button
                  onClick={showMoreProjects}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold text-lg hover:bg-blue-600 transition duration-300"
                >
                  Show More
                </motion.button>
              </div>
            )}
          </div>
        </section>
      )
  }
  
  export default Projects
  
  