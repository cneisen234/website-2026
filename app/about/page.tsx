import Image from "next/image";

const steps = [
  {
    num: '01',
    title: 'We talk it through',
    body: "We start with a straightforward conversation about your business and what you're going for.",
  },
  {
    num: '02',
    title: 'We build a first draft',
    body: "Within a few days we'll have a first version put together, so you've got something real to react to.",
  },
  {
    num: '03',
    title: 'We make it yours',
    body: 'We go back and forth as often as you need, until it looks and feels exactly like you want.',
  },
];

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden" style={{ backgroundColor: 'var(--warm-cream)' }}>
      {/* Hero Section */}
      <section className="relative">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)',
            transform: 'translate(20%, -30%)',
          }}
        />
        <div className="dot-texture absolute inset-0 opacity-[0.04] pointer-events-none" />

        <svg className="floaty-slow absolute top-28 right-[14%] hidden lg:block pointer-events-none" width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2l2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8L12 2z" fill="var(--forest-green)" />
        </svg>

        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="grid md:grid-cols-12 gap-12 items-center">

            <h1
              className="md:col-span-7  mb-8 fade-in-up stagger-1"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              <span className="md:block text-4xl md:text-6xl leading-[1.05]">It takes two to make</span>
              <span
                className="block italic text-6xl md:text-8xl leading-[0.95] mt-1"
                style={{ color: 'var(--ember-deep)' }}
              >
                <span className="relative inline-block">
                a spark
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    height="14"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      className="draw-stroke"
                      pathLength={1}
                      d="M2 8 Q 50 2, 100 6 T 198 4"
                      stroke="var(--ember-deep)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>
            <div className="md:col-span-5 w-full fade-in-up stagger-3">
            <div className="flex flex-col gap-5 md:mb-5 fade-in-up stagger-3">
            <a
                  href="/pricing"
                  className="btn-fun group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
                  style={{ backgroundColor: 'var(--ember-deep)', color: 'var(--bone)' }}
                >
                  See the Packages
                  <svg
                    width="20" height="20" viewBox="0 0 20 20" fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="btn-fun inline-flex items-center justify-center px-8 py-4 text-lg"
                  style={{ backgroundColor: 'var(--paper)', color: 'var(--charcoal)' }}
                >
                  Get in Touch
                </a>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chris — DARK with photo */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: 'var(--midnight)' }}
      >
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(-30%, -30%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Photo — a tilted, taped polaroid */}
            <div className="md:col-span-5">
              <div className="relative mx-auto max-w-sm" style={{ transform: 'rotate(-2.5deg)' }}>
                <div
                  className="absolute left-1/2 -top-4 z-10 h-8 w-28 -translate-x-1/2 rotate-[-4deg]"
                  style={{ backgroundColor: 'rgba(240, 185, 73, 0.5)', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)' }}
                  aria-hidden="true"
                />
                <div
                  className="rounded-2xl bg-white p-3 pb-6 transition-transform duration-300 hover:rotate-0"
                  style={{ border: '2px solid var(--charcoal)', boxShadow: '10px 12px 0 rgba(251, 146, 60, 0.85)' }}
                >
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                    <Image
                      src="/chris.webp"
                      alt="Chris, developer and founder of Kindling Digital"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-7">
              <span className="badge badge-on-dark badge-tilt mb-4">
                <span className="badge-dot" />
                Development &amp; Tech
              </span>
              <h2 className="text-4xl md:text-6xl mb-6 leading-[1.05]" style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}>
                Hi, I&apos;m Chris.
              </h2>
              <div className="space-y-6 text-lg" style={{ color: 'var(--bone)', opacity: 0.8, lineHeight: '1.75' }}>
                <p>
                  I&apos;ve spent over seven years as a software engineer
                  building websites, apps, and all kinds of tools, and doing
                  digital marketing for small companies along the way. I&apos;m passionate about small businesses and want to give them access to tools that have long been out of their reach. Why should the big guys monopolize the resources when it&apos;s the everyday small business owner that needs them the most? That&apos;s where I come in. Reach out to me, I&apos;m here to help and I&apos;ve come up with a very affordable way to give you the best tools on the market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Megan — CREAM with photo */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div
          className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--forest-green) 0%, transparent 70%)', transform: 'translate(-30%, 0)' }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Bio */}
            <div className="md:col-span-7">
              <span
                className="badge badge-tilt mb-4"
                style={{ color: 'var(--forest-green)', backgroundColor: 'rgba(95, 167, 119, 0.14)' }}
              >
                <span className="badge-dot" />
                Design &amp; Content
              </span>
              <h2 className="text-4xl md:text-6xl mb-6 leading-[1.05]" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
                Hi, I&apos;m Megan.
              </h2>
              <div className="space-y-6 text-lg" style={{ color: 'var(--ash-gray)', lineHeight: '1.75' }}>
                <p>
                  I&apos;m the graphic designer and content editor of Kindling Digital.
                   I&apos;m passionate about giving small businesses a look
                  that actually holds together. I love bringing art into my everyday 
                  life and that passion is poured into everything I design. 
                  Your brand is your identity and I'm going to help you bring that out in center stage.
                </p>
              </div>
            </div>

            {/* Photo — a tilted, taped polaroid */}
            <div className="md:col-span-5">
              <div className="relative mx-auto max-w-sm" style={{ transform: 'rotate(2.5deg)' }}>
                <div
                  className="absolute left-1/2 -top-4 z-10 h-8 w-28 -translate-x-1/2 rotate-[4deg]"
                  style={{ backgroundColor: 'rgba(95, 167, 119, 0.5)', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)' }}
                  aria-hidden="true"
                />
                <div
                  className="rounded-2xl bg-white p-3 pb-6 transition-transform duration-300 hover:rotate-0"
                  style={{ border: '2px solid var(--charcoal)', boxShadow: '10px 12px 0 rgba(95, 167, 119, 0.85)' }}
                >
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                    <Image
                      src="/megan.webp"
                      alt="Megan, designer and content editor at Kindling Digital"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why we do it this way — DARK */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--midnight)' }}>
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)' }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <span className="badge badge-on-dark badge-tilt mb-4">
              <span className="badge-dot" />
              Why We Do This
            </span>
            <h2
              className="text-4xl md:text-6xl mb-8 leading-[1.05]"
              style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
            >
              Why we do it this way.
            </h2>

            <div className="space-y-6 text-lg" style={{ color: 'var(--bone)', opacity: 0.8, lineHeight: '1.75' }}>
              <p>
                For the longest time, getting a professional website meant one of
                two things: pay a big company a small fortune, or do it yourself
                with some cheap template builder and hope it looks okay.
              </p>
              <p>
                We&apos;re past the age
                where this stuff has to sit behind big-business bureaucracy, so we
                built a third way. You get a real, custom-built presence, the
                kind that&apos;d normally run thousands, for a flat monthly price.
                Best of all, we do all of the work for you so you can focus on what you do best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What working with us is like — CREAM timeline */}
      <section className="py-20 md:py-32 relative" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)',
            transform: 'translate(30%, -20%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-16">
            <span className="badge badge-tilt mb-4">
              <span className="badge-dot" />
              Working Together
            </span>
            <h2
              className="text-4xl md:text-6xl leading-[1.05]"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              What working with us is like.
            </h2>
          </div>

          <div className="max-w-5xl">
            {steps.map((step, idx, arr) => (
              <div key={step.num} className="relative">
                <div className="grid md:grid-cols-12 gap-8 py-8">
                  <div className="md:col-span-3 flex md:justify-end items-start">
                    <span
                      className="text-7xl md:text-8xl leading-none"
                      style={{
                        color: ['var(--ember-deep)', 'var(--honey-gold)', 'var(--forest-green)', 'var(--ember-deep)'][idx],
                        opacity: 0.8,
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {step.num}
                    </span>
                  </div>

                  <div className="md:col-span-9 md:pl-4">
                    <h3
                      className="text-2xl md:text-3xl mb-4"
                      style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-lg max-w-2xl"
                      style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>

                {idx < arr.length - 1 && (
                  <div className="w-full" style={{ borderTop: '2px dashed rgba(194, 65, 12, 0.25)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — DARK */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--midnight)' }}>
        <div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-5xl md:text-7xl mb-8 leading-[1.05]"
              style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
            >
              Come say hi.
            </h2>
            <p
              className="text-xl mb-12 max-w-2xl mx-auto"
              style={{ color: 'var(--bone)', opacity: 0.75, lineHeight: '1.6' }}
            >
              If any of this sounds like your kind of thing, reach out. We&apos;re here to help.
            </p>
            <a
              href="/contact"
              className="btn-fun btn-fun-dark group inline-flex items-center gap-2 px-10 py-5 text-lg"
              style={{ backgroundColor: 'var(--ember-orange)', color: 'var(--midnight)' }}
            >
              Get in Touch
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
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
