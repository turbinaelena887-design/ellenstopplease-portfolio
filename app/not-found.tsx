import { Text } from '@/components/language';
import Link from 'next/link';
export default function NotFound() { return <main id="main" className="not-found"><p className="eyebrow"><Text>404 / OUT OF FRAME</Text></p><h1><Text>This story</Text><br /><Text>is elsewhere.</Text></h1><Link href="/"><Text>Return to portfolio ↗</Text></Link></main>; }
