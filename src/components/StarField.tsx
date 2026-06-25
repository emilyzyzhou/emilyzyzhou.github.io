'use client';
import { useEffect, useRef } from 'react';

interface Star {
  x: number;  // -1..1 from center
  y: number;
  z: number;  // depth 0..1 (0=far, 1=close)
  px: number; // previous screen x
  py: number;
}

export default function StarField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const COUNT = 220;
    const SPEED = 0.0006;

    let W = 0, H = 0;
    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width  = W;
      canvas.height = H;
    };
    resize();
    window.addEventListener('resize', resize);

    const stars: Star[] = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * 2 - 1,
      y:  Math.random() * 2 - 1,
      z:  Math.random(),
      px: 0,
      py: 0,
    }));

    let raf: number;

    const draw = () => {
      // Fade trail
      ctx.fillStyle = 'rgba(7,7,14,0.18)';
      ctx.fillRect(0, 0, W, H);

      for (const s of stars) {
        s.z += SPEED;
        if (s.z >= 1) {
          s.x  = Math.random() * 2 - 1;
          s.y  = Math.random() * 2 - 1;
          s.z  = 0.01;
          s.px = 0;
          s.py = 0;
        }

        const sx = (s.x / s.z) * (W * 0.5) + W * 0.5;
        const sy = (s.y / s.z) * (H * 0.5) + H * 0.5;
        const r  = Math.max(0.3, s.z * 2.2);
        const a  = Math.min(1, s.z * 1.4);

        // streak / tail
        if (s.px !== 0 && s.z > 0.15) {
          ctx.strokeStyle = `rgba(180,160,255,${a * 0.45})`;
          ctx.lineWidth   = r * 0.6;
          ctx.beginPath();
          ctx.moveTo(s.px, s.py);
          ctx.lineTo(sx, sy);
          ctx.stroke();
        }

        // dot
        const hue = 240 + s.x * 30; // slight hue shift across screen
        ctx.fillStyle = `hsla(${hue},80%,85%,${a})`;
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fill();

        s.px = sx;
        s.py = sy;
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
