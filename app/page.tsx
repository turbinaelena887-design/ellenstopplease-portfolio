import { LocalizedAnchor } from '@/components/localized-media';
import { Text } from '@/components/language';
import { contact } from '@/data/contact';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Arrow } from '@/components/arrow';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/project-card';
import { Reveal } from '@/components/reveal';
export default function Home() {
  return <main id="main"><section className="hero" aria-labelledby="hero-title"><Reveal><div className="eyebrow hero-eyebrow"><span className="status-dot" /> <Text>INDEPENDENT AI CREATIVE DIRECTOR</Text></div></Reveal><h1 id="hero-title"><Reveal delay={0.08}><Text>VISUAL STORIES.</Text></Reveal><Reveal delay={0.18}><span className="muted"><Text>BEYOND</Text></span> <Text>REALITY</Text><span className="period"><Text>.</Text></span></Reveal></h1><Reveal delay={0.3} className="hero-bottom"><p><Text>AI CREATIVE DIRECTION / FASHION / FILM</Text></p><span className="hero-note"><Text>New perspectives.</Text><br /><Text>Impossible possibilities.</Text></span><a href="#work" aria-label="Scroll to selected work" className="scroll-arrow"><Text>↓</Text></a></Reveal></section>
    <section id="work" className="work" aria-labelledby="work-title"><div className="section-label"><h2 id="work-title"><Text>SELECTED WORK</Text></h2><span><Text>2026 — ONGOING</Text></span><span className="work-count"><Text>(</Text><Text>{String(projects.length).padStart(2, '0')}</Text><Text>)</Text></span></div><div className="project-grid">{projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}</div><p className="demo-note"><Text>SELECTED FILMS & CONCEPTS</Text></p></section>
    <Services />
    <About />
    <section id="contact" className="contact" aria-labelledby="contact-title"><Reveal><div className="eyebrow"><span className="status-dot" /> <Text>OPEN TO CREATIVE COLLABORATIONS</Text></div><h2 id="contact-title"><Text>LET’S MAKE</Text><br /><span className="muted"><Text>THE UNEXPECTED.</Text></span></h2><a href={`mailto:${contact.email}`} className="contact-link"><Text>START A CONVERSATION </Text><span aria-hidden><Arrow /></span></a><dl className="contact-details"><div><dt><Text>EMAIL</Text></dt><dd><a href={`mailto:${contact.email}`}><Text>{contact.email}</Text></a></dd></div><div><dt><Text>INSTAGRAM</Text></dt><dd><LocalizedAnchor href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="ellenstopplease on Instagram (opens in a new tab)"><Text>{contact.instagramHandle}</Text> <Arrow /></LocalizedAnchor></dd></div><div><dt><Text>BASED IN</Text></dt><dd><Text>{contact.location}</Text></dd></div></dl></Reveal></section>
  </main>;
}
