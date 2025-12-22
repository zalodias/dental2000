'use client';

import { Facebook } from '@/assets/icons/facebook';
import { Instagram } from '@/assets/icons/instagram';
import Logo from '@/assets/logos/lockup-dark-horizontal.svg';
import { Button } from '@/components/button';
import { navigation } from '@/data/navigation';
import useScrollDirection from '@/hooks/useScrollDirection';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const scrollDirection = useScrollDirection();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav
        className={`fixed inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-4 transition-all duration-400 md:px-10 lg:px-20 ${
          scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
        } ${isMenuOpen ? 'bg-background-neutral-default border-b border-transparent' : 'bg-background-neutral-default border-border-neutral-subtle border-b'}`}
      >
        <Link href="/">
          <Image src={Logo} alt="Dental 2000" className="w-40" />
        </Link>
        <div className="flex items-center gap-10">
          <div className="hidden xl:flex xl:gap-10">
            <ul className="hidden items-center gap-3 xl:flex">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`hover:text-foreground-neutral-default px-3 py-1 font-medium whitespace-nowrap duration-200 ${
                        isActive
                          ? 'text-foreground-neutral-default'
                          : 'text-foreground-neutral-subtle'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
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
        <ul className="flex grow flex-col items-start gap-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-display-small font-medium whitespace-nowrap ${
                    isActive
                      ? 'text-foreground-neutral-default'
                      : 'text-foreground-neutral-faded'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <hr className="border-border-neutral-default w-full" />
        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            <a
              href="https://facebook.com/profile?id=61574453800539"
              target="_blank"
              className="flex items-center gap-4 rounded-xl py-4"
            >
              <div className="bg-background-neutral-inverse/6 text-foreground-neutral-default flex size-12 items-center justify-center rounded-full">
                <Facebook size={20} />
              </div>
            </a>
            <a
              href="https://instagram.com/dental2000_clinica/"
              target="_blank"
              className="flex items-center gap-4 rounded-xl py-4"
            >
              <div className="bg-background-neutral-inverse/6 text-foreground-neutral-default flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                <Instagram size={20} />
              </div>
            </a>
            <a
              href="mailto:dentallda@gmail.com"
              target="_blank"
              className="flex items-center gap-4 rounded-xl py-4"
            >
              <div className="bg-background-neutral-inverse/6 text-foreground-neutral-default flex size-12 items-center justify-center rounded-full">
                <Mail size={20} />
              </div>
            </a>
          </div>
        </div>
        <Button className="w-full" size="large">
          <Link href="/contactos" onClick={() => setIsMenuOpen(false)}>
            Marcar consulta
          </Link>
        </Button>
      </div>
    </header>
  );
}
