import { LocalizedVideo } from './localized-media';
import { Text } from '@/components/language';
import { LocalizedImage as Image } from './localized-media';
import type { CSSProperties } from 'react';
import type { Project } from '@/data/projects';

export function ProjectFilm({ project }: { project: Project }) {
  const [width, height] = project.aspectRatio.split('/').map(Number);
  const ratio = width > 0 && height > 0 ? width / height : 1.6;
  return <div className="project-film" style={{ '--film-ratio': ratio } as CSSProperties}>
    {project.fullVideo ? <LocalizedVideo className="full-film" style={{ aspectRatio: project.aspectRatio }} controls autoPlay muted playsInline preload="metadata" poster={project.cover || undefined} aria-label={`${project.title} film`}><source src={project.fullVideo} type="video/mp4" /><Text>Your browser does not support video.</Text></LocalizedVideo> : <div className="project-still" style={{ aspectRatio: project.aspectRatio }}>{project.cover ? <Image src={project.cover} alt={project.title} style={{ objectFit: 'contain', objectPosition: project.coverPosition }} fill sizes="(max-width: 700px) 88vw, 55vw" priority /> : <div className="film-placeholder"><span className="eyebrow"><Text>{project.title}</Text></span><span><Text>FILM COMING SOON</Text></span><span className="eyebrow"><Text>9:16 / AI FILM</Text></span></div>}</div>}
  </div>;
}
