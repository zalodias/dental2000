'use client';

import { CSSProperties, ReactNode } from 'react';

interface TickerProps {
  items: ReactNode[];
  duration?: number;
}

export function Ticker({ items, duration = 20 }: TickerProps) {
  const ticker = [...items, ...items];

  const animation = {
    ['--ticker-duration']: `${duration}s`,
  } as CSSProperties;

  return (
    <section className="relative w-screen overflow-hidden">
      <div className="relative py-10">
        <div
          className="animate-ticker flex w-fit gap-5"
          style={{ ...animation }}
        >
          {ticker.map((item, index) => (
            <div
              key={index}
              className="aspect-3/4 w-[clamp(320px,20vw,400px)]"
              aria-hidden={index >= items.length}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
