'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'

export default function Roadmap() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const milestones = [
    {
      phase: 'Q3 2025',
      title: 'Foundation',
      description: 'Initial setup and planning',
      status: 'upcoming',
    },
    {
      phase: 'H2 2025',
      title: '600 Acres',
      description: 'First phase implementation',
      status: 'upcoming',
    },
    {
      phase: '2026',
      title: '6,000 Acres',
      description: 'Scale to 10x coverage',
      status: 'upcoming',
    },
    {
      phase: '2027',
      title: '60,000 Acres',
      description: 'Full scale deployment',
      status: 'upcoming',
    },
  ]

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Roadmap & <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-lg text-slate-gray">
            A phased approach to scale from 600 to 60,000 acres, transforming rural communities
            one milestone at a time.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-green to-primary-blue hidden md:block" />

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.phase}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-green to-primary-blue rounded-full flex items-center justify-center shadow-lg">
                      {milestone.status === 'completed' ? (
                        <CheckCircle className="text-white" size={32} />
                      ) : (
                        <Circle className="text-white" size={32} />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass p-6 rounded-2xl">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm font-semibold text-primary-blue bg-primary-blue/10 px-3 py-1 rounded-full">
                        {milestone.phase}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-dark">{milestone.title}</h3>
                    </div>
                    <p className="text-slate-gray">{milestone.description}</p>
                  </div>

                  {/* Arrow (except last) */}
                  {index < milestones.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      className="hidden md:flex items-center text-primary-green"
                    >
                      <ArrowRight size={24} />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scale Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-primary-green/10 to-primary-blue/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-center mb-6 text-slate-dark">
              Scaling Vision: 600 → 60,000 Acres
            </h3>
            <div className="flex items-end justify-center gap-4 h-32">
              {[600, 6000, 60000].map((acre, index) => (
                <motion.div
                  key={acre}
                  initial={{ height: 0 }}
                  animate={inView ? { height: `${(index + 1) * 33}%` } : {}}
                  transition={{ duration: 1, delay: 1 + index * 0.2 }}
                  className="bg-gradient-to-t from-primary-green to-primary-blue rounded-t-lg flex items-end justify-center text-white font-bold p-2 min-w-[80px]"
                >
                  {acre.toLocaleString()}
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <span className="text-sm text-slate-gray">2025</span>
              <span className="text-sm text-slate-gray">2026</span>
              <span className="text-sm text-slate-gray">2027</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
