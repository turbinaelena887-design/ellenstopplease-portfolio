'use client';
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { translate, type Locale } from '@/data/localization';
import { useRouter } from 'next/navigation';
export type { Locale } from '@/data/localization';
const LanguageContext = createContext<{ locale: Locale; select: (locale: Locale) => void }>({ locale: 'en', select: () => {} });
export const useLanguage = () => useContext(LanguageContext);
export function Text({ children }: { children: ReactNode }) {
  const { locale } = useContext(LanguageContext);
  function localize(node: ReactNode): ReactNode {
    if (typeof node === 'string') return translate(node, locale);
    if (Array.isArray(node)) return node.map(localize);
    return node;
  }
  return <>{localize(children)}</>;
}
export function LanguageProvider({ children, initialLocale }: { children: ReactNode; initialLocale: Locale | null }) {
  const router = useRouter();
  const [locale, setLocale] = useState<Locale>(initialLocale ?? 'en');
  const [choosing, setChoosing] = useState(!initialLocale);
  const firstButton = useRef<HTMLButtonElement>(null);
  const select = (next: Locale) => {
    document.cookie = `portfolio-language=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
    setLocale(next); setChoosing(false); router.refresh();
    if (choosing) requestAnimationFrame(() => document.querySelector<HTMLButtonElement>('.language-switch button[aria-pressed="true"]')?.focus());
  };
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);
  useEffect(() => {
    if (!choosing) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstButton.current?.focus();
    return () => { document.body.style.overflow = previous; };
  }, [choosing]);
  return <LanguageContext.Provider value={{ locale, select }}><div inert={choosing}>{children}</div>{choosing && <div className="language-gate" role="dialog" aria-modal="true" aria-labelledby="language-title" onKeyDown={event => {
    if (event.key === 'Tab') { event.preventDefault(); const buttons = event.currentTarget.querySelectorAll('button'); const index = Array.from(buttons).indexOf(document.activeElement as HTMLButtonElement); buttons[(index + (event.shiftKey ? buttons.length - 1 : 1)) % buttons.length]?.focus(); }
  }}><div className="language-gate-content"><p className="eyebrow">ellenstopplease</p><h2 id="language-title"><span lang="uk">Оберіть мову</span><br /><span lang="en" className="muted">Choose your language</span></h2><div className="language-options"><button ref={firstButton} lang="uk" onClick={() => select('uk')}>Українська <span aria-hidden="true">↗</span></button><button lang="en" onClick={() => select('en')}>English <span aria-hidden="true">↗</span></button></div></div></div>}</LanguageContext.Provider>;
}
export function LanguageSwitch() {
  const { locale, select } = useContext(LanguageContext);
  return <div className="language-switch" role="group" aria-label={locale === 'uk' ? 'Мова сайту' : 'Website language'}><button lang="uk" aria-label="Українська" aria-pressed={locale === 'uk'} onClick={() => select('uk')}>UK</button><span aria-hidden="true">/</span><button lang="en" aria-label="English" aria-pressed={locale === 'en'} onClick={() => select('en')}>EN</button></div>;
}
