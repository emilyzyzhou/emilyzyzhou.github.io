import TiltCard from '@/components/TiltCard';

export default function InterestsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16" style={{ minHeight: 'calc(100dvh - 56px)' }}>

      {/* Page header */}
      <div className="mb-12">
        <h1
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          <span style={{ color: 'var(--text)' }}>Beyond the </span>
          <span className="gradient-text">Code</span>
        </h1>
        <p className="mt-3 text-sm" style={{ color: 'var(--muted)', maxWidth: '50ch', lineHeight: 1.7 }}>
          Software is what I build. Here&apos;s the rest of the picture.
        </p>
      </div>

      {/* Interest cards grid */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-16">

        <TiltCard className="glass-card p-6 flex flex-col gap-3" intensity={7}>
          <div className="flex items-center gap-2.5">
            <span style={{ fontSize: '1.5rem' }}>🌍</span>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>
              Languages
            </h2>
          </div>
          <p style={{ color: 'var(--muted-hi)', fontSize: '0.9rem', lineHeight: 1.7 }}>
            I speak <strong style={{ color: 'var(--cyan)' }}>French</strong> (business professional — 8 years), <strong style={{ color: 'var(--violet)' }}>Chinese</strong> (native), and <strong style={{ color: 'var(--amber)' }}>Japanese</strong> (beginner - 1 year).
            There&apos;s something deeply satisfying about the precision that language demands yet the variety of approaches you can take to communicate.
          </p>
        </TiltCard>

        <TiltCard className="glass-card p-6 flex flex-col gap-3" intensity={7}>
          <div className="flex items-center gap-2.5">
            <span style={{ fontSize: '1.5rem' }}>🎮</span>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>
              Games &amp; Interactive Media
            </h2>
          </div>
           <p style={{ color: 'var(--muted-hi)', fontSize: '0.9rem', lineHeight: 1.7 }}>
            Really enjoyed playing indie games recently- tackling the complexity of Blue Prince then enjoying Meccha Chameleon has been great! I also enjoy playing board games with friends, particularly ones that we&apos;ve never even heard of but leave us scratching our heads together.
          </p>
        </TiltCard>

        <TiltCard className="glass-card p-6 flex flex-col gap-3" intensity={7}>
          <div className="flex items-center gap-2.5">
            <span style={{ fontSize: '1.5rem' }}>📚</span>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>
              Reading &amp; Learning
            </h2>
          </div>
          <p style={{ color: 'var(--muted-hi)', fontSize: '0.9rem', lineHeight: 1.7 }}>
            New hobbies I&apos;m picking up are pickleball and card collecting!
          </p>
        </TiltCard>

        <TiltCard className="glass-card p-6 flex flex-col gap-3" intensity={7}>
          <div className="flex items-center gap-2.5">
            <span style={{ fontSize: '1.5rem' }}>🎵</span>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>
              Music &amp; Creativity
            </h2>
          </div>
          <p style={{ color: 'var(--muted-hi)', fontSize: '0.9rem', lineHeight: 1.7 }}>
            I listen to a large variety of music from jazz fusion to game soundtracks. I also have done graphic design and digital art for eight years and have created everything from stickers to tshirts to competition banners. The newest creative challenge I have ahead of me now is to learn how to paint card binders!
          </p>
        </TiltCard>

        <TiltCard className="glass-card p-6 flex flex-col gap-3" intensity={7}>
          <div className="flex items-center gap-2.5">
            <span style={{ fontSize: '1.5rem' }}>🏃</span>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>
              Outside the Screen
            </h2>
          </div>
          <p style={{ color: 'var(--muted-hi)', fontSize: '0.9rem', lineHeight: 1.7 }}>
            I used to do a Chinese martial art called Wushu in college and even competed in the collegiate team at UVA. Currently, I&apos;m getting back into weightlifting and also learning how to play pickleball.
          </p>
        </TiltCard>

        <TiltCard className="glass-card p-6 flex flex-col gap-3" intensity={7}>
          <div className="flex items-center gap-2.5">
            <span style={{ fontSize: '1.5rem' }}>🔭</span>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>
              Currently Exploring
            </h2>
          </div>
          <p style={{ color: 'var(--muted-hi)', fontSize: '0.9rem', lineHeight: 1.7 }}>
            Deep in the world of <strong style={{ color: 'var(--violet)' }}>agentic AI systems</strong> — multi-agent
            orchestration, memory, and tool use. LangGraph showed me how much design space there is
            between &ldquo;chatbot&rdquo; and &ldquo;autonomous system.&rdquo;
          </p>
        </TiltCard>

      </div>

      {/* CTA */}
      <section className="glass-card p-8 text-center" style={{ borderColor: 'rgba(124,58,237,0.25)' }}>
        <p style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '1.3rem', color: 'var(--text)', marginBottom: '0.6rem' }}>
          Let&apos;s talk
        </p>
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '44ch', margin: '0 auto 1.5rem' }}>
          Whether it&apos;s AI, software engineering, French cinema, or whatever you&apos;re building,
          I&apos;m always up for a good conversation.
        </p>
        <a href="mailto:emilyzyzhou@gmail.com" className="btn-primary">
          Say hello ✉️
        </a>
      </section>

    </main>
  );
}
