import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Dette kom med default koden, vet ikke helt va dette er - Stian

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Velkommen til badeklubben!',
  description: 'Vi bades',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
