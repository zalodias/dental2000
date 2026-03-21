import Brandmark from '@/assets/images/brandmark-light.svg';
import { Avatar } from '@/components/avatar';
import { mergeTailwindClassNames as cn } from '@/utils/tailwind';
import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  title: string;
  image?: string | null;
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
        <Avatar
          fallback={
            <Image
              alt={name}
              className="object-contain p-16"
              fill
              src={Brandmark}
            />
          }
          name={name}
          src={image}
        />
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
