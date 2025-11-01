'use client';

import { Container } from '@/components/container';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { SectionHeader } from './section-header';

export interface AccordionItem {
  name: string;
  description: string;
}

interface AccordionImageProps {
  items: AccordionItem[];
}

export function AccordionImage({ items }: AccordionImageProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }

  return (
    <section>
      <Container>
        <div className="flex flex-col gap-10 md:items-center md:gap-20">
          <SectionHeader
            title="As nossas especialidades"
            subtitle="Com 8 especialidades disponíveis, na Dental 2000 pode encontrar o tratamento que melhor se adequa ao seu estilo de vida."
            className="text-start md:text-center"
          />
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:items-center md:gap-16">
            <div className="relative aspect-3/2 overflow-hidden md:aspect-2/3">
              {items.map((item, index) => (
                <div
                  key={item.name}
                  className={`bg-background-neutral-subtle absolute inset-0 transition-opacity duration-400 ${
                    openIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <div className="flex w-full flex-col">
              {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={item.name}
                    className="border-border-neutral-default border-b"
                  >
                    <button
                      onClick={() => handleToggle(index)}
                      className="flex w-full cursor-pointer items-center gap-4 py-6 text-start"
                      aria-expanded={isOpen}
                      aria-controls={`panel-${index}`}
                    >
                      <span
                        className={`text-title-large grow font-medium transition-colors duration-400 ${
                          isOpen
                            ? 'text-foreground-neutral-default'
                            : 'text-foreground-neutral-default/50'
                        }`}
                      >
                        {item.name}
                      </span>
                      <Plus
                        className={`h-6 w-6 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'scale-105 rotate-45' : 'rotate-0'
                        }`}
                      />
                    </button>
                    <div
                      id={`panel-${index}`}
                      className={`grid transition-all duration-400 ${
                        isOpen
                          ? 'grid-rows-[1fr] pb-5 opacity-100'
                          : 'grid-rows-[0fr] pb-0 opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="text-title-small text-foreground-neutral-subtle">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
