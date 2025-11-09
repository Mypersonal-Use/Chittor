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
    <section id="partners" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
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
            Together, we can co-create rural India's future. Join us in transforming
            communities and building a sustainable, scalable model for rural renaissance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stakeholders.map((stakeholder, index) => {
            const Icon = stakeholder.icon
            return (
              <motion.div
                key={stakeholder.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${stakeholder.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-dark">{stakeholder.title}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-primary-green mb-1">We Offer:</p>
                    <p className="text-slate-gray text-sm">{stakeholder.offer}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-blue mb-1">We Need:</p>
                    <p className="text-slate-gray text-sm">{stakeholder.need}</p>
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
          <div className="glass-dark p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Invitation to Co-Create
            </h3>
            <p className="text-lg text-gray-200 mb-6">
              Join us in building a scalable, sustainable model for rural transformation.
              Together, we can create lasting impact for farmers, families, and future generations.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary-green text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Partner With Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
