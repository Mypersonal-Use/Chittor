'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Heart, Home, TrendingUp, Users, Sprout, Users as CommunityIcon, TrendingUp as GrowthIcon } from 'lucide-react'

export default function ExecutiveVision() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Home,
      title: 'Reverse Migration',
      description: 'Making rural life desirable and viable again',
    },
    {
      icon: Heart,
      title: 'Rebuild Dignity',
      description: 'Restoring pride and purpose in rural communities',
    },
    {
      icon: TrendingUp,
      title: 'Enable Prosperity',
      description: 'Creating sustainable economic opportunities',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Farmers and families at the heart of transformation',
    },
  ]

  return (
    <section id="vision" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Executive Vision</span>
          </h2>
          <p className="text-2xl md:text-3xl text-slate-dark mb-4 font-light">
            Make rural life viable and desirable
          </p>
          <p className="text-lg text-slate-gray">
            We envision a future where rural communities thrive through sustainable agriculture,
            clean energy, transformative education, and agro-wellness tourism. A future where
            farmers are not just beneficiaries but leaders of their own transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass p-6 rounded-2xl text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-green to-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-dark">{feature.title}</h3>
                <p className="text-slate-gray">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Thematic Visual Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Soil & Culture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative h-80 rounded-3xl overflow-hidden shadow-xl cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600">
              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              </div>
              
              {/* Icon/Image container */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10"
                >
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl border border-white/30">
                    <Sprout className="text-white" size={64} strokeWidth={1.5} />
                  </div>
                </motion.div>
              </div>
              
              {/* Image overlay option - uncomment and add your image */}
              {/* 
              <div className="absolute inset-0 opacity-30">
                <Image
                  src="/images/soil-culture.jpg"
                  alt="Soil & Culture"
                  fill
                  className="object-cover"
                />
              </div>
              */}
            </div>
            
            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <p className="text-white font-bold text-lg">Soil & Culture</p>
              </div>
              <p className="text-white/80 text-sm mt-1">Nurturing the foundation of rural life</p>
            </div>
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          {/* Family & Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative h-80 rounded-3xl overflow-hidden shadow-xl cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600">
              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 right-10 w-36 h-36 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-28 h-28 bg-white rounded-full blur-3xl"></div>
              </div>
              
              {/* Icon/Image container */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10"
                >
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl border border-white/30">
                    <CommunityIcon className="text-white" size={64} strokeWidth={1.5} />
                  </div>
                </motion.div>
              </div>
              
              {/* Image overlay option - uncomment and add your image */}
              {/* 
              <div className="absolute inset-0 opacity-30">
                <Image
                  src="/images/family-community.jpg"
                  alt="Family & Community"
                  fill
                  className="object-cover"
                />
              </div>
              */}
            </div>
            
            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <p className="text-white font-bold text-lg">Family & Community</p>
              </div>
              <p className="text-white/80 text-sm mt-1">Building stronger connections together</p>
            </div>
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          {/* Growth & Prosperity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative h-80 rounded-3xl overflow-hidden shadow-xl cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-500 to-yellow-600">
              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              </div>
              
              {/* Icon/Image container */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10"
                >
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl border border-white/30">
                    <GrowthIcon className="text-white" size={64} strokeWidth={1.5} />
                  </div>
                </motion.div>
              </div>
              
              {/* Image overlay option - uncomment and add your image */}
              {/* 
              <div className="absolute inset-0 opacity-30">
                <Image
                  src="/images/growth-prosperity.jpg"
                  alt="Growth & Prosperity"
                  fill
                  className="object-cover"
                />
              </div>
              */}
            </div>
            
            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <p className="text-white font-bold text-lg">Growth & Prosperity</p>
              </div>
              <p className="text-white/80 text-sm mt-1">Empowering sustainable development</p>
            </div>
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
