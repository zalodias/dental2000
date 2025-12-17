'use client';

import { Plus } from 'lucide-react';
import { useState } from 'react';

interface AccordionProps {
  items: Array<{
    title: string;
    content: string;
  }>;
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <div className="flex w-full max-w-3xl flex-col">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-border-neutral-subtle border-b last:border-b-0"
          >
            <button
              onClick={() => handleToggle(index)}
              className="flex w-full cursor-pointer items-center gap-4 py-6 text-start transition-colors duration-200"
              aria-expanded={isOpen}
              aria-controls={`question-${index}`}
            >
              <span
                className={`text-title-medium grow font-medium transition-colors duration-200 ${
                  isOpen
                    ? 'text-foreground-neutral-default'
                    : 'text-foreground-neutral-subtle'
                }`}
              >
                {item.title}
              </span>
              <div
                className={`bg-background-neutral-faded flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                  isOpen ? 'rotate-45' : 'rotate-0'
                }`}
              >
                <Plus
                  className={`text-foreground-neutral-default size-4 transition-transform duration-200 ${
                    isOpen ? 'scale-105' : 'scale-100'
                  }`}
                />
              </div>
            </button>
            <div
              id={`question-${index}`}
              className={`grid transition-all duration-400 ${
                isOpen
                  ? 'grid-rows-[1fr] pb-5 opacity-100'
                  : 'grid-rows-[0fr] pb-0 opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="text-body-large text-foreground-neutral-default">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
