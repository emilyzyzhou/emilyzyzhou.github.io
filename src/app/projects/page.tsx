import Link from 'next/link';
import TiltCard from '@/components/TiltCard';

type TagColor = 'violet' | 'cyan' | 'amber';

interface CardData {
  title: string;
  org: string;
  dates: string;
  badge: string;
  badgeColor: TagColor;
  bullets: string[];
  tech: string[];
  link?: string;
}

const EXPERIENCE: CardData[] = [
  {title:      'Software Engineer',
    org:        'Capital One',
    dates:      'Aug 2026 – Present',
    badge:      'Current SWE',
    badgeColor: 'amber',
    bullets: [
      'Software developer in the Technology Development Program.',
    ],
    tech: [':)'],
  },
  {
    title:      'Software Developer Intern',
    org:        'CACI',
    dates:      'May 2025 – Aug 2025',
    badge:      'SWE',
    badgeColor: 'violet',
    bullets: [
      'Revamped legacy Angular forms with 40+ dynamic fields and reusable components, cutting frontend tech debt.',
      'Shipped RESTful APIs with Spring Boot; authored 100+ JUnit tests, improving backend reliability.',
      'Collaborated in Agile sprints on planning, backlog refinement, and stakeholder demos.',
    ],
    tech: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'JUnit', 'Docker', 'Kubernetes', 'GitLab'],
  },
  {
    title:      'ML Developer',
    org:        'Business and AI Institute · UVA',
    dates:      'Jan 2025 – May 2025',
    badge:      'AI / LLM',
    badgeColor: 'violet',
    bullets: [
      'Built a LangGraph + Mistral Slackbot auto-answering FAQs for 35,000+ community members.',
      'Stored context in PostgreSQL (EC2) + ChromaDB for real-time vector search; built a React admin tool for non-technical staff.',
      'Integrated Slack reaction feedback loop — pilot showed ~85% positive response satisfaction.',
    ],
    tech: ['Python', 'LangGraph', 'Mistral', 'PostgreSQL', 'ChromaDB', 'AWS EC2', 'Docker', 'Slack API', 'React'],
  },
  {
    title:      'AI / Computer Vision Intern',
    org:        'Centrifuge LLC',
    dates:      'Jun 2024 – Aug 2024',
    badge:      'ML / CV',
    badgeColor: 'cyan',
    bullets: [
      'Developed real-time object detection with YOLOv8 on AWS EC2, processing thousands of IP camera frames daily.',
      'Implemented multithreaded processing for 5× throughput across 100k+ tracked events.',
      'Containerized pipeline with Docker + Kafka for streamlined delivery and response efficiency.',
    ],
    tech: ['Python', 'YOLOv8', 'AWS EC2', 'AWS S3', 'PostgreSQL', 'Docker', 'Kafka'],
  },
  {
    title:      'Software Engineering TA',
    org:        'University of Virginia',
    dates:      'Aug 2024 – May 2026',
    badge:      'Teaching',
    badgeColor: 'cyan',
    bullets: [
      'Mentored two Agile teams (5 students each) through weekly sprints, office hours, and complex full-stack debugging.',
      'Guided Django models, Google OAuth, PostgreSQL schema, and AWS S3 through Heroku deployments.',
    ],
    tech: ['Django', 'PostgreSQL', 'AWS S3', 'Google OAuth', 'Heroku', 'Python'],
  },
  {
    title:      'Databases TA',
    org:        'University of Virginia',
    dates:      'Jan 2026 – May 2026',
    badge:      'Teaching',
    badgeColor: 'cyan',
    bullets: [
      'Supported 200+ students in learning core database systems concepts through office hours, grading, and technical guidance.',
    ],
    tech: ['PostgreSQL', 'MySQL', 'SQL', 'Database Design', 'ER Modeling', 'Normalization', 'Query Optimization'],
  },
  {
    title:      'API Security Intern',
    org:        'Corsha',
    dates:      'Jul 2019 – Aug 2020',
    badge:      'Security',
    badgeColor: 'violet',
    bullets: [
      'Automated vulnerability testing for federal contracts using Jenkins, Kubernetes, and Docker on Linux.',
      'Implemented 40+ automated test routines in Shell, packaged with Docker for Kubernetes load simulation.',
    ],
    tech: ['Bash', 'Shell', 'Kubernetes', 'Jenkins', 'Docker', 'Linux'],
  },
];

