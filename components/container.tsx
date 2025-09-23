import { mergeTailwindClassNames as cn } from '@/utils/tailwind';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto flex w-full max-w-(--breakpoint-xl) flex-col gap-10 px-5 py-10 md:gap-15 md:px-10 md:py-20 lg:px-20 lg:py-30',
        className,
      )}
    >
      {children}
    </div>
  );
}
