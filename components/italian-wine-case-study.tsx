import Link from 'next/link';
import type { Project } from '@/data/projects';
import { italianWineCaseStudy as content } from '@/data/italian-wine-case-study';
import { Chapter, Paragraphs } from './flowery-case-study';
import { ProjectFilm } from './project-film';
import { CaseStudyStill } from './case-study-still';
import { Reveal } from './reveal';
import { Arrow } from './arrow';
export function ItalianWineCaseStudy({ project, next }: { project: Project; next: Project }) {
  return <main id="main" className="project-page wine-case">
    <section aria-labelledby="wine-title"><Reveal><Link href="/#work" className="eyebrow back-link">← Back to Projects</Link></Reveal>
      <div className="project-presentation"><ProjectFilm project={project} /><div className="project-summary">
        <Reveal><div className="flowery-hero-heading"><div><p className="eyebrow">{content.classification}</p><h1 id="wine-title">LA DOLCE VITA</h1><p className="flowery-subtitle">{content.subtitle}</p></div></div><p className="project-intro">{content.description}</p></Reveal>
        <section className="case-details" aria-label="Project details"><Reveal><dl>{content.details.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></Reveal></section>
      </div></div>
    </section>
    <Chapter number="01" title="The Brief"><Paragraphs items={content.brief} /></Chapter>
    <Chapter number="02" title="The Concept"><p className="case-concept-highlight">{content.concept[0]}</p><Paragraphs items={content.concept.slice(1)} /></Chapter>
    <Chapter number="03" title="My Role"><p className="case-role-heading">{content.roleHeading}</p><Paragraphs items={content.role} /><ul className="case-responsibilities">{content.responsibilities.map(item=><li key={item}>{item}</li>)}</ul><blockquote>{content.roleStatement}</blockquote></Chapter>
    <section className="case-process" aria-labelledby="chapter-04"><Chapter number="04" title="The Process"><Paragraphs items={content.process} /></Chapter><div className="case-process-gallery">{Object.entries(content.gallery).map(([key, still]) => <CaseStudyStill key={key} still={still} />)}</div></section>
    <Chapter number="05" title="Tools & Technology"><dl className="case-tools">{content.tools.map(([tool,purpose])=><div key={tool}><dt>{tool}</dt><dd>{purpose}</dd></div>)}</dl></Chapter>
    <Chapter number="06" title="The Result"><Paragraphs items={content.result} /><p className="case-result-statement">{content.resultStatement}</p></Chapter>
    <Link href={`/projects/${next.slug}`} className="next-project"><span className="eyebrow">NEXT PROJECT</span><span>{next.title} <Arrow /></span></Link>
  </main>;
}
