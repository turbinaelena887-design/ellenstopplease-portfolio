'use client';
import { useLanguage } from './language';
// Keep the original Ukrainian brand slogan; its English interpretation is only needed in English.
export function BrandSlogan({ slogan }: { slogan: string }) {
  const { locale } = useLanguage();
  const [original, interpretation] = slogan.split(' — ');
  return <strong><span lang="uk">{original}</span>{locale === 'en' && <> — {interpretation}</>}</strong>;
}
