'use client';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function SocialBar() {
  const [copied, setCopied] = useState(false);
  const email = 'emilyzyzhou@gmail.com';

  const copy = async () => {
    try { await navigator.clipboard.writeText(email); }
    catch {
      const ta = document.createElement('textarea');
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div className="mt-7 flex items-center gap-5">
      <a
        href="https://github.com/emilyzyzhou"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="transition-transform hover:scale-110"
        style={{ color: 'var(--muted)' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
      >
        <FaGithub size={24} />
      </a>

      <a
        href="https://www.linkedin.com/in/emilyzyzhou/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="transition-transform hover:scale-110"
        style={{ color: 'var(--muted)' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
      >
        <FaLinkedin size={24} />
      </a>

      <button
        type="button"
        onClick={copy}
        aria-label="Copy email"
        className="transition-transform hover:scale-110"
        style={{ color: 'var(--muted)', background: 'none', border: 'none', padding: 0 }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--violet)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
      >
        <FaEnvelope size={22} />
      </button>

      {copied && (
        <span
          className="text-xs px-2.5 py-1 rounded-full font-medium"
          style={{ background: 'rgba(34,211,238,0.12)', color: 'var(--cyan)', border: '1px solid rgba(34,211,238,0.25)' }}
        >
          Copied!
        </span>
      )}
    </div>
  );
}
