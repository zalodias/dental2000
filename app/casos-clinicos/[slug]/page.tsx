import { ComparisonSlider } from '@/components/comparison-slider';
import { Container } from '@/components/container';
import { NotionBlock } from '@/components/notion-block';
import { TestimonialQuote } from '@/components/testimonial-quote';
import {
  fetchBlockContent,
  fetchDatabaseContent,
  fetchPageContent,
} from '@/notion/functions';
import { SectionHeader } from '@/sections/section-header';
import { generateSlug } from '@/utils/utils';
import Link from 'next/link';

export async function generateStaticParams() {
  const clinicalCases = await fetchDatabaseContent(
    process.env.NOTION_CASOS_CLINICOS_DATABASE_ID!,
  );

  return clinicalCases.map((clinicalCase) => ({
    slug: generateSlug(
      (clinicalCase.properties.Nome as any).title[0].plain_text,
    ),
  }));
}

async function getPageData(slug: string) {
  const database = await fetchDatabaseContent(
    process.env.NOTION_CASOS_CLINICOS_DATABASE_ID!,
  );

  const id = database.find(
    (clinicalCase) =>
      generateSlug(
        (clinicalCase.properties.Nome as any).title[0].plain_text,
      ) === slug,
  )?.id;

  const page = await fetchPageContent(id!);

  return { page, id };
}

export default async function CasoClinico({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { page, id } = await getPageData(slug);

  const blocks = await fetchBlockContent(id!);

  const relations = (page.properties.Especialidades as any).relation || [];

  const clinicalCases = await fetchDatabaseContent(
    process.env.NOTION_CASOS_CLINICOS_DATABASE_ID!,
  );

  const currentSpecialities = relations.map(
    (relation: { id: string }) => relation.id,
  );

  const relatedClinicalCases = clinicalCases.filter((clinicalCase) => {
    if (clinicalCase.id === id) return false;

    const clinicalCaseSpecialities =
      (clinicalCase.properties.Especialidades as any).relation || [];

    return clinicalCaseSpecialities
      .map((relation: { id: string }) => relation.id)
      .some((id: string) => currentSpecialities.includes(id));
  });

  return (
    <>
      <Container className="pt-30 md:pt-40 lg:pt-40">
        <div className="flex flex-col gap-5">
          <h1 className="text-display-medium text-foreground-neutral-default font-medium">
            {(page.properties.Nome as any).title[0]?.plain_text || ''}
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <NotionBlock blocks={blocks} />
        </div>
        <ComparisonSlider />
        {page.properties.Testemunho && (
          <TestimonialQuote
            quote={
              (page.properties.Testemunho as any).rich_text?.[0]?.plain_text
            }
          />
        )}
        <SectionHeader title="Explore outros casos clínicos" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-x-8 gap-y-12">
          {relatedClinicalCases.map((clinicalCase) => (
            <Link
              href={`/casos-clinicos/${generateSlug((clinicalCase.properties.Nome as any).title?.[0]?.plain_text)}`}
              key={clinicalCase.id}
              className="flex flex-col gap-6"
            >
              <ComparisonSlider />
              <div className="flex flex-col gap-3">
                <h3 className="text-title-large font-medium">
                  {(clinicalCase.properties.Nome as any).title?.[0]?.plain_text}
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
      </Container>
    </>
  );
}
