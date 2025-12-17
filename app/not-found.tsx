import { Button } from '@/components/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-var(--spacing-height-footer))] items-center justify-center lg:h-auto">
      <div className="flex flex-col items-center gap-5">
        <div className="grid gap-2 text-center">
          <h1 className="text-title-large-strong">404</h1>
          <p className="text-foreground-neutral-subtle">
            Esta página não existe.
          </p>
        </div>
        <Button asChild>
          <Link href="/">Voltar à página inicial</Link>
        </Button>
      </div>
    </div>
  );
}
