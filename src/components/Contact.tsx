'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, Github } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const Contact = () => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ridwan1998taufik@gmail.com',
      link: 'mailto:ridwan1998taufik@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 896-9974-2360',
      link: 'tel:+62 896-9974-2360'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bandung, Indonesia',
      link: 'https://maps.google.com/?q=Bandung,Indonesia'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/ridwantaufk/my-portfolio-modern',
      color: 'hover:text-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ridwan-taufik-b3624325a/',
      color: 'hover:text-blue-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      link: 'https://wa.me/6289699742360',
      color: 'hover:text-green-600'
    }
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
                Get In Touch
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
              Have a project in mind? Let's work together to bring your ideas to life!
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className={`text-2xl font-bold font-poppins mb-6 ${
                  theme === 'light' ? 'text-gray-800' :
                  theme === 'dark' ? 'text-white' :
                  'text-white'
                }`}>
                  Let's Connect
                </h3>
                <p className={`text-lg leading-relaxed mb-8 ${
                  theme === 'light' ? 'text-gray-600' :
                  theme === 'dark' ? 'text-gray-300' :
                  'text-white/80'
                }`}>
                  I'm always interested in hearing about new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                        theme === 'light' ? 'bg-white shadow-neumorphic-light hover:shadow-neumorphic-inset-light' :
                        theme === 'dark' ? 'bg-dark-surface shadow-neumorphic-dark hover:shadow-neumorphic-inset-dark' :
                        'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20'
                      }`}
                    >
                      <div className={`p-3 rounded-full ${
                        theme === 'light' ? 'bg-blue-100 text-blue-600' :
                        theme === 'dark' ? 'bg-purple-900 text-purple-400' :
                        'bg-white/20 text-white'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <p className={`font-semibold ${
                          theme === 'light' ? 'text-gray-800' :
                          theme === 'dark' ? 'text-white' :
                          'text-white'
                        }`}>
                          {info.label}
                        </p>
                        <p className={`${
                          theme === 'light' ? 'text-gray-600' :
                          theme === 'dark' ? 'text-gray-300' :
                          'text-white/80'
                        }`}>
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              <div>
                <h4 className={`font-semibold mb-4 ${
                  theme === 'light' ? 'text-gray-800' :
                  theme === 'dark' ? 'text-white' :
                  'text-white'
                }`}>
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
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
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`p-8 rounded-3xl ${
                theme === 'light' ? 'bg-white shadow-neumorphic-light' :
                theme === 'dark' ? 'bg-dark-surface shadow-neumorphic-dark' :
                'bg-white/10 backdrop-blur-md border border-white/20'
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${
                    theme === 'light' ? 'text-gray-700' :
                    theme === 'dark' ? 'text-gray-300' :
                    'text-white/90'
                  }`}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-2xl border-0 transition-all duration-300 focus:outline-none focus:ring-2 ${
                      theme === 'light' 
                        ? 'bg-gray-50 text-gray-800 shadow-neumorphic-inset-light focus:ring-blue-500' 
                        : theme === 'dark'
                        ? 'bg-gray-800 text-white shadow-neumorphic-inset-dark focus:ring-purple-500'
                        : 'bg-white/10 text-white placeholder-white/60 backdrop-blur-md focus:ring-white/50'
                    } ${errors.name ? 'ring-2 ring-red-500' : ''}`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${
                    theme === 'light' ? 'text-gray-700' :
                    theme === 'dark' ? 'text-gray-300' :
                    'text-white/90'
                  }`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-2xl border-0 transition-all duration-300 focus:outline-none focus:ring-2 ${
                      theme === 'light' 
                        ? 'bg-gray-50 text-gray-800 shadow-neumorphic-inset-light focus:ring-blue-500' 
                        : theme === 'dark'
                        ? 'bg-gray-800 text-white shadow-neumorphic-inset-dark focus:ring-purple-500'
                        : 'bg-white/10 text-white placeholder-white/60 backdrop-blur-md focus:ring-white/50'
                    } ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${
                    theme === 'light' ? 'text-gray-700' :
                    theme === 'dark' ? 'text-gray-300' :
                    'text-white/90'
                  }`}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-2xl border-0 transition-all duration-300 focus:outline-none focus:ring-2 ${
                      theme === 'light' 
                        ? 'bg-gray-50 text-gray-800 shadow-neumorphic-inset-light focus:ring-blue-500' 
                        : theme === 'dark'
                        ? 'bg-gray-800 text-white shadow-neumorphic-inset-dark focus:ring-purple-500'
                        : 'bg-white/10 text-white placeholder-white/60 backdrop-blur-md focus:ring-white/50'
                    } ${errors.subject ? 'ring-2 ring-red-500' : ''}`}
                    placeholder="Project Discussion"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${
                    theme === 'light' ? 'text-gray-700' :
                    theme === 'dark' ? 'text-gray-300' :
                    'text-white/90'
                  }`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-2xl border-0 transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                      theme === 'light' 
                        ? 'bg-gray-50 text-gray-800 shadow-neumorphic-inset-light focus:ring-blue-500' 
                        : theme === 'dark'
                        ? 'bg-gray-800 text-white shadow-neumorphic-inset-dark focus:ring-purple-500'
                        : 'bg-white/10 text-white placeholder-white/60 backdrop-blur-md focus:ring-white/50'
                    } ${errors.message ? 'ring-2 ring-red-500' : ''}`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    theme === 'light' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-neumorphic-light hover:from-blue-700 hover:to-purple-700' 
                      : theme === 'dark'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-neumorphic-dark hover:from-purple-700 hover:to-pink-700'
                      : 'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30'
                  } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 text-center font-semibold"
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-center font-semibold"
                  >
                    ❌ Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact