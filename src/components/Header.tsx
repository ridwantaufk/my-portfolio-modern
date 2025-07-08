'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, Palette, Menu, X } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

const Header = () => {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return <Sun className="w-5 h-5" />
      case 'dark': return <Moon className="w-5 h-5" />
      case 'gradient': return <Palette className="w-5 h-5" />
    }
  }

  const cycleTheme = () => {
    const themes: Array<'light' | 'dark' | 'gradient'> = ['light', 'dark', 'gradient']
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === 'light' 
            ? 'bg-white/80 backdrop-blur-md shadow-neumorphic-light' 
            : theme === 'dark'
            ? 'bg-dark-surface/80 backdrop-blur-md shadow-neumorphic-dark'
            : 'bg-white/10 backdrop-blur-md border-b border-white/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-poppins font-bold text-xl cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <span className={theme === 'gradient' ? 'text-white' : 'text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'}>
              Ridwan Taufik
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-200 ${
                  theme === 'gradient' 
                    ? 'text-white hover:text-gradient-accent' 
                    : 'hover:text-blue-600'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={cycleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                theme === 'light' 
                  ? 'bg-white shadow-neumorphic-light hover:shadow-neumorphic-inset-light' 
                  : theme === 'dark'
                  ? 'bg-dark-surface shadow-neumorphic-dark hover:shadow-neumorphic-inset-dark'
                  : 'bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30'
              }`}
            >
              {getThemeIcon()}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-all duration-300 ${
                theme === 'light' 
                  ? 'bg-white shadow-neumorphic-light' 
                  : theme === 'dark'
                  ? 'bg-dark-surface shadow-neumorphic-dark'
                  : 'bg-white/20 backdrop-blur-md border border-white/30'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden py-4 ${
              theme === 'light' 
                ? 'bg-white/90 backdrop-blur-md shadow-neumorphic-light' 
                : theme === 'dark'
                ? 'bg-dark-surface/90 backdrop-blur-md shadow-neumorphic-dark'
                : 'bg-white/10 backdrop-blur-md border-t border-white/20'
            } rounded-b-2xl mt-2`}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2 font-medium transition-colors duration-200 ${
                    theme === 'gradient' 
                      ? 'text-white hover:text-gradient-accent' 
                      : 'hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

export default Header