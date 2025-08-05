import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AmazonBonus - Amazon Siparişlerinden Bonus Kazan',
  description: 'Amazon alışverişlerinizden bonus kazanın, siparişlerinizi takip edin ve ödüllerinizi toplayın.',
  keywords: 'amazon, bonus, sipariş takip, cashback, alışveriş',
  authors: [{ name: 'AmazonBonus Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
          {children}
        </div>
      </body>
    </html>
  )
}