interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  action,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        {eyebrow && (
          <h3 className="text-body-medium font-medium tracking-widest uppercase">
            {eyebrow}
          </h3>
        )}
        <div className="flex flex-col gap-5">
          <h2 className="text-display-medium font-medium">{title}</h2>
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
