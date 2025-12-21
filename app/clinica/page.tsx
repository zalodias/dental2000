import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Metric } from '@/components/metric';
import { ProfileCard } from '@/components/profile-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { SectionHeader } from '@/sections/section-header';
import { Ticker } from '@/sections/ticker';
import { fetchDatabaseContent } from '@/utils/notion';
import Link from 'next/link';

export default async function Clinica() {
  const team = await fetchDatabaseContent(
    process.env.NOTION_EQUIPA_DATABASE_ID!,
  );

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
          {[
            {
              number: '01',
              title: 'Cuidado centrado no paciente',
              description:
                'Os nossos pacientes estão no centro de tudo o que fazemos. Ouvimos as suas preocupações, compreendemos as suas necessidades e criamos planos de tratamento personalizados que priorizam a sua saúde e conforto.',
            },
            {
              number: '02',
              title: 'Excelência em medicina dentária',
              description:
                'A nossa equipa utiliza a mais recente tecnologia e técnicas para garantir que recebe os tratamentos mais eficazes para resultados ótimos.',
            },
            {
              number: '03',
              title: 'Integridade e transparência',
              description:
                'Acreditamos na honestidade e transparência em todos os aspetos dos nossos cuidados. Explicamos claramente todas as opções de tratamento, custos e procedimentos para que possa tomar decisões informadas sobre a sua saúde oral.',
            },
            {
              number: '04',
              title: 'Tratamentos personalizados',
              description:
                'Cada tratamento é pensado de forma personalizada e responsável, garantindo resultados ótimos e uma relação de confiança com cada paciente.',
            },
          ].map((value, index) => (
            <div
              key={index}
              className="border-border-neutral-default flex flex-col gap-4 border-b pb-12"
            >
              <span className="text-foreground-neutral-faded font-medium uppercase">
                {value.number}
              </span>
              <h3 className="text-foreground-neutral-default text-title-large font-medium">
                {value.title}
              </h3>
              <p className="text-foreground-neutral-subtle text-title-small">
                {value.description}
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="Depois de anos a adiar, finalmente tratei os meus dentes. A equipa é fantástica e os resultados superaram as minhas expectativas. Sinto-me outra pessoa."
            author="João Costa"
            subtitle="Branqueamento Dentário"
          />
          <TestimonialCard
            quote="Sempre tive medo de dentistas, mas aqui fui tratada com tanta paciência e cuidado que já não tenho receio. Agradeço todo o acompanhamento."
            author="Ana Martins"
            subtitle="Tratamento Ortodôntico"
          />
          <TestimonialCard
            quote="Profissionalismo exemplar. Desde a primeira consulta até ao fim, tudo foi explicado ao pormenor. Recomendo sem hesitar."
            author="Pedro Santos"
            subtitle="Implantes Dentários"
          />
          <TestimonialCard
            quote="A minha experiência foi maravilhosa. Ambiente acolhedor, tecnologia de ponta e um resultado que transformou completamente o meu sorriso."
            author="Rita Fernandes"
            subtitle="Reabilitação Oral"
          />
          <TestimonialCard
            quote="Fiquei impressionada com a atenção aos detalhes e o cuidado que tiveram comigo. O tratamento correu lindamente e sinto-me radiante."
            author="Sofia Oliveira"
            subtitle="Facetas Dentárias"
          />
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
