import { translate } from '@/data/localization';
import { cookies } from 'next/headers';
import { LanguageProvider, Text, type Locale } from '@/components/language';
import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/navigation';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');
const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'ellenstopplease — AI Creative Direction', template: '%s — ellenstopplease' },
  description: 'Visual stories beyond reality. An independent creative portfolio exploring AI filmmaking, fashion, and visual storytelling.',
  openGraph: { title: 'ellenstopplease — Visual stories. Beyond reality.', description: 'AI creative direction / fashion / film', type: 'website', images: ['/media/Elena_Contemporary_luxury_floral_campaign_photography._Striki_0334a640-4a4c-4535-929c-0e137052855b_1.png'] },
};
export async function generateMetadata(): Promise<Metadata> {
  const locale = (await cookies()).get('portfolio-language')?.value === 'uk' ? 'uk' : 'en';
  return { ...baseMetadata, title: { default: translate('ellenstopplease — AI Creative Direction', locale), template: '%s — ellenstopplease' }, description: translate(baseMetadata.description as string, locale), openGraph: { ...baseMetadata.openGraph, title: translate('ellenstopplease — Visual stories. Beyond reality.', locale), description: translate('AI creative direction / fashion / film', locale), locale: locale === 'uk' ? 'uk_UA' : 'en_US' } };
}
export default async function Layout({ children }: { children: React.ReactNode }) {
  const saved = (await cookies()).get('portfolio-language')?.value;
  const locale: Locale | null = saved === 'uk' || saved === 'en' ? saved : null;
  return <html lang={locale ?? 'en'}><body><LanguageProvider initialLocale={locale}><a className="skip-link" href="#main"><Text>Skip to content</Text></a><Header />{children}<Footer /></LanguageProvider></body></html>;
}
