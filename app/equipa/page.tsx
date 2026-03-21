import { Container } from '@/components/container';
import { ProfileCard } from '@/components/profile-card';
import { fetchDatabaseContent } from '@/notion/functions';
import { SectionHeader } from '@/sections/section-header';

export default async function Equipa() {
  const team = await fetchDatabaseContent(
    process.env.NOTION_EQUIPA_DATABASE_ID!,
  );

  const directors = team.filter(
    (member) =>
      (member.properties.Função as any).select?.name === 'Direção Clínica',
  );
  const clinicians = team.filter(
    (member) =>
      (member.properties.Função as any).select?.name === 'Corpo Clínico',
  );

  return (
    <>
      <Container className="flex items-center md:pt-30 lg:pt-40">
        <div className="bg-background-neutral-faded relative -mx-5 aspect-4/3 w-screen object-cover md:order-1 md:mx-0 md:aspect-3/2 md:w-full" />
        <SectionHeader
          eyebrow="A nossa equipa"
          title="Profissionais dedicados ao seu bem-estar"
          size="large"
          subtitle="Na Dental 2000, a nossa equipa é composta por
profissionais altamente qualificados, comprometidos em proporcionar um atendimento de excelência e em constante atualização nas suas áreas de especialização."
          className="md:text-center"
        />
      </Container>
      <Container>
        <SectionHeader title="Direção Clínica" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-x-5 gap-y-10">
          {directors.map((member) => {
            const especialidades =
              (member.properties.Especialidade as any).multi_select
                ?.map((e: { name?: string }) => e.name ?? '')
                .filter(Boolean) ?? [];
            return (
              <ProfileCard
                key={member.id}
                name={(member.properties.Nome as any).title[0].plain_text}
                title={especialidades.join(', ')}
                image={(member.properties.Imagem as any).url}
              />
            );
          })}
        </div>
      </Container>
      <Container>
        <SectionHeader title="Corpo Clínico" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-x-5 gap-y-10">
          {clinicians.map((member) => {
            const especialidades =
              (member.properties.Especialidade as any).multi_select
                ?.map((e: { name?: string }) => e.name ?? '')
                .filter(Boolean) ?? [];
            return (
              <ProfileCard
                key={member.id}
                name={(member.properties.Nome as any).title[0].plain_text}
                title={especialidades.join(', ')}
                image={(member.properties.Imagem as any).url}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
}
