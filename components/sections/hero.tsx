"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-gray-600 dark:text-gray-400 font-medium mb-2 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I am
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="block">Shrikanth</span>
            <span className="text-rose-500"></span>
          </motion.h1>
          <motion.p
            className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            “I’m a passionate web developer with a strong foundation in front-end technologies and UI/UX principles. As a fresher, I bring hands-on experience from real-world projects, not just theory—building modern, responsive, and user-friendly applications that blend design with functionality.”.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex space-x-4"
          >
            <motion.a
              href="#contact"
              className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 px-6 py-3 rounded-lg transition-colors duration-300 text-gray-900 dark:text-white"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Image src="/1651891690098.jpeg?height=320&width=320" alt="Profile" fill className="object-cover" priority />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollToAbout}
        whileHover={{ y: 5 }}
      >
        <ArrowDown className="animate-bounce text-gray-600 dark:text-gray-400" />
      </motion.div>
    </section>
  )
}

