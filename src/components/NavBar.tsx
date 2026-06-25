'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const LINKS = [
  { href: '/',          label: 'About'      },
  { href: '/projects',  label: 'Experience' },
  { href: '/interests', label: 'Interests'  },
  { href: '/resume',    label: 'Resume'     },
];

export default function NavBar() {
  const path = usePathname();
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background:    'var(--nav-bg)',
        borderColor:   'var(--border)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* wordmark */}
        <Link
          href="/"
          style={{
            fontFamily:  'var(--font-syne)',
            fontWeight:  800,
            fontSize:    '1.1rem',
            letterSpacing: '0.02em',
          }}
          className="gradient-text"
        >
          EZ
        </Link>

        {/* links */}
        <div className="flex items-center gap-1 text-sm">
          {LINKS.map((l) => {
            const active = path === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded-lg font-medium transition-all duration-200"
                style={{
                  color:      active ? '#fff' : 'var(--muted)',
                  background: active ? 'rgba(124,58,237,0.25)' : 'transparent',
                  boxShadow:  active ? '0 0 12px rgba(124,58,237,0.2)' : 'none',
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* social icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/emilyzyzhou"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            <FaGithub size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/emilyzyzhou/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            <FaLinkedin size={19} />
          </a>
        </div>

      </nav>
    </header>
  );
}
