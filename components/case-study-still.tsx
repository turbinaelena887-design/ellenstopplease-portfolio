import Image from 'next/image';
import path from 'node:path';
import sharp from 'sharp';
import type { FloweryStill } from '@/data/flowery-case-study';
import { Reveal } from './reveal';

// Measure local images on the server so their natural ratio is reserved before loading.
export async function CaseStudyStill({ still }: { still: FloweryStill }) {
  let dimensions: { width: number; height: number } | null = null;
  if (still.src?.startsWith('/media/')) {
    const publicRoot = path.resolve(process.cwd(), 'public');
    const file = path.resolve(publicRoot, `.${still.src}`);
    if (file.startsWith(`${publicRoot}${path.sep}`)) {
      try {
        const info = await sharp(file).metadata();
        if (info.width && info.height) {
          const rotated = info.orientation && info.orientation >= 5;
          dimensions = { width: rotated ? info.height : info.width, height: rotated ? info.width : info.height };
        }
      } catch {
        // Missing or unreadable files retain the intentional placeholder.
      }
    }
  }
  const ratio = dimensions ? `${dimensions.width} / ${dimensions.height}` : still.placeholderRatio;
  return <Reveal className="case-still-reveal"><figure className="case-still" style={{ aspectRatio: ratio }}>
    {dimensions && still.src ? <Image src={still.src} alt={still.alt} fill sizes="(max-width: 700px) 88vw, 92vw" loading="lazy" style={{ objectFit: 'cover', objectPosition: still.focalPoint }} /> : <div className="case-still-placeholder"><span>{still.label}</span><span className="case-still-note">FILM STILL / COMING SOON</span></div>}
    {dimensions && <figcaption className="sr-only">{still.label}</figcaption>}
  </figure></Reveal>;
}
