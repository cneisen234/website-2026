import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

// Pilot Light's page. Its brand is Kindling's sibling: Kindling's flame is red, Pilot Light's is orange and gold,
// so this page runs warmer and darker than the rest of the site while using the same type and shapes.

export const metadata: Metadata = {
  title: 'Pilot Light — Your whole business, connected. Ask. Approve. Done. | Kindling Digital',
  description:
    'Pilot Light is the command center for your business: your website, orders and customers in one place, with Lena, an AI assistant who prepares every change for you to approve. Included with Business in a Box.',
};

const ORANGE = '#fb923c';
const GOLD = '#f0b949';
const GLOW = 'rgba(251, 146, 60, 0.85)';

function Flame({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path d="M12 2c1 3.5 5 6 5 11a5 5 0 0 1-10 0c0-2.3 1-4 2.5-5.5C9.8 9.5 10.5 11 12 11.5 11.2 8 12 4.5 12 2Z" fill={ORANGE} />
      <path d="M12 12.5c1 1.3 2 2.2 2 3.7a2 2 0 0 1-4 0c0-1.3.9-2.4 2-3.7Z" fill={GOLD} />
    </svg>
  );
}

/** One of the app's real screens in a phone frame. */
function Phone({ src, alt, tilt = 0, className = '' }: { src: string; alt: string; tilt?: number; className?: string }) {
  return (
    <div
      className={`relative rounded-[2.6rem] p-2.5 ${className}`}
      style={{ backgroundColor: '#1c2128', boxShadow: `0 0 0 2px #2b313a, 14px 16px 0 ${GLOW}`, transform: `rotate(${tilt}deg)` }}
    >
      <div className="relative overflow-hidden rounded-[2.1rem]" style={{ backgroundColor: '#f5f6ef' }}>
        <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="h-9" />
        <Image src={src} alt={alt} width={720} height={1468} className="block h-auto w-full" />
      </div>
    </div>
  );
}

