import { mergeTailwindClassNames as cn } from '@/utils/tailwind';

interface MetricProps {
  label: string;
  value: string | number;
  className?: string;
}

export function Metric({ label, value, className }: MetricProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <div className="text-display-medium font-medium">{value}</div>
      <div className="text-title-small text-foreground-neutral-subtle">
        {label}
      </div>
    </div>
  );
}
