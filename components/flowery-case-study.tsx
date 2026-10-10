import Link from 'next/link';
import { ProjectFilm } from './project-film';
import { floweryCaseStudy as content } from '@/data/flowery-case-study';
import type { Project } from '@/data/projects';
import { Arrow } from './arrow';
import { Reveal } from './reveal';
import { CaseStudyStill } from './case-study-still';

export function Chapter({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <section className="case-chapter" aria-labelledby={`chapter-${number}`}><Reveal className="case-chapter-inner"><h2 id={`chapter-${number}`}><span>{number} /</span> {title}</h2><div className="case-chapter-copy">{children}</div></Reveal></section>;
}
export function Paragraphs({ items }: { items: string[] }) { return items.map(p => <p key={p}>{p}</p>); }

export function FloweryCaseStudy({ project, next }: { project: Project; next: Project }) {
  return <main id="main" className="project-page flowery-case">
    <section className="flowery-hero" aria-labelledby="flowery-title">
      <Reveal><Link href="/#work" className="eyebrow back-link">← Back to Projects</Link></Reveal>
      <div className="project-presentation">
        <ProjectFilm project={project} />
        <div className="project-summary">
          <Reveal><div className="flowery-hero-heading"><div><p className="eyebrow">{content.classification}</p><h1 id="flowery-title">FLOWERY</h1><p className="flowery-subtitle">{content.subtitle}</p></div></div><p className="project-intro">{content.description}</p></Reveal>
          <section className="case-details" aria-label="Project details"><Reveal><dl>{content.details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></Reveal></section>
        </div>
      </div>
    </section>
    <Chapter number="01" title="The Brief"><Paragraphs items={content.brief} /></Chapter>
    <Chapter number="02" title="The Concept"><Paragraphs items={content.concept} /></Chapter>
    <Chapter number="03" title="My Role"><p className="case-role-heading">{content.roleHeading}</p><Paragraphs items={content.role} /><blockquote>{content.roleStatement}</blockquote></Chapter>
    <section className="case-process" aria-labelledby="chapter-04"><Chapter number="04" title="The Process"><Paragraphs items={content.process} /></Chapter><div className="case-process-gallery">{Object.entries(content.gallery).map(([key, still]) => <CaseStudyStill key={key} still={still} />)}</div></section>
    <Chapter number="05" title="Tools"><dl className="case-tools">{content.tools.map(([tool, purpose]) => <div key={tool}><dt>{tool}</dt><dd>{purpose}</dd></div>)}</dl></Chapter>
    <Chapter number="06" title="The Result"><p>{content.result}</p><p className="case-result-statement">{content.resultStatement}</p></Chapter>
    <Link href={`/projects/${next.slug}`} className="next-project"><span className="eyebrow">NEXT PROJECT</span><span>{next.title} <Arrow /></span></Link>
  </main>;
}
