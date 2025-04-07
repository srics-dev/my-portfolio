"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto mb-10"></div>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            I'm a passionate web developer with a strong foundation in modern frontend and backend technologies. With
            over 5 years of experience building web applications, I specialize in creating responsive, user-friendly
            interfaces that deliver exceptional user experiences.
          </p>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            My journey in web development began when I built my first website in college. Since then, I've worked with
            startups and established companies to bring their digital visions to life. I'm constantly learning and
            exploring new technologies to stay at the forefront of web development.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center w-full sm:w-40"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-4xl font-bold text-rose-500 mb-2">5+</h3>
              <p className="text-gray-600">Years Experience</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center w-full sm:w-40"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-4xl font-bold text-rose-500 mb-2">50+</h3>
              <p className="text-gray-600">Projects</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center w-full sm:w-40"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-4xl font-bold text-rose-500 mb-2">20+</h3>
              <p className="text-gray-600">Clients</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

