import Hero from '@/components/Hero'
import ExecutiveVision from '@/components/ExecutiveVision'
import RuralCrisis from '@/components/RuralCrisis'
import Blueprint from '@/components/Blueprint'
import Pillars from '@/components/Pillars'
import ImpactMetrics from '@/components/ImpactMetrics'
import LivingLab from '@/components/LivingLab'
import Partnerships from '@/components/Partnerships'
import Roadmap from '@/components/Roadmap'
import AboutAtria from '@/components/AboutAtria'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ExecutiveVision />
      <RuralCrisis />
      <Blueprint />
      <Pillars />
      <ImpactMetrics />
      <LivingLab />
      <Partnerships />
      <Roadmap />
      <AboutAtria />
      <Contact />
    </div>
  )
}
