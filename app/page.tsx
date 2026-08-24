'use client';

import { useEffect, useState } from 'react';

const services = [
  { icon: '▤', title: 'Venetian Blinds', text: 'A crisp, adjustable finish that gives you precise control over daylight and privacy.' },
  { icon: '↕', title: 'Vertical Blinds', text: 'An elegant practical choice for wide windows, sliding doors and commercial spaces.' },
  { icon: '◒', title: 'Roller Blinds', text: 'A clean contemporary solution with simple operation and a beautifully minimal profile.' },
];

const benefits = [
  { icon: '⌖', title: 'Accurate Measuring', text: 'Every project begins with careful measurements taken for a confident, tailored fit.' },
  { icon: '◆', title: 'Professional Fitting', text: 'Tracks, brackets and controls are installed neatly and tested before we leave.' },
  { icon: '✓', title: 'Personal Guidance', text: 'We help you compare styles, colours and privacy levels for the room you are finishing.' },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('visible', entry.isIntersecting)), { threshold: .14 });
    elements.forEach(el => observer.observe(el));
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--page-scroll', `${window.scrollY}px`);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  return <main id="top">
    <header className="topbar">
      <a className="logo" href="#top" aria-label="G Venetian Blinds home"><span className="logo-disc">G</span><span>G Venetian <small>Blinds & Shade</small></span></a>
      <nav aria-label="Main navigation"><a href="#services">Our blinds</a><a href="#about">About</a><a href="#process">How it works</a><a href="#work">Our work</a><a href="#contact">Contact</a></nav>
      <a className="nav-quote" href="https://wa.me/263772599505?text=Hello%20G%20Venetian%20Blinds%2C%20I%27d%20like%20a%20quote.">Request a quote</a>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><i /><i /><i /></button>
      <div className={`mobile-nav ${open ? 'open' : ''}`}>{['Our blinds','About','How it works','Our work','Contact'].map((label,i)=><a key={label} href={`#${['services','about','process','work','contact'][i]}`} onClick={()=>setOpen(false)}>{label}</a>)}</div>
    </header>

    <section className="main-hero">
      <img src="/images/project-03.jpeg" alt="Made-to-measure Venetian blinds in a Harare home" />
      <div className="hero-shade" />
      <div className="liquid-field" aria-hidden="true"><i /><i /><i /><span /></div>
      <div className="hero-content"><p>Made to measure in Harare</p><h1 aria-label="Beautiful blinds. Better living."><span className="word-mask"><i>BEAUTIFUL</i></span><span className="word-mask second-word"><i>BLINDS.</i></span><span className="word-mask gold-word"><em>BETTER LIVING.</em></span></h1><span className="hero-description">Thoughtfully selected, accurately measured and professionally installed window finishes for homes, offices and commercial interiors.</span><div className="hero-actions"><a className="outline-btn" href="https://wa.me/263772599505?text=Hello%20G%20Venetian%20Blinds%2C%20please%20help%20me%20choose%20blinds%20for%20my%20space.">Talk to our team <b>→</b></a><a href="#guide" className="quiet-link">See what suits your room ↓</a></div></div>
      <div className="hero-note"><b>Light, privacy and style</b><span>— brought into balance.</span></div>
    </section>

    <section className="card-overlap" id="services" data-reveal>{services.map((item,i)=><article className="info-card" key={item.title}><div className="icon-ring"><span>{item.icon}</span></div><small>0{i+1}</small><h2>{item.title}</h2><p>{item.text}</p><a href="#contact">Discover <b>→</b></a></article>)}</section>

    <section className="intro-copy" id="about" data-reveal><span className="kicker">THE RIGHT BLIND CHANGES THE ROOM</span><h2>Designed around your<br />windows and your life.</h2><p>Blinds are more than a finishing touch. They influence how a room feels throughout the day—how much light enters, how private it becomes and how comfortably it can be used. G Venetian Blinds helps you make the right choice, then takes care of the measure and installation.</p></section>

    <section className="room-guide" id="guide" data-reveal>
      <div className="room-collage"><div className="frame-outline one" /><div className="frame-outline two" /><figure className="room-main"><img src="/images/project-08.jpeg" alt="Warm Venetian blinds controlling daylight" /><figcaption><small>01</small> Warm light / Venetian</figcaption></figure><figure className="room-small"><img src="/images/project-10.jpeg" alt="Grey roller blinds in a clean interior" /><figcaption><small>02</small> Quiet privacy / Roller</figcaption></figure><figure className="room-third"><img src="/images/project-12.jpeg" alt="Vertical blinds fitted to a curved room" /><figcaption><small>03</small> Tall spaces / Vertical</figcaption></figure><span className="orbit-label">LIGHT<br />CONTROL</span></div>
      <div className="guide-copy"><span className="kicker">CHOOSE BY HOW YOU WANT TO FEEL</span><h2>Start with the room,<br /><em>not the catalogue.</em></h2><p>Different spaces ask for different kinds of control. A bedroom may need calm privacy. A living room may benefit from softened daylight. An office often needs glare reduction without making the space feel closed.</p><div className="guide-list"><article><b>01</b><div><h3>Living spaces</h3><p>Shape daylight while keeping the room open and welcoming.</p></div></article><article><b>02</b><div><h3>Bedrooms</h3><p>Prioritise privacy, comfort and a softer atmosphere.</p></div></article><article><b>03</b><div><h3>Workspaces</h3><p>Reduce glare and create a clean, focused interior.</p></div></article></div></div>
    </section>

    <section className="split-cta" data-reveal><div className="split-copy"><span>START WITH A CONVERSATION</span><h2>REQUEST<br />A QUOTE</h2><p>Tell us about your windows and the kind of finish you have in mind. We will help you identify a practical next step for your space.</p><a className="outline-btn" href="tel:+263772599505">Call 077 259 9505 <b>→</b></a></div><div className="split-image"><img src="/images/project-02.jpeg" alt="Outdoor shade installation in Harare" /></div></section>

    <section className="benefit-wrap" id="process"><div className="benefit-row" data-reveal>{benefits.map((item,i)=><article className="info-card" key={item.title}><div className="icon-ring"><span>{item.icon}</span></div><small>0{i+4}</small><h2>{item.title}</h2><p>{item.text}</p><a href="#contact">Learn more <b>→</b></a></article>)}</div></section>

    <section className="control-strip" data-reveal><div><span className="kicker">MORE THAN A COLOUR CHOICE</span><h2>Choose your level<br />of light control.</h2></div><div className="control-options"><article><i className="swatch sheer" /><h3>Filtered</h3><p>Softens bright daylight while keeping the room luminous.</p></article><article><i className="swatch balanced" /><h3>Balanced</h3><p>Flexible everyday privacy with adjustable light.</p></article><article><i className="swatch private" /><h3>Private</h3><p>A more enclosed finish for rooms that need calm and cover.</p></article></div></section>

    <section className="steps" data-reveal><div className="section-title"><span>OUR PROCESS</span><h2>Simple from first call<br />to final fit.</h2></div><div className="step-grid">{[['01','Consult','Tell us about the room, window sizes and the finish you prefer.'],['02','Measure','We confirm accurate dimensions and discuss practical options.'],['03','Select','Choose the blind type, colour and privacy level that suits the space.'],['04','Install','Your blinds are fitted, aligned and checked for smooth operation.']].map(s=><article key={s[0]}><b>{s[0]}</b><h3>{s[1]}</h3><p>{s[2]}</p></article>)}</div></section>

    <section className="project-section" id="work"><div className="section-title light" data-reveal><span>RECENT INSTALLATIONS</span><h2>Made for real spaces.</h2><p>A selection of window and shade solutions completed for different rooms and requirements.</p></div><div className="project-grid" data-reveal>{[['/images/project-04.jpeg','Venetian blinds','Controlled daylight'],['/images/project-10.jpeg','Roller blinds','Clean and minimal'],['/images/project-12.jpeg','Vertical blinds','Made for tall windows'],['/images/project-02.jpeg','Outdoor shade','Comfort beyond the window'],['/images/project-14.jpeg','Venetian blinds','A precise fitted finish'],['/images/project-06.jpeg','Vertical blinds','Colour and privacy']].map((p,i)=><figure key={p[0]} className={i===0?'wide':''}><img src={p[0]} alt={`${p[1]} installation`} /><figcaption><span>{p[1]}</span><b>{p[2]}</b></figcaption></figure>)}</div></section>

    <section className="contact" id="contact" data-reveal><div><span>LET’S FINISH YOUR WINDOWS</span><h2>Ready for a cleaner,<br />more comfortable space?</h2><a className="solid-btn" href="https://wa.me/263772599505?text=Hello%20G%20Venetian%20Blinds%2C%20I%27d%20like%20a%20quote.">Request your quote <b>→</b></a></div><aside><p><small>VISIT</small>49 B Selous Avenue<br />Harare, Zimbabwe</p><p><small>CALL OR WHATSAPP</small><a href="tel:+263772599505">077 259 9505</a><br /><a href="tel:+263719599505">071 959 9505</a></p><p><small>EMAIL</small><a href="mailto:Gvenetianblinds@gmail.com">Gvenetianblinds@gmail.com</a></p></aside></section>
    <footer><a className="logo" href="#top"><span className="logo-disc">G</span><span>G Venetian <small>Blinds & Shade</small></span></a><p>Made to measure. Professionally installed.</p><p>© 2026 G Venetian Blinds</p></footer>
    <a className="wa" href="https://wa.me/263772599505" aria-label="Chat on WhatsApp">WA</a>
  </main>;
}
