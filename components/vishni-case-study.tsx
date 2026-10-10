import { BrandSlogan } from './brand-slogan';
import { LocalizedSection } from './localized-media';
import { Text } from '@/components/language';
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
      <Reveal><Link href="/#work" className="eyebrow back-link"><Text>← Back to Projects</Text></Link></Reveal>
      <div className="project-presentation"><ProjectFilm project={project} /><div className="project-summary">
        <Reveal><p className="eyebrow"><Text>{content.classification}</Text></p><h1 id="vishni-title"><Text>VISHNI</Text></h1><p className="flowery-subtitle"><Text>{content.subtitle}</Text></p><p className="project-intro"><Text>{content.description}</Text></p></Reveal>
        <LocalizedSection className="case-details" aria-label="Project details"><Reveal><dl>{content.details.map(([label, value]) => <div key={label}><dt><Text>{label}</Text></dt><dd><Text>{value}</Text></dd></div>)}</dl></Reveal></LocalizedSection>
      </div></div>
    </section>
    <Chapter number="01" title="The Brief"><p><Text>{content.brief[0]}</Text></p><p className="vishni-slogan"><BrandSlogan slogan={content.brief[1]} /></p><Paragraphs items={content.brief.slice(2)} /></Chapter>
    <Chapter number="02" title="The Concept"><p className="case-concept-highlight"><Text>{content.concept[0]}</Text></p><Paragraphs items={content.concept.slice(1)} /></Chapter>
    <Chapter number="03" title="My Role"><p className="case-role-heading"><Text>{content.roleHeading}</Text></p><Paragraphs items={content.role} /><ul className="case-responsibilities">{content.responsibilities.map(item => <li key={item}><Text>{item}</Text></li>)}</ul><blockquote><Text>{content.roleStatement}</Text></blockquote></Chapter>
    <Chapter number="04" title="The Process"><Paragraphs items={content.process} /></Chapter>
    <Chapter number="05" title="Tools & Technology"><dl className="case-tools">{content.tools.map(([tool, purpose]) => <div key={tool}><dt><Text>{tool}</Text></dt><dd><Text>{purpose}</Text></dd></div>)}</dl></Chapter>
    <Chapter number="06" title="The Result">{content.result.map((paragraph, i) => <p key={paragraph}>{i === 2 ? <strong><Text>{paragraph}</Text></strong> : <Text>{paragraph}</Text>}</p>)}</Chapter>
    <section className="vishni-recognition" aria-labelledby="recognition-title"><Reveal><h2 id="recognition-title" className="eyebrow"><Text>{content.recognitionHeading}</Text></h2><p className="vishni-recognition-statement"><Text>{content.recognitionStatement}</Text></p><p><Text>{content.recognitionDescription}</Text></p></Reveal></section>
    <Link href={`/projects/${next.slug}`} className="next-project"><span className="eyebrow"><Text>NEXT PROJECT</Text></span><span><Text>{next.title}</Text> <Arrow /></span></Link>
  </main>;
}
