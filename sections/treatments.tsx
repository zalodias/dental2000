'use client';

import { Container } from '@/components/container';
import { treatments } from '@/data/treatments';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export function Treatments() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }

  return (
    <section>
      <Container>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-16">
          <div className="relative aspect-3/2 overflow-hidden md:aspect-2/3">
            {treatments.map((item, index) => (
              <Image
                key={item.image}
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className={`rounded-xl transition-opacity duration-400 ${
                  openIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
                priority={index === 0}
              />
            ))}
          </div>
          <div className="flex w-full flex-col">
            {treatments.map((item, index) => {
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
                        ? 'grid-rows-[1fr] pb-6 opacity-100'
                        : 'grid-rows-[0fr] pb-0 opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="text-body-large-default text-foreground-neutral-subtle">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
