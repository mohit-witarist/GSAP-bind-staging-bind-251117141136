'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, Play } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const projectsRef = useRef(null)

  useEffect(() => {
    // Title animation
    gsap.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      }
    })

    // Projects animation
    gsap.from(projectsRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 85%",
      }
    })

    // Hover animations
    const projects = projectsRef.current.children
    Array.from(projects).forEach((project) => {
      const image = project.querySelector('.project-image')
      const overlay = project.querySelector('.project-overlay')
      
      project.addEventListener('mouseenter', () => {
        gsap.to(image, { scale: 1.1, duration: 0.5, ease: "power2.out" })
        gsap.to(overlay, { opacity: 1, duration: 0.3 })
      })
      
      project.addEventListener('mouseleave', () => {
        gsap.to(image, { scale: 1, duration: 0.5, ease: "power2.out" })
        gsap.to(overlay, { opacity: 0, duration: 0.3 })
      })
    })

  }, [])

  const projects = [
    {
      title: "Neural Style Transfer",
      description: "Real-time artistic style transfer using convolutional neural networks. Transform any image into artwork with the style of famous paintings.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop&q=80",
      tech: ["PyTorch", "OpenCV", "Flask", "React"],
      github: "#",
      demo: "#"
    },
    {
      title: "Autonomous Drone Navigation",
      description: "Computer vision-based drone navigation system using reinforcement learning. Real-time obstacle avoidance and path planning.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop&q=80",
      tech: ["TensorFlow", "ROS", "Python", "C++"],
      github: "#",
      demo: "#"
    },
    {
      title: "Medical Image Analysis",
      description: "Deep learning system for medical image classification and segmentation. Assists radiologists in early disease detection.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&q=80",
      tech: ["Keras", "DICOM", "Docker", "AWS"],
      github: "#",
      demo: "#"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-darker to-dark">
      <div className="container mx-auto px-6">
        <h2 ref={titleRef} className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>

        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-48 object-cover"
                />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent opacity-0 flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-dark/80 rounded-full hover:bg-primary hover:text-dark transition-all duration-300">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="p-3 bg-dark/80 rounded-full hover:bg-secondary hover:text-dark transition-all duration-300">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-dark rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}
