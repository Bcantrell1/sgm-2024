import { GoogleTagManager } from '@next/third-parties/google'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import Header from './components/Header'
import ProjectWizard from './components/wizard/ProjectWizard'
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
			<GoogleTagManager gtmId="GTM-MP7GWM2" />
      <body className={`${inter.className} bg-neu-base min-h-screen flex flex-col`}>
        <Providers>
          <div className="flex-1 flex flex-col shadow-neumorphic">
            <Header />
            <main className='flex-1 overflow-hidden flex flex-col relative'>{children}</main>
            <Footer />
          </div>
					<ProjectWizard />
        </Providers>
      </body>
    </html>
  )
}