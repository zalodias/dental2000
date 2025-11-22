import { mergeTailwindClassNames as cn } from '@/utils/tailwind';
import { cva, type VariantProps } from 'class-variance-authority';

const sectionHeader = cva('font-medium text-balance', {
  variants: {
    size: {
      medium: 'text-display-small md:text-display-medium',
      large: 'text-display-medium md:text-display-large',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  size?: VariantProps<typeof sectionHeader>['size'];
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  action,
  size,
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
          <h2 className={sectionHeader({ size })}>{title}</h2>
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
