import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { ThemeProvider } from './components/ThemeProvider'
import { Metadata, Viewport } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Walters Data Solutions',
  description: 'Expert data solutions tailored for sports organizations',
  keywords: ['Sports data consulting', 'Data engineering services', 'Data science sports', 'Cloud solutions',
      'Sports analytics experts', 'AI for sports'],
  authors: [{ name: 'Ty Walters' }],
  creator: 'Ty Walters',
  publisher: 'Walters Data Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://waltersdatasolutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Walters Data Solutions',
    description: 'Expert data solutions tailored for sports organizations',
    url: 'https://waltersdatasolutions.com',
    siteName: 'Walters Data Solutions',
    images: [
      {
        url: 'https://waltersdatasolutions.com/favicon-32x32.png',
        width: 1200,
        height: 630,
        alt: 'Walters Data Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walters Data Solutions',
    description: 'Expert data solutions tailored for sports organizations',
    creator: '@tywalters',
    images: ['https://waltersdatasolutions.com/favicon-32x32.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
