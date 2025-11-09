'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, GraduationCap, Zap, Wifi, UtensilsCrossed, Heart } from 'lucide-react'

export default function AboutAtria() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const initiatives = [
    {
      icon: GraduationCap,
      name: 'Atria University',
      description: 'Higher education excellence',
    },
    {
      icon: GraduationCap,
      name: 'AIT',
      description: 'Academic innovation',
    },
    {
      icon: Wifi,
      name: 'ACT Fibernet',
      description: 'Digital connectivity',
    },
    {
      icon: Zap,
      name: 'Atria Power',
      description: 'Clean energy solutions',
    },
    {
      icon: UtensilsCrossed,
      name: 'Farmlore',
      description: 'Agri-food innovations',
    },
    {
      icon: Heart,
      name: 'Atria Foundation',
      description: 'Social impact',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Building2 className="text-primary-green" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              About Atria Group
            </h2>
          </div>
          <p className="text-xl text-slate-dark mb-4 font-light">
            70+ Years of Credibility
          </p>
          <p className="text-lg text-slate-gray">
            Atria Group has been a trusted name in education, clean energy, broadband,
            hospitality, and philanthropy for over seven decades. Project Chittoor represents
            our commitment to sustainable rural transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon
            return (
              <motion.div
                key={initiative.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-green to-primary-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-slate-dark mb-1 text-sm">{initiative.name}</h3>
                <p className="text-xs text-slate-gray">{initiative.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-dark p-8 rounded-2xl max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Our Commitment
          </h3>
          <p className="text-lg text-gray-200">
            With 70+ years of institutional strength, Atria Group brings credibility,
            expertise, and long-term vision to Project Chittoor. We're not just building
            a project—we're creating a scalable model for rural India's future.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
