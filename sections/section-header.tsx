import { mergeTailwindClassNames as cn } from '@/utils/tailwind';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('flex max-w-[80ch] flex-col gap-10', className)}>
      <div className={`flex flex-col gap-5`}>
        {eyebrow && (
          <h3 className="text-body-medium font-medium tracking-widest uppercase">
            {eyebrow}
          </h3>
        )}
        <div className={`flex flex-col gap-5`}>
          <h2 className="text-display-medium font-medium text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="text-foreground-neutral-subtle text-title-small">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {action}
    </div>
  );
}
