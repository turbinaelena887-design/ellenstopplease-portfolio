import Link from 'next/link';
import type { Project } from '@/data/projects';
import { surrealFilms } from '@/data/surreal-films';
import { surrealCaseStudy as content } from '@/data/surreal-case-study';
import { Chapter, Paragraphs } from './flowery-case-study';
import { SurrealFilmPlayer } from './surreal-film-player';
import { Reveal } from './reveal';
import { Arrow } from './arrow';

export function SurrealProject({ project, next }: { project: Project; next: Project }) {
  return <main id="main" className="project-page surreal-project">
    <Reveal><Link href="/#work" className="eyebrow back-link">← Back to Projects</Link><p className="eyebrow surreal-classification">{content.classification}</p><div className="project-heading"><h1>{project.title}</h1></div><p className="flowery-subtitle">{content.subtitle}</p></Reveal>
    <div className="surreal-film-row">{surrealFilms.map((film, index) => <section key={film.id} aria-labelledby={`${film.id}-title`}>
      <Reveal><p className="eyebrow">EXPERIMENT {String(index + 1).padStart(2, '0')}</p><h2 id={`${film.id}-title`} className="surreal-film-title">{film.title}</h2><p className="surreal-film-description">{film.description}</p></Reveal>
      <SurrealFilmPlayer src={film.src} title={`${project.title} — ${film.title}`} aspectRatio={film.aspectRatio} />
    </section>)}</div>
    <section className="case-details" aria-label="Project details"><Reveal><dl>{content.details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></Reveal></section>
    <Chapter number="01" title="The Exploration"><p className="case-concept-highlight">{content.exploration[0]}</p><Paragraphs items={content.exploration.slice(1)} /></Chapter>
    <Chapter number="02" title="The Creative Concept"><p className="case-concept-highlight">{content.concept[0]}</p><Paragraphs items={content.concept.slice(1)} /></Chapter>

    <Chapter number="03" title="My Role"><p className="case-role-heading">{content.roleHeading}</p><Paragraphs items={content.role} /><ul className="case-responsibilities">{content.responsibilities.map(item => <li key={item}>{item}</li>)}</ul><blockquote>{content.roleStatement}</blockquote></Chapter>
    <Chapter number="04" title="The Creative Process"><Paragraphs items={content.process} /></Chapter>
    <Chapter number="05" title="Tools & Technology"><dl className="case-tools">{content.tools.map(([tool, purpose]) => <div key={tool}><dt>{tool}</dt><dd>{purpose}</dd></div>)}</dl></Chapter>
    <Chapter number="06" title="The Outcome"><Paragraphs items={content.outcome.slice(0, -1)} /><p className="case-result-statement">{content.outcome.at(-1)}</p></Chapter>
    <Link href={`/projects/${next.slug}`} className="next-project"><span className="eyebrow">NEXT PROJECT</span><span>{next.title} <Arrow /></span></Link>
  </main>;
}
