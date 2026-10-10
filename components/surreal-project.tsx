import Link from 'next/link';
import type { Project } from '@/data/projects';
import { surrealFilms } from '@/data/surreal-films';
import { ProjectFilm } from './project-film';
import { Reveal } from './reveal';
import { Arrow } from './arrow';

export function SurrealProject({ project, next }: { project: Project; next: Project }) {
  return <main id="main" className="project-page surreal-project">
    <Reveal><Link href="/#work" className="eyebrow back-link">← Back to Projects</Link><div className="project-heading"><h1>{project.title}</h1><p>{project.category}<br />{project.year}</p></div></Reveal>
    <div className="surreal-film-row">{surrealFilms.map((film, index) => <section key={film.src} aria-label={film.title}><ProjectFilm project={{ ...project, title: `${project.title} — ${film.title}`, fullVideo: film.src, cover: '', aspectRatio: film.aspectRatio }} /><p className="eyebrow surreal-film-number">{String(index + 1).padStart(2, '0')} / {film.title.toUpperCase()}</p></section>)}</div>
    <Link href={`/projects/${next.slug}`} className="next-project"><span className="eyebrow">NEXT PROJECT</span><span>{next.title} <Arrow /></span></Link>
  </main>;
}
