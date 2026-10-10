import { LocalizedSection } from './localized-media';
import { Text } from '@/components/language';
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
    <section aria-labelledby="wine-title"><Reveal><Link href="/#work" className="eyebrow back-link"><Text>← Back to Projects</Text></Link></Reveal>
      <div className="project-presentation"><ProjectFilm project={project} /><div className="project-summary">
        <Reveal><div className="flowery-hero-heading"><div><p className="eyebrow"><Text>{content.classification}</Text></p><h1 id="wine-title"><Text>LA DOLCE VITA</Text></h1><p className="flowery-subtitle"><Text>{content.subtitle}</Text></p></div></div><p className="project-intro"><Text>{content.description}</Text></p></Reveal>
        <LocalizedSection className="case-details" aria-label="Project details"><Reveal><dl>{content.details.map(([label,value])=><div key={label}><dt><Text>{label}</Text></dt><dd><Text>{value}</Text></dd></div>)}</dl></Reveal></LocalizedSection>
      </div></div>
    </section>
    <Chapter number="01" title="The Brief"><Paragraphs items={content.brief} /></Chapter>
    <Chapter number="02" title="The Concept"><p className="case-concept-highlight"><Text>{content.concept[0]}</Text></p><Paragraphs items={content.concept.slice(1)} /></Chapter>
    <Chapter number="03" title="My Role"><p className="case-role-heading"><Text>{content.roleHeading}</Text></p><Paragraphs items={content.role} /><ul className="case-responsibilities">{content.responsibilities.map(item=><li key={item}><Text>{item}</Text></li>)}</ul><blockquote><Text>{content.roleStatement}</Text></blockquote></Chapter>
    <section className="case-process" aria-labelledby="chapter-04"><Chapter number="04" title="The Process"><Paragraphs items={content.process} /></Chapter><div className="case-process-gallery">{Object.entries(content.gallery).map(([key, still]) => <CaseStudyStill key={key} still={still} />)}</div></section>
    <Chapter number="05" title="Tools & Technology"><dl className="case-tools">{content.tools.map(([tool,purpose])=><div key={tool}><dt><Text>{tool}</Text></dt><dd><Text>{purpose}</Text></dd></div>)}</dl></Chapter>
    <Chapter number="06" title="The Result"><Paragraphs items={content.result} /><p className="case-result-statement"><Text>{content.resultStatement}</Text></p></Chapter>
    <Link href={`/projects/${next.slug}`} className="next-project"><span className="eyebrow"><Text>NEXT PROJECT</Text></span><span><Text>{next.title}</Text> <Arrow /></span></Link>
  </main>;
}
