export default function Services() {
    return (
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-3 fade-in-up placeholder-text">
                Services
              </h1>
              <div 
                className="h-1.5 w-32 rounded-full fade-in-up stagger-1"
                style={{ backgroundColor: 'var(--ember-orange)' }}
              ></div>
            </div>
            
            <p className="text-xl md:text-2xl fade-in-up stagger-2" style={{ color: 'var(--ash-gray)', lineHeight: '1.8' }}>
              From websites to custom apps to video production and social media, here's how I can help your business.
            </p>
          </div>
        </section>
  
        {/* Main Services */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-16">
              
              {/* Website Development */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '32px' }}>🌐</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 placeholder-text">
                    Website Development
                  </h2>
                  <div 
                    className="h-1 w-16 rounded-full mb-6"
                    style={{ backgroundColor: 'var(--ember-orange)' }}
                  ></div>
                  <p className="text-lg mb-6" style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                    A professional website that works on phones, tablets, and computers. Fast, clean, and easy for your customers to use.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold placeholder-text">What's included:</h3>
                  <ul className="space-y-3" style={{ color: 'var(--ash-gray)' }}>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Custom design that fits your business</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Works perfectly on mobile devices</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Contact forms and email integration</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Basic SEO setup so people can find you</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Easy way to update content when needed</span>
                    </li>
                  </ul>
                  <p className="text-sm pt-4" style={{ color: 'var(--ash-gray)' }}>
                    <strong>Good for:</strong> Local businesses, service providers, restaurants, contractors, retail stores
                  </p>
                </div>
              </div>
  
              <div className="h-px" style={{ backgroundColor: 'rgba(232, 105, 76, 0.2)' }}></div>
  
              {/* E-Commerce */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '32px' }}>🛒</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 placeholder-text">
                    Online Stores
                  </h2>
                  <div 
                    className="h-1 w-16 rounded-full mb-6"
                    style={{ backgroundColor: 'var(--ember-orange)' }}
                  ></div>
                  <p className="text-lg mb-6" style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                    Sell your products online with a store that handles payments, inventory, and shipping.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold placeholder-text">What's included:</h3>
                  <ul className="space-y-3" style={{ color: 'var(--ash-gray)' }}>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Product catalog with photos and descriptions</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Shopping cart and secure checkout</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Payment processing setup</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Inventory management</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Shipping options and calculations</span>
                    </li>
                  </ul>
                  <p className="text-sm pt-4" style={{ color: 'var(--ash-gray)' }}>
                    <strong>Good for:</strong> Retail stores, crafters, product-based businesses
                  </p>
                </div>
              </div>
  
              <div className="h-px" style={{ backgroundColor: 'rgba(232, 105, 76, 0.2)' }}></div>
  
              {/* Custom Applications */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '32px' }}>⚙️</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 placeholder-text">
                    Custom Applications
                  </h2>
                  <div 
                    className="h-1 w-16 rounded-full mb-6"
                    style={{ backgroundColor: 'var(--ember-orange)' }}
                  ></div>
                  <p className="text-lg mb-6" style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                    Need something specific for how your business works? I can build custom tools and systems.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold placeholder-text">Examples:</h3>
                  <ul className="space-y-3" style={{ color: 'var(--ash-gray)' }}>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Booking and scheduling systems</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Customer portals and dashboards</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Inventory or project management tools</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Custom forms and data collection</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Integration with other software you use</span>
                    </li>
                  </ul>
                  <p className="text-sm pt-4" style={{ color: 'var(--ash-gray)' }}>
                    <strong>Good for:</strong> Businesses with specific workflows that need custom solutions
                  </p>
                </div>
              </div>
  
              <div className="h-px" style={{ backgroundColor: 'rgba(232, 105, 76, 0.2)' }}></div>
  
              {/* Video Production */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '32px' }}>🎥</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 placeholder-text">
                    Video Production
                  </h2>
                  <div 
                    className="h-1 w-16 rounded-full mb-6"
                    style={{ backgroundColor: 'var(--ember-orange)' }}
                  ></div>
                  <p className="text-lg mb-6" style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                    Professional video content that makes your business look good online and on social media.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold placeholder-text">What I can do:</h3>
                  <ul className="space-y-3" style={{ color: 'var(--ash-gray)' }}>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Promotional videos for your business</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Social media content (Instagram, Facebook, etc.)</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Event coverage and highlights</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Product demos and walkthroughs</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Video editing and post-production</span>
                    </li>
                  </ul>
                  <p className="text-sm pt-4" style={{ color: 'var(--ash-gray)' }}>
                    <strong>Good for:</strong> Any business wanting to look more professional on social media or their website
                  </p>
                </div>
              </div>
  
              <div className="h-px" style={{ backgroundColor: 'rgba(232, 105, 76, 0.2)' }}></div>
  
              {/* Social Media Management */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '32px' }}>📱</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 placeholder-text">
                    Social Media Management
                  </h2>
                  <div 
                    className="h-1 w-16 rounded-full mb-6"
                    style={{ backgroundColor: 'var(--ember-orange)' }}
                  ></div>
                  <p className="text-lg mb-6" style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                    Keep your social media active and professional without spending all your time on it.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold placeholder-text">What I can do:</h3>
                  <ul className="space-y-3" style={{ color: 'var(--ash-gray)' }}>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Regular posting on Facebook, Instagram, etc.</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Planning content calendars</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Responding to messages and comments</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Keeping your presence consistent</span>
                    </li>
                  </ul>
                  <p className="text-sm pt-4" style={{ color: 'var(--ash-gray)' }}>
                    <strong>Good for:</strong> Businesses that want to stay active on social media but don't have the time
                  </p>
                </div>
              </div>
  
              <div className="h-px" style={{ backgroundColor: 'rgba(232, 105, 76, 0.2)' }}></div>
  
              {/* Ongoing Support */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '32px' }}>🛠️</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 placeholder-text">
                    Maintenance & Support
                  </h2>
                  <div 
                    className="h-1 w-16 rounded-full mb-6"
                    style={{ backgroundColor: 'var(--ember-orange)' }}
                  ></div>
                  <p className="text-lg mb-6" style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                    Keep your website running smoothly and up-to-date without having to worry about the technical stuff.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold placeholder-text">What's included:</h3>
                  <ul className="space-y-3" style={{ color: 'var(--ash-gray)' }}>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Regular updates and security patches</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Content updates when you need them</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Fixing issues if something breaks</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Help with questions or changes</span>
                    </li>
                    <li className="flex gap-3">
                      <span style={{ color: 'var(--ember-orange)' }}>•</span>
                      <span>Making sure everything stays running</span>
                    </li>
                  </ul>
                  <p className="text-sm pt-4" style={{ color: 'var(--ash-gray)' }}>
                    <strong>Good for:</strong> Anyone who wants their tech handled without having to think about it
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
                Not Sure What You Need?
              </h2>
              <div 
                className="h-1 w-24 rounded-full mx-auto mb-8"
                style={{ backgroundColor: 'var(--ember-orange)' }}
              ></div>
              <p className="text-xl mb-12" style={{ color: 'var(--ash-gray)', lineHeight: '1.8' }}>
                Let's talk about what you're trying to do. I'll help you figure out what makes sense for your business and your budget.
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