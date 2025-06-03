'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionHeader } from '@/components/ui/section-header'

const project = [
  {
    name: 'Portfolio Efficient Frontier Simulator',
    logo: '/ef.png',
    href: 'https://efficient-frontier-simulation.streamlit.app/',
    role: 'Project',
    description: 'This app helps you create an efficient frontier for your investment portfolio',
    year: '2025'
  },
  {
    name: 'Market Tracking Web App',
    logo: '/MarketUpdateWeb.png',
    href: 'https://markettrackingweb.streamlit.app/',
    role: 'Project',
    description: 'MarketTrackingWeb is application that helps users track and visualize financial market data across various asset classes',
    year: '2025'
  },
]

export function Project() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="My Projects"
          subtitle="Finance projects that I have built"
        />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 max-w-6xl mx-auto items-stretch"
        >
          {project.map((project, index) => (
            <motion.div
              key={project.name}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`bg-[#1a1a1a] rounded-lg p-3 border ${project.role === 'Project' ? 'border-[#1de9b6]/30 hover:border-[#1de9b6]/50' : 'border-white/5 hover:border-white/20'} transition-colors`}>
                  <div className="relative h-50 w-full flex items-center justify-center mb-2">
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      fill
                      className="object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300 p-1"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xs font-medium text-white/90">{project.name}</h3>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] ${
                        project.role === 'Project' 
                          ? 'bg-[#73D25D]/10 text-[#1de9b6]' 
                          : 'bg-white/5 text-white/60'
                      }`}>
                        {project.role}
                      </span>
                      <span className="text-[10px] text-white/40">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-[10px] text-white/50 mt-1 leading-tight">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 