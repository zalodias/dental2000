'use client';

import { Container } from '@/components/container';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { SectionHeader } from './section-header';

export interface CarouselItem {
  title: string;
  description: string;
}

interface CarouselSliderProps {
  items: CarouselItem[];
}

export function CarouselSlider({ items }: CarouselSliderProps) {
  const scrollContainer = useRef<HTMLDivElement>(null);

  function handlePrevious() {
    if (!scrollContainer.current) return;
    scrollContainer.current.scrollBy({ left: -380, behavior: 'smooth' });
  }

  function handleNext() {
    if (!scrollContainer.current) return;
    scrollContainer.current.scrollBy({ left: 380, behavior: 'smooth' });
  }

  const canScroll = items.length > 3;

  return (
    <section className="flex flex-col gap-10 md:gap-20">
      <Container className="flex flex-col items-start justify-between py-0 md:flex-row md:items-end md:py-0 lg:py-0">
        <SectionHeader
          title="Excelência em cada tratamento dentário"
          subtitle="Conheça os cuidados dentários mais realizados pelos nossos especialistas — pensados para a sua saúde, conforto e bem-estar."
          className="grow"
        />
        {canScroll && (
          <div className="hidden gap-3 md:flex">
            <button
              onClick={handlePrevious}
              className="bg-background-neutral-subtle text-foreground-neutral-default hover:bg-background-neutral-strong flex cursor-pointer items-center justify-center rounded-full p-3 transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6" />
            </button>
            <button
              onClick={handleNext}
              className="bg-background-neutral-subtle text-foreground-neutral-default hover:bg-background-neutral-strong flex cursor-pointer items-center justify-center rounded-full p-3 transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight className="w-6" />
            </button>
          </div>
        )}
      </Container>
      <div
        ref={scrollContainer}
        className="ml-[calc(-50vw+50%)] w-screen snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex gap-5 pr-5 pl-[max(1.25rem,calc((100vw-min(100vw,1280px))/2+1.25rem))] md:pr-10 md:pl-[max(2.5rem,calc((100vw-min(100vw,1280px))/2+2.5rem))] lg:pr-20 lg:pl-[max(5rem,calc((100vw-min(100vw,1280px))/2+5rem))]">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative w-[360px] flex-shrink-0 cursor-pointer snap-center"
            >
              <div className="relative flex aspect-[3/4] w-full items-end overflow-hidden">
                <div className="from-background-neutral-inverse/80 absolute bottom-0 z-10 h-1/2 w-full bg-gradient-to-t to-transparent" />
                <div className="bg-background-neutral-subtle absolute inset-0 transition-transform duration-500 group-hover:scale-105" />
                <h3 className="text-title-large text-foreground-neutral-inverse z-10 w-full p-6 font-medium">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
