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
  const contactCardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main heading animation
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

      // Animate social icons
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

      // Contact cards animation
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/aditi-jatav-686bb6317", label: "Linkedin" },
    { icon: Mail, href: "mailto:mba24168@iimsirmaur.ac.in", label: "Email" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Me",
      info: "mba24168@iimsirmaur.ac.in",
      href: "mailto:mba24168@iimsirmaur.ac.in",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      info: "Let's Connect",
      href: "https://www.linkedin.com/in/aditi-jatav-686bb6317",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-white text-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Main Header & Text */}
        <div ref={headingRef} className="space-y-6 sm:space-y-8 flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
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
            className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto"
          >
            <p>I am always open to meaningful conversations, learning opportunities, and collaborations.</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center"
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

        {/* Contact Cards */}
        <div
          ref={contactCardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl"
        >
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="contact-card group relative bg-linear-to-br from-black/5 to-black/2 backdrop-blur-sm border border-black/10 rounded-xl sm:rounded-2xl p-8 hover:border-gray-400/30 hover:bg-black/10 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col items-center text-center"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-gray-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Plus Icon */}
              <motion.div
                className="absolute top-4 right-4 text-black/20 group-hover:text-gray-600/60 transition-colors"
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

              <div className="space-y-4 relative z-10 w-full flex flex-col items-center">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center group-hover:bg-gray-400/10 group-hover:border-gray-400/30 transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-8 h-8 text-gray-600 group-hover:text-gray-700 transition-colors" />
                </motion.div>
                <div>
                  <h3 className="text-black text-lg font-medium mb-1 group-hover:text-gray-700 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 text-base group-hover:text-gray-700 transition-colors break-words">{item.info}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}