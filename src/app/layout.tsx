import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';

const syne = Syne({ subsets: ['latin'], weight: ['700','800'], variable: '--font-syne' });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400','500'], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: 'Emily Zhou — Portfolio',
  description: 'About, resume, projects, and interests.',
}
import NavBar from '@/components/NavBar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
        <body style={{fontFamily: 'var(--font-dm-sans)'}}>
          <NavBar/>
          <main className="max-w-5xl mx-auto px-4">{children}</main>
          <footer className="py-10 text-center text-sm text-zinc-500">© {new Date().getFullYear()} Emily Zhou</footer>
        </body>
      </html>
  );
}
