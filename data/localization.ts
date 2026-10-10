import { ukrainian } from './translations';
export type Locale = 'en' | 'uk';
export function translate(text: string, locale: Locale) {
  if (locale === 'en') return text;
  const normalized = text.replace(/\s+/g, ' ').trim();
  let translated = ukrainian[normalized];
  if (!translated && normalized === normalized.toUpperCase()) {
    const key = Object.keys(ukrainian).find(key => key.toUpperCase() === normalized);
    if (key) translated = ukrainian[key].toUpperCase();
  }
  if (!translated) return text;
  return `${/^\s/.test(text) ? ' ' : ''}${translated}${/\s$/.test(text) ? ' ' : ''}`;
}
