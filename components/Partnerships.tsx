'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, TrendingUp, Users, GraduationCap, Heart } from 'lucide-react'

export default function Partnerships() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stakeholders = [
    {
      icon: Building2,
      title: 'CSR Bodies',
      offer: 'Scalable impact, measurable outcomes',
      need: 'Funding, expertise, network',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: TrendingUp,
      title: 'Startups',
      offer: 'Real-world testing, user access, data',
      need: 'Innovation, technology solutions',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Users,
      title: 'Government',
      offer: 'Proven model, scalability framework',
      need: 'Policy support, infrastructure',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Heart,
      title: 'Investors',
      offer: 'Sustainable returns, social impact',
      need: 'Capital, long-term vision',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      icon: GraduationCap,
      title: 'Academia',
      offer: 'Research opportunities, field data',
      need: 'Research, knowledge, expertise',
      color: 'from-cyan-500 to-blue-600',
    },
  ]

  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Users className="text-primary-green" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Partnerships We Seek
            </h2>
          </div>
          <p className="text-lg text-slate-gray">
            Co-creating rural India's future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stakeholders.map((stakeholder, index) => {
            const Icon = stakeholder.icon
            return (
              <motion.div
                key={stakeholder.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100"
              >
                {/* Top Gradient Bar */}
                <div className={`h-2 w-full bg-gradient-to-r ${stakeholder.color}`} />

                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stakeholder.color} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Partner</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-slate-dark group-hover:text-primary-green transition-colors">
                    {stakeholder.title}
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-xl group-hover:bg-primary-green/5 transition-colors">
                      <p className="text-xs font-bold text-primary-green uppercase mb-1">We Offer</p>
                      <p className="text-slate-gray text-sm font-medium">{stakeholder.offer}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl group-hover:bg-primary-blue/5 transition-colors">
                      <p className="text-xs font-bold text-primary-blue uppercase mb-1">We Need</p>
                      <p className="text-slate-gray text-sm font-medium">{stakeholder.need}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="relative overflow-hidden rounded-3xl bg-primary-green p-10 shadow-2xl max-w-4xl mx-auto">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Co-Create?
              </h3>
              <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                Join us in building a scalable model for rural transformation.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-primary-green px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Partner With Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
