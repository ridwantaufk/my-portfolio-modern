'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, MessageCircle, Mail } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

const Footer = () => {
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/ridwantaufk/my-portfolio-modern',
      color: 'hover:text-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ridwan-taufik-b3624325a/',
      color: 'hover:text-blue-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      url: 'https://wa.me/6289699742360',
      color: 'hover:text-green-600'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:ridwan1998taufik@gmail.com',
      color: 'hover:text-red-600'
    }
  ]

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className={`py-12 border-t ${
      theme === 'light' ? 'bg-white border-gray-200' :
      theme === 'dark' ? 'bg-dark-surface border-gray-700' :
      'bg-black/20 border-white/20 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className={`text-2xl font-bold font-poppins ${
              theme === 'gradient' ? 'text-white' : 'text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'
            }`}>
              Ridwan Taufik
            </h3>
            <p className={`text-sm leading-relaxed max-w-xs ${
              theme === 'light' ? 'text-gray-600' :
              theme === 'dark' ? 'text-gray-300' :
              'text-white/80'
            }`}>
              Full Stack Developer passionate about creating innovative web solutions 
              with modern technologies and best practices.
            </p>
            <div className="flex items-center gap-1 text-sm">
              <span className={theme === 'light' ? 'text-gray-600' : theme === 'dark' ? 'text-gray-300' : 'text-white/80'}>
                Made with
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className={`w-4 h-4 fill-current ${
                  theme === 'light' ? 'text-red-500' :
                  theme === 'dark' ? 'text-red-400' :
                  'text-red-300'
                }`} />
              </motion.div>
              <span className={theme === 'light' ? 'text-gray-600' : theme === 'dark' ? 'text-gray-300' : 'text-white/80'}>
                and Next.js
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className={`text-lg font-semibold ${
              theme === 'light' ? 'text-gray-800' :
              theme === 'dark' ? 'text-white' :
              'text-white'
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`text-sm transition-colors duration-200 hover:underline ${
                      theme === 'light' ? 'text-gray-600 hover:text-blue-600' :
                      theme === 'dark' ? 'text-gray-300 hover:text-purple-400' :
                      'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className={`text-lg font-semibold ${
              theme === 'light' ? 'text-gray-800' :
              theme === 'dark' ? 'text-white' :
              'text-white'
            }`}>
              Connect With Me
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      theme === 'light' ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' :
                      theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' :
                      'bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur-md border border-white/20'
                    } ${social.color}`}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
            <p className={`text-sm ${
              theme === 'light' ? 'text-gray-600' :
              theme === 'dark' ? 'text-gray-300' :
              'text-white/80'
            }`}>
              Let's build something amazing together!
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`h-px mb-8 ${
            theme === 'light' ? 'bg-gradient-to-r from-transparent via-gray-300 to-transparent' :
            theme === 'dark' ? 'bg-gradient-to-r from-transparent via-gray-600 to-transparent' :
            'bg-gradient-to-r from-transparent via-white/30 to-transparent'
          }`}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className={`text-sm ${
            theme === 'light' ? 'text-gray-600' :
            theme === 'dark' ? 'text-gray-300' :
            'text-white/80'
          }`}>
            © {currentYear} Ridwan Taufik. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 text-sm">
            <span className={theme === 'light' ? 'text-gray-600' : theme === 'dark' ? 'text-gray-300' : 'text-white/80'}>
              Built with
            </span>
            <div className="flex items-center gap-2">
              <span className="text-blue-500 font-semibold">Next.js</span>
              <span className={theme === 'light' ? 'text-gray-400' : theme === 'dark' ? 'text-gray-500' : 'text-white/50'}>•</span>
              <span className="text-cyan-500 font-semibold">Tailwind CSS</span>
              <span className={theme === 'light' ? 'text-gray-400' : theme === 'dark' ? 'text-gray-500' : 'text-white/50'}>•</span>
              <span className="text-purple-500 font-semibold">Framer Motion</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-8"
        >
          <motion.p
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`text-xs ${
              theme === 'light' ? 'text-gray-400' :
              theme === 'dark' ? 'text-gray-500' :
              'text-white/40'
            }`}
          >
            "Code is poetry written in logic" ✨
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer