import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import BurgerMenu from './common/components/BurgerMenu';
import './style.css'
import { Suspense } from 'react';

// Dette kom med default koden, vet ikke helt va dette er - Stian

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Velkommen til bingo!',
  description: 'lets bingo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BurgerMenu/>
        <AppRouterCacheProvider>
          <Suspense>
          <div className="bingo-container">
            <div className="bingo-floater">
              {children}
            </div>    
          </div>
          </Suspense>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
