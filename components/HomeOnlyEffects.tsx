'use client';
import { usePathname } from 'next/navigation';
import DotsBackground from './DotsBackground';

export default function HomeOnlyEffects() {
  const pathname = usePathname();
  return (
    <>
      {pathname === '/' && <DotsBackground />}
    </>
  );
} 