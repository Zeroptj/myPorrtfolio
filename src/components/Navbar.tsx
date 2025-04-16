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
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className='flex items-center gap-4'>
            <Link 
              href="/" 
              className="text-lg font-bold"
            >
              Piyawat Jittrawong
            </Link>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {socialLinks.map((link) => {
                      const Icon = link.icon
                      return (
                        <motion.a
                          key={link.id}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-[#1a1a1a] border border-[#73D25D]/20 hover:border-[#73D25D]/40 hover:bg-[#73D25D]/10 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          title={link.label}
                        >
                          <Icon className="h-6 w-6 text-[#73D25D]" />
                        </motion.a>
                      )
                    })}
            </div>
          </div>
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-primary ${
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
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className='flex items-center gap-4'>
          <Link 
            href="/" 
            className="text-lg font-bold"
          >
            Piyawat Jittrawong
          </Link>
          <div className="flex flex-wrap justify-center gap-4 md:gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <motion.a
                        key={link.id}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-[#1a1a1a] border border-[#73D25D]/20 hover:border-[#73D25D]/40 hover:bg-[#73D25D]/10 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title={link.label}
                      >
                        <Icon className="h-6 w-6 text-[#73D25D]" />
                      </motion.a>
                    )
                  })}
          </div>
        </div>
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-primary ${
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
