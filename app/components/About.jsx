'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, Database, Cpu, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const cardsRef = useRef(null)

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

    // Content animation
    gsap.from(contentRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 85%",
      }
    })

    // Cards animation
    gsap.from(cardsRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 85%",
      }
    })

    // Floating cards animation
    gsap.to(cardsRef.current.children, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    })

  }, [])

  const features = [
    {
      icon: <Brain size={40} />,
      title: "Deep Learning",
      description: "Neural networks, CNNs, RNNs, and transformer architectures for complex pattern recognition."
    },
    {
      icon: <Code2 size={40} />,
      title: "MLOps",
      description: "End-to-end ML pipelines, model deployment, monitoring, and continuous integration."
    },
    {
      icon: <Database size={40} />,
      title: "Big Data",
      description: "Distributed computing, data engineering, and scalable analytics solutions."
    },
    {
      icon: <Zap size={40} />,
      title: "AI Research",
      description: "Cutting-edge research in computer vision, NLP, and reinforcement learning."
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 ref={titleRef} className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text">
          About Me
        </h2>

        <div ref={contentRef} className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
            I'm a passionate AI/ML developer with 5+ years of experience in building intelligent systems 
            that solve real-world problems. My expertise spans across machine learning, deep learning, 
            and data science with a focus on computer vision and natural language processing.
          </p>
          
          <div className="code-block text-left">
            <pre className="text-primary text-sm md:text-base">
{`class AIMLDeveloper:
    def __init__(self):
        self.name = "Alex Chen"
        self.skills = ["Python", "TensorFlow", "PyTorch", "Docker"]
        self.passion = "Solving complex problems with AI"
    
    def create_intelligence(self, data):
        model = self.design_architecture(data)
        return self.train_and_optimize(model)`}
            </pre>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
