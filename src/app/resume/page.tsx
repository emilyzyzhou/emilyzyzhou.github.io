export default function Resume() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16" style={{ minHeight: 'calc(100dvh - 56px)' }}>

      <div className="mb-8">
        <h1
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            letterSpacing: '-0.03em',
          }}
        >
          <span className="gradient-text">Resume</span>
        </h1>
        <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>
          Download or preview below
        </p>
      </div>

      <div className="flex gap-3 mb-8">
        <a href="/resume.pdf" download className="btn-primary">
          Download PDF
        </a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-ghost">
          Open in new tab ↗
        </a>
      </div>

      <div
        className="hidden md:block"
        style={{
          borderRadius: '1rem',
          overflow: 'hidden',
          border: '1px solid var(--border)',
          boxShadow: '0 0 40px rgba(124,58,237,0.08)',
        }}
      >
        <object
          data="/resume.pdf"
          type="application/pdf"
          style={{ width: '100%', height: '85vh', display: 'block' }}
        >
          <p style={{ color: 'var(--muted)', padding: '2rem' }}>
            PDF preview not supported.{' '}
            <a className="link" href="/resume.pdf">Download instead</a>
          </p>
        </object>
      </div>

    </main>
  );
}
