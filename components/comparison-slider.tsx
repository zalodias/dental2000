'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

interface ComparisonSliderProps {
  initialPosition?: number;
  className?: string;
}

export function ComparisonSlider({
  initialPosition = 50,
  className = '',
}: ComparisonSliderProps) {
  const slider = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initialPosition);
  const isDragging = useRef(false);

  function updatePosition(clientX: number) {
    if (!slider.current) return;
    const rect = slider.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  }

  function handleMouseDown(e: React.MouseEvent) {
    e.preventDefault();
    isDragging.current = true;
    updatePosition(e.clientX);

    function handleDocumentMouseMove(e: MouseEvent) {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    }

    function handleDocumentMouseUp() {
      isDragging.current = false;
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
    }

    document.addEventListener('mousemove', handleDocumentMouseMove);
    document.addEventListener('mouseup', handleDocumentMouseUp);
  }

  return (
    <div
      ref={slider}
      className={`relative aspect-4/3 w-full overflow-hidden select-none ${className}`}
      onMouseDown={handleMouseDown}
    >
      <div className="absolute inset-0">
        <div className="bg-background-neutral-faded h-full w-full object-cover" />
      </div>
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <div className="bg-background-neutral-subtle h-full w-full object-cover" />
      </div>
      <div
        className="bg-background-neutral-default/80 pointer-events-none absolute inset-y-0 z-10 w-0.5"
        style={{ left: `${position}%` }}
      >
        <div className="bg-background-neutral-default/80 pointer-events-auto absolute top-1/2 left-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 cursor-col-resize place-items-center rounded-full backdrop-blur">
          <div className="flex gap-px">
            <ChevronLeft className="text-foreground-neutral-faded w-5" />
            <ChevronRight className="text-foreground-neutral-faded w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
