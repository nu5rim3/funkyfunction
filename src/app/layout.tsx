import type { Metadata } from 'next'
import { DM_Sans, Bungee_Shade } from 'next/font/google'
import './globals.css'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { ThemeProvider } from '@/components/theme-provider'

const dmSans = DM_Sans({ subsets: ['latin'], })

export const metadata: Metadata = {
  title: 'Funky Function | Innovative Software Development Company',
  description: 'Funky Function is a leading software development company offering custom web and mobile application solutions. Our team specializes in innovative, user-friendly, and scalable software development for businesses across various industries. Contact us to bring your ideas to life!',
  keywords: ['software development', 'custom software solutions', 'mobile app development', 'web development', 'UI/UX design', 'cloud computing', 'Funky Function'],
  openGraph: {
    title: 'Funky Function | Innovative Software Development Company',
    description: 'Funky Function offers innovative software solutions, specializing in custom web and mobile app development. Let\'s build something great together!',
    url: 'https://www.funkyfunction.com',
    siteName: 'Funky Function',
    images: [
      {
        url: 'https://www.funkyfunction.com/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Funky Function Logo',
      },
      {
        url: 'https://www.funkyfunction.com/images/team.jpg',
        width: 800,
        height: 600,
        alt: 'Funky Function Team',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Funky Function | Innovative Software Development Company',
    description: 'Discover Funky Function\'s custom software development services. We specialize in web and mobile applications tailored to your needs.',
    images: ['public/logo.png'],
    site: '@funkyfunction',
  },
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  )
}
