import React from 'react';

/**
 * PROJECT CARD ANIMATION REFERENCE
 * 
 * This component demonstrates all the animations used in the Projects section.
 * Use this as a reference when customizing or debugging animations.
 */

// ============================================
// 1. CARD ENTRANCE ANIMATION (On Scroll)
// ============================================
const cardEntrance = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: index * 0.1 },
  viewport: { once: true }
};

// ============================================
// 2. OVERLAY FADE ANIMATION (On Hover)
// ============================================
const overlayFade = {
  initial: false,
  animate: {
    opacity: hoveredProject === project.id ? 1 : 0
  },
  transition: { duration: 0.4 }
};

// ============================================
// 3. TITLE REVEAL ANIMATION (On Hover)
// ============================================
const titleReveal = {
  initial: false,
  animate: {
    y: hoveredProject === project.id ? 0 : 100
  },
  transition: { 
    duration: 0.6, 
    ease: [0.43, 0.13, 0.23, 0.96], // Custom cubic-bezier easing
    delay: 0.1
  }
};

// ============================================
// 4. DESCRIPTION FADE (On Hover)
// ============================================
const descriptionFade = {
  initial: false,
  animate: {
    opacity: hoveredProject === project.id ? 1 : 0,
    y: hoveredProject === project.id ? 0 : 20
  },
  transition: { 
    duration: 0.5,
    delay: 0.2
  }
};

// ============================================
// 5. TECH BADGES FADE (On Hover)
// ============================================
const techBadgesFade = {
  initial: false,
  animate: {
    opacity: hoveredProject === project.id ? 1 : 0,
    y: hoveredProject === project.id ? 0 : 20
  },
  transition: { 
    duration: 0.5,
    delay: 0.3
  }
};

// ============================================
// 6. BUTTON FADE (On Hover)
// ============================================
const buttonFade = {
  initial: false,
  animate: {
    opacity: hoveredProject === project.id ? 1 : 0,
    y: hoveredProject === project.id ? 0 : 20
  },
  transition: { 
    duration: 0.5,
    delay: 0.4
  }
};

// ============================================
// 7. CORNER DOT ANIMATION (On Hover)
// ============================================
const cornerDot = {
  initial: false,
  animate: {
    scale: hoveredProject === project.id ? 1 : 0,
    opacity: hoveredProject === project.id ? 1 : 0
  },
  transition: { duration: 0.3 }
};

// ============================================
// 8. SECTION HEADER ANIMATION (On Scroll)
// ============================================
const sectionHeader = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true }
};

// ============================================
// TIMING BREAKDOWN
// ============================================
/**
 * Hover Animation Timeline:
 * 
 * 0ms:    Overlay starts fading in
 * 100ms:  Title starts sliding up
 * 200ms:  Description starts fading in
 * 300ms:  Tech badges start fading in
 * 400ms:  Button starts fading in
 * 400ms:  Overlay fully visible
 * 700ms:  Title fully visible
 * 700ms:  Description fully visible
 * 800ms:  Tech badges fully visible
 * 900ms:  Button fully visible
 * 
 * Total Animation: ~900ms
 */

// ============================================
// EASING FUNCTIONS
// ============================================
/**
 * Custom Cubic-Bezier Easings:
 * 
 * [0.43, 0.13, 0.23, 0.96] - Smooth reveal (title)
 * - Creates a slight acceleration at start
 * - Smooth deceleration at end
 * - Professional feel
 * 
 * Default 'easeOut' - General transitions
 * - Standard deceleration curve
 * - Used for most fade/scale animations
 */

// ============================================
// CSS ANIMATIONS (in globals.css)
// ============================================
/**
 * @keyframes textReveal
 * - Slides element up from translateY(100%)
 * - Fades in from opacity 0 to 1
 * 
 * @keyframes shimmer
 * - Creates subtle shine effect
 * - Background position animation
 * - 3s infinite loop
 * 
 * @keyframes projectHover
 * - Gentle scale from 1 to 1.02
 * - Adds subtle lift effect
 */

// ============================================
// PERFORMANCE TIPS
// ============================================
/**
 * 1. Use 'will-change: transform' sparingly
 * 2. Prefer opacity and transform over other properties
 * 3. Set viewport={{ once: true }} for scroll animations
 * 4. Use 'initial: false' to prevent animation on mount
 * 5. Keep transition durations under 1 second
 */

export default function AnimationReference() {
  return (
    <div className="p-8 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Project Card Animation Reference</h2>
      <p className="text-gray-600">
        See code comments above for detailed animation specifications.
        This file serves as documentation for the Projects section animations.
      </p>
      
      <div className="mt-6 space-y-4">
        <div className="bg-white p-4 rounded">
          <h3 className="font-semibold mb-2">Quick Reference</h3>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• Card entrance: 600ms fade + slide</li>
            <li>• Overlay: 400ms fade</li>
            <li>• Title reveal: 600ms slide with custom easing</li>
            <li>• Content fade: 500ms staggered (200-400ms delays)</li>
            <li>• Total hover animation: ~900ms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
