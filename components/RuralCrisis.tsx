'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Droplet, TrendingDown, Users, BookOpen, Cloud } from 'lucide-react'

export default function RuralCrisis() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const crises = [
    {
      icon: Droplet,
      title: 'Water Stress',
      description: 'Depleting groundwater levels, water scarcity affecting agriculture',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingDown,
      title: 'Soil Exhaustion',
      description: 'Degraded soil health, declining fertility, unsustainable farming practices',
      color: 'from-amber-600 to-orange-600',
    },
    {
      icon: Users,
      title: 'Rural Migration',
      description: 'Youth and families moving to cities, leaving villages behind',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: BookOpen,
      title: 'Disrupted Education',
      description: 'Limited access to quality education, lack of digital infrastructure',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Cloud,
      title: 'Climate Pressure',
      description: 'Extreme weather events, unpredictable monsoons, crop failures',
      color: 'from-gray-600 to-slate-600',
    },
  ]

  return (
    <section id="crisis" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Rural Crisis <span className="text-red-600">— Why Now?</span>
          </h2>
          <p className="text-lg text-slate-gray">
            Rural India faces unprecedented challenges. But within every crisis lies opportunity.
            Project Chittoor is our response to these urgent needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crises.map((crisis, index) => {
            const Icon = crisis.icon
            return (
              <motion.div
                key={crisis.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${crisis.color} rounded-full flex items-center justify-center mb-4 mx-auto`}
                >
                  <Icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-center text-slate-dark">
                  {crisis.title}
                </h3>
                <p className="text-slate-gray text-center">{crisis.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Hope Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-dark p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Urgency + Hope = Action
            </h3>
            <p className="text-lg text-gray-200">
              The challenges are real, but so is our commitment. Project Chittoor transforms
              these crises into opportunities for sustainable, scalable rural transformation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
