import { mergeTailwindClassNames as cn } from '@/utils/tailwind';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export function Button({ children, href, className }: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          'bg-background-neutral-inverse text-foreground-neutral-inverse inline-flex w-fit cursor-pointer items-center justify-center rounded-full px-4 py-2 font-medium whitespace-nowrap',
          className,
        )}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={cn(
        'bg-background-neutral-inverse text-foreground-neutral-inverse inline-flex w-fit cursor-pointer items-center justify-center rounded-full px-4 py-2 font-medium whitespace-nowrap',
        className,
      )}
    >
      {children}
    </button>
  );
}
