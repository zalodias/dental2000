import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Metric } from '@/components/metric';
import { ProfileCard } from '@/components/profile-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { fetchDatabaseContent } from '@/notion/functions';
import { SectionHeader } from '@/sections/section-header';
import { Ticker } from '@/sections/ticker';
import Link from 'next/link';

export default async function Clinica() {
  const [team, values, testimonials] = await Promise.all([
    fetchDatabaseContent(process.env.NOTION_EQUIPA_DATABASE_ID!),
    fetchDatabaseContent(process.env.NOTION_VALORES_DATABASE_ID!),
    fetchDatabaseContent(process.env.NOTION_TESTEMUNHOS_DATABASE_ID!),
  ]);

  return (
    <>
      <Container className="flex items-center pt-30 md:pt-40 lg:pt-40">
        <SectionHeader
          eyebrow="Sobre Nós"
          title="Cuidar do seu sorriso é cuidar de si"
          subtitle="Somos uma clínica dentária focada em excelência clínica, tecnologia avançada e uma relação próxima com cada paciente."
          size="large"
          className="text-center"
        />
        <Ticker
          items={Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="bg-background-neutral-subtle size-full" />
          ))}
          duration={30}
        />
        <div className="grid w-full grid-cols-2 gap-10 md:gap-15 lg:grid-cols-4">
          <Metric
            label="pacientes atendidos"
            value="1000+"
            className="w-full md:text-center"
          />
          <Metric
            label="anos a cuidar de si"
            value="20+"
            className="w-full md:text-center"
          />
          <Metric
            label="satisfação de paciente"
            value="98%"
            className="w-full md:text-center"
          />
          <Metric
            label="tratamentos realizados"
            value="500+"
            className="w-full md:text-center"
          />
        </div>
      </Container>
      <Container>
        <SectionHeader title="Desde o primeiro contacto até ao acompanhamento pós-tratamento, o nosso compromisso é simples" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-20">
          {values.map((value, index) => (
            <div
              key={value.id}
              className="border-border-neutral-default flex flex-col gap-4 border-b pb-12"
            >
              <span className="text-foreground-neutral-faded font-medium uppercase">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <h3 className="text-foreground-neutral-default text-title-large font-medium">
                {(value.properties.Nome as any).title[0].plain_text}
              </h3>
              <p className="text-foreground-neutral-subtle text-title-small">
                {(value.properties.Descrição as any).rich_text[0].plain_text}
              </p>
            </div>
          ))}
        </div>
      </Container>
      <Container className="md:items-center md:gap-20 lg:flex-row">
        <div className="bg-background-neutral-subtle relative aspect-3/4 w-full object-cover" />
        <div className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Diretor Clínico"
            title="Francisco Sanches"
            subtitle="Com vasta experiência na área da medicina dentária, o Dr. Francisco Sanches combina conhecimento científico, atenção ao detalhe e uma forte componente humana, assegurando que cada tratamento é pensado de forma personalizada e responsável."
          />
        </div>
      </Container>
      <Container>
        <SectionHeader
          title="Uma equipa de profissionais dedicados ao seu bem-estar"
          action={
            <Button asChild size="large">
              <Link href="/equipa">Conheça a nossa equipa</Link>
            </Button>
          }
          className="max-w-full flex-row items-end justify-between"
        />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-x-5 gap-y-10">
          {team.map((member) => (
            <ProfileCard
              key={member.id}
              name={(member.properties.Nome as any).title[0].plain_text}
              title={(member.properties.Função as any).rich_text[0].plain_text}
              className="w-full"
            />
          ))}
        </div>
      </Container>
      <Container>
        <SectionHeader
          title="O que dizem os nossos pacientes"
          subtitle="Histórias reais de transformações que mudaram sorrisos e vidas"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              author={(testimonial.properties.Nome as any).title[0].plain_text}
              quote={
                (testimonial.properties.Testemunho as any).rich_text[0]
                  .plain_text
              }
              subtitle={
                (testimonial.properties.Tratamento as any).rich_text[0]
                  .plain_text
              }
            />
          ))}
          <div className="bg-background-neutral-subtle flex flex-col items-center justify-center gap-6 p-8 text-center">
            <div className="flex flex-col gap-4">
              <h3 className="text-title-large md:text-display-small font-medium">
                Seja a nossa próxima história de sucesso
              </h3>
              <p>
                Transforme o seu sorriso connosco. Agende a sua consulta hoje.
              </p>
            </div>
            <Button variant="inverse" size="large" asChild>
              <Link href="/contactos">Marcar Consulta</Link>
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
