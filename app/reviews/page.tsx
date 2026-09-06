import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews | Kindling Digital',
  description:
    'See what clients are saying about working with Kindling Digital — the technology partner small businesses call for websites, custom builds, and ongoing support.',
};

type Review = {
  name: string;
  company: string;
  rating: number;
  body: string;
};

const reviews: Review[] = [
  {
    name: 'Maelynn Watrous',
    company: 'Owner of Soady Poppers',
    rating: 5,
    body:
      "We've had a great experience working with Kindling Digital on our business website! He is extremely knowledgeable and clearly knows his stuff when it comes to web design and development. He has taken the time to explain the process, answer our questions, and help bring our ideas for the site to life. We're especially excited about the functionality he's been able to build into it and are very happy with how everything is coming together. We're looking forward to continuing to work with him as our website grows!",
  },
  {
    name: 'Alex Warner',
    company: 'Founder and CEO of Work Odyssey',
    rating: 5,
    body:
      "Christopher Neisen is a coding machine and a strong leader. I have gotten to know Chris well over the past year and it has been a pleasure to work with him. He is one of those rare guys who can lead a development team, help with any problems they may have, manage the project and do individual contributor work himself. He is both comfortable in a straight line engineering position or in the leader/manager role, for me he has done both jobs at once exceedingly well! One of Chris's superpowers is that he takes initiative and that initiative is always well thought out, NOT reckless, and it makes big impacts. I don't have to tell him what to do, he just knows what to do. When you have worked in startups and you have someone like this, they are like gold, totally invaluable. You got a million things to do and its nice to know someone has got your back. Chris is one of those guys who has your back, you can walk away from a project without worry. Finally and most importantly, Chris is a guy with high integrity and a great positive personality. If you don't know Chris! Get to know Chris! You won't regret it",
  },
  {
    name: 'Jared Hineman',
    company: 'CEO of WeClean',
    rating: 5,
    body:
      "I had the pleasure of working closely with Chris at WeClean, and he consistently proved himself to be an exceptional full stack software engineer with outstanding skill and a strong work ethic. He possesses a deep understanding of software development principles and remarkable technical proficiency. His ability to grasp complex concepts quickly and apply them effectively to solve intricate problems was invaluable to our team's success. One of his greatest strengths is problem-solving; he approaches challenges with a logical, analytical mindset and examines every aspect of a problem to come up with an efficient solution that keeps the project moving forward. His attention to detail and commitment to delivering high-quality code were evident in everything he built for us.",
  },
  {
    name: 'Jason Gibb',
    company: 'COO at Nash Capital',
    rating: 5,
    body:
      "We needed a full-stack developer to build a SaaS application from scratch. In less than three months Chris created the app from start to finish, with fully-functional front end, back end, and data model. Chris was a pleasure to work with on the project, providing excellent communication, asking great questions to understand customer needs, and bringing new ideas to the table at every standup. I would definitely hire him again.",
  },
];

const averageRating =
  reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

function Stars({ rating, size = 20 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < Math.round(rating) ? 'var(--honey-gold)' : 'none'}
          aria-hidden="true"
        >
          <path
            d="M12 2l2.9 6.26L21 9.27l-4.5 4.38 1.06 6.19L12 16.9l-5.56 2.94L7.5 13.65 3 9.27l6.1-1.01L12 2z"
            fill={i < Math.round(rating) ? 'var(--honey-gold)' : 'none'}
            stroke="var(--honey-gold)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function Reviews() {
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

        {/* Warm dotted texture */}
        <div className="dot-texture absolute inset-0 opacity-[0.04] pointer-events-none" />

        {/* Floating spark doodle */}
        <svg
          className="floaty absolute top-24 right-[12%] hidden lg:block pointer-events-none"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M12 2l2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8L12 2z" fill="var(--honey-gold)" />
        </svg>

        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="grid md:grid-cols-12 items-center gap-8">
            <div className="md:col-span-7">
              <h1
                className="mb-8 fade-in-up stagger-1"
                style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
              >
                <span className="block text-4xl md:text-6xl leading-[1.05]">What clients</span>
                <span
                  className="block italic text-6xl md:text-8xl leading-[0.95] mt-1"
                  style={{ color: 'var(--ember-deep)' }}
                >
                  <span className="relative inline-block">
                    are saying
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
            </div>

            {/* Rating summary card */}
            <div className="md:col-span-5 w-full fade-in-up stagger-3">
              <div
                className="rounded-2xl p-8 flex flex-col items-center text-center"
                style={{
                  backgroundColor: 'white',
                  border: '2px solid var(--ember-deep)',
                  boxShadow: '5px 5px 0 rgba(194, 65, 12, 0.85)',
                }}
              >
                <span
                  className="text-6xl md:text-7xl leading-none mb-3"
                  style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                >
                  {averageRating.toFixed(1)}
                </span>
                <Stars rating={averageRating} size={26} />
                <p
                  className="mt-4 text-lg"
                  style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                >
                  Five-star rated
                </p>
                <p className="mt-1 text-sm" style={{ color: 'var(--ash-gray)' }}>
                  Straight from the people we build for
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews list */}
      <section className="py-20 md:py-28 relative" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-2xl p-8 md:p-10"
                style={{
                  backgroundColor: 'var(--warm-cream)',
                  border: '2px solid rgba(28, 25, 23, 0.12)',
                  boxShadow: '3px 3px 0 rgba(28, 25, 23, 0.05)',
                }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg"
                    style={{
                      backgroundColor: 'var(--ember-deep)',
                      color: 'var(--bone)',
                      border: '2px solid var(--charcoal)',
                      fontFamily: 'var(--font-heading)',
                    }}
                    aria-hidden="true"
                  >
                    {initials(review.name)}
                  </div>
                  <div>
                    <h2
                      className="text-lg md:text-xl leading-tight"
                      style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                    >
                      {review.name}
                    </h2>
                    <p
                      className="text-sm font-medium"
                      style={{ color: 'var(--ember-deep)' }}
                    >
                      {review.company}
                    </p>
                    <div className="mt-1">
                      <Stars rating={review.rating} size={16} />
                    </div>
                  </div>
                </div>
                <p style={{ color: 'var(--ash-gray)', lineHeight: '1.75' }}>{review.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: 'var(--midnight)' }}>
        <div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-5xl md:text-7xl mb-8 leading-[1.05] tracking-tight"
              style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
            >
              Ready to be next?
            </h2>
            <p
              className="text-xl mb-12 max-w-2xl mx-auto"
              style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.6' }}
            >
              Tell us what your business needs and we'll figure out how to help — no commitment required.
            </p>
            <a
              href="/contact"
              className="btn-fun group inline-flex items-center gap-2 px-10 py-5 text-lg"
              style={{ backgroundColor: 'var(--ember-deep)', color: 'var(--bone)' }}
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
