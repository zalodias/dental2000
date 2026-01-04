import { Button } from '@/components/button';
import { SectionHeader } from '@/sections/section-header';
import Link from 'next/link';

export function ActionCall() {
  return (
    <div className="relative flex flex-col items-center gap-10 p-10 md:p-20">
      <div className="bg-background-neutral-subtle absolute inset-0 -z-10 w-full object-cover" />
      <SectionHeader
        title="Um cuidado completo para o seu sorriso"
        subtitle="Transforme o seu sorriso connosco. Agende a sua consulta hoje."
        className="text-center"
      />
      <Button asChild size="large">
        <Link href="/contactos">Marcar Consulta</Link>
      </Button>
    </div>
  );
}
