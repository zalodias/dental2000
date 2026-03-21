import { useEffect, useState } from 'react';

export function useImageWithFallback(src?: string | null) {
  const hasSrc = typeof src === 'string' && src.trim().length > 0;
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  return {
    useFallback: !hasSrc || failed,
    onError: () => setFailed(true),
  };
}