function Check({ color = ORANGE }: { color?: string }) {
  return (
    <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(251, 146, 60, 0.16)' }}>
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path d="M3 8l3 3 7-7" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

const steps: { kicker: string; title: ReactNode; body: string; image: string; alt: string }[] = [
  {
    kicker: 'Just ask',
    title: (
      <>
        Ask Lena <em className="italic" style={{ color: '#c2410c' }}>anything</em> about your business.
      </>
    ),
    body: 'How are sales this month? What sold today? Which orders are still open? Lena answers in plain words from your own website, orders and customers, so you know where things stand without digging through screens.',
    image: '/pilot-light/ask-lena.webp',
    alt: 'Lena answering how the month is going in the Pilot Light app',
  },
  {
    kicker: 'You stay in charge',
    title: (
      <>
        Lena does the work. <em className="italic" style={{ color: '#c2410c' }}>You tap Allow.</em>
      </>
    ),
    body: 'Tell Lena what to change: a price, a new product, a post, a sale. She prepares it on a card that shows exactly what changes, where it shows up on your website, and which customers it affects. Nothing happens until you tap Allow.',
    image: '/pilot-light/allow-card.webp',
    alt: 'A price change card with Allow and Deny in the Pilot Light app',
  },
  {
    kicker: 'Peace of mind',
    title: (
      <>
        Every change, <em className="italic" style={{ color: '#c2410c' }}>double-checked.</em>
      </>
    ),
    body: 'Pilot Light checks each change before it runs and verifies it on your site afterward. If anything doesn’t match, it’s put back the way it was and you’re told in plain words.',
    image: '/pilot-light/verified.webp',
    alt: 'A change marked done and verified in the Pilot Light app',
  },
  {
    kicker: 'Plan ahead',
    title: (
      <>
        Set it up today. It runs <em className="italic" style={{ color: '#c2410c' }}>on time.</em>
      </>
    ),
    body: 'Schedule prices, promotions and posts for later. Lena suggests a good time, you adjust it with a tap, and it happens right on schedule, even while you’re busy running the shop.',
    image: '/pilot-light/plan-ahead.webp',
    alt: 'A blog post scheduled for Monday at 7 AM in the Pilot Light app',
  },
];

const advantages = [
  { title: 'Everything in one place', body: 'Your website, orders, customers, payments and email side by side, instead of five logins and a sticky note.' },
  { title: 'Unlimited updates & support', body: 'Because your whole business runs through Pilot Light, we keep everything you have running and up to date, with no counting changes.' },
  { title: 'Changes in minutes', body: 'No more emailing someone and waiting days for a price or a photo to change. Ask, allow, and it’s live.' },
  { title: 'Lena knows your business', body: 'She answers from your real data and asks you when she isn’t sure, instead of guessing.' },
  { title: 'Nothing changes without you', body: 'Every change waits for your OK, and you can see the history of everything that happened.' },
  { title: 'Built around your business', body: 'We connect Pilot Light to your site and tools by hand, so it fits the way your business actually works.' },
];

const addOnExamples = [
  { title: 'E-commerce', body: 'Orders, products, discounts and payments, managed from Pilot Light.' },
  { title: 'Google Workspace & email', body: 'Business email on your domain, set up for you, with Lena reading and answering your customers.' },
  { title: 'Lena on your website', body: 'Lena answers your customers’ questions on your site, day and night.' },
  { title: 'Reviews & reputation', body: 'Approve reviews and keep an eye on what customers are saying.' },
  { title: 'Bookings & scheduling', body: 'Appointments and bookings, with reminders and your calendar kept in step.' },
  { title: 'Events', body: 'Tickets, capacity, attendee lists and check-in for your events and classes.' },
  { title: 'Google Business Profile', body: 'Your Google listing kept current with your hours, photos and updates.' },
  { title: 'Text notifications', body: 'Automatic texts to customers for order updates, reminders and confirmations.' },
];

export default function PilotLightPage() {
  return (
    <main className="min-h-screen overflow-hidden" style={{ backgroundColor: 'var(--midnight)' }}>
      {/* HERO — DARK, ORANGE GLOW */}
      <section className="relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full opacity-40 blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${ORANGE} 0%, transparent 65%)`, transform: 'translate(25%, -25%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)`, transform: 'translate(-30%, 35%)' }}
        />

        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-10 fade-in-up">
                <Flame size={52} />
                <div>
                  <div className="text-3xl md:text-4xl leading-none tracking-tight" style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}>
                    Pilot Light
                  </div>
                  <div className="mt-2 text-xs font-medium uppercase" style={{ color: 'var(--bone)', opacity: 0.6, letterSpacing: '0.3em' }}>
                    by Kindling Digital
                  </div>
                </div>
              </div>

              <h1 className="mb-8 fade-in-up stagger-1" style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}>
                <span className="block text-5xl md:text-7xl leading-[1.02]">Your whole business, connected.</span>
                <span className="block text-5xl md:text-7xl leading-[1.02] mt-1">
                  <em className="italic" style={{ color: ORANGE }}>
                    Ask. Approve. Done.
                  </em>
                </span>
              </h1>

              <p className="text-lg md:text-xl max-w-xl mb-10 fade-in-up stagger-2" style={{ color: 'var(--bone)', opacity: 0.78, lineHeight: '1.7' }}>
                Pilot Light is the command center for your business: your website, orders, customers and tools in one place,
                with <strong style={{ color: 'var(--bone)' }}>Lena</strong>, an assistant who knows your business inside and out.
                Ask her anything, tell her what to change, and approve it with a tap.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10 fade-in-up stagger-3">
                <a
                  href="/contact"
                  className="btn-fun btn-fun-dark group inline-flex items-center gap-2 px-8 py-4 text-lg"
                  style={{ backgroundColor: ORANGE, color: 'var(--midnight)' }}
                >
                  Get Pilot Light
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#included" className="inline-flex items-center gap-2 px-2 py-4 text-lg font-medium underline underline-offset-4" style={{ color: 'var(--bone)' }}>
                  What&apos;s included
                </a>
              </div>

              <div className="flex flex-wrap gap-3 fade-in-up stagger-4">
                {['Included with Business in a Box', 'iPhone app', 'Lena, your AI assistant'].map((chip) => (
                  <span key={chip} className="chip-fun chip-fun-dark flex items-center gap-2 text-sm px-4 py-2" style={{ color: 'var(--bone)' }}>
                    <Flame size={14} />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto flex max-w-xl items-start justify-center gap-6 sm:gap-10">
                <Phone src="/pilot-light/ask-lena.webp" alt="Lena answering a question in the Pilot Light app" tilt={-5} className="mt-16 w-[46%]" />
                <Phone src="/pilot-light/allow-card.webp" alt="A change waiting for Allow in the Pilot Light app" tilt={4} className="w-[46%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDED WITH BUSINESS IN A BOX — STRIP */}
      <section style={{ backgroundColor: ORANGE }}>
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center">
          <span className="text-lg md:text-xl" style={{ color: 'var(--midnight)', fontFamily: 'var(--font-heading)' }}>
            Pilot Light comes with <strong>Business in a Box</strong>, $300/month.
          </span>
          <a href="/pricing" className="text-sm font-medium underline underline-offset-4" style={{ color: 'var(--midnight)' }}>
            See the plans
          </a>
        </div>
      </section>

      {/* HOW IT WORKS — CREAM */}
      <section className="py-20 md:py-32 relative" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="dot-texture absolute inset-0 opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="badge badge-tilt mb-4">
              <span className="badge-dot" />
              How it works
            </span>
            <h2 className="text-4xl md:text-6xl leading-[1.05]" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
              Your whole business, one conversation away.
            </h2>
          </div>

          <div className="space-y-20 md:space-y-32 max-w-6xl">
            {steps.map((step, i) => (
              <div key={step.kicker} className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
                <div className={`md:col-span-5 ${i % 2 ? 'md:order-2' : ''}`}>
                  <Phone src={step.image} alt={step.alt} tilt={i % 2 ? 2.5 : -2.5} className="mx-auto w-[70%] max-w-[300px]" />
                </div>
                <div className={`md:col-span-7 ${i % 2 ? 'md:order-1' : ''}`}>
                  <span className="text-sm font-rounded uppercase tracking-wide" style={{ color: '#c2410c' }}>
                    {String(i + 1).padStart(2, '0')} · {step.kicker}
                  </span>
                  <h3 className="mt-3 mb-5 text-3xl md:text-5xl leading-[1.08]" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
                    {step.title}
                  </h3>
                  <p className="text-lg max-w-xl" style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEVER MISS AN ORDER — DARK */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--midnight)' }}>
        <div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${ORANGE} 0%, transparent 70%)`, transform: 'translate(-50%, -50%)' }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-12 gap-12 items-center max-w-6xl">
            <div className="md:col-span-6">
              <span className="badge badge-on-dark badge-tilt mb-4">
                <span className="badge-dot" />
                On your phone
              </span>
              <h2 className="text-4xl md:text-6xl mb-6 leading-[1.05]" style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}>
                Never miss an{' '}
                <em className="italic" style={{ color: ORANGE }}>
                  order.
                </em>
              </h2>
              <p className="text-lg mb-6" style={{ color: 'var(--bone)', opacity: 0.75, lineHeight: '1.7' }}>
                Pilot Light comes with an iPhone app. New orders, waiting customers and fresh reviews arrive the moment they
                happen, and tapping one opens it right in your chat with Lena. Quiet hours keep your phone silent when you need a
                break.
              </p>
              <p className="text-sm" style={{ color: 'var(--bone)', opacity: 0.55 }}>
                On Android? Pilot Light works in your phone&apos;s browser, with notifications by email.
              </p>
            </div>
            <div className="md:col-span-6 flex flex-col gap-4 max-w-md w-full mx-auto">
              {[
                { title: 'New order', body: 'Morgan Ellis’s $24.78 order', when: 'now' },
                { title: 'A customer is waiting for you', body: 'Jamie Cole: “Do you have oat milk for the protein shakes?”', when: '2m ago' },
                { title: 'New review', body: '★★★★★ from Taylor Brooks: “Best smoothie in town.”', when: '18m ago' },
              ].map((n, i) => (
                <div
                  key={n.title}
                  className="flex items-start gap-4 rounded-3xl px-5 py-4"
                  style={{ backgroundColor: 'rgba(245, 241, 235, 0.1)', border: '1px solid rgba(245, 241, 235, 0.14)', backdropFilter: 'blur(12px)', transform: `translateX(${i * 14}px)` }}
                >
                  <Image src="/pilot-light/app-icon.webp" alt="" width={44} height={44} className="rounded-xl shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between text-xs" style={{ color: 'var(--bone)', opacity: 0.6 }}>
                      <span>Pilot Light</span>
                      <span>{n.when}</span>
                    </div>
                    <div className="font-semibold" style={{ color: 'var(--bone)' }}>
                      {n.title}
                    </div>
                    <div className="text-sm" style={{ color: 'var(--bone)', opacity: 0.85 }}>
                      {n.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE ADVANTAGE — PAPER */}
      <section className="py-20 md:py-32 relative" style={{ backgroundColor: 'var(--paper)' }}>
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)`, transform: 'translate(30%, -20%)' }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-16">
            <span className="badge badge-tilt mb-4">
              <span className="badge-dot" />
              Why it matters
            </span>
            <h2 className="text-4xl md:text-6xl leading-[1.05] mb-6" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
              Less time on the computer.{' '}
              <em className="italic" style={{ color: '#c2410c' }}>
                More time on your business.
              </em>
            </h2>
            <p className="text-lg" style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
              Most small businesses juggle a website, a payment system, an inbox and a pile of logins, and every change means a
              call, an email, or a weekend. Pilot Light puts it all in one place and lets you run it in plain words.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 tilt-alt">
            {advantages.map((a) => (
              <div key={a.title} className="card-fun p-8" style={{ backgroundColor: 'white', ['--shadow-color' as string]: GLOW } as CSSProperties}>
                <div className="mb-4">
                  <Flame size={30} />
                </div>
                <h3 className="text-2xl mb-3" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
                  {a.title}
                </h3>
                <p style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED — DARK */}
      <section id="included" className="py-20 md:py-32 relative overflow-hidden scroll-mt-24" style={{ backgroundColor: 'var(--midnight)' }}>
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${ORANGE} 0%, transparent 70%)`, transform: 'translate(-30%, -30%)' }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="badge badge-on-dark badge-tilt mb-4">
                <span className="badge-dot" />
                What&apos;s included
              </span>
              <h2 className="text-4xl md:text-6xl leading-[1.05] mb-6" style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}>
                It all comes with{' '}
                <em className="italic" style={{ color: ORANGE }}>
                  Business in a Box.
                </em>
              </h2>
              <p className="text-lg" style={{ color: 'var(--bone)', opacity: 0.75, lineHeight: '1.7' }}>
                Pilot Light isn&apos;t a separate app you have to figure out. We set it up around your business and your website,
                invite you in, and keep it all running.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="card-fun tilt-none p-8 md:p-10" style={{ backgroundColor: 'white', ['--shadow-color' as string]: 'var(--forest-green)' } as CSSProperties}>
                <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
                  <h3 className="text-2xl md:text-3xl" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
                    Business in a Box
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl leading-none" style={{ color: 'var(--forest-green)', fontFamily: 'var(--font-heading)' }}>
                      $300
                    </span>
                    <span className="text-lg font-rounded" style={{ color: 'var(--stone)' }}>
                      /month
                    </span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    ['Pilot Light, set up for your business', 'A custom integration with your website and tools, and your invite to sign in'],
                    ['Lena, your AI assistant', 'On your dashboard and in the iPhone app'],
                    ['2 add-ons of your choice', 'Pick from the add-ons below'],
                    ['Unlimited updates & support', 'For everything you already have, including your add-ons'],
                    ['A custom website & full branding', 'Up to 10 pages, your domain, logo and brand packaging'],
                  ].map(([label, note]) => (
                    <li key={label} className="flex items-start gap-3">
                      <Check color="var(--forest-green)" />
                      <span className="flex flex-col">
                        <span style={{ color: 'var(--ash-gray)', lineHeight: '1.5' }}>{label}</span>
                        <span className="text-sm mt-0.5" style={{ color: 'var(--stone)', lineHeight: '1.4' }}>
                          {note}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="btn-fun group inline-flex w-full items-center justify-center gap-2 px-8 py-4 text-lg"
                  style={{ backgroundColor: 'var(--forest-green)', color: 'white' }}
                >
                  Get Started
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Add-ons */}
          <div className="mt-24">
            <div className="max-w-3xl mb-12">
              <h3 className="text-3xl md:text-5xl leading-[1.08] mb-4" style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}>
                Pick 2 add-ons to start.
              </h3>
              <p className="text-lg" style={{ color: 'var(--bone)', opacity: 0.75, lineHeight: '1.7' }}>
                Add-ons are what Pilot Light runs for you. Two of your choice come with your plan, and you can add more any
                time. Here are a few favorites:
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {addOnExamples.map((a) => (
                <div key={a.title} className="rounded-3xl p-6" style={{ backgroundColor: 'rgba(245, 241, 235, 0.06)', border: '1.5px solid rgba(251, 146, 60, 0.3)' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Flame size={18} />
                    <h4 className="text-lg" style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}>
                      {a.title}
                    </h4>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--bone)', opacity: 0.72, lineHeight: '1.6' }}>
                    {a.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-5xl">
              <div className="rounded-3xl p-7" style={{ backgroundColor: 'rgba(251, 146, 60, 0.12)', border: '1.5px solid rgba(251, 146, 60, 0.45)' }}>
                <div className="text-sm font-rounded uppercase tracking-wide mb-2" style={{ color: ORANGE }}>
                  More add-ons
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl" style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}>
                    $500
                  </span>
                  <span style={{ color: 'var(--bone)', opacity: 0.7 }}>setup + $50/month each</span>
                </div>
                <p className="text-sm" style={{ color: 'var(--bone)', opacity: 0.72, lineHeight: '1.6' }}>
                  Every add-on after your first two, set up by us and run through Pilot Light. Ask us about anything you don&apos;t
                  see here. Prices can vary by add-on, depending on how much you use it and whether it needs another add-on
                  to work.
                </p>
              </div>
              <div className="rounded-3xl p-7" style={{ backgroundColor: 'rgba(240, 185, 73, 0.1)', border: '1.5px solid rgba(240, 185, 73, 0.4)' }}>
                <div className="text-sm font-rounded uppercase tracking-wide mb-3" style={{ color: GOLD }}>
                  Lena&apos;s monthly usage
                </div>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--bone)' }}>
                  <li className="flex justify-between gap-4">
                    <span>Standard</span>
                    <span style={{ opacity: 0.8 }}>Included</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Plus</span>
                    <span style={{ opacity: 0.8 }}>+$20/month</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Pro</span>
                    <span style={{ opacity: 0.8 }}>+$50/month</span>
                  </li>
                </ul>
                <p className="mt-3 text-xs" style={{ color: 'var(--bone)', opacity: 0.6, lineHeight: '1.5' }}>
                  Each level has a clear monthly limit, and we&apos;ll let you know well before you get close. Busier add-ons, like
                  email and texting, come in the same three levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — ORANGE */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${ORANGE} 0%, transparent 70%)`, transform: 'translate(-50%, -50%)' }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Flame size={64} />
            </div>
            <h2 className="text-5xl md:text-7xl mb-6 leading-[1.05]" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
              Ready to light it up?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}>
              Tell us about your business and we&apos;ll show you what Pilot Light would look like for you.
            </p>
            <a
              href="/contact"
              className="btn-fun group inline-flex items-center gap-2 px-10 py-5 text-lg"
              style={{ backgroundColor: '#c2410c', color: 'white' }}
            >
              Let&apos;s Talk
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
