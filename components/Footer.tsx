'use client'

import { MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Project Chittoor</h3>
            <p className="text-gray-300">
              Rooted in Sustainability, Where the Farmers are the Future
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:projectchittoor@atria.edu" className="hover:text-primary-green transition-colors">
                  projectchittoor@atria.edu
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>Tirumala Raju Puram, Chittoor district</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Initiatives</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Sustainable Agriculture</li>
              <li>Clean Renewable Energy</li>
              <li>Transformative Education</li>
              <li>Agro-Wellness Tourism</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Atria Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
