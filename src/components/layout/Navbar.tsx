'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram,} from 'react-icons/fa'
import { motion } from 'framer-motion'


const links = [
  { href: '/', label: 'Home' }
]

const socialLinks = [
  {
    id: 'facebook',
    icon: FaFacebook,
    href: 'https://www.facebook.com/acat.hasninelife',
    label: 'Facebook'
  },
  {
    id: 'Instagram',
    icon: FaInstagram,
    href: 'https://www.instagram.com/zero.ptj/',
    label: 'Instagram'
  },
  {
    id: 'github',
    icon: FaGithub,
    href: 'https://github.com/Zeroptj',
    label: 'GitHub'
  },

  {
    id: 'linkedin',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/piyawat-jittrawong-44528b201/',
    label: 'LinkedIn'
  }
]

export function Navbar() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-2 sm:px-4">
          <div className='flex items-center gap-1 sm:gap-2 md:gap-4 flex-shrink-0'>
            <Link 
              href="/" 
              className="text-sm sm:text-base md:text-lg font-bold whitespace-nowrap"
            >
              <span>Piyawat Jittrawong</span>
            </Link>
            <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
                    {socialLinks.map((link) => {
                      const Icon = link.icon
                      return (
                        <motion.a
                          key={link.id}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 sm:p-2 md:p-3 rounded-full bg-[#1a1a1a] border border-[#a8ada7]/20 hover:border-[#e2e3e2]/40 hover:bg-[#e2e3e2]/10 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          title={link.label}
                        >
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#a8ada7]" />
                        </motion.a>
                      )
                    })}
            </div>
          </div>
          <nav className="flex items-center gap-3 md:gap-6 flex-shrink-0">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs md:text-sm transition-colors hover:text-primary ${
                  pathname === link.href
                    ? 'neon-text font-medium'
                    : 'text-white opacity-80 hover:opacity-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-2 sm:px-4">
        <div className='flex items-center gap-1 sm:gap-2 md:gap-4 flex-shrink-0 min-w-0'>
          <Link 
            href="/" 
            className="font-bold text-sm sm:text-base md:text-lg whitespace-nowrap"
          >
            <span>Piyawat Jittrawong</span>
          </Link>
          <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 md:p-3 rounded-full bg-[#1a1a1a] border border-[#a8ada7]/20 hover:border-[#e2e3e2]/40 hover:bg-[#e2e3e2]/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.label}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#a8ada7]" />
                </motion.a>
              )
            })}
          </div>
        </div>
        <nav className="flex items-center gap-3 md:gap-6 flex-shrink-0">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs md:text-sm transition-colors hover:text-primary whitespace-nowrap ${
                pathname === link.href
                  ? 'neon-text font-medium'
                  : 'text-white opacity-80 hover:opacity-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}