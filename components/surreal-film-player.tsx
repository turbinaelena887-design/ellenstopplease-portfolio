'use client';
import { Text } from '@/components/language';

import { useLanguage } from './language';
import { translate } from '@/data/localization';
import type { CSSProperties } from 'react';
export function SurrealFilmPlayer({ src, title, aspectRatio }: { src: string; title: string; aspectRatio: string }) {
  const { locale } = useLanguage();
  const [width, height] = aspectRatio.split('/').map(Number);
  return <div className="project-film" style={{ '--film-ratio': width / height } as CSSProperties}><video className="full-film" style={{ aspectRatio }} controls muted playsInline preload="none" aria-label={title.split(' — ').map(part => translate(part, locale)).join(' — ')} onPlay={event => {
    const current = event.currentTarget;
    current.closest('.surreal-film-row')?.querySelectorAll('video').forEach(video => { if (video !== current) video.pause(); });
  }}><source src={src} type="video/mp4" /><Text>Your browser does not support video.</Text></video></div>;
}
