import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { Input } from '@/components/input';
import { Select } from '@/components/select';
import { services } from '@/data/services';
import { treatments } from '@/data/treatments';
import { AccordionImage } from '@/sections/accordion-image';
import { CarouselSlider } from '@/sections/carousel-slider';
import { SectionHeader } from '@/sections/section-header';
import { SocialProof } from '@/sections/social-proof';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative grid place-items-center">
        <img
          src="#"
          alt="Image"
          className="bg-background-neutral-subtle -z-10 aspect-2/3 w-full object-cover sm:aspect-1/1 md:aspect-3/2 lg:aspect-2/1"
        />
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
    </>
  );
}
