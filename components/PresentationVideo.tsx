'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';

// Pilot Light's orange and gold, matching app/pilot-light/page.tsx.
const ORANGE = '#fb923c';
const GLOW = 'rgba(251, 146, 60, 0.85)';

/**
 * A video that shows its poster and a branded play button until clicked, so nothing downloads before someone asks for it.
 * The frame is wider than 16:9 to crop the black bars baked into the recordings; `aspectRatio` and `objectPosition` set
 * which band of the 1920×1080 video stays visible. The poster should be cropped to the same band.
 * The play button and label size to the frame (container queries), so a narrow vertical video gets a smaller button.
 */
export default function PresentationVideo({
  src,
  poster,
  title,
  label,
  aspectRatio = '1920 / 1028',
  objectPosition = '50% 50%',
  onLight = false,
  labelAt = 'bottom',
  sizes = '(min-width: 1280px) 1100px, 100vw',
}: {
  src: string;
  poster: string;
  title: string;
  label: ReactNode;
  aspectRatio?: string;
  objectPosition?: string;
  onLight?: boolean;
  labelAt?: 'top' | 'bottom';
  sizes?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="@container relative w-full overflow-hidden rounded-[2rem]"
      style={{ aspectRatio, backgroundColor: 'var(--midnight)', boxShadow: `0 0 0 2px ${onLight ? 'var(--charcoal)' : '#2b313a'}, 14px 16px 0 ${GLOW}` }}
    >
      {playing ? (
        <video src={src} title={title} controls autoPlay playsInline className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition }} />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label={`Play: ${title}`} className="group absolute inset-0 block w-full cursor-pointer">
          <Image src={poster} alt="" fill sizes={sizes} quality={90} className="object-cover" />
          <span
            className="absolute inset-0"
            style={{ background: `linear-gradient(to ${labelAt === 'top' ? 'bottom' : 'top'}, rgba(15, 20, 25, 0.65), transparent 55%)` }}
          />

          <span className="absolute inset-0 flex items-center justify-center">
            <span
              className="flex h-14 w-14 @lg:h-20 @lg:w-20 @2xl:h-28 @2xl:w-28 items-center justify-center rounded-full border-2 transition-transform duration-150 group-hover:translate-x-[3px] group-hover:translate-y-[3px] group-active:translate-x-[6px] group-active:translate-y-[6px]"
              style={{ backgroundColor: ORANGE, borderColor: 'var(--midnight)', boxShadow: '6px 6px 0 rgba(15, 20, 25, 0.7)' }}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-1 @lg:ml-1.5 h-6 w-6 @lg:h-8 @lg:w-8 @2xl:h-11 @2xl:w-11">
                <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z" fill="var(--midnight)" />
              </svg>
            </span>
          </span>

          <span
            className={`chip-fun chip-fun-dark absolute ${labelAt === 'top' ? 'top-3 @lg:top-4 @2xl:top-6' : 'bottom-3 @lg:bottom-4 @2xl:bottom-6'} left-3 @lg:left-4 @2xl:left-6 flex items-center gap-2 px-3 py-1.5 text-xs @lg:px-4 @lg:py-2 @lg:text-sm`}
            style={{ color: 'var(--bone)', backgroundColor: 'rgba(15, 20, 25, 0.7)', backdropFilter: 'blur(8px)' }}
          >
            {label}
          </span>
        </button>
      )}
    </div>
  );
}
