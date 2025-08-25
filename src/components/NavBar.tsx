'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// https://www.happyhues.co/palettes/17
const COLORS = {
  bg: '#f3d2c1',      // soft cream background
  text: '#1C1C1E',    // dark charcoal
  accent: '#FF7B72',  // coral accent
  hover: '#8bd3dd',   // blue hover
  muted: '#7D7D7D',   // neutral gray
  border: '#EAE8E6',  // light divider border
};

const links = [
  { href: '/', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  // { href: '/interests', label: 'Interests' },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur border-b"
      style={{ backgroundColor: COLORS.bg, borderColor: COLORS.border }}
    >
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo with link to homepage */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"     // put your logo in /public/logo.png
            alt="Emily Zhou logo"
            width={45}         // adjust width as needed
            height={30}         // adjust height as needed
            priority
            className="object-contain"
          />
        </Link>

        {/* Navigation links */}
        <div className="text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: pathname === l.href ? COLORS.accent : COLORS.muted,
              }}
              className="px-3 py-2 font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
