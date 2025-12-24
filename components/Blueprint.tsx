'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sprout, Zap, GraduationCap, Umbrella, ArrowRight, ArrowUpRight } from 'lucide-react'

export default function Blueprint() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const pillars = [
    {
      icon: Sprout,
      title: 'Agriculture',
      subtitle: 'Sustainable Growth',
      description: 'Revolutionizing farming with vertical forests and smart livestock management.',
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-500/10 to-green-600/5',
      href: '#pillar-agriculture',
    },
    {
      icon: Zap,
      title: 'Clean Energy',
      subtitle: 'Powering Future',
      description: 'Harnessing nature with agrivoltaics and advanced solar solutions.',
      gradient: 'from-amber-400 to-orange-500',
      bgGradient: 'from-amber-400/10 to-orange-500/5',
      href: '#pillar-energy',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      subtitle: 'Knowledge Hub',
      description: 'Empowering minds through smart labs and AI-driven learning ecosystems.',
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-500/10 to-indigo-600/5',
      href: '#pillar-education',
    },
    {
      icon: Umbrella,
      title: 'Tourism',
      subtitle: 'Eco Retreats',
      description: 'Curating immersive experiences with nature retreats and local cuisine.',
      gradient: 'from-pink-500 to-rose-600',
      bgGradient: 'from-pink-500/10 to-rose-600/5',
      href: '#pillar-tourism',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  }

  return (
    <section id="blueprint" className="py-32 relative overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary-green/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-primary-blue/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary-green/10 text-primary-green text-sm font-semibold mb-6 tracking-wide uppercase">
            Our Vision
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-slate-dark tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">Blueprint</span>
          </h2>
          <p className="text-xl text-slate-gray leading-relaxed">
            A comprehensive framework designed to transform rural landscapes into thriving, sustainable ecosystems through four key pillars.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className="group relative"
              >
                <a href={pillar.href} className="block h-full">
                  <div className="relative h-full bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                    {/* Hover Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.bgGradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-8">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${pillar.gradient} text-white shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                          <Icon size={28} strokeWidth={1.5} />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 transition-all duration-300 group-hover:bg-white group-hover:text-slate-900 group-hover:shadow-md">
                          <ArrowUpRight size={20} />
                        </div>
                      </div>

                      <div className="mb-auto">
                        <h4 className={`text-sm font-bold uppercase tracking-wider mb-2 bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent`}>
                          {pillar.subtitle}
                        </h4>
                        <h3 className="text-2xl font-bold text-slate-dark mb-4 group-hover:text-slate-900 transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="#pillar-agriculture"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 bg-slate-dark text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-slate-900 transition-all"
          >
            Explore Full Details
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
