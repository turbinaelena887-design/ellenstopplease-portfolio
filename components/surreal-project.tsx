import { LocalizedSection } from './localized-media';
import { Text } from '@/components/language';
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
    <Reveal><Link href="/#work" className="eyebrow back-link"><Text>← Back to Projects</Text></Link><p className="eyebrow surreal-classification"><Text>{content.classification}</Text></p><div className="project-heading"><h1><Text>{project.title}</Text></h1></div><p className="flowery-subtitle"><Text>{content.subtitle}</Text></p></Reveal>
    <div className="surreal-film-row">{surrealFilms.map((film, index) => <section key={film.id} aria-labelledby={`${film.id}-title`}>
      <Reveal><p className="eyebrow"><Text>EXPERIMENT </Text><Text>{String(index + 1).padStart(2, '0')}</Text></p><h2 id={`${film.id}-title`} className="surreal-film-title"><Text>{film.title}</Text></h2><p className="surreal-film-description"><Text>{film.description}</Text></p></Reveal>
      <SurrealFilmPlayer src={film.src} title={`${project.title} — ${film.title}`} aspectRatio={film.aspectRatio} />
    </section>)}</div>
    <LocalizedSection className="case-details" aria-label="Project details"><Reveal><dl>{content.details.map(([label, value]) => <div key={label}><dt><Text>{label}</Text></dt><dd><Text>{value}</Text></dd></div>)}</dl></Reveal></LocalizedSection>
    <Chapter number="01" title="The Exploration"><p className="case-concept-highlight"><Text>{content.exploration[0]}</Text></p><Paragraphs items={content.exploration.slice(1)} /></Chapter>
    <Chapter number="02" title="The Creative Concept"><p className="case-concept-highlight"><Text>{content.concept[0]}</Text></p><Paragraphs items={content.concept.slice(1)} /></Chapter>

    <Chapter number="03" title="My Role"><p className="case-role-heading"><Text>{content.roleHeading}</Text></p><Paragraphs items={content.role} /><ul className="case-responsibilities">{content.responsibilities.map(item => <li key={item}><Text>{item}</Text></li>)}</ul><blockquote><Text>{content.roleStatement}</Text></blockquote></Chapter>
    <Chapter number="04" title="The Creative Process"><Paragraphs items={content.process} /></Chapter>
    <Chapter number="05" title="Tools & Technology"><dl className="case-tools">{content.tools.map(([tool, purpose]) => <div key={tool}><dt><Text>{tool}</Text></dt><dd><Text>{purpose}</Text></dd></div>)}</dl></Chapter>
    <Chapter number="06" title="The Outcome"><Paragraphs items={content.outcome.slice(0, -1)} /><p className="case-result-statement"><Text>{content.outcome.at(-1)}</Text></p></Chapter>
    <Link href={`/projects/${next.slug}`} className="next-project"><span className="eyebrow"><Text>NEXT PROJECT</Text></span><span><Text>{next.title}</Text> <Arrow /></span></Link>
  </main>;
}
