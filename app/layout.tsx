import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { ThemeProvider } from './components/ThemeProvider'
import { Metadata, Viewport } from 'next'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Walters Data Solutions | Data Solutions in Sports',
  description: 'Data solutions tailored for sports organizations',
  keywords: ['Sports data Solutions', 'Data engineering services', 'Data science sports', 'Cloud solutions',
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
    title: 'Walters Data Solutions | Data Solutions in Sports',
    description: 'Data solutions tailored for sports organizations',
    url: 'https://waltersdatasolutions.com',
    siteName: 'Walters Data Solutions',
    images: [
      {
        url: 'https://waltersdatasolutions.com/small_logo_icon.png',
        width: 1563,
        height: 1140,
        alt: 'Walters Data Solutions - Data Solutions in Sports',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walters Data Solutions | Sports Data Solutions',
    description: 'Data solutions tailored for sports organizations',
    images: ['https://waltersdatasolutions.com/small_logo_icon.png'],
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
      icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
  manifest: '/site.webmanifest',
    appleWebApp: {
    title: 'WDS',
    statusBarStyle: 'default',
  },
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
                <Script id="schema-script" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Walters Data Solutions",
              "description": "Data solutions tailored for sports organizations",
              "url": "https://waltersdatasolutions.com",
              "logo": "https://waltersdatasolutions.com/small_logo_icon.png",
              "sameAs": [
                "https://www.linkedin.com/in/ty-walters",
                "https://github.com/orgs/Walters-Data-Solutions"
              ],
              "founder": {
                "@type": "Person",
                "name": "Ty Walters",
                "jobTitle": "Founder & Data Scientist"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "owner",
                "email": "ty@waltersdatasolutions.com"
              },
              "services": [
                "Data Engineering",
                "Data Science",
                "Cloud Data Solutions"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  )
}
