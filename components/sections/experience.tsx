{/*
"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar } from "lucide-react"


const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2021 - Present",
    description:
      "Lead the frontend development team in building responsive web applications using React, Next.js, and TypeScript. Implemented CI/CD pipelines and improved performance by 40%.",
  },
  {
    title: "Web Developer",
    company: "Digital Solutions",
    period: "2018 - 2021",
    description:
      "Developed and maintained client websites using modern JavaScript frameworks. Collaborated with designers to implement pixel-perfect UIs and improved site performance.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Studio",
    period: "2016 - 2018",
    description:
      "Assisted in the development of web applications. Gained experience in frontend technologies and agile development methodologies.",
  },
]


export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Work Experience</h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto mb-10"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <div className="relative border-l-2 border-gray-200 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-12 relative">
                <div className="absolute -left-12 mt-1.5 w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <h4 className="text-rose-500 font-medium mb-3">{exp.company}</h4>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
*/}