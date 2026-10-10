'use client';
import { translate } from '@/data/localization';
import { useLanguage } from './language';
import { Text } from '@/components/language';

import { Arrow } from '@/components/arrow';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useReducedMotion } from 'motion/react';
import type { Project } from '@/data/projects';
import { Reveal } from './reveal';
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { locale } = useLanguage();
  const video = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();
  const enter = () => {
    if (reduced || !project.previewVideo || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    setLoaded(true);
    if (video.current) void video.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };
  const leave = () => { video.current?.pause(); setPlaying(false); };
  return <Reveal delay={index % 2 * 0.1}><Link href={`/projects/${project.slug}`} className="project-card" onMouseEnter={enter} onMouseLeave={leave} onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); setCursor({ x: e.clientX - r.left, y: e.clientY - r.top }); }} aria-label={`${locale === 'uk' ? 'Переглянути' : 'View'} ${project.title}, ${translate(project.category, locale)}`}>
    <div className={`project-media${playing ? ' is-playing' : ''}`}>{project.cover ? <Image src={project.cover} style={{ objectPosition: project.coverPosition }} alt={`${project.title} — ${translate(project.category, locale)}`} fill sizes="(max-width: 700px) 100vw, 50vw" priority={index < 2} /> : <div className="portfolio-media-placeholder" />}
      {loaded && <video ref={video} src={project.previewVideo} autoPlay muted loop playsInline preload="none" aria-hidden="true" className={playing ? 'preview playing' : 'preview'} onLoadedData={() => { if (!video.current) return; if (video.current.closest('a')?.matches(':hover')) void video.current.play().then(() => setPlaying(true)).catch(() => {}); else video.current.pause(); }} />}
      <div className="project-cover-shade" aria-hidden="true" />
      <div className="project-cover-copy"><span className="project-cover-title"><Text>{project.title}</Text></span><span className="eyebrow"><Text>{project.coverCaption}</Text></span></div>
    </div><div className="project-meta"><div><span className="project-number"><Text>0</Text><Text>{index + 1}</Text></span><h3><Text>{project.title}</Text></h3></div><span className="category"><Text>{project.category}</Text></span><span className="project-arrow" aria-hidden><Arrow /></span></div>
    <span className="view-cursor" style={{ left: cursor.x, top: cursor.y }} aria-hidden><Text>VIEW</Text><br /><Text>PROJECT </Text><Arrow /></span>
  </Link></Reveal>;
}
