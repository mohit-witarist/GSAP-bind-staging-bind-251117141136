'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const skillsRef = useRef(null)

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

    // Skills animation
    const skillBars = skillsRef.current.querySelectorAll('.skill-bar')
    const skillLabels = skillsRef.current.querySelectorAll('.skill-label')
    
    gsap.from(skillLabels, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 85%",
      }
    })

    skillBars.forEach((bar, index) => {
      const fill = bar.querySelector('.skill-fill')
      const percentage = fill.dataset.percentage
      
      gsap.fromTo(fill, 
        { width: "0%" },
        {
          width: percentage + "%",
          duration: 1.5,
          ease: "power3.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: bar,
            start: "top 85%",
          }
        }
      )
    })

  }, [])

  const skills = [
    { name: "Python", percentage: 95, color: "from-primary to-blue-400" },
    { name: "TensorFlow/Keras", percentage: 90, color: "from-orange-400 to-red-400" },
    { name: "PyTorch", percentage: 88, color: "from-red-400 to-pink-400" },
    { name: "Computer Vision", percentage: 92, color: "from-green-400 to-emerald-400" },
    { name: "Natural Language Processing", percentage: 85, color: "from-purple-400 to-indigo-400" },
    { name: "Deep Learning", percentage: 93, color: "from-yellow-400 to-orange-400" },
    { name: "Data Science", percentage: 87, color: "from-pink-400 to-rose-400" },
    { name: "MLOps", percentage: 82, color: "from-cyan-400 to-blue-400" }
  ]

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <h2 ref={titleRef} className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text">
          Technical Skills
        </h2>

        <div ref={skillsRef} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="skill-label flex justify-between items-center">
                  <span className="text-white font-medium text-lg">{skill.name}</span>
                  <span className="text-gray-400">{skill.percentage}%</span>
                </div>
                <div className="skill-bar h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className={`skill-fill h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    data-percentage={skill.percentage}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-accent">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Docker", "Kubernetes", "AWS", "GCP", "MongoDB", "PostgreSQL", "Redis", "Git", "Linux", "Jupyter"].map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full border border-gray-600 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
