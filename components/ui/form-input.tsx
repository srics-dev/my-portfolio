"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface FormInputProps {
  id: string
  label: string
  type?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  required?: boolean
  error?: string
  textarea?: boolean
  rows?: number
}

export default function FormInput({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  error,
  textarea = false,
  rows = 4,
}: FormInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>

      <div className="relative">
        {textarea ? (
          <textarea
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            required={required}
            rows={rows}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 ${
              error
                ? "border-rose-500 focus:ring-2 focus:ring-rose-200"
                : "border-gray-300 focus:ring-2 focus:ring-rose-200 focus:border-rose-500"
            }`}
          />
        ) : (
          <input
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 ${
              error
                ? "border-rose-500 focus:ring-2 focus:ring-rose-200"
                : "border-gray-300 focus:ring-2 focus:ring-rose-200 focus:border-rose-500"
            }`}
          />
        )}

        {isFocused && (
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-rose-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-rose-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

