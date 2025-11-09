import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Project Chittoor | Rooted in Sustainability, Where the Farmers are the Future',
  description: 'A rural renaissance initiative by Atria Group. Integrating Sustainable Agriculture, Clean Renewable Energy, Transformative Education, and Agro-Wellness Tourism.',
  keywords: 'Project Chittoor, rural transformation, sustainable agriculture, renewable energy, rural education, agro-tourism, Atria Group',
  authors: [{ name: 'Atria Group' }],
  openGraph: {
    title: 'Project Chittoor | Rooted in Sustainability',
    description: 'A rural renaissance initiative by Atria Group',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
