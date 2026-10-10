'use client';
import { useLanguage } from './language';
import { translate } from '@/data/localization';
import { LanguageSwitch } from './language';
import { Text } from '@/components/language';
import { Arrow } from '@/components/arrow';
import Link from 'next/link';
import Image from 'next/image';
export function Header() {
  const { locale } = useLanguage();
  return <header className="header"><Link href="/" aria-label={translate('ellenstopplease portfolio home', locale)} className="wordmark"><Text>ellenstopplease</Text><span className="wordmark-logo" aria-hidden="true"><Image src="/media/brand-logo-silver.png" alt="" width={1358} height={1159} sizes="(max-width: 700px) 32px, 44px" priority /></span></Link><div className="header-links"><nav aria-label={translate('Main navigation', locale)}><Link href="/#work"><Text>Work</Text></Link><Link href="/#services"><Text>Services</Text></Link><Link href="/#about"><Text>About</Text></Link><Link href="/#contact"><Text>Contact </Text><span aria-hidden><Arrow /></span></Link></nav><LanguageSwitch /></div></header>;
}
export function Footer() {
  return <footer><span><Text>© </Text><Text>{new Date().getFullYear()}</Text> <Text>ellenstopplease</Text></span><span><Text>IMAGINED. DIRECTED. CREATED.</Text></span><Link href="/#main"><Text>BACK TO TOP ↑</Text></Link></footer>;
}
