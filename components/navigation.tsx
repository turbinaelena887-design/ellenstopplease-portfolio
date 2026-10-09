import { Arrow } from '@/components/arrow';
import Link from 'next/link';
export function Header() {
  return <header className="header"><Link href="/" aria-label="Ellen portfolio home" className="wordmark">ELLEN<span className="wordmark-star">✳</span></Link><nav aria-label="Main navigation"><Link href="/" className="portfolio-nav">Portfolio</Link><Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/#contact">Contact <span aria-hidden><Arrow /></span></Link></nav></header>;
}
export function Footer() {
  return <footer><span>© {new Date().getFullYear()} ELLEN</span><span>IMAGINED. DIRECTED. CREATED.</span><Link href="/#main">BACK TO TOP ↑</Link></footer>;
}
