import Link from 'next/link';
import Image from 'next/image';
import { floweryCaseStudy as content } from '@/data/flowery-case-study';
import type { Project } from '@/data/projects';
import { Arrow } from './arrow';
import { Reveal } from './reveal';
import { CaseStudyStill } from './case-study-still';

function Chapter({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <section className="case-chapter" aria-labelledby={`chapter-${number}`}><Reveal className="case-chapter-inner"><h2 id={`chapter-${number}`}><span>{number} /</span> {title}</h2><div className="case-chapter-copy">{children}</div></Reveal></section>;
}
function Paragraphs({ items }: { items: string[] }) { return items.map(p => <p key={p}>{p}</p>); }

export function FloweryCaseStudy({ project, next }: { project: Project; next: Project }) {
  return <main id="main" className="project-page flowery-case">
    <section className="flowery-hero" aria-labelledby="flowery-title">
      <Reveal><Link href="/#work" className="eyebrow back-link">← Back to Projects</Link>
        <div className="flowery-hero-heading"><div><p className="eyebrow">{content.classification}</p><h1 id="flowery-title">FLOWERY</h1><p className="flowery-subtitle">{content.subtitle}</p></div><span className="eyebrow flowery-hero-note">AN INDEPENDENT SPEC FILM<br />CONCEPT TO FINAL FRAME</span></div>
      </Reveal>
      <div className="flowery-film-frame">
        {project.fullVideo ? <video className="full-film" width={1080} height={1920} controls autoPlay muted playsInline preload="metadata" poster={project.cover} aria-label="FLOWERY — A Cinematic Floral Story"><source src={project.fullVideo} type="video/mp4" />Your browser does not support video.</video> : <Image src={project.cover} alt="FLOWERY project cover" width={928} height={1232} sizes="100vw" priority />}
      </div>
    </section>
    <section className="case-details" aria-label="Project details"><Reveal><dl>{content.details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></Reveal></section>
    <Chapter number="01" title="The Brief"><Paragraphs items={content.brief} /></Chapter>
    <Chapter number="02" title="The Concept"><Paragraphs items={content.concept} /></Chapter>
    <CaseStudyStill still={content.gallery.floweryStill01} />
    <Chapter number="03" title="My Role"><p className="case-role-heading">{content.roleHeading}</p><Paragraphs items={content.role} /><blockquote>{content.roleStatement}</blockquote></Chapter>
    <div className="case-still-pair"><CaseStudyStill still={content.gallery.floweryStill02} /><CaseStudyStill still={content.gallery.floweryStill03} /></div>
    <Chapter number="04" title="The Process"><Paragraphs items={content.process} /></Chapter>
    <CaseStudyStill still={content.gallery.floweryStill04} />
    <Chapter number="05" title="Tools"><dl className="case-tools">{content.tools.map(([tool, purpose]) => <div key={tool}><dt>{tool}</dt><dd>{purpose}</dd></div>)}</dl></Chapter>
    <CaseStudyStill still={content.gallery.floweryStill05} />
    <Chapter number="06" title="The Result"><p>{content.result}</p><p className="case-result-statement">{content.resultStatement}</p></Chapter>
    <Link href={`/projects/${next.slug}`} className="next-project"><span className="eyebrow">NEXT PROJECT</span><span>{next.title} <Arrow /></span></Link>
  </main>;
}
