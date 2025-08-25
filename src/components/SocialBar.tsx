'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function SocialBar() {
  const [copied, setCopied] = useState(false);
  const email = 'emilyzyzhou@gmail.com';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="mt-6 flex items-center gap-5">
      {/* GitHub */}
      <a
        href="https://github.com/emilyzyzhou"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:scale-110 transition-transform duration-200"
      >
        <FaGithub size={28} className="text-[var(--hh-muted)] hover:text-[var(--hh-text)]" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/emilyzyzhou/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:scale-110 transition-transform duration-200"
      >
        <FaLinkedin size={28} className="text-[var(--hh-muted)] hover:text-[var(--hh-text)]" />
      </a>

      {/* Email (copy to clipboard) */}
      <button
        type="button"
        onClick={copyEmail}
        aria-label="Copy email"
        className="hover:scale-110 transition-transform duration-200"
        title="Copy email"
      >
        <FaEnvelope size={28} className="text-[var(--hh-muted)] hover:text-[var(--hh-accent)]" />
      </button>

      {/* tiny toast */}
      {copied && (
        <span
          className="text-xs px-2 py-1 rounded"
          style={{ background: 'var(--hh-border)', color: 'var(--hh-text)' }}
        >
          Copied!
        </span>
      )}
    </div>
  );
}
