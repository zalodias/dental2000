'use client';

import Logo from '@/assets/logos/lockup-dark-horizontal.svg';
import { Button } from '@/components/button';
import { navigation } from '@/data/navigation';
import useScrollDirection from '@/hooks/useScrollDirection';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollDirection = useScrollDirection();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav
        className={`fixed inset-x-0 top-0 z-20 flex items-center justify-between px-10 py-4 transition-all duration-400 ${
          scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
        } ${isMenuOpen ? 'bg-background-neutral-default border-b border-transparent' : 'bg-background-neutral-default border-border-neutral-subtle border-b'}`}
      >
        <Link href="/">
          <Image src={Logo} alt="Dental 2000" className="w-40" />
        </Link>
        <div className="flex items-center gap-10">
          <div className="hidden xl:flex xl:gap-10">
            <ul className="hidden items-center gap-3 xl:flex">
            </ul>
            <Button>
              <Link href="#">Marcar consulta</Link>
            </Button>
          </div>
          <button
            onClick={toggleMenu}
            className="grid cursor-pointer gap-2 p-4 xl:hidden"
          >
            <span
              className={`bg-foreground-neutral-default h-px w-5 transition-transform duration-200 ${isMenuOpen ? 'translate-y-1 rotate-45' : ''}`}
            ></span>
            <span
              className={`bg-foreground-neutral-default h-px w-5 transition-transform duration-200 ${isMenuOpen ? '-translate-y-1 -rotate-45' : ''}`}
            ></span>
          </button>
        </div>
      </nav>
      <div
        className={`bg-background-neutral-default fixed inset-0 z-10 flex h-screen flex-col items-start justify-start gap-10 px-5 py-8 pt-30 transition-opacity duration-400 md:px-10 lg:px-20 ${isMenuOpen ? 'opacity-100' : 'opacity-0'} xl:hidden`}
        inert={!isMenuOpen}
      >
        <ul className="flex flex-col items-start gap-10 md:hidden">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-display-small tracking-tight whitespace-nowrap"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
