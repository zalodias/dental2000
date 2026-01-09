import { ComparisonSlider } from '@/components/comparison-slider';
import { Container } from '@/components/container';
import { fetchDatabaseContent } from '@/notion/functions';
import { ActionCall } from '@/sections/action-call';
import { SectionHeader } from '@/sections/section-header';
import { generateSlug } from '@/utils/utils';
import Link from 'next/link';

export default async function CasosClinicos() {
  const clinicalCases = await fetchDatabaseContent(
    process.env.NOTION_CASOS_CLINICOS_DATABASE_ID!,
  );

  return (
    <Container className="pt-30 md:pt-40 lg:pt-40">
      <SectionHeader
        eyebrow="Casos Clínicos"
        title="Resultados reais dos nossos pacientes"
        subtitle="Cada caso clínico reflete um plano de tratamento personalizado, baseado num diagnóstico rigoroso, tecnologia avançada e acompanhamento clínico contínuo pela nossa equipa dentária."
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-x-8 gap-y-12">
        {clinicalCases.map((clinicalCase) => (
          <Link
            href={`/casos-clinicos/${generateSlug((clinicalCase.properties.Nome as any).title[0].plain_text)}`}
            key={clinicalCase.id}
            className="flex flex-col gap-6"
          >
            <ComparisonSlider />
            <div className="flex flex-col gap-3">
              <h3 className="text-title-large font-medium">
                {(clinicalCase.properties.Nome as any).title[0].plain_text}
              </h3>
              <p className="text-title-small text-foreground-neutral-subtle">
                {
                  (clinicalCase.properties.Descrição as any).rich_text[0]
                    .plain_text
                }
              </p>
            </div>
          </Link>
        ))}
      </div>
      <ActionCall />
    </Container>
  );
}
