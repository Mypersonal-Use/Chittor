'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Users, Home, Cloud, Zap, Wind } from 'lucide-react'

export default function LivingLab() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const offerings = [
    {
      icon: Home,
      title: 'Access to Land',
      description: 'Real-world testing grounds for agricultural innovations',
    },
    {
      icon: Users,
      title: 'Rural Users & Data',
      description: 'Direct engagement with farming communities and real data',
    },
    {
      icon: TrendingUp,
      title: 'Innovation Sandbox',
      description: 'Platform for piloting and scaling solutions',
    },
  ]

  const technologies = [
    { icon: Cloud, name: 'Drone Technology' },
    { icon: Wind, name: 'IoT Sensors' },
    { icon: Zap, name: 'AI & Machine Learning' },
  ]

  return (
    <section id="living-lab" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Living Lab — <span className="gradient-text">Innovation Sandbox</span>
          </h2>
          <p className="text-lg text-slate-gray mb-8">
            Project Chittoor serves as a real-world laboratory for testing and scaling
            innovative solutions in agriculture, energy, and rural development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {offerings.map((offering, index) => {
            const Icon = offering.icon
            return (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass p-6 rounded-2xl text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-green to-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-dark">{offering.title}</h3>
                <p className="text-slate-gray">{offering.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl mb-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-slate-dark">
            Technologies We're Piloting
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md"
                >
                  <Icon className="text-primary-green" size={24} />
                  <span className="font-semibold text-slate-dark">{tech.name}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-slate-gray mb-6">
            Platform for academic research, startup innovation, and policy development
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary-blue text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Collaborate with Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
