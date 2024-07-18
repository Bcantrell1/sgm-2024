import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SGM - Artificial Turf and Hardscapes',
  description: 'Quality turf and hardscape installations for residential and commercial projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neu-base min-h-screen flex flex-col`}>
        <Providers>
          <div className="flex-1 flex flex-col shadow-neumorphic overflow-hidden">
            <Header />
            <main className='flex-1 flex flex-col p-2 md:p-6'>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}