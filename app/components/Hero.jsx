'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { Brain, Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

gsap.registerPlugin(TextPlugin)

export default function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const ctaRef = useRef(null)
  const particlesRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    // Create particles
    createParticles()
    
    // Main animation sequence
    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out"
    })
    .to(titleRef.current.querySelector('.typing'), {
      text: "Alex Chen",
      duration: 2,
      ease: "none"
    }, "-=0.5")
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=1")
    .from(descriptionRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    .from(ctaRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.3")

    // Floating animation for brain icon
    gsap.to(".brain-icon", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

    // Continuous particle animation
    gsap.to(".particle", {
      y: "-=100vh",
      duration: gsap.utils.random(10, 20),
      repeat: -1,
      ease: "none",
      stagger: {
        each: 1,
        repeat: -1
      }
    })

  }, [])

  const createParticles = () => {
    const particleCount = 50
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = '100vh'
      particle.style.width = Math.random() * 4 + 2 + 'px'
      particle.style.height = particle.style.width
      particle.style.animationDelay = Math.random() * 10 + 's'
      particlesRef.current.appendChild(particle)
    }
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div ref={particlesRef} className="absolute inset-0 z-0"></div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-darker to-dark opacity-90"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="brain-icon mb-8">
          <Brain size={80} className="mx-auto text-primary animate-pulse-slow" />
        </div>

        <h1 ref={titleRef} className="text-7xl md:text-9xl font-bold mb-6">
          <span className="typing gradient-text"></span>
        </h1>

        <h2 ref={subtitleRef} className="text-2xl md:text-4xl font-light mb-8 text-accent">
          AI/ML Developer & Data Scientist
        </h2>

        <p ref={descriptionRef} className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-300 leading-relaxed">
          Crafting intelligent solutions through deep learning, computer vision, 
          and cutting-edge AI technologies. Transforming data into insights.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-dark font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 glow">
            View My Work
          </button>
          
          <div className="flex gap-4">
            <a href="#" className="p-3 border border-primary/30 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 border border-primary/30 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 border border-primary/30 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </div>
    </section>
  )
}
