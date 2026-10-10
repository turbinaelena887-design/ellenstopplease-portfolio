'use client';
import Image from 'next/image';
import type { ComponentProps } from 'react';
import { useLanguage } from './language';
import { translate } from '@/data/localization';
export function LocalizedImage(props: ComponentProps<typeof Image>) {
  const { locale } = useLanguage();
  return <Image {...props} alt={translate(props.alt, locale)} />;
}
export function LocalizedVideo(props: ComponentProps<'video'>) {
  const { locale } = useLanguage();
  const label = props['aria-label'];
  return <video {...props} aria-label={label && locale === 'uk' ? label.replace(/ film$/, ' — фільм') : label} />;
}
export function LocalizedSection(props: ComponentProps<'section'>) {
  const { locale } = useLanguage();
  return <section {...props} aria-label={props['aria-label'] && translate(props['aria-label'], locale)} />;
}

export function LocalizedAnchor(props: ComponentProps<'a'>) {
  const { locale } = useLanguage();
  return <a {...props} aria-label={props['aria-label'] && translate(props['aria-label'], locale)} />;
}
