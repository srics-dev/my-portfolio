"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Layout, Server, Smartphone, GitBranch, Figma, Cpu } from "lucide-react"

const skills = [
  { name: "HTML/CSS", icon: <Layout className="w-8 h-8" />, color: "bg-orange-100 text-orange-500" },
  { name: "JavaScript", icon: <Code className="w-8 h-8" />, color: "bg-yellow-100 text-yellow-500" },
  { name: "TypeScript", icon: <Code className="w-8 h-8" />, color: "bg-blue-100 text-blue-500" },
  { name: "React", icon: <Cpu className="w-8 h-8" />, color: "bg-cyan-100 text-cyan-500" },
  { name: "Next.js", icon: <Server className="w-8 h-8" />, color: "bg-gray-100 text-gray-700" },
  { name: "Node.js", icon: <Server className="w-8 h-8" />, color: "bg-green-100 text-green-500" },
  { name: "Tailwind CSS", icon: <Layout className="w-8 h-8" />, color: "bg-sky-100 text-sky-500" },
  { name: "Responsive Design", icon: <Smartphone className="w-8 h-8" />, color: "bg-purple-100 text-purple-500" },
  { name: "Git/GitHub", icon: <GitBranch className="w-8 h-8" />, color: "bg-rose-100 text-rose-500" },
  { name: "UI/UX Design", icon: <Figma className="w-8 h-8" />, color: "bg-indigo-100 text-indigo-500" },
  { name: "MongoDB", icon: <Database className="w-8 h-8" />, color: "bg-emerald-100 text-emerald-500" },
  { name: "IoT", icon: <Cpu className="w-8 h-8" />, color: "bg-blue-100 text-blue-700" },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">My Skills</h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto mb-10"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here are the main skills I've
            acquired and refined over the years.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                scale: 1.05,
              }}
              className={`${skill.color} rounded-lg p-6 flex flex-col items-center justify-center shadow-md transition-all duration-300`}
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="font-medium text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

