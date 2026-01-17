export default function Contact() {
    return (
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-3 fade-in-up placeholder-text">
                Let's Talk
              </h1>
              <div 
                className="h-1.5 w-32 rounded-full fade-in-up stagger-1"
                style={{ backgroundColor: 'var(--ember-orange)' }}
              ></div>
            </div>
            
            <p className="text-xl md:text-2xl fade-in-up stagger-2" style={{ color: 'var(--ash-gray)', lineHeight: '1.8' }}>
              Ready to grow your business online? Have questions? Want to grab coffee and talk through some ideas? Let's connect.
            </p>
          </div>
        </section>
  
        {/* Contact Methods */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center placeholder-text">
                Get In Touch
              </h2>
  
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Email */}
                <div className="p-8 rounded-2xl border-2 text-center" style={{ borderColor: 'rgba(232, 105, 76, 0.2)', backgroundColor: 'var(--warm-cream)' }}>
                  <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center mx-auto" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '32px' }}>📧</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 placeholder-text">Email Me</h3>
                  <div className="placeholder-box h-12 rounded-lg flex items-center justify-center">
                    <p className="placeholder-text">ADD LATER</p>
                  </div>
                </div>
  
                {/* Phone */}
                <div className="p-8 rounded-2xl border-2 text-center" style={{ borderColor: 'rgba(232, 105, 76, 0.2)', backgroundColor: 'var(--warm-cream)' }}>
                  <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center mx-auto" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '32px' }}>📱</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 placeholder-text">Call or Text</h3>
                  <div className="placeholder-box h-12 rounded-lg flex items-center justify-center">
                    <p className="placeholder-text">(701) 429-4837</p>
                  </div>
                </div>
              </div>
  
              {/* What to Expect */}
              <div className="bg-white rounded-2xl p-8 border-2" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
                <h3 className="text-2xl font-bold mb-6 placeholder-text text-center">What Happens Next?</h3>
                <div className="space-y-4" style={{ color: 'var(--ash-gray)' }}>
                  <div className="flex gap-4">
                    <span style={{ color: 'var(--ember-orange)', fontWeight: 'bold' }}>1.</span>
                    <p>I'll get back to you within 24 hours (usually much faster)</p>
                  </div>
                  <div className="flex gap-4">
                    <span style={{ color: 'var(--ember-orange)', fontWeight: 'bold' }}>2.</span>
                    <p>We'll set up a time to talk, we can do phone, video call, or in person if you're local</p>
                  </div>
                  <div className="flex gap-4">
                    <span style={{ color: 'var(--ember-orange)', fontWeight: 'bold' }}>3.</span>
                    <p>We'll discuss what you're looking to accomplish and I'll let you know if I can help</p>
                  </div>
                  <div className="flex gap-4">
                    <span style={{ color: 'var(--ember-orange)', fontWeight: 'bold' }}>4.</span>
                    <p>No pressure, no sales pitch, just an honest conversation about what makes sense for your business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Service Area */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 placeholder-text">
                  Where I Work
                </h2>
                <div 
                  className="h-1 w-24 rounded-full mx-auto mb-6"
                  style={{ backgroundColor: 'var(--ember-orange)' }}
                ></div>
              </div>
  
              <div className="grid md:grid-cols-2 gap-8">
                {/* Local */}
                <div className="p-8 rounded-2xl border-2" style={{ borderColor: 'rgba(232, 105, 76, 0.2)', backgroundColor: 'white' }}>
                  <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '24px' }}>📍</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 placeholder-text">Local Clients</h3>
                  <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                    I love working with local businesses. In-person meetings, local visits, coffee shop conversations, whatever works for you.
                  </p>
                </div>
  
                {/* Remote */}
                <div className="p-8 rounded-2xl border-2" style={{ borderColor: 'rgba(232, 105, 76, 0.2)', backgroundColor: 'white' }}>
                  <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '24px' }}>🌐</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 placeholder-text">Remote Work</h3>
                  <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                    Not local? No problem. I work with clients remotely too. I can do video calls, screen sharing, and regular check-ins to keep everything on track.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* FAQ Teaser */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 placeholder-text">
                Have Questions First?
              </h2>
              <div 
                className="h-1 w-24 rounded-full mx-auto mb-8"
                style={{ backgroundColor: 'var(--ember-orange)' }}
              ></div>
              <p className="text-xl mb-8" style={{ color: 'var(--ash-gray)', lineHeight: '1.8' }}>
                Check out the FAQ page for answers to common questions about pricing, timelines, and how everything works.
              </p>
              <a 
                href="/faq" 
                className="inline-block px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all hover:shadow-lg placeholder-text"
                style={{ 
                  borderColor: 'var(--ember-orange)',
                }}
              >
                View FAQ
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }