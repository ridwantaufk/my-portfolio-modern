'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

const BackToTop = () => {
  const { theme } = useTheme()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 0, 
            y: 20,
            transition: {
              duration: 0.2
            }
          }}
          whileHover={{ 
            scale: 1.1, 
            y: -5,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10
            }
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-4 rounded-full transition-all duration-300 group ${
            theme === 'light' 
              ? 'bg-white text-gray-800 shadow-neumorphic-light hover:shadow-xl' 
              : theme === 'dark'
              ? 'bg-dark-surface text-white shadow-neumorphic-dark hover:shadow-xl'
              : 'bg-white/20 text-white backdrop-blur-md border border-white/30 hover:bg-white/30'
          }`}
          aria-label="Back to top"
        >
          <motion.div
            className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              theme === 'light' ? 'bg-blue-500/20' :
              theme === 'dark' ? 'bg-purple-500/20' :
              'bg-white/20'
            }`}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative z-10"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.div>
          
          <motion.div
            className={`absolute inset-0 rounded-full ${
              theme === 'light' ? 'bg-blue-500' :
              theme === 'dark' ? 'bg-purple-500' :
              'bg-white'
            }`}
            initial={{ scale: 0, opacity: 0.5 }}
            whileTap={{
              scale: 2,
              opacity: 0,
              transition: { duration: 0.4 }
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop