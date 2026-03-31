export default function BrylStudioFreelancer() {
  const handleGetQuote = () => {
    window.location.href = 'mailto:montesclarosbrylle@gmail.com?subject=Project%20Inquiry';
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ background: '#09090d', color: '#ededf5', fontFamily: "'Outfit', sans-serif", minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .service-card {
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-4px);
        }

        .btn-hover:hover {
          box-shadow: 0 8px 24px rgba(74, 222, 128, 0.15);
          transform: translateY(-2px);
        }

        .btn-hover:active {
          transform: translateY(0);
        }

        section {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }

        section:nth-of-type(1) { animation-delay: 0.1s; }
        section:nth-of-type(2) { animation-delay: 0.2s; }
        section:nth-of-type(3) { animation-delay: 0.3s; }
        section:nth-of-type(4) { animation-delay: 0.4s; }
        section:nth-of-type(5) { animation-delay: 0.5s; }
        section:nth-of-type(6) { animation-delay: 0.6s; }
        section:nth-of-type(7) { animation-delay: 0.7s; }
        section:nth-of-type(8) { animation-delay: 0.8s; }

        /* Mobile-first responsive design */
        @media (max-width: 768px) {
          .service-card:hover {
            transform: none;
          }

          .btn-hover:hover {
            box-shadow: none;
            transform: none;
          }

          section {
            animation-delay: 0s !important;
          }
        }
      `}</style>
      
      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, background: 'linear-gradient(180deg, rgba(9, 9, 13, 0.98) 0%, rgba(9, 9, 13, 0.95) 100%)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #4ade8015', zIndex: 100 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(0.8rem, 2vw, 1.2rem) clamp(1rem, 4vw, 2rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ fontFamily: "'DM Mono', monospace", fontSize: 'clamp(11px, 2.5vw, 13px)', fontWeight: 600, color: '#4ade80', letterSpacing: '0.1em', textDecoration: 'none' }}>BRYL STUDIO</a>
          <ul style={{ display: 'flex', gap: 'clamp(1rem, 4vw, 2.5rem)', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><a href="#services" style={{ fontSize: 'clamp(12px, 2vw, 13px)', color: '#a8a7bc', textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => { e.target.style.color = '#4ade80'; e.target.style.transform = 'translateY(-2px)'; }} onMouseOut={(e) => { e.target.style.color = '#a8a7bc'; e.target.style.transform = 'translateY(0)'; }} onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
            <li><a href="#about" style={{ fontSize: 'clamp(12px, 2vw, 13px)', color: '#a8a7bc', textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => { e.target.style.color = '#4ade80'; e.target.style.transform = 'translateY(-2px)'; }} onMouseOut={(e) => { e.target.style.color = '#a8a7bc'; e.target.style.transform = 'translateY(0)'; }} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#contact" style={{ fontSize: 'clamp(12px, 2vw, 13px)', color: '#a8a7bc', textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => { e.target.style.color = '#4ade80'; e.target.style.transform = 'translateY(-2px)'; }} onMouseOut={(e) => { e.target.style.color = '#a8a7bc'; e.target.style.transform = 'translateY(0)'; }} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: 'clamp(4rem, 12vw, 8rem) clamp(1rem, 4vw, 2rem) clamp(3rem, 10vw, 6rem)', textAlign: 'center', background: 'linear-gradient(135deg, #09090d 0%, #0f0f14 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="fade-in-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #4ade8012 0%, #4ade8008 100%)', border: '1px solid #4ade8025', padding: 'clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 16px)', borderRadius: '100px', fontFamily: "'DM Mono', monospace", fontSize: 'clamp(9px, 2vw, 11px)', color: '#4ade80', letterSpacing: '0.08em', marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 600 }}>
            ⭐ WIX SPECIALIST | 5+ YEARS | 1000+ SITES
          </div>
          <h1 className="fade-in-up" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.8rem, 7vw, 3.5rem)', lineHeight: 1.1, marginBottom: 'clamp(0.8rem, 2vw, 1.5rem)', fontWeight: 400, background: 'linear-gradient(135deg, #ededf5 0%, #a8a7bc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animationDelay: '0.1s' }}>
            Wix Sites That Rank & Convert
          </h1>
          <p className="fade-in-up" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', color: '#a8a7bc', marginBottom: 'clamp(0.5rem, 2vw, 1rem)', maxWidth: '700px', margin: '0 auto clamp(0.5rem, 2vw, 1rem)', animationDelay: '0.2s', lineHeight: 1.5 }}>
            5+ years specializing in Wix. I also build WordPress and Shopify sites when needed.
          </p>
          <div className="fade-in-up" style={{ display: 'flex', gap: 'clamp(0.5rem, 2vw, 1rem)', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', animationDelay: '0.4s' }}>
            <button className="btn-hover" style={{ padding: 'clamp(0.8rem, 3vw, 1.2rem) clamp(1.5rem, 4vw, 3.5rem)', background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)', color: '#09090d', border: 'none', borderRadius: '8px', fontSize: 'clamp(13px, 2.5vw, 15px)', fontWeight: 700, cursor: 'pointer', fontFamily: "'Outfit', sans-serif", transition: 'all 0.3s ease', boxShadow: '0 8px 24px rgba(74, 222, 128, 0.3)', letterSpacing: '0.5px', minHeight: '44px', minWidth: '44px', touchAction: 'manipulation' }} onMouseOver={(e) => e.target.style.boxShadow = '0 12px 36px rgba(74, 222, 128, 0.4)'} onMouseOut={(e) => e.target.style.boxShadow = '0 8px 24px rgba(74, 222, 128, 0.3)'} onClick={handleGetQuote}>Get Started Today</button>
            <button className="btn-hover" style={{ padding: 'clamp(0.8rem, 3vw, 0.9rem) clamp(1.2rem, 3vw, 1.8rem)', background: 'transparent', color: '#ededf5', border: '1.5px solid #4ade8040', borderRadius: '8px', fontSize: 'clamp(12px, 2vw, 13px)', fontWeight: 600, cursor: 'pointer', fontFamily: "'Outfit', sans-serif", transition: 'all 0.3s ease', boxShadow: 'none', minHeight: '44px', touchAction: 'manipulation' }} onMouseOver={(e) => { e.target.style.borderColor = '#4ade80'; e.target.style.color = '#4ade80'; }} onMouseOut={(e) => { e.target.style.borderColor = '#4ade8040'; e.target.style.color = '#ededf5'; }} onClick={() => scrollToSection('services')}>See Services</button>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section id="services" style={{ padding: 'clamp(4rem, 12vw, 7rem) clamp(1rem, 4vw, 2rem)', borderTop: '2px solid #4ade80', background: 'linear-gradient(180deg, #0f0f14 0%, #09090d 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', marginBottom: 'clamp(1rem, 3vw, 1.5rem)', textAlign: 'center', background: 'linear-gradient(135deg, #ededf5 0%, #a8a7bc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>What I Build</h2>
          <p style={{ textAlign: 'center', color: '#a8a7bc', marginBottom: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: '600px', margin: '0 auto clamp(2rem, 5vw, 3.5rem)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', lineHeight: 1.7 }}>
            I specialize in Wix. Also build WordPress and Shopify sites when clients need them.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 90vw, 280px), 1fr))', gap: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            {[
              { 
                title: 'Wix Websites', 
                badge: '⭐ SPECIALTY',
                desc: 'Build new sites or optimize existing ones. 5+ years, 1000+ sites. I know Wix inside out.'
              },
              { 
                title: 'WordPress Websites', 
                desc: 'Custom WordPress sites. Use when you need advanced features Wix can\'t provide.'
              },
              { 
                title: 'Shopify Stores', 
                desc: 'E-commerce setup. Payments, products, shipping configured. Ready to sell.'
              },
              { 
                title: 'Website SEO', 
                desc: 'Rank on Google. Works across all platforms - Wix, WordPress, Shopify.'
              }
            ].map((service, i) => (
              <div key={i} className="service-card" style={{ background: 'linear-gradient(135deg, #18181f 0%, #1a1a25 100%)', border: '1px solid #4ade8015', borderLeft: i === 0 ? '6px solid #4ade80' : '6px solid #4ade8030', padding: 'clamp(1.5rem, 4vw, 2.2rem)', borderRadius: '12px', transition: 'all 0.3s ease', position: 'relative', cursor: 'pointer', gridColumn: window.innerWidth >= 768 && i === 0 ? 'span 2' : 'span 1' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = '#4ade8040'; e.currentTarget.style.borderLeftColor = i === 0 ? '#4ade80' : '#4ade8050'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(74, 222, 128, 0.08)'; e.currentTarget.style.background = 'linear-gradient(135deg, #1e1e28 0%, #20202b 100%)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = '#4ade8015'; e.currentTarget.style.borderLeftColor = i === 0 ? '#4ade80' : '#4ade8030'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = 'linear-gradient(135deg, #18181f 0%, #1a1a25 100%)'; }}>
                {service.badge && (
                  <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', fontFamily: "'DM Mono', monospace", fontSize: 'clamp(0.65rem, 1.5vw, 0.7rem)', color: '#4ade80', background: 'linear-gradient(135deg, #4ade8020 0%, #4ade8010 100%)', padding: '0.4rem 0.9rem', borderRadius: '100px', fontWeight: 600, border: '1px solid #4ade8030' }}>
                    {service.badge}
                  </div>
                )}
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', marginBottom: '0.8rem', fontWeight: 400 }}>{service.title}</h3>
                <p style={{ color: '#a8a7bc', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', lineHeight: 1.6 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section style={{ padding: 'clamp(4rem, 12vw, 7rem) clamp(1rem, 4vw, 2rem)', background: 'linear-gradient(180deg, #09090d 0%, #0f0f14 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', marginBottom: 'clamp(2rem, 5vw, 3rem)', textAlign: 'center', background: 'linear-gradient(135deg, #ededf5 0%, #a8a7bc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Track Record</h2>
          <div style={{ background: 'linear-gradient(135deg, #18181f 0%, #1a1a25 100%)', border: '1px solid #4ade8015', padding: 'clamp(1.5rem, 4vw, 3rem)', borderRadius: '12px', boxShadow: '0 8px 24px rgba(74, 222, 128, 0.05)' }}>
            <p style={{ color: '#a8a7bc', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
              5+ years at a professional agency in Taguig, Philippines. Specialized in Wix. Contributed to <strong style={{ color: '#4ade80' }}>1000+ Wix sites</strong> across different industries.
            </p>
            <p style={{ color: '#a8a7bc', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
              Became the go-to Wix specialist on the team. Learned what works at scale: SEO strategy, conversion optimization, performance tuning, custom code. I know Wix inside out.
            </p>
            <p style={{ color: '#a8a7bc', lineHeight: 1.8, fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
              I also build WordPress and Shopify sites, but Wix is my specialty. Now taking freelance projects. Same expertise. Direct from me.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: 'clamp(4rem, 12vw, 7rem) clamp(1rem, 4vw, 2rem)', background: 'linear-gradient(180deg, #0f0f14 0%, #09090d 100%)', borderTop: '1px solid #4ade8015', borderBottom: '1px solid #4ade8015' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(150px, 90vw, 200px), 1fr))', gap: 'clamp(1rem, 3vw, 2rem)', textAlign: 'center' }}>
            <div style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', background: 'linear-gradient(135deg, #18181f 0%, #1a1a25 100%)', borderRadius: '12px', border: '1px solid #4ade8015' }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 400, marginBottom: '0.8rem' }}>5+</div>
              <div style={{ fontSize: 'clamp(0.8rem, 2vw, 0.95rem)', color: '#a8a7bc' }}>Years Wix Specialist</div>
            </div>
            <div style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', background: 'linear-gradient(135deg, #18181f 0%, #1a1a25 100%)', borderRadius: '12px', border: '1px solid #4ade8015', borderTop: '3px solid #4ade80' }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 400, marginBottom: '0.8rem' }}>1000+</div>
              <div style={{ fontSize: 'clamp(0.8rem, 2vw, 0.95rem)', color: '#4ade80', fontWeight: 600 }}>Wix Sites Built</div>
            </div>
            <div style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', background: 'linear-gradient(135deg, #18181f 0%, #1a1a25 100%)', borderRadius: '12px', border: '1px solid #4ade8015' }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 400, marginBottom: '0.8rem' }}>3</div>
              <div style={{ fontSize: 'clamp(0.8rem, 2vw, 0.95rem)', color: '#a8a7bc' }}>Platforms</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HIRE ME */}
      <section style={{ padding: 'clamp(4rem, 12vw, 7rem) clamp(1rem, 4vw, 2rem)', background: 'linear-gradient(180deg, #09090d 0%, #0f0f14 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', marginBottom: 'clamp(2rem, 5vw, 3.5rem)', textAlign: 'center', background: 'linear-gradient(135deg, #ededf5 0%, #a8a7bc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Why Clients Hire Me</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 90vw, 250px), 1fr))', gap: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            {[
              { title: 'Wix Specialist', desc: '5+ years mastering Wix. Most freelancers choose WordPress. I specialize in Wix because I\'ve seen what\'s possible when you truly know the platform.' },
              { title: 'Wix Sites That Rank', desc: 'Not just beautiful designs. Your site ranks on Google and converts visitors to customers.' },
              { title: 'Proven at Scale', desc: '1000+ Wix sites means I\'ve solved every problem. I know what works because I\'ve done it repeatedly.' },
              { title: 'Direct from Expert', desc: 'You get me—the person with 5 years of Wix expertise. Not a junior developer. Expert execution.' }
            ].map((item, i) => (
              <div key={i} style={{ background: 'linear-gradient(135deg, #18181f 0%, #1a1a25 100%)', padding: 'clamp(1.5rem, 4vw, 2rem)', borderRadius: '12px', borderLeft: '4px solid #4ade80', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(74, 222, 128, 0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', marginBottom: '0.8rem', color: '#ededf5', fontWeight: 400 }}>{item.title}</h3>
                <p style={{ color: '#a8a7bc', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: 'clamp(4rem, 12vw, 7rem) clamp(1rem, 4vw, 2rem)', borderTop: '1px solid #4ade8015', background: 'linear-gradient(180deg, #0f0f14 0%, #09090d 100%)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', marginBottom: '1.5rem', fontWeight: 400, background: 'linear-gradient(135deg, #ededf5 0%, #a8a7bc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>The Difference</h2>
          <p style={{ color: '#a8a7bc', marginBottom: '1.2rem', lineHeight: 1.8, fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
            I specialize in Wix. 5+ years. 1000+ sites. Most web developers know Wix casually. I know it expert-level.
          </p>
          <p style={{ color: '#a8a7bc', marginBottom: '1.2rem', lineHeight: 1.8, fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
            I've seen every challenge, every optimization opportunity, every ranking strategy. I know what works at scale because I've built at scale.
          </p>
          <p style={{ color: '#a8a7bc', lineHeight: 1.8, fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
            I also build WordPress and Shopify sites when clients need them. But Wix is my specialty. That's where you get the best results.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ padding: 'clamp(4rem, 12vw, 7rem) clamp(1rem, 4vw, 2rem)', textAlign: 'center', borderTop: '1px solid #4ade8015', background: 'linear-gradient(135deg, #09090d 0%, #0f0f14 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', marginBottom: '1rem', fontWeight: 400, background: 'linear-gradient(135deg, #ededf5 0%, #a8a7bc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Let's Build Your Wix Site</h2>
          <p style={{ color: '#a8a7bc', marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)', maxWidth: '500px', margin: '0 auto clamp(1.5rem, 4vw, 2.5rem)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', lineHeight: 1.7 }}>
            Tell me about your business. I'll recommend the right platform and create a plan to get you results.
          </p>
          <div style={{ display: 'flex', gap: 'clamp(0.5rem, 2vw, 1rem)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-hover" style={{ padding: 'clamp(0.8rem, 3vw, 1.2rem) clamp(1.5rem, 4vw, 3.5rem)', background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)', color: '#09090d', border: 'none', borderRadius: '8px', fontSize: 'clamp(13px, 2.5vw, 15px)', fontWeight: 700, cursor: 'pointer', fontFamily: "'Outfit', sans-serif", transition: 'all 0.3s ease', boxShadow: '0 8px 24px rgba(74, 222, 128, 0.3)', letterSpacing: '0.5px', minHeight: '44px', minWidth: '44px', touchAction: 'manipulation' }} onMouseOver={(e) => e.target.style.boxShadow = '0 12px 36px rgba(74, 222, 128, 0.4)'} onMouseOut={(e) => e.target.style.boxShadow = '0 8px 24px rgba(74, 222, 128, 0.3)'} onClick={handleGetQuote}>Get Started Today</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 4vw, 2rem)', borderTop: '1px solid #4ade8015', textAlign: 'center', color: '#a8a7bc', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', background: '#09090d', overflowWrap: 'break-word', wordWrap: 'break-word' }}>
        <p style={{ margin: 0, lineHeight: 1.6 }}>© 2026 Bryl Studio • Wix Specialist • montesclarosbrylle@gmail.com • <a href="http://www.linkedin.com/in/bryllemontesclaros" target="_blank" rel="noopener noreferrer" style={{ color: '#4ade80', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.target.style.color = '#22c55e'; }} onMouseOut={(e) => { e.target.style.color = '#4ade80'; }}>LinkedIn</a> • Taguig, Philippines (UTC+8)</p>
      </footer>
    </div>
  );
}