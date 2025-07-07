import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://ridwantaufik.dev'),
  title: 'Ridwan Taufik - Full Stack Developer',
  description: 'Portfolio website of Ridwan Taufik, a passionate Full Stack Developer specializing in modern web technologies.',
  keywords: 'Ridwan Taufik, Full Stack Developer, React, Next.js, Node.js, Portfolio',
  authors: [{ name: 'Ridwan Taufik' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Ridwan Taufik - Full Stack Developer',
    description: 'Portfolio website of Ridwan Taufik, a passionate Full Stack Developer',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}