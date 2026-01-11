'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Leadership from '@/components/Leadership';
import FocusAreas from '@/components/FocusAreas';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame to avoid cascading renders
    const timer = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="h-screen w-full flex flex-col bg-gray-50">
        <Navbar />

        <div className="flex-1 relative overflow-hidden">
          {/* Background SVG */}
          <div className="absolute inset-0 w-full h-full opacity-30">
            <Image
              src="/homepage-bg.svg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Left social icons - Hidden or updated? Keeping removed for now as per "Professional" vibe or keep LinkedIn/Email if desired, but user said "Optionally: Insights / Writing (later)". I'll hide the generic ones for now or keep minimal. */}
          {/* Removing social icons sidebar for a cleaner look, can be re-added if requested. Relying on Contact section for socials. */}

          {/* Right vertical text */}
          <div className="vertical-text-right absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <div className="writing-mode-vertical text-sm tracking-[0.3em] text-black/60 uppercase">
              Aditi Jatav
            </div>
          </div>

          {/* Main content */}
          <div className="flex items-center justify-center h-full relative">
            <div className="text-center relative z-10 max-w-5xl px-4">
              {/* Hi text */}
              <p className={`text-base md:text-lg min-[1080px]:text-xl mb-4 font-light text-black transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}>
                MBA Candidate | Human Resources & Marketing
              </p>

              {/* Main heading */}
              <div className="relative">
                <h1 className={`text-5xl md:text-6xl min-[1080px]:text-8xl font-light leading-tight mb-6 text-black transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`}>
                  <span className="block">Aditi Jatav</span>
                </h1>

                {/* Core Values / Subheading */}
                <p className={`text-lg md:text-xl min-[1080px]:text-2xl font-light text-black/70 mt-6 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`}>
                  &ldquo;I am a management graduate with a strong interest in people, culture, and business strategy. I aim to build organisations where performance and empathy go together.&rdquo;
                </p>

                {/* New Core Values List */}
                <div className={`mt-8 flex flex-wrap justify-center gap-4 md:gap-8 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`}>
                  {['Integrity', 'Ownership', 'Learning', 'Collaboration'].map((value) => (
                    <span key={value} className="text-sm md:text-base uppercase tracking-widest text-black/60 border border-black/10 px-4 py-2 rounded-full">
                      {value}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Leadership Section - New */}
      <Leadership />

      {/* Focus Areas - New */}
      <FocusAreas />

      {/* Experience Section (Replaces Projects) */}
      <Experience />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

    </div>
  );
}
