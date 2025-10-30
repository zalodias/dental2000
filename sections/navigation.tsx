'use client';

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
        <Link
          href="/"
          className="text-title-small font-semibold tracking-tight"
        >
          <Image
            src={require('@/assets/logos/lockup-dark-horizontal.svg')}
            alt="Dental 2000"
            className="w-40"
          />
        </Link>
        <div className="flex items-center gap-10">
          <div className="hidden md:flex md:gap-10">
            <ul className="hidden items-center gap-3 md:flex">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-foreground-neutral-subtle hover:text-foreground-neutral-default relative px-3 py-1 font-medium whitespace-nowrap after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-1/3 after:origin-center after:-translate-x-1/2 after:bg-current after:opacity-0 after:transition-all after:duration-320 after:content-[''] hover:after:w-2/3 hover:after:opacity-100"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href="/marcar-consulta">Marcar consulta</Button>
          </div>
          <button
            onClick={toggleMenu}
            className="grid cursor-pointer gap-2 md:hidden"
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
        className={`bg-background-neutral-default fixed inset-0 z-10 flex h-screen flex-col items-center justify-center gap-10 transition-opacity duration-400 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
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
