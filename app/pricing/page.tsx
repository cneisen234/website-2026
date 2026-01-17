export default function Pricing() {
    return (
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-3 fade-in-up placeholder-text">
                Pricing
              </h1>
              <div 
                className="h-1.5 w-32 rounded-full fade-in-up stagger-1"
                style={{ backgroundColor: 'var(--ember-orange)' }}
              ></div>
            </div>
            
            <p className="text-xl md:text-2xl fade-in-up stagger-2" style={{ color: 'var(--ash-gray)', lineHeight: '1.8' }}>
              Flexible pricing that works for your business and budget. Fair rates, clear communication, and no hidden fees.
            </p>
          </div>
        </section>
  
        {/* Pricing Intro */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 placeholder-text">
                How Pricing Works
              </h2>
              <div 
                className="h-1 w-24 rounded-full mx-auto mb-8"
                style={{ backgroundColor: 'var(--ember-orange)' }}
              ></div>
              <p className="text-lg mb-8" style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                Every business is different, so I don't believe in one-size-fits-all packages. Below are starting prices to give you an idea of what things cost. After we talk about what you need, I'll give you a clear, honest quote with no surprises.
              </p>
            </div>
          </div>
        </section>
  
        {/* Pricing Categories */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
  
              {/* Websites */}
              <div className="bg-white rounded-2xl p-8 border-2" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '32px' }}>🌐</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2 placeholder-text">Websites</h3>
                    <div 
                      className="h-0.5 w-16 rounded-full mb-4"
                      style={{ backgroundColor: 'var(--ember-orange)' }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-4" style={{ color: 'var(--ash-gray)' }}>
                  <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span>Basic Business Website (3-5 pages)</span>
                    <span className="font-bold placeholder-text">Starting at $500</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span>Full Business Website (5-10 pages)</span>
                    <span className="font-bold placeholder-text">Starting at $800</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span>E-Commerce Store</span>
                    <span className="font-bold placeholder-text">Starting at $2,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span>Additional Pages</span>
                    <span className="font-bold placeholder-text">$75-150/page</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span>Special Features (booking systems, integrations like Calendly, custom tools, etc.)</span>
                    <span className="font-bold placeholder-text">Custom quote</span>
                  </div>
                </div>
              </div>
  
          {/* Social Media Management */}
            <div className="bg-white rounded-2xl p-8 border-2" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
            <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                <span style={{ color: 'var(--ember-orange)', fontSize: '32px' }}>📱</span>
                </div>
                <div className="flex-1">
                <h3 className="text-3xl font-bold mb-2 placeholder-text">Social Media Management</h3>
                <div 
                    className="h-0.5 w-16 rounded-full mb-4"
                    style={{ backgroundColor: 'var(--ember-orange)' }}
                ></div>
                </div>
            </div>
            <div className="space-y-4" style={{ color: 'var(--ash-gray)' }}>
                <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(232, 105, 76, 0.1)' }}>
                <span>Bi-Weekly (2 posts per month)</span>
                <span className="font-bold placeholder-text">$50/month</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(232, 105, 76, 0.1)' }}>
                <span>Weekly (4 posts per month)</span>
                <span className="font-bold placeholder-text">$80/month</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(232, 105, 76, 0.1)' }}>
                <span>Twice Weekly (8-10 posts per month)</span>
                <span className="font-bold placeholder-text">$150/month</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(232, 105, 76, 0.1)' }}>
                <span>Three times a week (9-12 posts per month)</span>
                <span className="font-bold placeholder-text">$200/month</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(232, 105, 76, 0.1)' }}>
                <span>Full Management (daily posting + comment engagement)</span>
                <span className="font-bold placeholder-text">$400/month</span>
                </div>
                <div className="pt-4 text-sm">
                <p style={{ color: 'var(--ash-gray)' }}>
                    <strong>Platforms:</strong> Prices based on posting to 1-2 platforms (Facebook, Instagram, etc.). We'll figure out which platforms make the most sense for your business and customers. Additional platforms available for extra cost.
                </p>
                </div>
            </div>
            </div>
  
              {/* Video Production */}
              <div className="bg-white rounded-2xl p-8 border-2" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '32px' }}>🎥</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2 placeholder-text">Video Production</h3>
                    <div 
                      className="h-0.5 w-16 rounded-full mb-4"
                      style={{ backgroundColor: 'var(--ember-orange)' }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-4" style={{ color: 'var(--ash-gray)' }}>
                  <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span>Social Media Video (30-60 seconds)</span>
                    <span className="font-bold placeholder-text">Starting at $200</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span>Promotional Video (1-3 minutes)</span>
                    <span className="font-bold placeholder-text">Starting at $350</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span>Event Coverage</span>
                    <span className="font-bold placeholder-text">Starting at $450</span>
                  </div>
                </div>
              </div>
  
              {/* Maintenance & Support */}
              <div className="bg-white rounded-2xl p-8 border-2" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '32px' }}>🛠️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2 placeholder-text">Maintenance & Support</h3>
                    <div 
                      className="h-0.5 w-16 rounded-full mb-4"
                      style={{ backgroundColor: 'var(--ember-orange)' }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-4" style={{ color: 'var(--ash-gray)' }}>
                  <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span>Basic (updates + security, includes 1 hour/month)</span>
                    <span className="font-bold placeholder-text">$75/month</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span>Standard (includes content updates, 2 hours/month)</span>
                    <span className="font-bold placeholder-text">$125/month</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span>Standard (includes content updates, 4 hours/month)</span>
                    <span className="font-bold placeholder-text">$200/month</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span>As-Needed Support</span>
                    <span className="font-bold placeholder-text">$100/hour</span>
                  </div>
                  <div className="pt-4 text-sm">
                    <p style={{ color: 'var(--ash-gray)' }}>
                    <strong>Note:</strong> Monthly hours can be used for website updates, technical support, video editing, or any other work you need done. Unused hours don't roll over.
                    </p>
                    </div>
                </div>
              </div>
       {/* Custom Applications */}
       <div className="bg-white rounded-2xl p-8 border-2" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
                <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '32px' }}>⚙️</span>
                    </div>
                    <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2 placeholder-text">Custom Applications</h3>
                    <div 
                        className="h-0.5 w-16 rounded-full mb-4"
                        style={{ backgroundColor: 'var(--ember-orange)' }}
                    ></div>
                    </div>
                </div>
                <div style={{ color: 'var(--ash-gray)' }}>
                    <p className="mb-4" style={{ lineHeight: '1.7' }}>
                    Custom tools and systems built specifically for your business—booking systems, inventory management, customer portals, or whatever you need.
                    </p>
                    <p className="font-bold placeholder-text text-lg">
                    Let's talk about what you need
                    </p>
                    <p className="text-sm mt-2">
                    Every custom application is different. We'll discuss your needs, figure out what makes sense, and I'll give you an honest quote based on the scope of work.
                    </p>
                </div>
                </div>
            </div>
            
          </div>

           
        </section>
  
        {/* Payment Plans */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 placeholder-text">
                  Payment Plans Available
                </h2>
                <div 
                  className="h-1 w-24 rounded-full mx-auto mb-6"
                  style={{ backgroundColor: 'var(--ember-orange)' }}
                ></div>
                <p className="text-lg" style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                  I understand budgets can be tight. Let's work out a payment plan that makes sense for you.
                </p>
              </div>
  
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl border-2" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
                  <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '24px' }}>💳</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 placeholder-text">Split Payments</h3>
                  <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                    Pay in installments as we hit project milestones. Typically 50% to start, 50% at completion, but we can work out a plan that fits your budget.
                  </p>
                </div>
  
                <div className="p-8 rounded-2xl border-2" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
                  <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '24px' }}>📅</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 placeholder-text">Monthly Retainers</h3>
                  <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                    For ongoing work like social media management, website maintenance, or regular content creation, we'll set up a simple monthly plan.
                  </p>
                </div>
  
                <div className="p-8 rounded-2xl border-2 md:col-span-2" style={{ borderColor: 'rgba(232, 105, 76, 0.2)' }}>
                  <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '24px' }}>🤝</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 placeholder-text">Custom Payment Plans</h3>
                  <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                    Need something more flexible? We can discuss custom payment arrangements that work for your specific situation. I'm here to help, not make things harder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 placeholder-text">
                Want an Exact Quote?
              </h2>
              <div 
                className="h-1 w-24 rounded-full mx-auto mb-8"
                style={{ backgroundColor: 'var(--ember-orange)' }}
              ></div>
              <p className="text-xl mb-12" style={{ color: 'var(--ash-gray)', lineHeight: '1.8' }}>
                Let's talk about what you need. I'll give you a clear, honest quote with no surprises or hidden fees.
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