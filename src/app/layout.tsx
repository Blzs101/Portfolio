import NextTopLoader from 'nextjs-toploader'
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import LangContextProvider from '@/context/LangContext'
import ThemeContext from '@/context/ThemeContext'


export const metadata: Metadata = {
  title: "Kinczel Balázs's Portfolio ",
  description: 'Kinczel Balázs Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className='fixed inset-0 w-full h-full p-3 overflow-auto md:p-6'>
        <NextTopLoader showSpinner={false} color="rgba(71,85,105)" />
        <ThemeContext>
          <LangContextProvider>
            <Navbar />
            {children}
          </LangContextProvider>
        </ThemeContext>
      </body>
    </html>
  )
}
