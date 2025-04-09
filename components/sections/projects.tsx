"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Tire Wear Out Classification",
    description: "Developed an AI model to classify four-wheeler tires into four wear levels using image data. Used traditional ML and CNNs with features like HOG and Haralick. Trained on real-world tire images from Indian roads for predictive maintenance and safety applications",
    image: "/th.jpeg?height=400&width=600",
    tags: ["python", "Treditional ML models", "Flask", "CNN", "HOG", "Haralick"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Using Python To Work Easier For Watchman",
    description: "Developed a Python-based surveillance tool that leverages a webcam to monitor real-time activity. This system can detect motion or presence, helping watchmen automate routine checks and reduce manual workload. Ideal for enhancing security in homes, offices, and gated premises.",
    image: "/Screenshot 2025-04-08 220829.png?height=400&width=600",
    tags: ["Python", "OpenCV", "NumPy", "Tkinter","Threading","CSV / SQLite"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "IoT projects",
    description: "Designed and developed intelligent IoT solutions using advanced microcontrollers like ESP32 and Raspberry Pi, integrated with various environmental and biometric sensors. Leveraged communication protocols such as MQTT and HTTP for efficient data transmission. Real-time sensor data was visualized on responsive dashboards built with React.js and Tailwind CSS. Cloud integration using Firebase and AWS IoT Core enabled remote access and control. Implemented edge computing with MicroPython and TensorFlow Lite for on-device decision-making. Employed Node.js and Flask for backend APIs and data processing, with MongoDB for scalable data storage. These systems were built with reliability, scalability, and real-world deployment in mind, bridging hardware-software synergy.",
    image: "/th (1).jpeg?height=400&width=600",
    tags: ["Raspberry Pi 4", "sensors", "Communication Protocols","Cloud Platforms & Databases","Software & Tools","Backend & APIs"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Exam-Portal",
    description: "Developed a modern and responsive exam portal using Next.js for seamless server-side rendering and routing, and Tailwind CSS for a clean, mobile-first UI. The platform allows students to register, log in securely, and take timed quizzes or exams in a distraction-free interface. Admins can manage question banks, assign tests, and view analytics. Integrated MySQL as the relational database to handle user data, exam records, and question management efficiently. Features include role-based access control, real-time exam timer, automatic grading, and result generation. Designed with scalability and user experience in mind, the system ensures smooth navigation and reliable performance.",
    image: "/th (2).jpeg?height=400&width=600",
    tags: ["Frontend", "Backend", "Database","NextAuth.js","MySQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">My Projects</h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto mb-10"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new
            technologies.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-60 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-rose-500 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-rose-500 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

