import { cookies } from 'next/headers';
import { translate } from '@/data/localization';
import { Text } from '@/components/language';
import { surrealCaseStudy } from '@/data/surreal-case-study';
import { SurrealProject } from '@/components/surreal-project';
import { VishniCaseStudy } from '@/components/vishni-case-study';
import { vishniCaseStudy } from '@/data/vishni-case-study';
import { ItalianWineCaseStudy } from '@/components/italian-wine-case-study';
import { italianWineCaseStudy } from '@/data/italian-wine-case-study';
import { permanentRedirect } from 'next/navigation';
import Image from 'next/image';
import { ProjectFilm } from '@/components/project-film';
import { FloweryCaseStudy } from '@/components/flowery-case-study';
import { floweryCaseStudy } from '@/data/flowery-case-study';
import { Arrow } from '@/components/arrow';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = projects.find(p => p.slug === slug);
  const locale = (await cookies()).get('portfolio-language')?.value === 'uk' ? 'uk' : 'en';
  const metadata = { title: p?.slug === 'surreal-visions' ? 'SURREAL — Beyond the Ordinary.' : p?.slug === 'vishni' ? 'VISHNI — Impossible Not to Look.' : p?.slug === 'la-dolce-vita' ? 'LA DOLCE VITA — A Cinematic Wine Story' : p?.slug === 'flowery' ? 'FLOWERY — A Cinematic Floral Story' : p?.title ?? 'Project not found', description: p?.slug === 'surreal-visions' ? surrealCaseStudy.description : p?.slug === 'vishni' ? vishniCaseStudy.description : p?.slug === 'la-dolce-vita' ? italianWineCaseStudy.description : p?.slug === 'flowery' ? floweryCaseStudy.description : p?.description, openGraph: p?.cover ? { images: [p.cover] } : undefined };
  return { ...metadata, title: translate(metadata.title, locale), description: metadata.description && translate(metadata.description, locale) };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; if (slug === 'rikky-hype') permanentRedirect('/projects/la-dolce-vita'); const index = projects.findIndex(p => p.slug === slug); if (index < 0) notFound();
  const p = projects[index]; const next = projects[(index + 1) % projects.length];
  if (p.slug === 'surreal-visions') return <SurrealProject project={p} next={next} />;
  if (p.slug === 'vishni') return <VishniCaseStudy project={p} next={next} />;
  if (p.slug === 'la-dolce-vita') return <ItalianWineCaseStudy project={p} next={next} />;
  if (p.slug === 'flowery') return <FloweryCaseStudy project={p} next={next} />;
  return <main id="main" className="project-page"><Reveal><Link href="/#work" className="eyebrow back-link"><Text>← ALL PROJECTS</Text></Link></Reveal>
    <div className="project-presentation">
      <ProjectFilm project={p} />
      <Reveal className="project-summary"><div className="project-heading"><h1><Text>{p.title}</Text></h1><p><Text>{p.category}</Text><br /><Text>{p.year}</Text></p></div><div className="project-description"><h2><Text>ABOUT THE PROJECT</Text></h2><p><Text>{p.description}</Text></p><span className="eyebrow"><Text>{p.isPlaceholder === false ? p.category.toUpperCase() : 'DEMONSTRATION CONCEPT'}</Text></span></div></Reveal>
    </div>
    <div className="gallery">{p.gallery.map((img, i) => <Image key={`${img.src}-${i}`} src={img.src} alt={img.alt} width={1600} height={1000} sizes="100vw" style={{ width: '100%', height: 'auto' }} />)}</div>
    <Link href={`/projects/${next.slug}`} className="next-project"><span className="eyebrow"><Text>NEXT PROJECT</Text></span><span><Text>{next.title}</Text> <Arrow /></span></Link>
  </main>;
}
