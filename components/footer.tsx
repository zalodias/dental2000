import { Facebook } from '@/assets/icons/facebook';
import { Instagram } from '@/assets/icons/instagram';
import { Container } from '@/components/container';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background-neutral-faded">
      <Container>
        <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
          <div className="flex flex-col gap-7">
            <Image
              src={require('@/assets/logos/lockup-dark-horizontal.svg')}
              alt="Dental 2000"
              className="w-50"
            />
            <p className="text-title-medium font-medium">
              O seu sorriso, a nossa prioridade
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-background-neutral-default/40 border-foreground-neutral-inverse/40 hover:bg-background-neutral-default/80 inline-flex items-center rounded-lg border p-2 transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-background-neutral-default/40 border-foreground-neutral-inverse/40 hover:bg-background-neutral-default/80 inline-flex items-center rounded-lg border p-2 transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          <div className="text-body-large-default flex flex-col gap-4">
            <h4 className="text-title-medium font-medium">Coimbra</h4>
            <div className="flex flex-col gap-1">
              <span>R. João de Ruão 5, 3000-153 Coimbra</span>
              <span>(+351) 922 124 622</span>
            </div>
          </div>
          <div className="text-body-large-default flex flex-col gap-4">
            <h4 className="text-title-medium font-medium">Sertã</h4>
            <div className="flex flex-col gap-1">
              <span>Rua Vila de Rei, Nº66 R/Ch, 6100-707 Sertã</span>
              <span>(+351) 922 133 517</span>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-background-neutral-faded text-body-small">
        <Container className="flex flex-col gap-2 !py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#" className="hover:underline">
              Livro de Reclamações
            </Link>
          </div>
          <div className="text-center md:text-right">
            © {new Date().getFullYear()} Dental 2000 ・ Made with 🦷 by Gonçalo
            Dias
          </div>
        </Container>
      </div>
    </footer>
  );
}
