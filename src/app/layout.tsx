import NextTopLoader from 'nextjs-toploader'
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ThemeContext from '@/context/ThemeContext'

export const metadata: Metadata = {
  title: "Kinczel Balázs's Portfolio ",
  description: 'Kinczel Balázs Portfolio Website',
  verification: {
    google: "9kNaExtuqEV0n7U07-8JZJUjHTimcIjj4X_T9TAYMZo"
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL('https://kinczel-balazs.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    type: "website",
    url: "https://kinczel-balazs.vercel.app/",
    title: "Kinczel Balázs's Portfolio ",
    description: 'Kinczel Balázs Portfolio Website',
    images: { url: "/my-logo.png" }
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinczel Balázs's Portfolio ",
    description: 'Kinczel Balázs Portfolio Website',
    images: { url: "/my-logo.png" }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className='inset-0 w-full h-full p-3 overflow-auto md:p-6 bg-white text-black hover:border:black dark:bg-[#23272f] dark:text-white dark:hover:white'>
        <NextTopLoader showSpinner={false} color="rgb(71,85,105)" />
        <ThemeContext>
          <Navbar />
          {children}
        </ThemeContext>
      </body>
    </html>
  )
}
