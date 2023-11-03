import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Foodz',
  description: 'An application to order food',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className='max-w-[1440px] mx-auto'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
