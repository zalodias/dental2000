import { useEffect, useState } from 'react';

export function useImageWithFallback(src?: string | null) {
  const hasRemote = typeof src === 'string' && src.trim().length > 0;
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  return {
    useFallback: !hasRemote || failed,
    onError: () => setFailed(true),
  };
}
