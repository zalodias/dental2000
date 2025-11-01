interface MetricProps {
  label: string;
  value: string | number;
}

export function Metric({ label, value }: MetricProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-display-medium font-medium">{value}</div>
      <div className="text-title-small text-foreground-neutral-subtle">
        {label}
      </div>
    </div>
  );
}
