'use client';
import { useEffect, useState } from 'react';

const ROLES = [
  'Full-Stack Engineer',
  'AI / ML Developer',
  'Problem Solver',
  'CS @ UVA · May \'26',
];

const DELAY_CHAR  = 65;   // ms per char
const DELAY_PAUSE = 1800; // ms hold at full word
const DELAY_DEL   = 35;   // ms per delete

export default function TypingText() {
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx]     = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const word = ROLES[idx];

    if (typing) {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), DELAY_CHAR);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), DELAY_PAUSE);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), DELAY_DEL);
        return () => clearTimeout(t);
      } else {
        setIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, idx]);

  return (
    <span>
      <span style={{ color: 'var(--cyan)' }}>{displayed}</span>
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1.1em',
          background: 'var(--violet)',
          verticalAlign: 'text-bottom',
          marginLeft: '2px',
          animation: 'blink 1s step-start infinite',
        }}
        aria-hidden
      />
    </span>
  );
}
