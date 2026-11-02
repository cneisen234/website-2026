'use client';

import { useEffect, useId, useRef } from 'react';
import './pilot-flame.css';

// Pilot Light's flame. It lights from a small blue pilot flame, flashes white and flares orange with a burst of glow,
// flickers, and settles to rest after 12 seconds. It starts once it scrolls into view and plays once. All of it is drawn
// in the flame's own 24-unit box, so the glow scales with `size` and spills outside the box without moving layout.
// The sizes, offsets and opacities below were tuned against the video frame by frame.

const OUTER = 'M12 2c1 3.5 5 6 5 11a5 5 0 0 1-10 0c0-2.3 1-4 2.5-5.5C9.8 9.5 10.5 11 12 11.5 11.2 8 12 4.5 12 2Z';
const INNER = 'M12 12.5c1 1.3 2 2.2 2 3.7a2 2 0 0 1-4 0c0-1.3.9-2.4 2-3.7Z';

/** The flame's outline, carried through the same ignite and flicker motion as the flame itself (used for its glow). */
function Silhouette() {
  return (
    <g className="plf-ignite">
      <g className="plf-flicker">
        <path d={OUTER} />
      </g>
    </g>
  );
}

export default function PilotFlame({ size = 24, className = '' }: { size?: number; className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      svg.dataset.play = 'true';
      observer.disconnect();
    });
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <svg ref={ref} data-play="false" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={`plf shrink-0 ${className}`}>
      <defs>
        <filter id={`${id}-glow`} filterUnits="userSpaceOnUse" x="-24" y="-24" width="72" height="72">
          <feGaussianBlur stdDeviation="3.4" />
        </filter>
        <filter id={`${id}-tight`} filterUnits="userSpaceOnUse" x="-24" y="-24" width="72" height="72">
          <feGaussianBlur stdDeviation="1" />
        </filter>
        <filter id={`${id}-soft`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.25" />
        </filter>
        <clipPath id={`${id}-inner`}>
          <path d={INNER} />
        </clipPath>
        <radialGradient id={`${id}-burst`}>
          <stop offset="0" stopColor="#fb923c" stopOpacity="0.45" />
          <stop offset="0.4" stopColor="#fb923c" stopOpacity="0.3" />
          <stop offset="0.65" stopColor="#fb923c" stopOpacity="0.17" />
          <stop offset="0.85" stopColor="#fb923c" stopOpacity="0.07" />
          <stop offset="1" stopColor="#fb923c" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-flash`}>
          <stop offset="0" stopColor="#f3efe9" stopOpacity="0.5" />
          <stop offset="0.15" stopColor="#f3efe9" stopOpacity="0.36" />
          <stop offset="0.3" stopColor="#f3efe9" stopOpacity="0.22" />
          <stop offset="0.55" stopColor="#f3efe9" stopOpacity="0.11" />
          <stop offset="0.8" stopColor="#f3efe9" stopOpacity="0.04" />
          <stop offset="1" stopColor="#f3efe9" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-halo`}>
          <stop offset="0" stopColor="#60a5fa" stopOpacity="0.55" />
          <stop offset="0.35" stopColor="#60a5fa" stopOpacity="0.3" />
          <stop offset="0.6" stopColor="#60a5fa" stopOpacity="0.14" />
          <stop offset="1" stopColor="#60a5fa" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle className="plf-burst" cx="12" cy="11" r="22" fill={`url(#${id}-burst)`} />
      <circle className="plf-flash" cx="12" cy="16.5" r="9" fill={`url(#${id}-flash)`} />
      <circle className="plf-halo" cx="12" cy="16.3" r="4.6" fill={`url(#${id}-halo)`} />

      {/* Glow: a wide and a tight blur of the flame, both sitting a little above it like the video's. */}
      <g className="plf-glow" filter={`url(#${id}-glow)`} transform="translate(0 -1.1)">
        <Silhouette />
      </g>
      <g opacity="0.45">
        <g className="plf-glow" filter={`url(#${id}-tight)`} transform="translate(0 -0.7)">
          <Silhouette />
        </g>
      </g>

      <g className="plf-ignite">
        <g className="plf-flicker">
          <path className="plf-outer" d={OUTER} />
          <path className="plf-inner" d={INNER} />
          <g clipPath={`url(#${id}-inner)`}>
            <ellipse className="plf-core" cx="12" cy="16.4" rx="1.15" ry="1.6" filter={`url(#${id}-soft)`} />
          </g>
        </g>
      </g>
    </svg>
  );
}
