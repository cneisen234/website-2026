export default function About() {
    return (
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-3 fade-in-up placeholder-text">
                About Kindling Digital
              </h1>
              <div 
                className="h-1.5 w-32 rounded-full fade-in-up stagger-1"
                style={{ backgroundColor: 'var(--ember-orange)' }}
              ></div>
            </div>
            
            <p className="text-xl md:text-2xl fade-in-up stagger-2" style={{ color: 'var(--ash-gray)', lineHeight: '1.8' }}>
              Digital marketing for local businesses. I strive to help you reach more customers through websites, social media, video, and smart online strategies.
            </p>
          </div>
        </section>
  
        {/* My Story */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 placeholder-text">
                A Little About Me
              </h2>
              <div 
                className="h-1 w-24 rounded-full mb-12"
                style={{ backgroundColor: 'var(--ember-orange)' }}
              ></div>
              
              <div className="space-y-6 text-lg" style={{ color: 'var(--ash-gray)', lineHeight: '1.8' }}>
                <p>
                  Hi, My name is Chris and I'm behind Kindling Digital. I've spent over 5 years helping businesses build their online presence. I do everything from websites and apps to social media management and video content.
                </p>
                
                <p>
                  The tech side? I know it inside and out. But that's not really the point. The point is helping businesses grow and reaching more customers, looking professional online, and making digital marketing actually work without it being complicated or expensive.
                </p>
                
                <p>
                  I recently moved to rural Michigan and noticed something: a lot of great local businesses could really benefit from a solid online presence, but getting good help with digital marketing isn't always easy around here.
                </p>
                
                <p>
                  Maybe you've thought about ramping up your online marketing but weren't sure where to start. Maybe you tried something before and it didn't work out. Or maybe you just don't have time to handle all of this yourself.
                </p>
                
                <p>
                  That's where I come in. I help local businesses grow online by building websites that bring in customers, managing social media so you stay visible, creating video content that looks professional, and making it all work together as part of one strategy.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* What I Do Well */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 placeholder-text">
                What I'm Good At
              </h2>
              <div 
                className="h-1 w-24 rounded-full mb-12"
                style={{ backgroundColor: 'var(--ember-orange)' }}
              ></div>
  
              <div className="grid md:grid-cols-2 gap-8">
                {/* Marketing Strategy */}
                <div className="p-8 rounded-2xl border-2" style={{ borderColor: 'rgba(232, 105, 76, 0.2)', backgroundColor: 'white' }}>
                  <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '24px' }}>🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 placeholder-text">Digital Marketing Strategy</h3>
                  <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                    I help you figure out what makes sense for your business. I help you figure out what's worth investing in, what you actually need, and how to get real results from your online presence.
                  </p>
                </div>
  
                {/* Building What Works */}
                <div className="p-8 rounded-2xl border-2" style={{ borderColor: 'rgba(232, 105, 76, 0.2)', backgroundColor: 'white' }}>
                  <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '24px' }}>💻</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 placeholder-text">Building What You Need</h3>
                  <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                    I have the technical skills to actually build and execute the solutions. I've built and managed websites, e-commerce stores, custom systems. The tech is solid because I know what I'm doing.
                  </p>
                </div>
  
                {/* Content Creation */}
                <div className="p-8 rounded-2xl border-2" style={{ borderColor: 'rgba(232, 105, 76, 0.2)', backgroundColor: 'white' }}>
                  <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '24px' }}>🎥</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 placeholder-text">Creating Content</h3>
                  <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                    Professional video, timely posts that work, and written content. Whatever you need to keep your business looking good and staying visible online.
                  </p>
                </div>
  
                {/* Making It Simple */}
                <div className="p-8 rounded-2xl border-2" style={{ borderColor: 'rgba(232, 105, 76, 0.2)', backgroundColor: 'white' }}>
                  <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '24px' }}>🤝</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 placeholder-text">Explaining Clearly</h3>
                  <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                    I talk about marketing and business results, not confusing tech jargon. You'll always understand what we're doing and why it matters for your business.
                  </p>
                </div>
  
                {/* Managing It All */}
                <div className="p-8 rounded-2xl border-2" style={{ borderColor: 'rgba(232, 105, 76, 0.2)', backgroundColor: 'white' }}>
                  <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(232, 105, 76, 0.1)' }}>
                    <span style={{ color: 'var(--ember-orange)', fontSize: '24px' }}>📱</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 placeholder-text">Managing Your Online Presence</h3>
                  <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                    I can handle your ongoing social media, content updates, and digital marketing so you can focus on running your business instead of worrying about staying visible online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* How We'll Work */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 placeholder-text">
                How We'll Work Together
              </h2>
              <div 
                className="h-1 w-24 rounded-full mb-12"
                style={{ backgroundColor: 'var(--ember-orange)' }}
              ></div>
  
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: 'var(--ember-orange)' }}>
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 placeholder-text">Let's Talk About Your Goals</h3>
                    <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                      We'll sit down and talk about what you're trying to accomplish. More customers? Better visibility? Competing with bigger businesses? Let's figure out what success looks like for you.
                    </p>
                  </div>
                </div>
  
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: 'var(--ember-orange)' }}>
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 placeholder-text">I'll Create a Plan</h3>
                    <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                      Based on what you need and your budget, I'll recommend what makes sense. I'll help you decide whether that's a new website, ramping up social media, adding video content, or a combination.
                    </p>
                  </div>
                </div>
  
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: 'var(--ember-orange)' }}>
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 placeholder-text">I'll Handle the Execution</h3>
                    <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                      I'll build what needs building, create the content, manage the posting, and handle all the technical details. You approve the direction, I take care of making it happen.
                    </p>
                  </div>
                </div>
  
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: 'var(--ember-orange)' }}>
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 placeholder-text">We'll Keep It Going</h3>
                    <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                      Digital marketing isn't a one-time thing. I'll keep working with you to improve, adjust, and make sure you're getting results as your business grows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Why I Do This */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 placeholder-text">
                Why I Do This
              </h2>
              <div 
                className="h-1 w-24 rounded-full mx-auto mb-8"
                style={{ backgroundColor: 'var(--ember-orange)' }}
              ></div>
              <p className="text-xl mb-12" style={{ color: 'var(--ash-gray)', lineHeight: '1.8' }}>
                I believe local businesses should be able to compete online without needing a huge budget or a marketing degree. Good digital marketing shouldn't be complicated or out of reach. I'm here to make it accessible, effective, and actually worth the investment.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg"
                style={{ 
                  backgroundColor: 'var(--ember-orange)', 
                  color: 'white',
                }}
              >
                Let's Talk
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }