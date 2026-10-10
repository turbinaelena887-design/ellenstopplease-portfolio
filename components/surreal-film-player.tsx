'use client';
import type { CSSProperties } from 'react';
export function SurrealFilmPlayer({ src, title, aspectRatio }: { src: string; title: string; aspectRatio: string }) {
  const [width, height] = aspectRatio.split('/').map(Number);
  return <div className="project-film" style={{ '--film-ratio': width / height } as CSSProperties}><video className="full-film" style={{ aspectRatio }} controls muted playsInline preload="none" aria-label={title} onPlay={event => {
    const current = event.currentTarget;
    current.closest('.surreal-film-row')?.querySelectorAll('video').forEach(video => { if (video !== current) video.pause(); });
  }}><source src={src} type="video/mp4" />Your browser does not support video.</video></div>;
}
