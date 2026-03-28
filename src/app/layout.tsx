import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Badeklubben',
    template: '%s — Badeklubben',
  },
  description: 'Hobby-prosjekter fra Badeklubben — en gjeng som lager ting for moro skyld.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
