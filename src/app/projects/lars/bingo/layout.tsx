import type { Metadata } from 'next';
import BurgerMenu from './common/components/BurgerMenu';
import './style.css';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Velkommen til bingo!',
  description: 'lets bingo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BurgerMenu />
        <Suspense>
          <div className="bingo-container">
            <div className="bingo-floater">{children}</div>
          </div>
        </Suspense>
      </body>
    </html>
  );
}
