import { mergeTailwindClassNames as cn } from '@/utils/tailwind';

interface ProfileCardProps {
  name: string;
  title: string;
  className?: string;
}

export function ProfileCard({ name, title, className }: ProfileCardProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <div className="bg-background-neutral-subtle aspect-square w-full" />
      <div className="flex flex-col gap-1">
        <div className="text-title-medium font-medium">{name}</div>
        <div className="text-body-large text-foreground-neutral-subtle">
          {title}
        </div>
      </div>
    </div>
  );
}
