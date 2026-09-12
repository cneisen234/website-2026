import Link from "next/link";

// Root 404 — shown for any unmatched URL and for notFound() calls. It renders
// inside the root layout, so the site nav + footer frame it. The "0" of 404 is
// the Kindling flame, keeping it on-brand.
export default function NotFound() {
  return (
    <main className="relative flex-1 overflow-hidden" style={{ backgroundColor: "var(--warm-cream)" }}>
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)",
          transform: "translate(20%, -30%)",
        }}
      />
      <div className="dot-texture absolute inset-0 opacity-[0.04] pointer-events-none" />

      <svg
        className="floaty absolute top-24 right-[14%] hidden lg:block pointer-events-none"
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path d="M12 2l2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8L12 2z" fill="var(--honey-gold)" />
      </svg>

      <div className="container mx-auto px-4 py-20 md:py-28 relative">
        <div
          className="card-fun tilt-r max-w-xl mx-auto text-center px-8 py-12 md:px-12 md:py-16"
          style={{ backgroundColor: "var(--paper)" }}
        >
          <span className="badge badge-tilt mb-2">
            <span className="badge-dot" />
            Page not found
          </span>

          {/* 4 · flame · 4 */}
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            <Four />
            <Flame />
            <Four />
          </div>
          <span className="sr-only">404 — page not found</span>

          <h1
            className="mt-4 text-3xl md:text-4xl leading-[1.05]"
            style={{ fontFamily: "var(--font-heading)", color: "var(--charcoal)" }}
          >
            This page didn&rsquo;t{" "}
            <span className="italic" style={{ color: "var(--ember-deep)" }}>
              catch
            </span>
            .
          </h1>
          <p className="mt-3 text-lg" style={{ color: "var(--ash-gray)", lineHeight: "1.7" }}>
            That link led nowhere — but we can point you back to the good stuff.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="btn-fun group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
              style={{ backgroundColor: "var(--ember-deep)", color: "var(--bone)" }}
            >
              Take me home
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M4 10h12m0 0l-4-4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="btn-fun inline-flex items-center justify-center px-8 py-4 text-lg"
              style={{ backgroundColor: "var(--paper)", color: "var(--charcoal)" }}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

// The oversized ember "4" flanking the flame.
function Four() {
  return (
    <span
      aria-hidden
      className="leading-none"
      style={{
        fontFamily: "var(--font-rounded), sans-serif",
        fontSize: "clamp(84px, 24vw, 150px)",
        fontWeight: 600,
        color: "var(--ember-deep)",
      }}
    >
      4
    </span>
  );
}

// Branded Kindling flame standing in for the "0", with a couple of rising sparks.
function Flame() {
  return (
    <svg
      viewBox="0 0 64 96"
      aria-hidden
      style={{ width: "clamp(58px, 18vw, 104px)", height: "auto", flexShrink: 0 }}
    >
      {/* rising sparks */}
      <circle cx="42" cy="14" r="2.6" fill="var(--honey-gold)" opacity="0.85" />
      <circle cx="49" cy="7" r="1.8" fill="var(--ember-deep)" opacity="0.6" />
      <circle cx="34" cy="6" r="1.6" fill="var(--honey-gold)" opacity="0.7" />
      {/* outer flame */}
      <path
        d="M32 10 C 32 26 46 32 46 52 C 46 66 40 76 32 86 C 24 76 18 66 18 52 C 18 44 22 38 26 34 C 25 42 30 44 30 44 C 30 30 34 24 32 10 Z"
        fill="var(--ember-deep)"
        stroke="var(--charcoal)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* inner flame */}
      <path
        d="M32 44 C 32 54 40 58 40 68 C 40 76 36 82 32 86 C 28 82 24 76 24 68 C 24 60 30 54 32 44 Z"
        fill="var(--honey-gold)"
      />
    </svg>
  );
}
