import { ComparisonSlider } from '@/components/comparison-slider';
import { Container } from '@/components/container';
import { Metric } from '@/components/metric';

export function SocialProof() {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-body-medium font-medium tracking-widest uppercase">
            Experiências de pacientes
          </h3>
          <h2 className="text-display-medium md:text-display-large text-center font-medium">
            Sorrisos em boas mãos
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 md:gap-5">
          <ComparisonSlider />
          <div className="relative flex h-full flex-col justify-between rounded-3xl p-6 md:p-10">
            <div className="flex flex-col gap-6">
              <h3 className="text-display-small font-medium">
                Hoje, sorrio com confiança e sem receios
              </h3>
              <p className="text-body-large-default text-foreground-neutral-subtle">
                Desde o primeiro contacto senti que estava em boas mãos. A
                equipa da Dental 2000 é incrivelmente atenciosa — explicam cada
                passo, tratam-nos com delicadeza e fazem-nos sentir
                completamente à vontade. Recomendo de coração a quem procura
                mais do que um dentista — um verdadeiro cuidado com o nosso
                bem-estar.
              </p>
              <p className="text-body-medium text-foreground-neutral-subtle">
                Marta Oliveira
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4 md:gap-12">
          <Metric label="pacientes atendidos" value="10000+" />
          <Metric label="anos a cuidar de si" value="20+" />
          <Metric label="satisfação de resultados" value="98%" />
          <Metric label="médicos qualificados" value="10+" />
        </div>
      </Container>
    </section>
  );
}
