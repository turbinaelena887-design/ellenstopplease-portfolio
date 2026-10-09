import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Arrow } from '@/components/arrow';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/project-card';
import { Reveal } from '@/components/reveal';
export default function Home() {
  return <main id="main"><section className="hero" aria-labelledby="hero-title"><Reveal><div className="eyebrow hero-eyebrow"><span className="status-dot" /> INDEPENDENT AI CREATIVE DIRECTOR</div></Reveal><h1 id="hero-title"><Reveal delay={0.08}>VISUAL STORIES.</Reveal><Reveal delay={0.18}><span className="muted">BEYOND</span> REALITY<span className="period">.</span></Reveal></h1><Reveal delay={0.3} className="hero-bottom"><p>AI CREATIVE DIRECTION / FASHION / FILM</p><span className="hero-note">New perspectives.<br />Impossible possibilities.</span><a href="#work" aria-label="Scroll to selected work" className="scroll-arrow">↓</a></Reveal></section>
    <section id="work" className="work" aria-labelledby="work-title"><div className="section-label"><h2 id="work-title">SELECTED WORK</h2><span>2026 — ONGOING</span><span className="work-count">({String(projects.length).padStart(2, '0')})</span></div><div className="project-grid">{projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}</div><p className="demo-note">CONCEPT SHOWCASE — LOCAL PLACEHOLDER ARTWORK & MOTION</p></section>
    <Services />
    <About />
    <section id="contact" className="contact"><Reveal><div className="eyebrow"><span className="status-dot" /> OPEN TO CREATIVE COLLABORATIONS</div><h2>LET’S MAKE<br /><span className="muted">THE UNEXPECTED.</span></h2><a href="mailto:hello@example.com" className="contact-link">START A CONVERSATION <span aria-hidden><Arrow /></span></a><p className="demo-note">CONTACT ADDRESS IS A PLACEHOLDER — REPLACE BEFORE PUBLISHING.</p></Reveal></section>
  </main>;
}
