'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sprout, Zap, GraduationCap, Umbrella, ArrowRight } from 'lucide-react'

export default function Pillars() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const pillars = [
    {
      id: 'pillar-agriculture',
      icon: Sprout,
      title: 'Agriculture',
      text: 'Vertical forests & livestock.',
      color: 'bg-green-600',
      iconColor: 'text-white',
    },
    {
      id: 'pillar-energy',
      icon: Zap,
      title: 'Clean Energy',
      text: 'Agrivoltaics & solar.',
      color: 'bg-orange-500',
      iconColor: 'text-white',
    },
    {
      id: 'pillar-education',
      icon: GraduationCap,
      title: 'Education',
      text: 'Smart labs & AI.',
      color: 'bg-blue-600',
      iconColor: 'text-white',
    },
    {
      id: 'pillar-tourism',
      icon: Umbrella,
      title: 'Tourism',
      text: 'Retreats & cuisine.',
      color: 'bg-purple-600',
      iconColor: 'text-white',
    },
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${pillar.color} flex items-center justify-center mb-6`}>
                  <Icon className={pillar.iconColor} size={24} />
                </div>

                <h3 className="text-xl font-bold text-slate-dark mb-2">
                  {pillar.title}
                </h3>

                <p className="text-slate-gray text-sm mb-6">
                  {pillar.text}
                </p>

                <button className="flex items-center gap-2 text-sm font-semibold text-slate-dark hover:text-primary-green transition-colors group">
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <button className="px-8 py-3 bg-white border border-slate-200 rounded-full font-semibold text-slate-dark hover:border-primary-green hover:text-primary-green transition-colors shadow-sm flex items-center gap-2">
            Explore Full Details
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
