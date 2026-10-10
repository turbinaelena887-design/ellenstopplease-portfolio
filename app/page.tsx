import { contact } from '@/data/contact';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Arrow } from '@/components/arrow';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/project-card';
import { Reveal } from '@/components/reveal';
export default function Home() {
  return <main id="main"><section className="hero" aria-labelledby="hero-title"><Reveal><div className="eyebrow hero-eyebrow"><span className="status-dot" /> INDEPENDENT AI CREATIVE DIRECTOR</div></Reveal><h1 id="hero-title"><Reveal delay={0.08}>VISUAL STORIES.</Reveal><Reveal delay={0.18}><span className="muted">BEYOND</span> REALITY<span className="period">.</span></Reveal></h1><Reveal delay={0.3} className="hero-bottom"><p>AI CREATIVE DIRECTION / FASHION / FILM</p><span className="hero-note">New perspectives.<br />Impossible possibilities.</span><a href="#work" aria-label="Scroll to selected work" className="scroll-arrow">↓</a></Reveal></section>
    <section id="work" className="work" aria-labelledby="work-title"><div className="section-label"><h2 id="work-title">SELECTED WORK</h2><span>2026 — ONGOING</span><span className="work-count">({String(projects.length).padStart(2, '0')})</span></div><div className="project-grid">{projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}</div><p className="demo-note">SELECTED FILMS & CONCEPTS</p></section>
    <Services />
    <About />
    <section id="contact" className="contact" aria-labelledby="contact-title"><Reveal><div className="eyebrow"><span className="status-dot" /> OPEN TO CREATIVE COLLABORATIONS</div><h2 id="contact-title">LET’S MAKE<br /><span className="muted">THE UNEXPECTED.</span></h2><a href={`mailto:${contact.email}`} className="contact-link">START A CONVERSATION <span aria-hidden><Arrow /></span></a><dl className="contact-details"><div><dt>EMAIL</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div><div><dt>INSTAGRAM</dt><dd><a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="ellenstopplease on Instagram (opens in a new tab)">{contact.instagramHandle} <Arrow /></a></dd></div><div><dt>BASED IN</dt><dd>{contact.location}</dd></div></dl></Reveal></section>
  </main>;
}
