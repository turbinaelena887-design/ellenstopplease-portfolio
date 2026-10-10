import Link from 'next/link';
import type { Project } from '@/data/projects';
import { vishniCaseStudy as content } from '@/data/vishni-case-study';
import { Chapter, Paragraphs } from './flowery-case-study';
import { ProjectFilm } from './project-film';
import { Reveal } from './reveal';
import { Arrow } from './arrow';

export function VishniCaseStudy({ project, next }: { project: Project; next: Project }) {
  return <main id="main" className="project-page vishni-case">
    <section aria-labelledby="vishni-title">
      <Reveal><Link href="/#work" className="eyebrow back-link">← Back to Projects</Link></Reveal>
      <div className="project-presentation"><ProjectFilm project={project} /><div className="project-summary">
        <Reveal><p className="eyebrow">{content.classification}</p><h1 id="vishni-title">VISHNI</h1><p className="flowery-subtitle">{content.subtitle}</p><p className="project-intro">{content.description}</p></Reveal>
        <section className="case-details" aria-label="Project details"><Reveal><dl>{content.details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></Reveal></section>
      </div></div>
    </section>
    <Chapter number="01" title="The Brief"><p>{content.brief[0]}</p><p className="vishni-slogan"><strong><span lang="uk">{content.brief[1].split(' — ')[0]}</span> — {content.brief[1].split(' — ')[1]}</strong></p><Paragraphs items={content.brief.slice(2)} /></Chapter>
    <Chapter number="02" title="The Concept"><p className="case-concept-highlight">{content.concept[0]}</p><Paragraphs items={content.concept.slice(1)} /></Chapter>
    <Chapter number="03" title="My Role"><p className="case-role-heading">{content.roleHeading}</p><Paragraphs items={content.role} /><ul className="case-responsibilities">{content.responsibilities.map(item => <li key={item}>{item}</li>)}</ul><blockquote>{content.roleStatement}</blockquote></Chapter>
    <Chapter number="04" title="The Process"><Paragraphs items={content.process} /></Chapter>
    <Chapter number="05" title="Tools & Technology"><dl className="case-tools">{content.tools.map(([tool, purpose]) => <div key={tool}><dt>{tool}</dt><dd>{purpose}</dd></div>)}</dl></Chapter>
    <Chapter number="06" title="The Result">{content.result.map((paragraph, i) => <p key={paragraph}>{i === 2 ? <strong>{paragraph}</strong> : paragraph}</p>)}</Chapter>
    <section className="vishni-recognition" aria-labelledby="recognition-title"><Reveal><h2 id="recognition-title" className="eyebrow">{content.recognitionHeading}</h2><p className="vishni-recognition-statement">{content.recognitionStatement}</p><p>{content.recognitionDescription}</p></Reveal></section>
    <Link href={`/projects/${next.slug}`} className="next-project"><span className="eyebrow">NEXT PROJECT</span><span>{next.title} <Arrow /></span></Link>
  </main>;
}
