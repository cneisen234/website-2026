export default function FAQ() {
    return (
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-3 fade-in-up placeholder-text">
                Frequently Asked Questions
              </h1>
              <div 
                className="h-1.5 w-32 rounded-full fade-in-up stagger-1"
                style={{ backgroundColor: 'var(--ember-orange)' }}
              ></div>
            </div>
            
            <p className="text-xl md:text-2xl fade-in-up stagger-2" style={{ color: 'var(--ash-gray)', lineHeight: '1.8' }}>
              Common questions about pricing, timelines, and how we'll work together.
            </p>
          </div>
        </section>
  
        {/* FAQ Items */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              
              {/* FAQ 1 */}
              <div className="bg-white rounded-2xl p-8 border-2 hover:shadow-lg transition-all" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
                <h3 className="text-2xl font-bold mb-4 placeholder-text">How much does a website cost?</h3>
                <div 
                    className="h-0.5 w-16 rounded-full mb-4"
                    style={{ backgroundColor: 'var(--ember-orange)' }}
                ></div>
                <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                    It depends on what you need. A basic business website might start around $500-$800. Something bigger with more pages or an online store will cost more. I keep my prices reasonable because I want to help local businesses, not price them out. I'll give you an honest quote after we talk.
                </p>
              </div>
  
              {/* FAQ 2 */}
              <div className="bg-white rounded-2xl p-8 border-2 hover:shadow-lg transition-all" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
                <h3 className="text-2xl font-bold mb-4 placeholder-text">How long does it take to build a website?</h3>
                <div 
                  className="h-0.5 w-16 rounded-full mb-4"
                  style={{ backgroundColor: 'var(--ember-orange)' }}
                ></div>
                <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                  A typical business website takes 2-4 weeks from start to launch. More complex projects like e-commerce stores or custom applications might take 4-8 weeks. I'll give you a realistic timeline upfront and keep you updated throughout.
                </p>
              </div>
  
              {/* FAQ 3 */}
              <div className="bg-white rounded-2xl p-8 border-2 hover:shadow-lg transition-all" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
                <h3 className="text-2xl font-bold mb-4 placeholder-text">Do you offer payment plans?</h3>
                <div 
                  className="h-0.5 w-16 rounded-full mb-4"
                  style={{ backgroundColor: 'var(--ember-orange)' }}
                ></div>
                <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                  Yes. I understand not every business can pay everything upfront. We can work out a payment plan that makes sense for your budget. I'm willing to meet you in the middle whatever that middle might be.
                </p>
              </div>
  
              {/* FAQ 4 */}
              <div className="bg-white rounded-2xl p-8 border-2 hover:shadow-lg transition-all" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
                <h3 className="text-2xl font-bold mb-4 placeholder-text">Will I be able to update my website myself?</h3>
                <div 
                  className="h-0.5 w-16 rounded-full mb-4"
                  style={{ backgroundColor: 'var(--ember-orange)' }}
                ></div>
                <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                  If you want to, yes. I can set up your site so you can make basic updates yourself. You can change text, adding photos, posting news. I'll show you how it works. Or, I can handle all updates for you as part of ongoing maintenance. Your choice.
                </p>
              </div>
  
              {/* FAQ 5 */}
              <div className="bg-white rounded-2xl p-8 border-2 hover:shadow-lg transition-all" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
                <h3 className="text-2xl font-bold mb-4 placeholder-text">What about hosting and domain names?</h3>
                <div 
                  className="h-0.5 w-16 rounded-full mb-4"
                  style={{ backgroundColor: 'var(--ember-orange)' }}
                ></div>
                <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                  I'll help you get set up with hosting (where your website lives) and a domain name (your web address). I can recommend reliable, affordable options and handle all the technical setup. Typical hosting costs are $10-30/month depending on your needs.
                </p>
              </div>
  
              {/* FAQ 6 */}
              <div className="bg-white rounded-2xl p-8 border-2 hover:shadow-lg transition-all" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
                <h3 className="text-2xl font-bold mb-4 placeholder-text">Do you do social media management?</h3>
                <div 
                  className="h-0.5 w-16 rounded-full mb-4"
                  style={{ backgroundColor: 'var(--ember-orange)' }}
                ></div>
                <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                  Yes. I can handle your social media posting, content creation, and engagement. We'll figure out what platforms make sense for your business and how often you want to post. Pricing depends on how much you need, but I keep it affordable for small businesses.
                </p>
              </div>
  
              {/* FAQ 7 */}
              <div className="bg-white rounded-2xl p-8 border-2 hover:shadow-lg transition-all" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
                <h3 className="text-2xl font-bold mb-4 placeholder-text">What if I need help after my website launches?</h3>
                <div 
                  className="h-0.5 w-16 rounded-full mb-4"
                  style={{ backgroundColor: 'var(--ember-orange)' }}
                ></div>
                <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                  I'm not going anywhere. You can reach out anytime you need help, have questions, or want to make changes. I offer ongoing maintenance packages, or we can work on an as-needed basis. Whatever works better for you.
                </p>
              </div>
  
              {/* FAQ 8 */}
              <div className="bg-white rounded-2xl p-8 border-2 hover:shadow-lg transition-all" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
                <h3 className="text-2xl font-bold mb-4 placeholder-text">Do I own my website?</h3>
                <div 
                  className="h-0.5 w-16 rounded-full mb-4"
                  style={{ backgroundColor: 'var(--ember-orange)' }}
                ></div>
                <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                  Yes. Once you've paid for the website, it's yours. You own all the content, design, and code. You're not locked into working with me forever, though I hope you'll want to stick around!
                </p>
              </div>
  
              {/* FAQ 9 */}
              <div className="bg-white rounded-2xl p-8 border-2 hover:shadow-lg transition-all" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
                <h3 className="text-2xl font-bold mb-4 placeholder-text">Can you help with video content?</h3>
                <div 
                  className="h-0.5 w-16 rounded-full mb-4"
                  style={{ backgroundColor: 'var(--ember-orange)' }}
                ></div>
                <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                  Absolutely. I do professional video work. I do promotional videos, social media content, event coverage, product demos, whatever you need. We can shoot locally or I can work with footage you provide and edit it into something polished.
                </p>
              </div>
  
              {/* FAQ 10 */}
              <div className="bg-white rounded-2xl p-8 border-2 hover:shadow-lg transition-all" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
                <h3 className="text-2xl font-bold mb-4 placeholder-text">What if I'm not sure what I need?</h3>
                <div 
                  className="h-0.5 w-16 rounded-full mb-4"
                  style={{ backgroundColor: 'var(--ember-orange)' }}
                ></div>
                <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                  That's completely normal. Most people aren't sure exactly what they need when they start. That's what our first conversation is for. We'll talk about your business, your goals, and I'll recommend what makes sense. No pressure to decide everything right away.
                </p>
              </div>
  
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 placeholder-text">
                Still Have Questions?
              </h2>
              <div 
                className="h-1 w-24 rounded-full mx-auto mb-8"
                style={{ backgroundColor: 'var(--ember-orange)' }}
              ></div>
              <p className="text-xl mb-12" style={{ color: 'var(--ash-gray)', lineHeight: '1.8' }}>
                Don't see your question answered here? Just reach out. I'm happy to answer anything else you're wondering about.
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