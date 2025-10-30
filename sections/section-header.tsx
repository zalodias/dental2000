interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  alignment?: 'start' | 'center';
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  action,
  alignment = 'start',
}: SectionHeaderProps) {
  return (
    <div
      className={`flex max-w-[80ch] flex-col gap-10 ${
        alignment === 'center' && 'items-center text-center'
      }`}
    >
      <div
        className={`flex flex-col gap-5 ${
          alignment === 'center' && 'items-center text-center'
        }`}
      >
        {eyebrow && (
          <h3 className="text-body-medium font-medium tracking-widest uppercase">
            {eyebrow}
          </h3>
        )}
        <div
          className={`flex flex-col gap-5 ${
            alignment === 'center' && 'items-center text-center'
          }`}
        >
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
