import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LAYGRID — 精緻なデザインで伝わるWeb体験を',
  description:
    'LAYGRIDは和歌山を拠点とするクリエイティブWebスタジオです。ミニマルなデザインと戦略的な設計で、モダンなWebサイトを制作します。',
  generator: 'v0.app',
  openGraph: {
    title: 'LAYGRID — クリエイティブWebスタジオ',
    description:
      '和歌山発。ミニマルなデザインと戦略的な設計で、モダンなWebサイトを制作します。',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0f0f0f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
