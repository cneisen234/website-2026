export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl">
          <div className="inline-block mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-3 fade-in-up placeholder-text">
              Grow Your Business Online
            </h1>
            <div 
              className="h-1.5 w-32 rounded-full fade-in-up stagger-1"
              style={{ backgroundColor: 'var(--ember-orange)' }}
            ></div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 fade-in-up stagger-2" style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}>
            Digital marketing that actually works for local businesses. Kindling Digital does websites, social media, video, and everything you need to reach more customers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-3">
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg text-center"
              style={{ 
                backgroundColor: 'var(--ember-orange)', 
                color: 'white',
              }}
            >
              Let's Talk About Your Goals
            </a>
            <a 
              href="/services" 
              className="inline-block px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all hover:shadow-lg placeholder-text text-center"
              style={{ 
                borderColor: 'var(--ember-orange)',
              }}
            >
              See How I Can Help
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 placeholder-text">
              Digital Marketing That Makes Sense
            </h2>
            <div 
              className="h-1 w-24 rounded-full mx-auto mb-6"
              style={{ backgroundColor: 'var(--ember-orange)' }}
            ></div>
            <p className="text-lg" style={{ color: 'var(--ash-gray)' }}>
              You need someone who understands both marketing and the technical side, and can actually make it all work together without the confusion or big-city prices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl border-2 hover:shadow-lg transition-all" style={{ borderColor: 'rgba(232, 105, 76, 0.2)', backgroundColor: 'var(--warm-cream)' }}>
              <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                <span style={{ color: 'var(--ember-orange)', fontSize: '24px' }}>🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 placeholder-text">Results-Focused</h3>
              <p style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}>
                Everything I build is designed to help you reach more customers and grow your business. No fancy tech for tech's sake.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl border-2 hover:shadow-lg transition-all" style={{ borderColor: 'rgba(232, 105, 76, 0.2)', backgroundColor: 'var(--warm-cream)' }}>
              <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                <span style={{ color: 'var(--ember-orange)', fontSize: '24px' }}>🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 placeholder-text">Local & Personal</h3>
              <p style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}>
                Meet in person, work on your schedule, and actually talk through what makes sense for your business. No corporate runaround.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl border-2 hover:shadow-lg transition-all" style={{ borderColor: 'rgba(232, 105, 76, 0.2)', backgroundColor: 'var(--warm-cream)' }}>
              <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                <span style={{ color: 'var(--ember-orange)', fontSize: '24px' }}>⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 placeholder-text">Full Package</h3>
              <p style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}>
                I can handle your website, social media, video content, and custom tools. It'll all work together as part of one strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 placeholder-text">
              How I Help Businesses Grow
            </h2>
            <div 
              className="h-1 w-24 rounded-full mx-auto"
              style={{ backgroundColor: 'var(--ember-orange)' }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: 'white', border: '2px solid rgba(232, 105, 76, 0.2)' }}>
              <h3 className="text-2xl font-bold mb-3 placeholder-text">Get Found Online</h3>
              <p style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}>
                Professional websites that show up in searches and turn visitors into customers. Mobile-friendly, fast, and built to actually get results.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: 'white', border: '2px solid rgba(232, 105, 76, 0.2)' }}>
              <h3 className="text-2xl font-bold mb-3 placeholder-text">Stay Active on Social Media</h3>
              <p style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}>
                Regular posting, professional and engaging content that keeps your business visible without eating up all your time.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: 'white', border: '2px solid rgba(232, 105, 76, 0.2)' }}>
              <h3 className="text-2xl font-bold mb-3 placeholder-text">Look Professional</h3>
              <p style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}>
                Video content that showcases your business in the best light, from social media clips to promotional videos that actually get watched.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: 'white', border: '2px solid rgba(232, 105, 76, 0.2)' }}>
              <h3 className="text-2xl font-bold mb-3 placeholder-text">Work Smarter</h3>
              <p style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}>
                Custom tools and systems that save you time, including online booking, customer management, e-commerce, or whatever your business needs.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/services" 
              className="inline-block px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all hover:shadow-lg placeholder-text"
              style={{ 
                borderColor: 'var(--ember-orange)',
              }}
            >
              See All Services
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 placeholder-text">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl mb-8" style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}>
              Whether you're starting from scratch or looking to improve what you've got, let's talk about how to get you more customers and better results online.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg"
              style={{ 
                backgroundColor: 'var(--ember-orange)', 
                color: 'white',
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
