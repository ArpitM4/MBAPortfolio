"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const contactCardsRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background heading animation with scale and opacity
      gsap.fromTo(
        ".bg-text",
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 0.15,
          y: 0,
          scale: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Continuous subtle scale pulse for background text
      gsap.to(".bg-text", {
        scale: 1.02,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Main heading animation with enhanced effects
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 50,
          rotateX: -15,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      // Animate feature items individually
      gsap.fromTo(
        ".feature-item",
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".feature-item",
            start: "top 85%",
          },
        }
      );

      // Animate social icons with rotation
      gsap.fromTo(
        ".social-icon",
        {
          opacity: 0,
          scale: 0,
          rotate: -180,
        },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".social-icon",
            start: "top 85%",
          },
        }
      );

      // Form animation with 3D rotation
      gsap.fromTo(
        formRef.current,
        {
          opacity: 0,
          x: 50,
          rotateY: 15,
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          },
        }
      );

      // Form inputs glow animation
      gsap.fromTo(
        ".form-input",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
          },
        }
      );

      // Contact cards animation with enhanced effects
      gsap.fromTo(
        ".contact-card",
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: contactCardsRef.current,
            start: "top 90%",
          },
        }
      );

      // Floating animation for decorative elements
      gsap.to(".floating", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "3e1cb8dc-c136-4a95-8249-75deb2e6f616", // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Contact Form Submission from Portfolio",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    "Personalized assistance",
    "Timely response",
    "Comprehensive support",
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/", label: "Linkedin" },
    { icon: Mail, href: "mailto:placements@iimsirmaur.ac.in", label: "Email" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Me",
      info: "placements@iimsirmaur.ac.in",
      href: "mailto:placements@iimsirmaur.ac.in",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      info: "Lets Connect",
      href: "https://www.linkedin.com/",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-white text-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 mb-12 sm:mb-16 md:mb-20">
          {/* Left Side - Text & Social */}
          <div ref={headingRef} className="space-y-6 sm:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
                Reach out{" "}
                <span className="inline-block">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0"
            >
              <p>I am always open to meaningful conversations, learning opportunities, and collaborations.</p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-2 sm:space-y-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-item flex items-center gap-2 sm:gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black/10 flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black" />
                  </motion.div>
                  <span className="text-gray-600 text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="social-icon w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-black/5 border border-black/10 flex items-center justify-center hover:bg-black/10 hover:border-black/20 transition-all duration-300 group relative overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-gray-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-black transition-colors relative z-10" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <div ref={formRef} className="flex justify-center lg:justify-start">
            <motion.form
              onSubmit={handleSubmit}
              className="bg-gray-50/80 backdrop-blur-sm border border-black/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 space-y-5 sm:space-y-6 shadow-xl shadow-black/5 w-full max-w-2xl lg:max-w-none"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <motion.div
                  className="form-input relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black/5 border border-black/10 rounded-lg sm:rounded-xl text-black text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-gray-400/50 focus:bg-black/10 focus:shadow-lg focus:shadow-gray-400/20 transition-all duration-300"
                  />
                </motion.div>
                <motion.div
                  className="form-input relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black/5 border border-black/10 rounded-lg sm:rounded-xl text-black text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-gray-400/50 focus:bg-black/10 focus:shadow-lg focus:shadow-gray-400/20 transition-all duration-300"
                  />
                </motion.div>
              </div>

              {/* Message */}
              <motion.div
                className="form-input relative"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black/5 border border-black/10 rounded-lg sm:rounded-xl text-black text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-gray-400/50 focus:bg-black/10 focus:shadow-lg focus:shadow-gray-400/20 transition-all duration-300 resize-none"
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 sm:py-4 bg-black text-white rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-800 transition-all duration-300 relative overflow-hidden group shadow-xl shadow-black/10 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                <span className="relative z-10">
                  {isSubmitting ? "Sending..." : "Submit"}
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm sm:text-base text-center"
                >
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm sm:text-base text-center"
                >
                  ✗ Something went wrong. Please try again.
                </motion.div>
              )}
            </motion.form>
          </div>
        </div>

        {/* Contact Cards */}
        <div
          ref={contactCardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="contact-card group relative bg-linear-to-br from-black/5 to-black/2 backdrop-blur-sm border border-black/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-gray-400/30 hover:bg-black/10 transition-all duration-300 cursor-pointer overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-gray-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Plus Icon with rotation animation */}
              <motion.div
                className="absolute top-6 right-6 text-black/20 group-hover:text-gray-600/60 transition-colors"
                whileHover={{ rotate: 90, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </motion.div>

              <div className="space-y-4 relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-black/5 border border-black/10 flex items-center justify-center group-hover:bg-gray-400/10 group-hover:border-gray-400/30 transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-5 h-5 text-gray-600 group-hover:text-gray-700 transition-colors" />
                </motion.div>
                <div>
                  <h3 className="text-black font-medium mb-1 group-hover:text-gray-700 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">{item.info}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}