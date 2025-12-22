import { Container } from '@/components/container';
import {
  fetchBlockContent,
  fetchDatabaseContent,
  fetchPageContent,
} from '@/notion/functions';
import { generateSlug } from '@/utils/utils';

export async function generateStaticParams() {
  const specialities = await fetchDatabaseContent(
    process.env.NOTION_ESPECIALIDADES_DATABASE_ID!,
  );

  return specialities.map((speciality) => ({
    slug: generateSlug((speciality.properties.Nome as any).title[0].plain_text),
  }));
}

async function getPageData(slug: string) {
  const database = await fetchDatabaseContent(
    process.env.NOTION_ESPECIALIDADES_DATABASE_ID!,
  );

  const id = database.find(
    (speciality) =>
      generateSlug((speciality.properties.Nome as any).title[0].plain_text) ===
      slug,
  )?.id;

  const page = await fetchPageContent(id!);

  return { page, id };
}

export default async function Especialidade({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { page, id } = await getPageData(slug);
  const blocks = await fetchBlockContent(id!);

  return (
    <>
      <Container>
        <h1>{(page.properties.Nome as any).title[0].plain_text}</h1>
        <div>
          {blocks.map((block: any) => (
            <div key={block.id}>
              <div>{block.paragraph.rich_text[0].plain_text}</div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
