/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        // Light theme colors
        'light-bg': '#f0f2f5',
        'light-surface': '#ffffff',
        'light-text': '#2d3748',
        'light-accent': '#667eea',
        // Dark theme colors
        'dark-bg': '#1a202c',
        'dark-surface': '#2d3748',
        'dark-text': '#e2e8f0',
        'dark-accent': '#9f7aea',
        // Gradient theme colors
        'gradient-primary': '#667eea',
        'gradient-secondary': '#764ba2',
        'gradient-accent': '#f093fb',
      },
      boxShadow: {
        'neumorphic-light': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
        'neumorphic-dark': '8px 8px 16px #0f1419, -8px -8px 16px #252f3f',
        'neumorphic-inset-light': 'inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff',
        'neumorphic-inset-dark': 'inset 8px 8px 16px #0f1419, inset -8px -8px 16px #252f3f',
        'glow': '0 0 20px rgba(102, 126, 234, 0.6)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(102, 126, 234, 0.6)' },
          '100%': { boxShadow: '0 0 30px rgba(102, 126, 234, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}