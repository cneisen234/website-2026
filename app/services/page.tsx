import type { CSSProperties } from 'react';

export default function Services() {
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

        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-4xl">
            <div className="badge badge-tilt mb-8 fade-in-up">
              <span className="badge-dot" />
              Services
            </div>

            <h1
              className="text-6xl md:text-8xl mb-8 fade-in-up stagger-1 leading-[0.95] tracking-tight"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              Here's what
              <br />
              I{' '}
              <em className="relative inline-block" style={{ color: 'var(--ember-deep)', fontStyle: 'italic' }}>
                do
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
              .
            </h1>

            <p
              className="text-xl md:text-2xl fade-in-up stagger-2 max-w-3xl"
              style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}
            >
              Websites, custom tools, smart automation, and on-site tech help —
              plus a few extras to round things out. Here's the full menu.
            </p>

            {/* Quick jump links */}
            <div className="mt-10 flex flex-wrap gap-2 fade-in-up stagger-3">
              {[
                { label: 'Websites', href: '#websites' },
                { label: 'Custom features', href: '#features' },
                { label: 'Automation', href: '#automation' },
                { label: 'Tech help', href: '#tech' },
                { label: 'Ongoing services', href: '#ongoing' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="badge font-rounded text-sm transition-transform hover:-translate-y-0.5"
                  style={{ border: '2px solid var(--charcoal)' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WEBSITES — DARK */}
      <section
        id="websites"
        className="py-20 md:py-32 relative overflow-hidden scroll-mt-20"
        style={{ backgroundColor: 'var(--midnight)' }}
      >
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(-30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(30%, 30%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <div className="md:sticky md:top-8">
                <span
                  className="text-7xl md:text-8xl leading-none block mb-6"
                  style={{ color: 'var(--ember-orange)', opacity: 0.5, fontFamily: 'var(--font-heading)' }}
                >
                  01
                </span>
                <span className="badge badge-on-dark badge-tilt mb-4">
                  <span className="badge-dot" />
                  Websites
                </span>
                <h2
                  className="text-4xl md:text-5xl mb-6 leading-[1.05] tracking-tight"
                  style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
                >
                  Websites that earn their keep.
                </h2>
                <p
                  className="text-lg"
                  style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.7' }}
                >
                  Fast, clean, professional sites that don't just sit there.
                  Built to actually do something for your business — bring in
                  customers, take bookings, answer questions, capture leads.
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div
                className="card-fun card-fun-dark tilt-r p-8 md:p-10 mb-8"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              >
                <div
                  className="text-xs font-medium tracking-[0.2em] uppercase mb-6"
                  style={{ color: 'var(--ember-orange)', fontFamily: 'var(--font-body)' }}
                >
                  What's included
                </div>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                  {[
                    'Custom design that fits your business',
                    'Looks great on phones, tablets, and computers',
                    'Built to turn visitors into customers',
                    'Contact forms and email integration',
                    'Basic SEO so people can find you',
                    'Easy way to update content yourself',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="shrink-0 mt-1"
                      >
                        <path
                          d="M3 8l3 3 7-7"
                          stroke="var(--ember-orange)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span style={{ color: 'var(--bone)', opacity: 0.85 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="card-fun card-fun-dark tilt-l p-6"
                style={{ backgroundColor: 'rgba(251, 146, 60, 0.06)' }}
              >
                <div
                  className="text-xs font-medium tracking-[0.2em] uppercase mb-2"
                  style={{ color: 'var(--ember-orange)', fontFamily: 'var(--font-body)' }}
                >
                  Good for
                </div>
                <p style={{ color: 'var(--bone)', opacity: 0.8 }}>
                  Local businesses, service providers, restaurants, contractors,
                  retail stores
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM FEATURES — CREAM */}
      <section
        id="features"
        className="py-20 md:py-32 relative scroll-mt-20"
        style={{ backgroundColor: 'var(--warm-cream)' }}
      >
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <div className="md:sticky md:top-8">
                <span
                  className="text-7xl md:text-8xl leading-none block mb-6"
                  style={{ color: 'var(--forest-green)', opacity: 0.55, fontFamily: 'var(--font-heading)' }}
                >
                  02
                </span>
                <span className="badge badge-tilt mb-4" style={{ color: 'var(--forest-green)', backgroundColor: 'rgba(95, 167, 119, 0.14)' }}>
                  <span className="badge-dot" />
                  Custom Features
                </span>
                <h2
                  className="text-4xl md:text-5xl mb-6 leading-[1.05] tracking-tight"
                  style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                >
                  Tools built for your business.
                </h2>
                <p
                  className="text-lg"
                  style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}
                >
                  Your website shouldn't just market your business — it should
                  do work for you. From simple add-ons to fully custom
                  applications, if you can describe it, I can probably build it.
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div
                className="text-xs font-medium tracking-[0.2em] uppercase mb-6"
                style={{ color: 'var(--ember-deep)', fontFamily: 'var(--font-body)' }}
              >
                What I can build for you
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Online booking & scheduling',
                  'Customer accounts & portals',
                  'Automated confirmations',
                  'Quote request forms',
                  'Inventory tracking',
                  'Internal dashboards',
                  'Lead capture & follow-up',
                  'Reviews & testimonials',
                  'Event registration',
                  'Membership tools',
                  'Online stores',
                  'Third-party integrations',
                ].map((item) => (
                  <div
                    key={item}
                    className="chip-fun p-4"
                    style={{ backgroundColor: 'white', boxShadow: '3px 3px 0 rgba(95, 167, 119, 0.28)' }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-block w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: 'var(--forest-green)' }}
                      />
                      <span
                        className="text-sm md:text-base"
                        style={{ color: 'var(--charcoal)' }}
                      >
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p
                className="text-sm mt-6 italic"
                style={{ color: 'var(--stone)' }}
              >
                Don't see what you need? Just ask — chances are I can build it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AUTOMATION — DARK */}
      <section
        id="automation"
        className="py-20 md:py-32 relative overflow-hidden scroll-mt-20"
        style={{ backgroundColor: 'var(--midnight)' }}
      >
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(30%, -20%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <div className="md:sticky md:top-8">
                <span
                  className="text-7xl md:text-8xl leading-none block mb-6"
                  style={{ color: 'var(--honey-gold)', opacity: 0.6, fontFamily: 'var(--font-heading)' }}
                >
                  03
                </span>
                <span className="badge badge-on-dark badge-tilt mb-4" style={{ color: 'var(--honey-gold)', backgroundColor: 'rgba(240, 185, 73, 0.16)' }}>
                  <span className="badge-dot" />
                  Automation
                </span>
                <h2
                  className="text-4xl md:text-5xl mb-6 leading-[1.05] tracking-tight"
                  style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
                >
                  Let your tech do the busywork.
                </h2>
                <p
                  className="text-lg"
                  style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.7' }}
                >
                  Smart automation that handles the repetitive stuff eating up
                  your week — bringing in AI where it actually helps, not just
                  because it's trendy.
                </p>
              </div>
            </div>

            <div className="md:col-span-7 space-y-8 tilt-alt">
              {[
                {
                  title: 'Automated emails & texts',
                  body: 'Confirmations, reminders, receipts, and follow-ups that send themselves at the right time.',
                },
                {
                  title: 'Follow-up sequences',
                  body: "Nurture leads and stay in touch with customers automatically — no more \"I forgot to email them back.\"",
                },
                {
                  title: 'Smart forms & routing',
                  body: 'Forms that ask the right questions and send each request to the right person without your involvement.',
                },
                {
                  title: 'AI where it actually helps',
                  body: "I've worked with AI extensively, so I know what's actually useful vs. what's hype. I'll use it for things like drafting responses, categorizing requests, or summarizing data — when it genuinely makes things faster.",
                },
                {
                  title: 'Tool integrations',
                  body: 'Connecting the software you already use so information flows automatically between them.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="card-fun card-fun-dark p-6"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', ['--shadow-color' as string]: 'var(--honey-gold)' } as CSSProperties}
                >
                  <h3
                    className="text-xl mb-2"
                    style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.6' }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ON-SITE TECH HELP — CREAM */}
      <section
        id="tech"
        className="py-20 md:py-32 relative scroll-mt-20"
        style={{ backgroundColor: 'var(--warm-cream)' }}
      >
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)',
            transform: 'translate(-20%, -20%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <div className="md:sticky md:top-8">
                <span
                  className="text-7xl md:text-8xl leading-none block mb-6"
                  style={{ color: 'rgba(194, 65, 12, 0.3)', fontFamily: 'var(--font-heading)' }}
                >
                  04
                </span>
                <span className="badge badge-tilt mb-4">
                  <span className="badge-dot" />
                  On-Site Tech Help
                </span>
                <h2
                  className="text-4xl md:text-5xl mb-6 leading-[1.05] tracking-tight"
                  style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                >
                  Sometimes you just need a hand.
                </h2>
                <p
                  className="text-lg"
                  style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}
                >
                  Whether it's a problem you can't figure out or a project you
                  don't want to tackle alone, I can come on site to help. No
                  full-time hire required.
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div
                className="card-fun tilt-l p-8 md:p-10 mb-8"
                style={{ backgroundColor: 'white' }}
              >
                <div
                  className="text-xs font-medium tracking-[0.2em] uppercase mb-6"
                  style={{ color: 'var(--ember-deep)', fontFamily: 'var(--font-body)' }}
                >
                  What I can help with
                </div>
                <div className="space-y-4">
                  {[
                    'Setting up new computers, printers, or office equipment',
                    "Troubleshooting things that aren't working right",
                    'Wi-Fi, networking, and connectivity issues',
                    'Choosing the right software or tools for your business',
                    'Setting up new systems or migrating from old ones',
                    'One-on-one help learning the tech you already have',
                    "If it's tech-related, there's a good chance I can help",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="shrink-0 mt-1"
                      >
                        <path
                          d="M3 8l3 3 7-7"
                          stroke="var(--ember-deep)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span style={{ color: 'var(--charcoal)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="card-fun tilt-r p-6"
                style={{ backgroundColor: 'rgba(194, 65, 12, 0.06)' }}
              >
                <div
                  className="text-xs font-medium tracking-[0.2em] uppercase mb-2"
                  style={{ color: 'var(--ember-deep)', fontFamily: 'var(--font-body)' }}
                >
                  Good for
                </div>
                <p style={{ color: 'var(--ash-gray)' }}>
                  Local businesses that need a tech person nearby without
                  hiring one full-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONGOING SERVICES — DARK */}
      <section
        id="ongoing"
        className="py-20 md:py-32 relative overflow-hidden scroll-mt-20"
        style={{ backgroundColor: 'var(--midnight)' }}
      >
        <div
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-16">
            <span className="badge badge-on-dark badge-tilt mb-4">
              <span className="badge-dot" />
              Ongoing Services
            </span>
            <h2
              className="text-4xl md:text-6xl leading-[1.05] tracking-tight"
              style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
            >
              Keep things running.
            </h2>
            <p
              className="text-lg mt-6 max-w-2xl"
              style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.7' }}
            >
              For when you need help month after month, not just once.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 tilt-alt">
            {/* Maintenance */}
            <div
              className="card-fun card-fun-dark p-8"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            >
              <span
                className="text-5xl leading-none block mb-4"
                style={{ color: 'var(--ember-orange)', opacity: 0.5, fontFamily: 'var(--font-heading)' }}
              >
                05
              </span>
              <h3
                className="text-2xl md:text-3xl mb-4 tracking-tight"
                style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
              >
                Maintenance & Support
              </h3>
              <p
                className="mb-6"
                style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.7' }}
              >
                Keep your website and tools running smoothly without thinking
                about the technical side.
              </p>
              <div className="space-y-3">
                {[
                  'Regular updates and security patches',
                  'Content updates when you need them',
                  'Fixing things when something breaks',
                  'Help with questions or changes',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                      style={{ backgroundColor: 'var(--ember-orange)' }}
                    />
                    <span style={{ color: 'var(--bone)', opacity: 0.85 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div
              className="card-fun card-fun-dark p-8"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', ['--shadow-color' as string]: 'var(--forest-green)' } as CSSProperties}
            >
              <span
                className="text-5xl leading-none block mb-4"
                style={{ color: 'var(--forest-green)', opacity: 0.6, fontFamily: 'var(--font-heading)' }}
              >
                06
              </span>
              <h3
                className="text-2xl md:text-3xl mb-4 tracking-tight"
                style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
              >
                Social Media
              </h3>
              <p
                className="mb-6"
                style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.7' }}
              >
                Stay active and professional online without spending your whole
                week on it.
              </p>
              <div className="space-y-3">
                {[
                  'Regular posting on Facebook, Instagram, and more',
                  'Content calendar planning',
                  'Responding to messages and comments',
                  'Keeping your presence consistent',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                      style={{ backgroundColor: 'var(--ember-orange)' }}
                    />
                    <span style={{ color: 'var(--bone)', opacity: 0.85 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing nudge */}
          <div className="mt-12 text-center">
            <a
              href="/pricing"
              className="group inline-flex items-center gap-2 font-medium text-lg transition-all"
              style={{ color: 'var(--ember-orange)' }}
            >
              See pricing for ongoing services
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

      {/* CTA — CREAM */}
      <section className="py-20 md:py-32 relative" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <span
              className="text-xs font-medium tracking-[0.2em] uppercase mb-4 block"
              style={{ color: 'var(--ember-deep)', fontFamily: 'var(--font-body)' }}
            >
              — Not Sure Yet
            </span>

            <div className="relative pl-8 mb-12">
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                style={{ backgroundColor: 'var(--ember-deep)' }}
              />
              <p
                className="text-2xl md:text-4xl leading-[1.3] tracking-tight"
                style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
              >
                Not sure what you need? That's completely fine — most people
                aren't sure when they start.
              </p>
            </div>

            <p
              className="text-lg mb-12 max-w-3xl"
              style={{ color: 'var(--ash-gray)', lineHeight: '1.75' }}
            >
              Let's talk about what you're trying to do. I'll be straight with
              you about what makes sense for your business and your budget — no
              upsells, no pressure to figure it all out on the spot.
            </p>

            <a
              href="/contact"
              className="btn-fun group inline-flex items-center gap-2 px-10 py-5 text-lg"
              style={{ backgroundColor: 'var(--ember-deep)', color: 'var(--bone)' }}
            >
              Let's Talk
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