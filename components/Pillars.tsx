'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sprout, Zap, GraduationCap, Umbrella, TrendingUp, Droplets, Wind, Users, Home, UtensilsCrossed } from 'lucide-react'

export default function Pillars() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sustainable Agriculture */}
        <div id="pillar-agriculture" className="mb-32 scroll-mt-20" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <Sprout className="text-white" size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                Sustainable Agriculture
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-dark">Key Features</h3>
                <ul className="space-y-4 text-slate-gray">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="text-primary-green mt-1" size={20} />
                    <span><strong>Vertical food forests</strong> — Multi-layered agroforestry systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="text-primary-green mt-1" size={20} />
                    <span><strong>Integrated livestock</strong> — Synergistic farming practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sprout className="text-primary-green mt-1" size={20} />
                    <span><strong>Local value-addition</strong> — Cold chain & processing facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Droplets className="text-primary-green mt-1" size={20} />
                    <span><strong>Soil regeneration</strong> — Biodiversity restoration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4 text-slate-dark">Impact</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-gray">Revenue per acre/year</span>
                    <span className="text-2xl font-bold text-primary-green">₹30k → ₹1 lakh+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-gray">Soil Health</span>
                    <span className="text-2xl font-bold text-primary-green">Regenerated</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-gray">Biodiversity</span>
                    <span className="text-2xl font-bold text-primary-green">Restored</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Clean Renewable Energy */}
        <div id="pillar-energy" className="mb-32 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                <Zap className="text-white" size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                Clean Renewable Energy
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-dark">Key Features</h3>
                <ul className="space-y-4 text-slate-gray">
                  <li className="flex items-start gap-3">
                    <Zap className="text-yellow-500 mt-1" size={20} />
                    <span><strong>Agrivoltaics</strong> — Solar panels above crops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Wind className="text-yellow-500 mt-1" size={20} />
                    <span><strong>Community solar & microgrids</strong> — Local power generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="text-yellow-500 mt-1" size={20} />
                    <span><strong>Farmers as power producers</strong> — Dual revenue streams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="text-yellow-500 mt-1" size={20} />
                    <span><strong>Scalable infrastructure</strong> — From farm to grid</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4 text-slate-dark">Impact</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-gray">Energy Capacity</span>
                    <span className="text-2xl font-bold text-yellow-600">6MW in 600 acres</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-gray">Revenue Model</span>
                    <span className="text-2xl font-bold text-yellow-600">Dual Streams</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-gray">Carbon Offset</span>
                    <span className="text-2xl font-bold text-yellow-600">Significant</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Transformative Education */}
        <div id="pillar-education" className="mb-32 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                Transformative Education
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-dark">Key Features</h3>
                <ul className="space-y-4 text-slate-gray">
                  <li className="flex items-start gap-3">
                    <GraduationCap className="text-primary-blue mt-1" size={20} />
                    <span><strong>Smart classrooms</strong> — Digital infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="text-primary-blue mt-1" size={20} />
                    <span><strong>AR/VR labs</strong> — Immersive learning experiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="text-primary-blue mt-1" size={20} />
                    <span><strong>Mentorship & STEM exchange</strong> — Expert guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="text-primary-blue mt-1" size={20} />
                    <span><strong>AI adaptive learning</strong> — Personalized education</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4 text-slate-dark">Impact</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-gray">Youth Empowerment</span>
                    <span className="text-2xl font-bold text-primary-blue">Stay & Lead</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-gray">Access to Quality Education</span>
                    <span className="text-2xl font-bold text-primary-blue">Enhanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-gray">Digital Literacy</span>
                    <span className="text-2xl font-bold text-primary-blue">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Agro-Wellness Tourism */}
        <div id="pillar-tourism" className="mb-32 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <Umbrella className="text-white" size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                Agro-Wellness Tourism
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-dark">Key Features</h3>
                <ul className="space-y-4 text-slate-gray">
                  <li className="flex items-start gap-3">
                    <Home className="text-purple-500 mt-1" size={20} />
                    <span><strong>Homestays</strong> — Authentic rural experiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sprout className="text-purple-500 mt-1" size={20} />
                    <span><strong>Ayurveda retreats</strong> — Wellness & healing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <UtensilsCrossed className="text-purple-500 mt-1" size={20} />
                    <span><strong>Farm-to-table cuisine</strong> — Fresh, local food</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="text-purple-500 mt-1" size={20} />
                    <span><strong>Cultural & craft tourism</strong> — Preserve heritage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4 text-slate-dark">Impact</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-gray">Villages as Destinations</span>
                    <span className="text-2xl font-bold text-purple-600">Transformed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-gray">Local Economy</span>
                    <span className="text-2xl font-bold text-purple-600">Boosted</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-gray">Cultural Preservation</span>
                    <span className="text-2xl font-bold text-purple-600">Enhanced</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
