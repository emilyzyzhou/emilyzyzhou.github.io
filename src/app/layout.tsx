import type { Metadata } from 'next';
import { Syne, DM_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import StarField from '@/components/StarField';

const syne    = Syne({ subsets: ['latin'], weight: ['700','800'], variable: '--font-syne' });
const dmSans  = DM_Sans({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-dm-sans' });
const mono    = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: 'Emily Zhou — Portfolio',
  description: 'Full-Stack & AI Engineer · UVA CS May 2026',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${mono.variable}`}>
      <body>
        <StarField />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <NavBar />
          {children}
          <footer
            className="py-8 text-center text-xs"
            style={{ color: 'var(--muted)', borderTop: '1px solid var(--border)' }}
          >
            © {new Date().getFullYear()} Emily Zhou · Built with Next.js
          </footer>
        </div>
      </body>
    </html>
  );
}
