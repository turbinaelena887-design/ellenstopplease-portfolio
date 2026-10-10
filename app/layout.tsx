import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/navigation';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'ellenstopplease — AI Creative Direction', template: '%s — ellenstopplease' },
  description: 'Visual stories beyond reality. An independent creative portfolio exploring AI filmmaking, fashion, and visual storytelling.',
  openGraph: { title: 'ellenstopplease — Visual stories. Beyond reality.', description: 'AI creative direction / fashion / film', type: 'website', images: ['/media/Elena_Contemporary_luxury_floral_campaign_photography._Striki_0334a640-4a4c-4535-929c-0e137052855b_1.png'] },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer /></body></html>;
}
