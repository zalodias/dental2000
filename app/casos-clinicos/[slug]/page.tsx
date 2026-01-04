import { Container } from '@/components/container';
import { NotionBlock } from '@/components/notion-block';
import {
  fetchBlockContent,
  fetchDatabaseContent,
  fetchPageContent,
} from '@/notion/functions';
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

  const specialities = await Promise.all(
    relations.map(async (relation: { id: string }) => {
      const page = await fetchPageContent(relation.id);
      return (page.properties.Nome as any).title[0].plain_text;
    }),
  );

  return (
    <>
      <Container className="pt-30 md:pt-40 lg:pt-40">
        <h1 className="text-display-medium text-foreground-neutral-default font-medium">
          {(page.properties.Nome as any).title[0]?.plain_text || ''}
        </h1>
        {specialities.map((speciality) => (
          <Link
            href={`/especialidades/${generateSlug(speciality)}`}
            key={speciality}
            className="bg-background-neutral-faded hover:bg-background-neutral-subtle text-foreground-neutral-subtle w-fit px-3 py-2 font-medium transition-colors"
          >
            {speciality}
          </Link>
        ))}
        <div className="flex flex-col gap-4">
          <NotionBlock blocks={blocks} />
        </div>
      </Container>
    </>
  );
}
