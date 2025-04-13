"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Working with John was an absolute pleasure. His attention to detail and technical expertise helped us launch our platform ahead of schedule. I highly recommend his services to anyone looking for a skilled web developer.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager at DevCorp",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "John's ability to translate our complex requirements into a beautiful, functional website exceeded our expectations. His communication throughout the project was excellent, and he was always willing to go the extra mile.",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder of DesignHub",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "I've worked with many developers over the years, but John stands out for his creativity and problem-solving skills. He not only delivered exactly what we needed but also suggested improvements we hadn't considered.",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Client Testimonials</h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto mb-10"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here is what some of my clients have to say about working with me.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="absolute top-6 left-6 text-rose-500 opacity-20">
              <Quote size={60} />
            </div>

            <div className="relative z-10">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                  {testimonials[currentIndex].content}
                </p>

                <div className="flex items-center">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-between mt-6">
              <motion.button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-rose-100 hover:text-rose-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </motion.button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-rose-500" : "bg-gray-300"}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-rose-100 hover:text-rose-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

