import { Container } from '@/components/container';
import { SectionHeader } from '@/sections/section-header';
import { fetchDatabaseContent } from '@/utils/notion';
import { generateSlug } from '@/utils/utils';
import Link from 'next/link';

export default async function Especialidades() {
  const specialities = await fetchDatabaseContent(
    process.env.NOTION_ESPECIALIDADES_DATABASE_ID!,
  );

  return (
    <>
      <Container>
        <SectionHeader
          eyebrow="Especialidades"
          title="Um cuidado completo para o seu sorriso"
        />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-x-8 gap-y-12">
          {specialities.map((speciality) => (
            <Link
              href={`/especialidades/${generateSlug((speciality.properties.Nome as any).title[0].plain_text)}`}
              key={speciality.id}
              className="flex flex-col gap-6"
            >
              <div className="bg-background-neutral-subtle relative aspect-3/2 w-full object-cover" />
              <div className="flex flex-col gap-3">
                <h3 className="text-title-large font-medium">
                  {(speciality.properties.Nome as any).title[0].plain_text}
                </h3>
                <p className="text-title-small text-foreground-neutral-subtle">
                  {
                    (speciality.properties.Descrição as any).rich_text[0]
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
