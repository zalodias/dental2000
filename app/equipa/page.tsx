import { Container } from '@/components/container';
import { ProfileCard } from '@/components/profile-card';
import { team } from '@/data/team';
import { SectionHeader } from '@/sections/section-header';

export default function Equipa() {
  return (
    <>
      <Container className="flex items-center lg:flex-row">
        <div className="bg-background-neutral-subtle relative -mx-5 aspect-4/3 w-screen object-cover md:mx-0 md:w-full" />
        <SectionHeader
          eyebrow="A nossa equipa"
          title="Profissionais dedicados ao seu bem-estar"
          subtitle="Na Dental 2000, a nossa equipa é composta por
profissionais altamente qualificados, comprometidos em proporcionar um atendimento de excelência e em constante atualização nas suas áreas de especialização."
        />
      </Container>
      <Container>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-x-5 gap-y-10">
          {team.map((member) => (
            <ProfileCard
              key={member.name}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
