'use client';
import { motion, useReducedMotion } from 'motion/react';
export function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }} animate={reduced ? { opacity: 1, y: 0 } : undefined} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={reduced ? { duration: 0 } : { duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>;
}
