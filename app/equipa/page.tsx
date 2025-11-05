import { Container } from '@/components/container';
import { ProfileCard } from '@/components/profile-card';
import { team } from '@/data/team';
import { SectionHeader } from '@/sections/section-header';

export default function Equipa() {
  return (
    <>
      <Container className="mt-18">
        <SectionHeader
          eyebrow="A nossa equipa"
          title="Profissionais dedicados ao seu bem-estar"
        />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-10">
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
