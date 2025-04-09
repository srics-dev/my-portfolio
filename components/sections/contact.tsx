"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import FormInput from "@/components/ui/form-input";
import { validateContactForm } from "@/lib/validation";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Validate form
    const validation = validateContactForm(formState);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    // try {
    //   await new Promise((resolve) => setTimeout(resolve, 1500));
    //   setSubmitSuccess(true);
    //   setFormState({ name: "", email: "", message: "" });

    //   // Reset success message after 5 seconds
    //   setTimeout(() => {
    //     setSubmitSuccess(false);
    //   }, 5000);
    // } catch (error) {
    //   setSubmitError("There was an error submitting the form. Please try again.");
    // } finally {
    //   setIsSubmitting(false);
    // }

    // **Formspree Integration**
    try {
      const res = await fetch("https://formspree.io/f/xpzvpvae", { // Replace with your Formspree form ID
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (res.ok) {
        setSubmitSuccess(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error:unknown) { // Use 'any' or a more specific error type if you know it
      setSubmitError("There was an error submitting the form. Please try again.");
      console.error("Form submission error:", error); // Log the error for debugging
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto mb-10"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out
            to me using the form below or through my contact information.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <motion.div
              ref={ref}
              className="md:w-2/5"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Contact Information
              </h3>

              <motion.div className="flex items-start mb-6" variants={itemVariants}>
                <div className="bg-rose-100 dark:bg-rose-900/30 p-3 rounded-full mr-4">
                  <Mail className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Email
                  </h4>
                  <a
                    href="mshrikanth315@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
                  >
                    mshrikanth315@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-start mb-6" variants={itemVariants}>
                <div className="bg-rose-100 dark:bg-rose-900/30 p-3 rounded-full mr-4">
                  <Phone className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Phone
                  </h4>
                  <a
                    href="tel:+919019675683"
                    className="text-gray-600 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
                  >
                    +919019675683
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="bg-rose-100 dark:bg-rose-900/30 p-3 rounded-full mr-4">
                  <MapPin className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Karnataka, India
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:w-3/5"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6"
              >
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Thank you for your message! I'll get back to you soon.
                  </motion.div>
                )}

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg"
                  >
                    {submitError}
                  </motion.div>
                )}

                <FormInput
                  id="name"
                  label="Name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  error={formErrors.name}
                />

                <FormInput
                  id="email"
                  label="Email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                  error={formErrors.email}
                />

                <FormInput
                  id="message"
                  label="Message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                  textarea
                  rows={5}
                  error={formErrors.message}
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-70"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}