const PROJECTS: CardData[] = [
  {
    title:      'NOVA Car Crash Hotspot Prediction',
    org:        'ML4VA Research',
    dates:      'Aug 2024 – Dec 2024',
    badge:      'ML',
    badgeColor: 'violet',
    bullets: [
      'Co-developed an ML pipeline to identify high-risk roadways in Northern Virginia using VDOT data.',
      'Random Forest achieved RMSE 0.94 for crash severity and F1 0.96 for road defect classification — beat a NN baseline.',
    ],
    tech: ['Python', 'scikit-learn', 'TensorFlow', 'Random Forest', 'Pandas', 'Matplotlib'],
    link: 'https://github.com/emilyzyzhou/ML4VA_CrashHotspotDetection',
  },
  {
    title:      'Hoos Reporting Honor',
    org:        'CS 3240 Capstone · Scrum Master',
    dates:      'Jan 2024 – May 2024',
    badge:      'Full-Stack',
    badgeColor: 'cyan',
    bullets: [
      'Led a 5-person Agile team to ship a Django-based honor reporting app deployed on Heroku.',
      'Designed PostgreSQL models, Bootstrap UI, AWS S3 integration, and automated CI/CD via GitHub.',
    ],
    tech: ['Python', 'Django', 'PostgreSQL', 'AWS S3', 'Bootstrap', 'Heroku', 'GitHub'],
    link: 'https://github.com/emilyzyzhou/HoosReportingHonor',
  },
];

function TagBadge({ label, color }: { label: string; color: TagColor }) {
  return (
    <span className={`tag${color === 'cyan' ? ' tag-cyan' : color === 'amber' ? ' tag-amber' : ''}`}>
      {label}
    </span>
  );
}

function XpCard({ card }: { card: CardData }) {
  return (
    <TiltCard className="glass-card p-6 h-full flex flex-col" intensity={8}>
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--text)',
            lineHeight: 1.25,
          }}
        >
          {card.title}
        </h3>
        <TagBadge label={card.badge} color={card.badgeColor} />
      </div>

      <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
        {card.org} · {card.dates}
      </p>

      <ul className="text-sm space-y-1.5 flex-1" style={{ color: 'var(--muted-hi)', listStyle: 'none', padding: 0 }}>
        {card.bullets.map((b, i) => (
          <li key={i} className="flex gap-2 leading-relaxed">
            <span style={{ color: 'var(--violet)', flexShrink: 0, marginTop: '0.15em' }}>▸</span>
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {card.tech.map((t) => (
          <span
            key={t}
            style={{
              fontSize: '0.68rem',
              fontFamily: 'var(--font-geist-mono)',
              color: 'var(--muted)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border)',
              borderRadius: '0.3rem',
              padding: '0.15rem 0.45rem',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {card.link && (
        <a
          href={card.link}
          target="_blank"
          rel="noreferrer"
          className="link mt-4 text-sm font-semibold inline-flex items-center gap-1"
        >
          View on GitHub <span aria-hidden>↗</span>
        </a>
      )}
    </TiltCard>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <p className="section-label mb-6">{label}</p>
      {children}
    </section>
  );
}

export default function ExperiencePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16" style={{ minHeight: 'calc(100dvh - 56px)' }}>

      {/* Page title */}
      <h1
        className="mb-12"
        style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          letterSpacing: '-0.03em',
        }}
      >
        <span className="gradient-text">Experience &amp;</span>{' '}
        <span style={{ color: 'var(--text)' }}>Projects</span>
      </h1>

      <Section label="Work Experience">
        <div className="grid gap-5 md:grid-cols-2">
          {EXPERIENCE.map((c) => <XpCard key={c.title} card={c} />)}
        </div>
      </Section>

      <Section label="Education">
        <TiltCard className="glass-card p-6 max-w-xl" intensity={6}>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: 'var(--text)',
              }}
            >
              University of Virginia
            </h3>
            <span className="tag tag-amber">GPA 3.89</span>
          </div>
          <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
            B.S. Computer Science · Minors in Data Science &amp; French · May 2022 – May 2026
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-hi)' }}>
            Relevant coursework: Algorithms, Machine Learning, Computer Vision, Databases,
            Software Engineering, Operating Systems, Natural Language Processing
          </p>
        </TiltCard>
      </Section>

      <Section label="Projects">
        <div className="grid gap-5 md:grid-cols-2">
          {PROJECTS.map((c) => <XpCard key={c.title} card={c} />)}
        </div>
      </Section>

      <div className="flex gap-3">
        <Link href="/resume" className="btn-primary">View Full Resume</Link>
        <Link href="/" className="btn-ghost">← Back</Link>
      </div>

    </main>
  );
}
