import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Input } from '@/components/input';
import { Select } from '@/components/select';
import { Textarea } from '@/components/textarea';
import { services } from '@/data/services';
import { treatments } from '@/data/treatments';
import { AccordionImage } from '@/sections/accordion-image';
import { CarouselSlider } from '@/sections/carousel-slider';
import { SectionHeader } from '@/sections/section-header';
import { SocialProof } from '@/sections/social-proof';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative grid place-items-center">
        <div className="bg-background-neutral-subtle -z-10 aspect-2/3 w-full object-cover sm:aspect-1/1 md:aspect-3/2 lg:aspect-2/1" />
        <Container className="absolute gap-5 md:gap-10">
          <h1 className="text-display-medium md:text-display-large font-medium">
            O seu sorriso, a nossa prioridade.
          </h1>
          <Button>
            <Link href="#">Marcar consulta</Link>
          </Button>
        </Container>
      </section>
      <section>
        <Container>
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-20">
            <SectionHeader
              eyebrow="Sobre Nós"
              title="O seu sorriso em boas mãos"
              subtitle="Na Dental 2000, temos uma equipa de profissionais altamente qualificados e dedicados ao seu bem-estar. Acreditamos que um sorriso saudável é fundamental para a sua qualidade de vida, e estamos aqui para ajudar a alcançá-lo."
              action={
                <Button>
                  <Link href="#">Conheça a nossa equipa</Link>
                </Button>
              }
            />
            <div className="bg-background-neutral-subtle relative aspect-2/3 w-full object-cover" />
          </div>
        </Container>
      </section>
      <AccordionImage items={services} />
      <CarouselSlider items={treatments} />
      <SocialProof />
      <section className="bg-background-neutral-faded">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="bg-background-neutral-subtle relative aspect-3/2 w-full object-cover lg:aspect-2/3" />
          <Container className="flex w-full flex-col gap-5">
            <SectionHeader eyebrow="Marcações" title="Agende a sua consulta" />
            <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
              <Input type="text" placeholder="Nome" />
              <Input type="tel" placeholder="Telefone" />
              <Input type="email" placeholder="Email" />
              <Select defaultValue="">
                <option value="" disabled>
                  Especialidade
                </option>
                <option value="alinhadores">Alinhadores</option>
                <option value="ortodontia">Ortodontia</option>
                <option value="implantologia">Implantologia</option>
              </Select>
              <Select defaultValue="">
                <option value="" disabled>
                  Clínica
                </option>
                <option value="coimbra">Coimbra</option>
                <option value="sertã">Sertã</option>
              </Select>
            </div>
            <Textarea placeholder="Motivo da consulta" />
            <div className="flex gap-2">
              <Input type="checkbox" id="conditions" />
              <label
                htmlFor="conditions"
                className="text-body-medium text-foreground-neutral-subtle"
              >
                Li e aceito as condições de tratamento dos meus dados pessoais
                pela Dental 2000.
              </label>
            </div>
            <Button>Pedir contacto</Button>
          </Container>
        </div>
      </section>
    </>
  );
}
