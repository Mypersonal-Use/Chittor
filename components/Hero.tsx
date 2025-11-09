'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  interface Particle {
    id: number
    x: number
    y: number
    delay: number
  }

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-green/10 via-white to-primary-blue/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Solar Panel Grid */}
        <div className="absolute top-20 left-10 w-32 h-32 opacity-20">
          <div className="grid grid-cols-4 gap-1">
            {Array.from({ length: 16 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-primary-blue rounded-sm"
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
                style={{ height: '20px' }}
              />
            ))}
          </div>
        </div>

        {/* Floating Particles (Leaves/Solar Rays) */}
        {particles.map((particle: Particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-primary-green rounded-full opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(particle.id) * 20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + particle.delay,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}

        {/* Tree Silhouettes */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-64 opacity-10"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <svg viewBox="0 0 1200 200" className="w-full h-full">
            <path
              d="M100,200 L100,120 Q80,80 100,60 Q120,40 100,20 Q90,0 100,0 L110,0 Q120,20 110,40 Q130,60 110,80 Q90,120 110,200 Z"
              fill="currentColor"
              className="text-primary-green"
            />
            <path
              d="M300,200 L300,100 Q280,60 300,40 Q320,20 300,0 L310,0 Q320,20 310,40 Q330,60 310,100 Q290,140 310,200 Z"
              fill="currentColor"
              className="text-primary-green"
            />
          </svg>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Project Chittoor</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-gray mb-8 font-light"
          >
            Rooted in Sustainability, Where the Farmers are the Future
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-slate-dark mb-12 max-w-2xl mx-auto"
          >
            A rural renaissance initiative by Atria Group
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#blueprint"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-green text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              Discover the Vision
              <ArrowRight size={20} />
            </motion.a>

            <motion.a
              href="#partners"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-blue px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow border-2 border-primary-blue"
            >
              Partner With Us
              <Play size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-gray rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-slate-gray rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
