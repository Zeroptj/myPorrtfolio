'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const terminalText = `  My name is Piyawat Jittrawong, and I am currently working as an Assistant Fund Manager and Portfolio Engineer. I specialize in portfolio optimization, asset allocation, and risk management  `

export function TerminalInfo() {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let index = 0
    let typingTimer: NodeJS.Timeout

    const typeText = () => {
      if (index < terminalText.length) {
        setDisplayText(prev => prev + terminalText.charAt(index))
        index++
        typingTimer = setTimeout(typeText, 25) // Adjust speed here
      } else {
        setIsTyping(false)
      }
    }

    // Start typing
    typeText()

    return () => {
      clearTimeout(typingTimer)
    }
  }, [])

  return (
    <div className="relative h-full w-full bg-[#1a1a1a] p-4 font-mono text-sm text-white/80">
      {/* Terminal Header */}
      <div className="mb-2 flex items-center gap-1.5">
        <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-xs text-white/40">Zero.ptj: ~</span>
      </div>

      {/* Terminal Content */}
      <div className="whitespace-pre-wrap">
        <div className="mt-2 leading-relaxed">
          {displayText}
          {isTyping && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block h-4 w-2 bg-white/80 ml-1 align-middle"
            />
          )}
        </div>
      </div>
    </div>
  )
}