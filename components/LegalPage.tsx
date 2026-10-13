// The legal pages (privacy policy, terms of service, client data agreement): a short heading in the site's
// look, then plain sections of text that read well on a phone.

export type LegalSection = {
  heading: string;
  /** Paragraphs; a list is an array of items. */
  body: (string | string[])[];
};

export default function LegalPage({ title, updated, intro, sections }: { title: string; updated: string; intro: string; sections: LegalSection[] }) {
  return (
    <main>
      <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--paper)' }}>
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl leading-[1.05] tracking-tight" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
              {title}
            </h1>
            <p className="mt-4 text-sm" style={{ color: 'var(--charcoal)', opacity: 0.6 }}>
              Last updated {updated}
            </p>
            <p className="mt-6 text-lg" style={{ color: 'var(--charcoal)', lineHeight: '1.7' }}>
              {intro}
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-10">
            {sections.map((s, i) => (
              <div key={s.heading}>
                <h2 className="text-2xl md:text-3xl leading-tight tracking-tight mb-4" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
                  {i + 1}. {s.heading}
                </h2>
                <div className="space-y-4" style={{ color: 'var(--charcoal)', lineHeight: '1.7' }}>
                  {s.body.map((b, j) =>
                    Array.isArray(b) ? (
                      <ul key={j} className="list-disc pl-6 space-y-2">
                        {b.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={j}>{b}</p>
                    ),
                  )}
                </div>
              </div>
            ))}
            <p className="pt-6 text-sm" style={{ color: 'var(--charcoal)', opacity: 0.7, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
              Questions about this page? Email <a href="mailto:chris@kindlingdigital.org" className="underline">chris@kindlingdigital.org</a> or use our{' '}
              <a href="/contact" className="underline">contact page</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
