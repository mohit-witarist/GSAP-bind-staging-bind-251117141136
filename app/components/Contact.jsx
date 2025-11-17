'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)

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

    // Form animation
    gsap.from(formRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 85%",
      }
    })

    // Info animation
    gsap.from(infoRef.current.children, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: infoRef.current,
        start: "top 85%",
      }
    })

  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-dark to-darker">
      <div className="container mx-auto px-6">
        <h2 ref={titleRef} className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text">
          Let's Connect
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div ref={formRef} className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-white">Send me a message</h3>
            
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Subject</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                placeholder="Project collaboration"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea 
                rows="5"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button className="w-full py-3 bg-gradient-to-r from-primary to-accent text-dark font-semibold rounded-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group">
              <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              Send Message
            </button>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-white">Get in touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <Mail className="text-primary" size={24} />
                <div>
                  <p className="text-gray-300">Email</p>
                  <p className="text-white">alex.chen@aidev.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <Phone className="text-primary" size={24} />
                <div>
                  <p className="text-gray-300">Phone</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <MapPin className="text-primary" size={24} />
                <div>
                  <p className="text-gray-300">Location</p>
                  <p className="text-white">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
              <h4 className="text-xl font-semibold text-white mb-3">Ready to collaborate?</h4>
              <p className="text-gray-300 leading-relaxed">
                I'm always interested in discussing new projects, creative ideas, 
                or opportunities to be part of your vision. Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
