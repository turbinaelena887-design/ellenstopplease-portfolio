import Image from 'next/image';
import type { CSSProperties } from 'react';
import type { Project } from '@/data/projects';

export function ProjectFilm({ project }: { project: Project }) {
  const [width, height] = project.aspectRatio.split('/').map(Number);
  const ratio = width > 0 && height > 0 ? width / height : 1.6;
  return <div className="project-film" style={{ '--film-ratio': ratio } as CSSProperties}>
    {project.fullVideo ? <video className="full-film" style={{ aspectRatio: project.aspectRatio }} controls autoPlay muted playsInline preload="metadata" poster={project.cover} aria-label={`${project.title} film`}><source src={project.fullVideo} type="video/mp4" />Your browser does not support video.</video> : <div className="project-still" style={{ aspectRatio: project.aspectRatio }}>{project.cover ? <Image src={project.cover} alt={project.title} style={{ objectFit: 'contain', objectPosition: project.coverPosition }} fill sizes="(max-width: 700px) 88vw, 55vw" priority /> : <div className="film-placeholder"><span className="eyebrow">{project.title}</span><span>FILM COMING SOON</span><span className="eyebrow">9:16 / AI FILM</span></div>}</div>}
  </div>;
}
