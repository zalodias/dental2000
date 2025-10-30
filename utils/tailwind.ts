import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-display-large',
        'text-display-medium',
        'text-display-small',
        'text-title-large',
        'text-title-medium',
        'text-title-small',
        'text-body-large',
        'text-body-medium',
        'text-body-small',
      ],
    },
  },
});

export function mergeTailwindClassNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
