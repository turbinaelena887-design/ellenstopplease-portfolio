import { FloweryCaseStudy } from '@/components/flowery-case-study';
import { floweryCaseStudy } from '@/data/flowery-case-study';
import { Arrow } from '@/components/arrow';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = projects.find(p => p.slug === slug);
  return { title: p?.slug === 'flowery' ? 'FLOWERY — A Cinematic Floral Story' : p?.title ?? 'Project not found', description: p?.slug === 'flowery' ? floweryCaseStudy.description : p?.description, openGraph: p ? { images: [p.cover] } : undefined };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const index = projects.findIndex(p => p.slug === slug); if (index < 0) notFound();
  const p = projects[index]; const next = projects[(index + 1) % projects.length];
  if (p.slug === 'flowery') return <FloweryCaseStudy project={p} next={next} />;
  return <main id="main" className="project-page"><Reveal><Link href="/#work" className="eyebrow back-link">← ALL PROJECTS</Link><div className="project-heading"><h1>{p.title}</h1><p>{p.category}<br />{p.year}</p></div></Reveal>
    {p.fullVideo ? <video className="full-film" style={{ aspectRatio: p.aspectRatio }} controls autoPlay muted playsInline preload="metadata" poster={p.cover} aria-label={`${p.title} film`}><source src={p.fullVideo} type="video/mp4" />Your browser does not support video.</video> : <div className="project-still" style={{ aspectRatio: p.aspectRatio }}><Image src={p.cover} alt={p.title} style={{ objectFit: 'cover', objectPosition: p.coverPosition }} fill sizes="100vw" priority /></div>}
    <Reveal className="project-description"><h2>ABOUT THE PROJECT</h2><p>{p.description}</p><span className="eyebrow">{p.isPlaceholder === false ? p.category.toUpperCase() : 'DEMONSTRATION CONCEPT'}</span></Reveal>
    <div className="gallery">{p.gallery.map((img, i) => <Image key={`${img.src}-${i}`} src={img.src} alt={img.alt} width={1600} height={1000} sizes="100vw" style={{ width: '100%', height: 'auto' }} />)}</div>
    <Link href={`/projects/${next.slug}`} className="next-project"><span className="eyebrow">NEXT PROJECT</span><span>{next.title} <Arrow /></span></Link>
  </main>;
}
