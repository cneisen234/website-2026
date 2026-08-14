import type { CSSProperties } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden" style={{ backgroundColor: 'var(--warm-cream)' }}>
      {/* Hero Section */}
      <section className="relative">
        {/* Ambient background glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)',
            transform: 'translate(20%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--honey-gold) 0%, transparent 70%)',
            transform: 'translate(-25%, 30%)',
          }}
        />

        {/* Warm dotted texture — cozier than a corporate grid */}
        <div className="dot-texture absolute inset-0 opacity-[0.04] pointer-events-none" />

        {/* Floating spark doodles */}
        <svg
          className="floaty absolute top-24 right-[12%] hidden lg:block pointer-events-none"
          width="46" height="46" viewBox="0 0 24 24" fill="none" aria-hidden="true"
        >
          <path d="M12 2l2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8L12 2z" fill="var(--honey-gold)" />
        </svg>
        <svg
          className="floaty-slow absolute top-[45%] left-[6%] hidden lg:block pointer-events-none"
          width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"
        >
          <path d="M12 2l2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8L12 2z" fill="var(--forest-green)" />
        </svg>

        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              {/* Eyebrow tag */}
              <div className="badge badge-tilt mb-8 fade-in-up">
                <span className="badge-dot" />
                Local Web &amp; Tech Professional
              </div>

              <h1
                className="text-6xl md:text-8xl mb-8 fade-in-up stagger-1 leading-[0.95]"
                style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
              >
                A{' '}
                <em className="relative inline-block" style={{ color: 'var(--ember-deep)', fontStyle: 'italic' }}>
                  spark
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="12"
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
                </em>
                {' '}for your business.
              </h1>

              <p
                className="text-xl md:text-2xl mb-10 fade-in-up stagger-2 max-w-2xl"
                style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}
              >
                Websites, custom tools, automation, and on-site tech help for
                local businesses. Tech that doesn't just sit there — it works
                for you, saves you time, and helps your business grow.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 fade-in-up stagger-3">
                <a
                  href="/contact"
                  className="btn-fun group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
                  style={{ backgroundColor: 'var(--ember-deep)', color: 'var(--bone)' }}
                >
                  Let's Talk About Your Business
                  <svg
                    width="20" height="20" viewBox="0 0 20 20" fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="/services"
                  className="btn-fun inline-flex items-center justify-center px-8 py-4 text-lg"
                  style={{ backgroundColor: 'var(--paper)', color: 'var(--charcoal)' }}
                >
                  See What I Can Build
                </a>
              </div>
            </div>

            {/* Right side: services overview card */}
            <div className="md:col-span-5 fade-in-up stagger-3">
              <div
                className="card-fun tilt-r relative p-8"
                style={{ backgroundColor: 'var(--paper)', ['--shadow-color' as string]: 'var(--ember-deep)' } as CSSProperties}
              >
                <div className="badge badge-tilt mb-5">Here's what I do</div>
                <ul className="space-y-4">
                  {[
                    { label: 'Websites', detail: 'that bring in customers', color: 'var(--ember-deep)' },
                    { label: 'Custom features', detail: 'built for your workflow', color: 'var(--forest-green)' },
                    { label: 'Smart automations', detail: 'that save you hours', color: 'var(--honey-gold)' },
                    { label: 'On-site tech help', detail: 'for everything else', color: 'var(--ember-deep)' },
                  ].map((item) => (
                    <li key={item.label} className="flex items-baseline gap-3">
                      <span
                        className="inline-block w-2.5 h-2.5 rounded-full shrink-0 translate-y-[-1px]"
                        style={{ backgroundColor: item.color }}
                      />
                      <div>
                        <span className="font-medium" style={{ color: 'var(--charcoal)' }}>
                          {item.label}
                        </span>
                        <span style={{ color: 'var(--ash-gray)' }}>
                          {' '}{item.detail}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-6 pt-6 flex flex-wrap items-center gap-x-5 gap-y-2"
                  style={{ borderTop: '2px dashed rgba(194, 65, 12, 0.2)' }}
                >
                  {['Local meetings', 'No corporate runaround', 'Built to last'].map((item) => (
                    <div key={item} className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--stone)' }}>
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l3 3 7-7" stroke="var(--ember-deep)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me — DARK */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: 'var(--midnight)' }}
      >
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--honey-gold) 0%, transparent 70%)', transform: 'translate(30%, 30%)' }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="sticky top-8">
                <span className="badge badge-on-dark badge-tilt mb-5">
                  <span className="badge-dot" />
                  Why Me
                </span>
                <h2
                  className="text-4xl md:text-6xl mb-6 leading-[1.05]"
                  style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
                >
                  Your tech should work as hard as you do.
                </h2>
                <p className="text-lg" style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.7' }}>
                  Most small business tech is either too complicated, too
                  expensive, or just sits there doing nothing. I build the kind
                  that actually pulls its weight — handling bookings, answering
                  questions, automating busywork, and showing up when you need
                  a hand in person.
                </p>
              </div>
            </div>

            <div className="md:col-span-7 space-y-8 pr-2">
              {[
                {
                  num: '01',
                  title: 'Built to do work',
                  body: 'Online booking, automated reminders, customer portals, smart forms — tech should be a tool that gets things done, not just a sign in a digital window.',
                  color: 'var(--ember-orange)',
                  tilt: 'tilt-l',
                },
                {
                  num: '02',
                  title: 'Local & personal',
                  body: 'Meet in person, work on your schedule, and actually talk through what makes sense for your business. No corporate runaround, no big-city prices.',
                  color: 'var(--honey-gold)',
                  tilt: 'tilt-r',
                },
                {
                  num: '03',
                  title: 'More done, less effort',
                  body: 'The right tools and automation handle the repetitive stuff for you — scheduling, follow-ups, answering common questions — so you get more done without adding hours to your day.',
                  color: 'var(--forest-green)',
                  tilt: 'tilt-l',
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className={`card-fun card-fun-dark ${item.tilt} group relative p-8`}
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', ['--shadow-color' as string]: item.color } as CSSProperties}
                >
                  <div className="flex items-start gap-6">
                    <span
                      className="text-5xl leading-none shrink-0"
                      style={{ color: item.color, fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}
                    >
                      {item.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-3" style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}>
                        {item.title}
                      </h3>
                      <p style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.7' }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How I Can Help */}
      <section className="py-20 md:py-32 relative" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)' }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-16">
            <span className="badge badge-tilt mb-4">
              <span className="badge-dot" />
              How I Help
            </span>
            <h2 className="text-4xl md:text-6xl leading-[1.05]" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
              Here's what I{' '}
              <span className="relative inline-block">
                do.
                <svg
                  className="absolute -left-2 -right-2 -top-2 -bottom-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)]"
                  viewBox="0 0 120 70" fill="none" preserveAspectRatio="none" aria-hidden="true"
                >
                  <path
                    className="draw-stroke"
                    pathLength={1}
                    d="M60 6 C 96 6, 116 20, 114 36 C 112 54, 84 64, 56 63 C 24 62, 6 50, 7 33 C 8 18, 28 8, 62 8"
                    stroke="var(--honey-gold)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-10 max-w-6xl">
            {[
              {
                accent: 'var(--ember-deep)',
                tint: 'rgba(194, 65, 12, 0.1)',
                tilt: 'tilt-l',
                icon: (
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                ),
                title: 'Websites that get found',
                body: 'Professional sites that show up in searches and turn visitors into customers. Mobile-friendly, fast, and built to actually get results.',
              },
              {
                accent: 'var(--forest-green)',
                tint: 'rgba(95, 167, 119, 0.14)',
                tilt: 'tilt-r',
                icon: (
                  <path d="M12 2l2 4 4-1-1 4 4 2-4 2 1 4-4-1-2 4-2-4-4 1 1-4-4-2 4-2-1-4 4 1z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
                ),
                title: 'Features built for your business',
                body: "Need something specific? Online booking, custom quote forms, member-only content, inventory tracking — whatever your business actually needs. If you can describe it, I can probably build it.",
              },
              {
                accent: 'var(--honey-gold)',
                tint: 'rgba(240, 185, 73, 0.16)',
                tilt: 'tilt-r',
                icon: (
                  <>
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
                  </>
                ),
                title: 'Automate the busywork',
                body: "Smart automations that handle scheduling, follow-ups, lead capture, and the repetitive stuff that eats your time — bringing in AI where it actually helps, not just because it's trendy.",
              },
              {
                accent: 'var(--ember-deep)',
                tint: 'rgba(194, 65, 12, 0.1)',
                tilt: 'tilt-l',
                icon: (
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
                ),
                title: 'On-site tech help',
                body: "Computer setups, Wi-Fi headaches, picking the right software, training your team on tools you already have — sometimes you just need a tech person nearby without hiring one full-time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`card-fun ${item.tilt} group p-10`}
                style={{ backgroundColor: 'white', ['--shadow-color' as string]: item.accent } as CSSProperties}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:-rotate-12"
                  style={{ backgroundColor: item.tint, color: item.accent }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-2xl mb-3" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <a
              href="/services"
              className="group inline-flex items-center gap-2 font-medium text-lg transition-all"
              style={{ color: 'var(--ember-deep)' }}
            >
              See all services
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section — full-bleed dark */}
      <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: 'var(--midnight)' }}>
        <div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)', transform: 'translate(-50%, -50%)' }}
        />

        {/* Floating spark doodles */}
        <svg className="floaty-slow absolute top-16 left-[16%] hidden md:block pointer-events-none opacity-80" width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2l2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8L12 2z" fill="var(--honey-gold)" />
        </svg>
        <svg className="floaty absolute bottom-20 right-[18%] hidden md:block pointer-events-none opacity-70" width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2l2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8L12 2z" fill="var(--ember-orange)" />
        </svg>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge badge-on-dark badge-tilt mb-6">
              <span className="badge-dot" />
              Let's Build Something
            </span>
            <h2 className="text-5xl md:text-7xl mb-8 leading-[1.05]" style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}>
              Ready for tech that actually{' '}
              <em className="relative inline-block" style={{ color: 'var(--ember-orange)', fontStyle: 'italic' }}>
                works
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                  <path className="draw-stroke" pathLength={1} d="M2 8 Q 50 2, 100 6 T 198 4" stroke="var(--ember-orange)" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </em>
              ?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.6' }}>
              Whether you need a new website, want to automate the busywork, or
              just need someone local who knows tech — let's talk about what
              would actually help your business.
            </p>

            <div className="relative inline-block">
              {/* Hand-drawn arrow pointing at the button */}
              <svg className="floaty absolute -left-20 -top-6 hidden md:block pointer-events-none" width="64" height="52" viewBox="0 0 64 52" fill="none" aria-hidden="true">
                <path d="M4 6 C 20 2, 44 8, 54 30" stroke="var(--honey-gold)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M45 28 L 55 32 L 52 21" stroke="var(--honey-gold)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <a
                href="/contact"
                className="btn-fun btn-fun-dark group inline-flex items-center gap-2 px-10 py-5 text-lg"
                style={{ backgroundColor: 'var(--ember-orange)', color: 'var(--midnight)' }}
              >
                Get In Touch
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
