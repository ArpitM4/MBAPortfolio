'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show menu icon when scrolled past 100px (regardless of scroll direction)
      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Main Navbar - Hidden on mobile (below 500px) */}
      <nav
        className={`w-full h-25 shrink-0 bg-gray-100 fixed top-0 left-0 z-40 transition-transform duration-500 ease-in-out max-[500px]:hidden ${isScrolled ? '-translate-y-full' : 'translate-y-0'
          }`}
      >
        <div className="w-full h-full px-8">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-25 w-25 hover:opacity-70 transition-opacity duration-200">
                <Image
                  src="/AJ.jpg"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              {['Home', 'About', 'Leadership', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                  className="relative text-base font-medium text-black overflow-visible group"
                >
                  <span className="relative z-10 inline-block transition-all duration-300 group-hover:text-black/70">
                    {item.split('').map((char, i) => (
                      <span
                        key={i}
                        className="inline-block group-hover:animate-wave"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Menu Button - Always visible on mobile (below 500px), on scroll for larger screens */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className={`fixed top-6 right-6 z-50 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 ease-out hover:scale-110 hover:shadow-xl 
          max-[500px]:!translate-y-0 max-[500px]:!opacity-100 max-[500px]:!pointer-events-auto
          ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-32 opacity-0 pointer-events-none'}`}
        aria-label="Open menu"
      >
        <div className="flex flex-col items-center justify-center gap-1.5">
          <span className="w-6 h-0.5 bg-black rounded-full transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-black rounded-full transition-all duration-300"></span>
        </div>
      </button>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-60 transition-all duration-700 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        {/* Background Overlay */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-700 ${isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-lg bg-white shadow-2xl transition-transform duration-700 ease-out max-[500px]:max-w-full ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black hover:bg-black/80 flex items-center justify-center transition-all duration-300 hover:rotate-90"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Menu Content */}
          <div className="flex flex-col h-full justify-center px-16 max-[500px]:px-8">
            {/* Menu Items */}
            <nav className="space-y-8 mb-16 max-[500px]:space-y-6">
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block group"
                  style={{
                    animation: isMenuOpen
                      ? `slideInRight 0.5s ease-out ${index * 0.1}s both`
                      : 'none',
                  }}
                >
                  <span className="text-5xl font-bold text-black transition-all duration-300 group-hover:text-gray-600 group-hover:translate-x-4 inline-block max-[500px]:text-4xl">
                    {item.name}
                  </span>
                </a>
              ))}
            </nav>

            {/* Social Links */}
            <div
              className="border-t border-gray-200 pt-8"
              style={{
                animation: isMenuOpen
                  ? 'slideInRight 0.5s ease-out 0.4s both'
                  : 'none',
              }}
            >
              <p className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
                Socials
              </p>
              <div className="flex gap-6 max-[500px]:flex-col max-[500px]:gap-3">
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-black hover:text-gray-600 transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:placements@iimsirmaur.ac.in"
                  className="text-base font-medium text-black hover:text-gray-600 transition-colors duration-300"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
