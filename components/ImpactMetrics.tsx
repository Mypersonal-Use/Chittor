'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { TrendingUp, Users, Droplets, Leaf, Zap } from 'lucide-react'

export default function ImpactMetrics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const metrics = [
    {
      icon: TrendingUp,
      label: 'Scale Timeline',
      value: 60000,
      suffix: ' acres',
      description: '600 → 60,000 acres',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: TrendingUp,
      label: 'Revenue Uplift',
      value: 5,
      suffix: 'x',
      description: '4–5x revenue increase',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Users,
      label: 'Families Impacted',
      value: 2000,
      suffix: '',
      description: 'Phase one beneficiaries',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Droplets,
      label: 'Groundwater Recovery',
      value: 200,
      suffix: ' ft',
      description: 'From 800ft → <200ft',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Leaf,
      label: 'Carbon Offset',
      value: 1000,
      suffix: '+ tons',
      description: 'Annual carbon sequestration',
      color: 'from-green-400 to-teal-600',
    },
  ]

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-primary-green/10 to-primary-blue/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Impact <span className="gradient-text">Metrics</span>
          </h2>
          <p className="text-lg text-slate-gray">
            Measurable outcomes that demonstrate the transformative power of Project Chittoor
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-dark">
                  {inView && (
                    <CountUp
                      start={0}
                      end={metric.value}
                      duration={2.5}
                      separator=","
                      suffix={metric.suffix}
                    />
                  )}
                </h3>
                <p className="text-lg font-semibold text-slate-gray mb-2">{metric.label}</p>
                <p className="text-sm text-slate-gray">{metric.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Carbon Offset Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="glass-dark p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Zap className="text-primary-green" size={32} />
              <h3 className="text-2xl font-bold text-white">Carbon Offset Dashboard</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-green mb-2">
                  {inView && <CountUp start={0} end={1000} duration={2} suffix="+" />}
                </div>
                <p className="text-gray-300">Tons CO₂ Sequestered</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-green mb-2">
                  {inView && <CountUp start={0} end={6} duration={2} suffix=" MW" />}
                </div>
                <p className="text-gray-300">Renewable Energy Generated</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-green mb-2">
                  {inView && <CountUp start={0} end={600} duration={2} suffix=" acres" />}
                </div>
                <p className="text-gray-300">Land Under Restoration</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
