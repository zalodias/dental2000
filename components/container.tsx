import { mergeTailwindClassNames as cn } from '@/utils/tailwind';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-(--breakpoint-xl) gap-20 px-5 py-10 md:px-10 md:py-20 lg:px-20 lg:py-30',
        className,
      )}
    >
      {children}
    </div>
  );
}
