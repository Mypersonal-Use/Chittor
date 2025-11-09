'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sprout, Zap, GraduationCap, Umbrella } from 'lucide-react'

export default function Blueprint() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const pillars = [
    {
      icon: Sprout,
      title: 'Sustainable Agriculture',
      description: 'Vertical food forests, integrated livestock, local value-addition',
      color: 'from-green-500 to-emerald-600',
      href: '#pillar-agriculture',
    },
    {
      icon: Zap,
      title: 'Clean Renewable Energy',
      description: 'Agrivoltaics, community solar, farmers as power producers',
      color: 'from-yellow-400 to-orange-500',
      href: '#pillar-energy',
    },
    {
      icon: GraduationCap,
      title: 'Transformative Education',
      description: 'Smart classrooms, AR/VR labs, AI adaptive learning',
      color: 'from-blue-500 to-indigo-600',
      href: '#pillar-education',
    },
    {
      icon: Umbrella,
      title: 'Agro-Wellness Tourism',
      description: 'Homestays, Ayurveda retreats, farm-to-table cuisine',
      color: 'from-purple-500 to-pink-600',
      href: '#pillar-tourism',
    },
  ]

  return (
    <section id="blueprint" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Rural Renaissance <span className="gradient-text">Blueprint</span>
          </h2>
          <p className="text-lg text-slate-gray mb-8">
            Four interconnected pillars that together create a sustainable, scalable model
            for rural transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <a href={pillar.href}>
                  <div className="glass p-8 rounded-2xl h-full cursor-pointer hover:shadow-2xl transition-all">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <Icon className="text-white" size={40} />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-dark group-hover:text-primary-green transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-gray text-lg">{pillar.description}</p>
                    <div className="mt-6 flex items-center text-primary-blue font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More →
                    </div>
                  </div>
                </a>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <motion.a
            href="#pillar-agriculture"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary-blue text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Explore Each Pillar
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
