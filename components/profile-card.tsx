import { mergeTailwindClassNames as cn } from '@/utils/tailwind';
import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  title: string;
  image: string;
  className?: string;
}

export function ProfileCard({
  name,
  title,
  image,
  className,
}: ProfileCardProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <div className="bg-background-neutral-faded relative aspect-square w-full overflow-clip">
        <Image src={image} alt={name} fill objectFit="cover" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-title-medium font-medium">{name}</div>
        <div className="text-body-large text-foreground-neutral-subtle">
          {title}
        </div>
      </div>
    </div>
  );
}
