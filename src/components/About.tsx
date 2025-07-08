'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, MessageCircle, Download, ExternalLink } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

const About = () => {
  const { theme } = useTheme()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/ridwantaufk/my-portfolio-modern',
      color: 'hover:text-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/ridwan-taufik-b3624325a/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/6289699742360',
      color: 'hover:text-green-600'
    }
  ]

  const handleDownloadCV = () => {
    // Create a dummy CV download link
    const link = document.createElement('a')
    link.href = '/cv-ridwan-taufik.pdf'
    link.download = 'CV-Ridwan-Taufik.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-4"
            >
              <span className={theme === 'gradient' ? 'text-white' : 'text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'}>
                About Me
              </span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '4rem' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`h-1 mx-auto rounded-full ${
                theme === 'gradient' ? 'bg-white' : 'bg-gradient-to-r from-blue-600 to-purple-600'
              }`}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center lg:justify-start"
            >
              <div className={`relative w-80 h-80 rounded-3xl overflow-hidden ${
                theme === 'light' ? 'shadow-neumorphic-light' :
                theme === 'dark' ? 'shadow-neumorphic-dark' :
                'shadow-glow border border-white/30'
              }`}>
                <div className={`w-full h-full flex items-center justify-center text-9xl ${
                  theme === 'light' ? 'bg-gradient-to-br from-blue-50 to-purple-50' :
                  theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' :
                  'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md'
                }`}>
                  👨‍💻
                </div>
                {/* Floating elements around image */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className={`text-lg leading-relaxed space-y-4 ${
                theme === 'light' ? 'text-gray-700' :
                theme === 'dark' ? 'text-gray-300' :
                'text-white/90'
              }`}>
                <p>
                  Hello! I'm <strong>Ridwan Taufik</strong>, a passionate Full Stack Developer with over 3 years of experience 
                  in creating innovative web solutions. I specialize in modern JavaScript technologies and love 
                  turning complex problems into simple, beautiful designs.
                </p>
                <p>
                  My journey in web development started with a curiosity about how websites work, and it has 
                  evolved into a career where I get to build amazing digital experiences every day. I'm constantly 
                  learning new technologies and best practices to stay at the forefront of web development.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 py-6">
                {[
                  { number: '3+', label: 'Years Experience' },
                  { number: '50+', label: 'Projects Completed' },
                  { number: '20+', label: 'Happy Clients' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className={`text-center p-4 rounded-2xl ${
                      theme === 'light' ? 'bg-white shadow-neumorphic-light' :
                      theme === 'dark' ? 'bg-dark-surface shadow-neumorphic-dark' :
                      'bg-white/10 backdrop-blur-md border border-white/20'
                    }`}
                  >
                    <div className={`text-2xl font-bold font-poppins ${
                      theme === 'gradient' ? 'text-white' : 'text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'
                    }`}>
                      {stat.number}
                    </div>
                    <div className={`text-sm ${
                      theme === 'light' ? 'text-gray-600' :
                      theme === 'dark' ? 'text-gray-400' :
                      'text-white/70'
                    }`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-full transition-all duration-300 ${
                          theme === 'light' ? 'bg-white shadow-neumorphic-light hover:shadow-neumorphic-inset-light' :
                          theme === 'dark' ? 'bg-dark-surface shadow-neumorphic-dark hover:shadow-neumorphic-inset-dark' :
                          'bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20'
                        } ${social.color}`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    )
                  })}
                </div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadCV}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    theme === 'light' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-neumorphic-light hover:from-blue-700 hover:to-purple-700' 
                      : theme === 'dark'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-neumorphic-dark hover:from-purple-700 hover:to-pink-700'
                      : 'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30'
                  }`}
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About