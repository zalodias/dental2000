'use client';

import { useImageWithFallback } from '@/hooks/use-image-with-fallback';
import Image from 'next/image';

interface AvatarProps {
  name: string;
  src?: string | null;
  fallback?: React.ReactNode;
}

export function Avatar({ name, src, fallback }: AvatarProps) {
  const { onError, useFallback } = useImageWithFallback(src);

  if (useFallback) return fallback ?? null;

  return (
    <Image
      alt={name}
      className="object-cover"
      fill
      onError={onError}
      src={src!}
    />
  );
}
