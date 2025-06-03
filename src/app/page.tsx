'use client'
import { Project } from '@/components/sections/project';
import { Skills } from '@/components/sections/skill';
import { Experience } from '@/components/sections/experience'
import { TerminalInfo } from '@/components/sections/terminal-info'
import { motion } from 'framer-motion'
import Image from 'next/image'


export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-4 py-16">
        <section className="mb-24">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Terminal Section */}
            <div className="order-2 md:order-1 md:col-span-2">
              <div className="h-[300px] md:h-full overflow-hidden rounded-2xl terminal-effect">
                <TerminalInfo />
              </div>
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="https://drive.google.com/file/d/1uMAAH84WuRXORcDpoY6RDohQAwu4rojW/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-6 py-3 bg-[#1a1a1a] rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Code-like background pattern */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, transparent 0%, transparent 50%, rgba(115, 210, 93, 0.1) 50%, rgba(115, 210, 93, 0.1) 100%),
                        linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(115, 210, 93, 0.1) 50%, rgba(115, 210, 93, 0.1) 100%)
                      `,
                      backgroundSize: '20px 20px'
                    }}
                  />
                  
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1de9b6]/10 via-[#20e3b2]/20 to-[#1de9b6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                    style={{
                      backgroundSize: '200% 100%',
                      animation: 'gradient-shift 3s linear infinite'
                    }}
                  />
                  
                  {/* Glowing border with code-like corners */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 rounded-xl border border-[#1de9b6]/30 group-hover:border-[#1de9b6]/60 transition-colors duration-500" />
                    {/* Code-like corner brackets */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#0c3104] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#1de9b6] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#1de9b6] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#1de9b6] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Terminal-like icon container */}
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-md bg-[#1de9b6]/20 group-hover:bg-[#1de9b6]/30 transition-all duration-500 border border-[#1de9b6]/30 group-hover:border-[#1de9b6]/60">
                    <i className="fas fa-chart-bar text-[#1de9b6] group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  {/* Text content with code-like elements */}
                  <div className="relative flex items-center gap-2">
                    <span className="relative font-medium text-sm text-white/90 group-hover:text-white transition-colors duration-500">
                      My CV
                    </span>
                  </div>
                  
                  {/* Arrow icon with enhanced animation */}
                  <i className="relative fas fa-arrow-right text-[#1de9b6] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 group-hover:animate-pulse" />
                </motion.a>
              </motion.div>
            </div>
            {/* Profile Photo Section (1/3) */}
            <div className="relative order-1 md:order-2">
              <div className="elevated-card relative h-[120px] w-[120px] md:w-auto md:h-auto md:aspect-square rounded-full overflow-hidden mx-auto">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#20e3b2] via-[#3d9970] to-[#1a4a2e]" />
                
                {/* Photo Container */}
                <div className="relative flex h-full w-full items-center justify-center">
                  <Image
                    src="/piyawat.png"
                    alt="Piyawat Jittrawong"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Skills />
        <Project />
        <Experience />
      </div>
    </main>
  );
}
