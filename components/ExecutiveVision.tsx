'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sprout, Users, TrendingUp, ArrowRight } from 'lucide-react'

export default function ExecutiveVision() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const visionCards = [
    {
      title: 'Soil & Culture',
      icon: Sprout,
      description: 'Regenerating the earth and preserving our heritage.',
      gradient: 'from-emerald-500 to-green-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100',
      text: 'text-emerald-700',
    },
    {
      title: 'Community',
      icon: Users,
      description: 'Empowering farmers to lead the change.',
      gradient: 'from-teal-500 to-cyan-600',
      bg: 'bg-teal-50',
      border: 'border-teal-100',
      text: 'text-teal-700',
    },
    {
      title: 'Prosperity',
      icon: TrendingUp,
      description: 'Creating sustainable wealth for rural families.',
      gradient: 'from-lime-500 to-green-600',
      bg: 'bg-lime-50',
      border: 'border-lime-100',
      text: 'text-lime-700',
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-20 w-72 h-72 bg-primary-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-dark leading-tight">
              Viable. <br />
              Desirable. <br />
              <span className="gradient-text">Sustainable.</span>
            </h2>
            <p className="text-xl text-slate-gray mb-8 leading-relaxed">
              Thriving rural communities led by farmers. We are building a model where economic growth and environmental stewardship go hand in hand.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-1 w-20 bg-primary-green rounded-full" />
              <p className="text-sm font-semibold text-primary-green tracking-widest uppercase">
                Our Vision
              </p>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6">
            {visionCards.map((card, index) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`group relative overflow-hidden rounded-2xl p-6 ${card.bg} border ${card.border} transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-dark mb-2 group-hover:text-primary-green transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-slate-gray font-medium">
                        {card.description}
                      </p>
                    </div>
                    <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0`}>
                      <ArrowRight className={card.text} size={20} />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
