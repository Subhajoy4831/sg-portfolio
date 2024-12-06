"use client"
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const NavLink = ({ href, children }) => (
  <Link href={href} className="group relative px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-blue-300">
    {children}
    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-300 transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
  </Link>
)

const Header = () => {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="bg-[#0B1224] text-white shadow-lg fixed w-full z-10"
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-blue-400">S</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><NavLink href="#about">About</NavLink></li>
            <li><NavLink href="#experience">Experience</NavLink></li>
            <li><NavLink href="#projects">Projects</NavLink></li>
            <li><NavLink href="#contact">Contact</NavLink></li>
            <li>
              <motion.a
                href="https://drive.google.com/file/d/1X5B0BGWzVm316irD_A5SvYS5wbPdPXC1/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-blue-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header

