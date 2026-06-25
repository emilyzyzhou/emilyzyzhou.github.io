'use client';
import { useRef, MouseEvent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  intensity?: number; // degrees, default 10
}

export default function TiltCard({ children, className = '', style, intensity = 10 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const cx = (e.clientX - left) / width  - 0.5;   // -0.5 .. 0.5
    const cy = (e.clientY - top)  / height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${-cy * intensity}deg) rotateY(${cx * intensity}deg) scale(1.02)`;
    el.style.boxShadow = `${cx * -16}px ${cy * -16}px 40px rgba(124,58,237,0.18), 0 0 28px rgba(124,58,237,0.1)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    el.style.boxShadow = '';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease', willChange: 'transform', ...style }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
