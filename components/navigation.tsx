import { Arrow } from '@/components/arrow';
import Link from 'next/link';
export function Header() {
  return <header className="header"><Link href="/" aria-label="ellenstopplease portfolio home" className="wordmark">ellenstopplease<span className="wordmark-star">✳</span></Link><nav aria-label="Main navigation"><Link href="/#work">Work</Link><Link href="/#services">Services</Link><Link href="/#about">About</Link><Link href="/#contact">Contact <span aria-hidden><Arrow /></span></Link></nav></header>;
}
export function Footer() {
  return <footer><span>© {new Date().getFullYear()} ellenstopplease</span><span>IMAGINED. DIRECTED. CREATED.</span><Link href="/#main">BACK TO TOP ↑</Link></footer>;
}
