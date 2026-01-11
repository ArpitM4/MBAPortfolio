'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollScale, setScrollScale] = useState(1);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const imageCenter = rect.top + rect.height / 2;
      const windowCenter = windowHeight / 2;

      const distanceFromCenter = Math.abs(imageCenter - windowCenter);
      const maxDistance = windowHeight;

      const scale = 1.05 - (distanceFromCenter / maxDistance) * 0.2;
      const clampedScale = Math.max(0.85, Math.min(1.05, scale));

      setScrollScale(clampedScale);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const marqueeText = "HUMAN RESOURCES • MARKETING • STRATEGY • LEADERSHIP • CULTURE • ANALYTICS • ";

  return (
    <>
      {/* About Me Section */}
      <section id="about" ref={sectionRef} className="min-h-screen w-full bg-white text-white flex items-center justify-center relative overflow-hidden">
        {/* Straight background shape */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute left-0 right-0 bottom-0 w-full h-full bg-[#1a1a1a] transition-all duration-1500 ease-out ${isVisible ? 'top-0' : 'top-full'
              }`}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-16 flex flex-col items-center">
          <h1
            className={`text-lg min-[425px]:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-relaxed text-center mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            I&apos;m <span className="font-bold">Aditi</span> – currently pursuing my MBA from <span className="font-bold">IIM Sirmaur</span>,
            <br />
            with a focus on Human Resources and Marketing.
          </h1>
          <br />
          <br />
          <p
            className={`text-xs min-[425px]:text-sm md:text-base lg:text-lg font-light text-center mb-10 max-w-4xl transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            My academic and professional experiences have helped me understand how people, processes, and strategy come together to build successful organisations.
            <br /><br />
            I hold a Bachelor’s degree in Commerce and am now developing a deeper understanding of organisational behaviour, talent management, and brand strategy through my MBA.
            <br /><br />
            I am motivated by learning, structured problem-solving, and the opportunity to contribute meaningfully to organisations and communities.
          </p>
          <br />
          <br />



        </div>

        {/* Bottom Section - Scroll to Explore */}
        <div
          className={`hidden sm:flex absolute bottom-8 left-0 right-0 z-20 px-8 justify-center items-center max-w-6xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-12 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
            </div>
            <span className="text-sm text-white/60 uppercase tracking-wider">
              Scroll to Explore
            </span>
          </div>
        </div>
      </section>

      {/* Marquee Text Animation */}
      <div className="w-full bg-gray-100 overflow-hidden py-8 border-y border-gray-300">
        <div className="flex animate-marquee">
          <div className="flex whitespace-nowrap">
            <span className="text-3xl min-[380px]:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight inline-block text-black">
              {marqueeText.repeat(10)}
            </span>
            <span className="text-3xl min-[380px]:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight inline-block text-black">
              {marqueeText.repeat(10)}
            </span>
          </div>
        </div>
      </div>

      {/* Profile Image Section */}
      <section className="w-full bg-gray-100 py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-md mx-auto">
          <div
            className={`w-full transition-all duration-1500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
              <div
                ref={imageRef}
                className="absolute inset-0 transition-transform duration-300 ease-out"
              >
                <Image
                  src="/profile.png"
                  alt="Aditi Jatav"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Values in Action & Learning Section */}
      <section className="w-full bg-gray-100 py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column - Values in Action */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">Values in Practice</h2>

              <div className="space-y-6">
                {[
                  { title: "Ownership", desc: "I take responsibility for outcomes, not just tasks." },
                  { title: "Integrity", desc: "I value transparency, trust, and ethical behaviour." },
                  { title: "Learning", desc: "I actively seek feedback and continuously improve." },
                  { title: "Empathy", desc: "I aim to understand people before making decisions." }
                ].map((item, i) => (
                  <div key={i} className="border-t border-black/10 pt-4">
                    <h3 className="text-lg font-medium text-black">{item.title}</h3>
                    <p className="text-black/60 font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Learning & Development + Beyond Work */}
            <div className="space-y-12">
              {/* Learning */}
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-light text-black mb-6">Learning & Development</h2>
                <ul className="space-y-4">
                  {[
                    "Digital Marketing (HubSpot)",
                    "HR Simulation (GE Aerospace via Forage)",
                    "Continuous learning in analytics and organisational behaviour"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-black/80 font-light text-lg">
                      <span className="w-1.5 h-1.5 bg-black rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Beyond Work */}
              <div className="space-y-6 pt-8 border-t border-black/20">
                <h2 className="text-2xl font-light text-black mb-4">Beyond Work</h2>
                <p className="text-lg leading-relaxed text-black/80 font-light">
                  I enjoy dance, creative expression through makeup artistry, and volunteering for social causes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
