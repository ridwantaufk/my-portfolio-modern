'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, ShoppingCart, Clipboard, Cloud, BarChart3, GraduationCap, Home } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'
import { useState } from 'react'

const Projects = () => {
  const { theme } = useTheme()
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.',
      icon: ShoppingCart,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      demoUrl: 'https://demo-ecommerce.vercel.app',
      githubUrl: 'https://github.com/ridwantaufik/ecommerce-platform',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application built with Next.js and MongoDB. Real-time updates with Socket.io and drag-and-drop functionality.',
      icon: Clipboard,
      technologies: ['Next.js', 'MongoDB', 'Socket.io', 'Framer Motion'],
      demoUrl: 'https://taskmanager-demo.vercel.app',
      githubUrl: 'https://github.com/ridwantaufik/task-manager',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and data visualization using Chart.js.',
      icon: Cloud,
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'Mapbox'],
      demoUrl: 'https://weather-dashboard-demo.vercel.app',
      githubUrl: 'https://github.com/ridwantaufik/weather-dashboard',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with real-time data processing and beautiful visualizations.',
      icon: BarChart3,
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'D3.js'],
      demoUrl: 'https://analytics-demo.vercel.app',
      githubUrl: 'https://github.com/ridwantaufik/social-analytics',
      featured: false
    },
    {
      id: 5,
      title: 'Learning Management System',
      description: 'A comprehensive LMS with course management, video streaming, quizzes, and progress tracking for students and instructors.',
      icon: GraduationCap,
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS S3'],
      demoUrl: 'https://lms-demo.vercel.app',
      githubUrl: 'https://github.com/ridwantaufik/lms-platform',
      featured: true
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      description: 'Property listing platform with advanced search filters, virtual tours, and integrated mortgage calculator.',
      icon: Home,
      technologies: ['React', 'Express.js', 'MongoDB', 'Cloudinary'],
      demoUrl: 'https://realestate-demo.vercel.app',
      githubUrl: 'https://github.com/ridwantaufik/real-estate',
      featured: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-4"
            >
              <span className={theme === 'gradient' ? 'text-white' : 'text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'}>
                Featured Projects
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`mt-6 text-lg max-w-2xl mx-auto ${
                theme === 'light' ? 'text-gray-600' :
                theme === 'dark' ? 'text-gray-300' :
                'text-white/80'
              }`}
            >
              A showcase of my recent work and personal projects
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className={`group relative overflow-hidden rounded-3xl transition-all duration-500 ${
                    theme === 'light' ? 'bg-white shadow-neumorphic-light hover:shadow-xl' :
                    theme === 'dark' ? 'bg-dark-surface shadow-neumorphic-dark hover:shadow-xl' :
                    'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20'
                  } ${project.featured ? 'md:col-span-1 lg:col-span-1' : ''}`}
                >
                  {project.featured && (
                    <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold ${
                      theme === 'light' ? 'bg-blue-100 text-blue-800' :
                      theme === 'dark' ? 'bg-purple-900 text-purple-200' :
                      'bg-white/20 text-white backdrop-blur-md'
                    }`}>
                      Featured
                    </div>
                  )}

                  <div className={`relative h-48 flex items-center justify-center ${
                    theme === 'light' ? 'bg-gradient-to-br from-blue-50 to-purple-50' :
                    theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' :
                    'bg-gradient-to-br from-white/10 to-white/5'
                  }`}>
                    <IconComponent className={`w-20 h-20 ${
                      theme === 'light' ? 'text-blue-600' :
                      theme === 'dark' ? 'text-purple-400' :
                      'text-white'
                    }`} />
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-4"
                    >
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <h3 className={`text-xl font-bold font-poppins mb-3 ${
                      theme === 'light' ? 'text-gray-800' :
                      theme === 'dark' ? 'text-white' :
                      'text-white'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <p className={`text-sm mb-4 leading-relaxed ${
                      theme === 'light' ? 'text-gray-600' :
                      theme === 'dark' ? 'text-gray-300' :
                      'text-white/80'
                    }`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            theme === 'light' ? 'bg-blue-100 text-blue-800' :
                            theme === 'dark' ? 'bg-purple-900 text-purple-200' :
                            'bg-white/20 text-white backdrop-blur-md'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 py-2 px-4 rounded-full text-center text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                          theme === 'light' 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                            : theme === 'dark'
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                            : 'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30'
                        }`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.a>
                      
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`py-2 px-4 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center ${
                          theme === 'light' 
                            ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' 
                            : theme === 'dark'
                            ? 'bg-gray-700 text-white hover:bg-gray-600'
                            : 'bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20'
                        }`}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/ridwantaufik"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                theme === 'light' 
                  ? 'bg-white text-gray-800 shadow-neumorphic-light hover:shadow-neumorphic-inset-light' 
                  : theme === 'dark'
                  ? 'bg-dark-surface text-white shadow-neumorphic-dark hover:shadow-neumorphic-inset-dark'
                  : 'bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20'
              }`}
            >
              <Github className="w-5 h-5" />
              View More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects