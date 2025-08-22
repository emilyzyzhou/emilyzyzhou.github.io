// src/app/page.tsx  (About)
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main style={{ minHeight: 'calc(100dvh - 64px)' }}>
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: text */}
          <div>
            <h1
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 800,
                  fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                  lineHeight: 1.1,
                  color: 'var(--hh-text)',
                }}
            >
              Emily Zhou
            </h1>

            <p className="mt-4" style={{color: 'var(--hh-muted)', lineHeight: 1.7}}>
              Hi there! I&#39;m a full-stack/AI developer who greatly enjoys learning new technologies while perfecting my craft.
              Currently, I&#39;m studying CS at UVA and am graduating in May 2026 with a minor in Data Science and French!
              I have experience across both Python and Java full-stack development, databases like Postgres and MongoDB, the cloud + containerization such as AWS and Docker, and AI-driven apps
              (LLM Slackbot serving 35k+ users). I am currently seeking roles where I can own features
              end-to-end and collaborate closely with the product! Ask me about my interests too :D
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/resume" className="btn-accent">View Resume</Link>
              <Link href="/projects" className="btn-outline">See Projects</Link>
            </div>

            <div className="mt-6 flex gap-5">
              <a
                href="https://github.com/emilyzyzhou"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:scale-110 transition-transform duration-200"
              >
                <FaGithub size={28} className="text-gray-700 hover:text-black" />
              </a>

              <a
                href="https://www.linkedin.com/in/emilyzyzhou/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:scale-110 transition-transform duration-200"
              >
                <FaLinkedin size={28} className="text-gray-700 hover:text-blue-600" />
              </a>
            </div>

          </div>

          {/* Right: image */}
            <div className="flex justify-center md:justify-end">
                <Image
                    src="/aboutmepfp.png"
                    alt="Profile"
                    width={888}          // explicit sizing, controls proportions
                    height={888}
                    className="rounded-full object-cover w-[800px] md:w-[800px]"
                    priority
                />
            </div>
        </div>
      </section>
    </main>
  );
}
