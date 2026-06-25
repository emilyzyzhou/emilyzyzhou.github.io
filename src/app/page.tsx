import Image from 'next/image';
import Link from 'next/link';
import TypingText from '@/components/TypingText';
import SocialBar from '@/components/SocialBar';
import TiltCard from '@/components/TiltCard';

const STATS = [
  { value: '3.89',  label: 'GPA'          },
  { value: '35k+',  label: 'Users Served'  },
  { value: '5',     label: 'Internships'   },
  { value: "'26",   label: 'Graduation'    },
];

const TECH = [
  { label: 'Python',      color: 'violet' },
  { label: 'Java',        color: 'cyan'   },
  { label: 'TypeScript',  color: 'violet' },
  { label: 'React',       color: 'cyan'   },
  { label: 'Spring Boot', color: 'violet' },
  { label: 'LangGraph',   color: 'amber'  },
  { label: 'PostgreSQL',  color: 'cyan'   },
  { label: 'AWS',         color: 'amber'  },
  { label: 'Docker',      color: 'violet' },
  { label: 'LLMs',        color: 'amber'  },
  { label: 'Kubernetes',  color: 'cyan'   },
  { label: 'Django',      color: 'violet' },
];

export default function Home() {
  return (
    <main>

      {/* ─── Hero ────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">

          {/* Left: text */}
          <div className="flex-1 min-w-0">
            <p className="section-label mb-5 fade-up" style={{ animationDelay: '0ms' }}>
              Available · May 2026
            </p>

            <h1
              className="glitch fade-up"
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                animationDelay: '80ms',
              }}
            >
              Emily<br />
              <span className="shimmer-text">Zhou</span>
            </h1>

            <p
              className="mt-4 text-xl font-medium fade-up"
              style={{ color: 'var(--muted-hi)', animationDelay: '160ms', minHeight: '1.75rem' }}
            >
              <TypingText />
            </p>

            <p
              className="mt-5 leading-relaxed fade-up"
              style={{ color: 'var(--muted)', maxWidth: '50ch', animationDelay: '240ms', lineHeight: 1.75 }}
            >
              CS student at UVA building full-stack products and AI-driven systems end-to-end.
              Most recently shipped a LangGraph Slackbot serving 35k+ users and production
              Spring Boot APIs at CACI. I care about owning features, moving fast, and making
              things people actually use.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 fade-up" style={{ animationDelay: '320ms' }}>
              <Link href="/resume" className="btn-primary">View Resume</Link>
              <Link href="/projects" className="btn-ghost">See Experience</Link>
            </div>

            <div className="fade-up" style={{ animationDelay: '400ms' }}>
              <SocialBar />
            </div>
          </div>

          {/* Right: 3D profile card */}
          <TiltCard
            className="flex-shrink-0 fade-up"
            style={{ animationDelay: '200ms' }}
            intensity={12}
          >
            <div
              style={{
                position: 'relative',
                width: 260,
                padding: '2px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #7c3aed, #22d3ee, #fbbf24, #7c3aed)',
                animation: 'spin-slow 6s linear infinite',
              }}
            >
              {/* inner static wrapper to keep image still while border spins */}
              <div
                style={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: 'var(--bg)',
                  animation: 'spin-slow 6s linear infinite reverse',
                  padding: 4,
                }}
              >
                <Image
                  src="/aboutmepfp.png"
                  alt="Emily Zhou"
                  width={252}
                  height={252}
                  className="rounded-full object-cover block"
                  priority
                />
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ─── Stats strip ─────────────────────────────── */}
      <section
        className="border-y"
        style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.015)' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.07]">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center py-4 md:py-2 gap-1">
              <span
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 800,
                  fontSize: '2rem',
                  lineHeight: 1,
                  background: 'linear-gradient(135deg, #a78bfa, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {value}
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Tech stack ──────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="section-label mb-6">Tech Stack</p>
        <div className="flex flex-wrap gap-2.5">
          {TECH.map(({ label, color }) => (
            <span
              key={label}
              className={`tag${color === 'cyan' ? ' tag-cyan' : color === 'amber' ? ' tag-amber' : ''}`}
            >
              {label}
            </span>
          ))}
        </div>
      </section>

    </main>
  );
}
